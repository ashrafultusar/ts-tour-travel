"use server";

import { connectDB } from "@/db/dbConfig";
import { uploadImage } from "@/lib/cloudinary";
import University from "@/models/University";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import sanitize from "mongo-sanitize";
import { requireStaff } from "@/lib/access-helper";

const UniversitySchema = z.object({
    universityName: z.string().min(3, "University name minimum 3 characters"),
    location: z.string().min(2, "Location is required"),
    level: z.array(z.string()).min(1, "At least one level must be selected"),
    offerLetterType: z.enum(["Free", "Paid"]),
    description: z.string().optional(),
});

export async function createUniversity(formData: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const rawData = sanitize({
            universityName: formData.get("universityName"),
            location: formData.get("location"),
            level: formData.getAll("level"),
            offerLetterType: formData.get("offerLetterType"),
            description: formData.get("description"),
        });

        const validatedFields = UniversitySchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const imageFile = formData.get("image") as File | null;
        let imageUrl = "";

        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, "universities");
        }

        await University.create({
            name: validatedFields.data.universityName,
            location: validatedFields.data.location,
            level: validatedFields.data.level,
            offerType: validatedFields.data.offerLetterType,
            description: validatedFields.data.description,
            image: imageUrl,
        });

        revalidateTag("universities", "max");
        return { success: true, message: "University created successfully!" };
    } catch (error: any) {
        console.error("Error creating university:", error);
        return { success: false, message: "Failed to create university. Please try again." };
    }
}

export async function updateUniversity(id: string, formData: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const rawData = sanitize({
            universityName: formData.get("universityName"),
            location: formData.get("location"),
            level: formData.getAll("level"),
            offerLetterType: formData.get("offerLetterType"),
            description: formData.get("description"),
        });

        const validatedFields = UniversitySchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const updateData: any = {
            name: validatedFields.data.universityName,
            location: validatedFields.data.location,
            level: validatedFields.data.level,
            offerType: validatedFields.data.offerLetterType,
            description: validatedFields.data.description,
        };

        const imageFile = formData.get("image") as File | null;
        if (imageFile && imageFile.size > 0) {
            updateData.image = await uploadImage(imageFile, "universities");
        }

        await University.findByIdAndUpdate(id, updateData);

        revalidateTag("universities", "max");
        revalidateTag(`university-${id}`, "max");
        return { success: true, message: "University updated successfully!" };
    } catch (error: any) {
        console.error("Error updating university:", error);
        return { success: false, message: "Failed to update university." };
    }
}

export async function deleteUniversity(id: string) {
    try {
        await requireStaff()
        await connectDB();
        await University.findByIdAndDelete(id);
        revalidateTag("universities", "max");
        revalidateTag(`university-${id}`, "max");
        return { success: true, message: "University deleted successfully" };
    } catch (error: any) {
        console.error("Error deleting university:", error);
        return { success: false, message: "Failed to delete university" };
    }
}
