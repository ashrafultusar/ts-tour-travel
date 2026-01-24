"use server";

import { connectDB } from "@/db/dbConfig";
import SuccessStory from "@/models/SuccessStory";
import { uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const SuccessStorySchema = z.object({
    studentName: z.string().min(2, "Name must be at least 2 characters"),
    subject: z.string().min(2, "Subject is required"),
    university: z.string().min(2, "University is required"),
    story: z.string().min(10, "Story must be at least 10 characters"),
});

export async function createSuccessStory(formData: FormData) {
    try {
        await connectDB();

        const rawData = {
            studentName: formData.get("studentName"),
            subject: formData.get("subject"),
            university: formData.get("university"),
            story: formData.get("story"),
        };

        const validatedFields = SuccessStorySchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        let country = "";
        const uniParts = validatedFields.data.university.split(",");
        if (uniParts.length > 1) {
            country = uniParts[uniParts.length - 1].trim();
        }

        const imageFile = formData.get("image") as File | null;
        let imageUrl = "";

        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, "success-stories");
        }

        await SuccessStory.create({
            studentName: validatedFields.data.studentName,
            subject: validatedFields.data.subject,
            university: validatedFields.data.university,
            country: country,
            story: validatedFields.data.story,
            image: imageUrl,
        });

        revalidatePath("/ts-staff-portal/successStories");
        return { success: true, message: "Success story created successfully!" };
    } catch (error) {
        console.error("Error creating success story:", error);
        return { success: false, message: "Failed to create success story." };
    }
}

export async function updateSuccessStory(id: string, formData: FormData) {
    try {
        await connectDB();

        const rawData = {
            studentName: formData.get("studentName"),
            subject: formData.get("subject"),
            university: formData.get("university"),
            story: formData.get("story"),
        };

        const validatedFields = SuccessStorySchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        let country = "";
        const uniParts = validatedFields.data.university.split(",");
        if (uniParts.length > 1) {
            country = uniParts[uniParts.length - 1].trim();
        }

        const imageFile = formData.get("image") as File | null;
        let imageUrl = undefined;

        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, "success-stories");
        }

        const updateData: any = {
            studentName: validatedFields.data.studentName,
            subject: validatedFields.data.subject,
            university: validatedFields.data.university,
            country: country,
            story: validatedFields.data.story,
        };

        if (imageUrl) updateData.image = imageUrl;

        await SuccessStory.findByIdAndUpdate(id, updateData);

        revalidatePath("/ts-staff-portal/successStories");
        return { success: true, message: "Success story updated successfully!" };
    } catch (error) {
        console.error("Error updating success story:", error);
        return { success: false, message: "Failed to update success story." };
    }
}

export async function deleteSuccessStory(id: string) {
    try {
        await connectDB();
        await SuccessStory.findByIdAndDelete(id);
        revalidatePath("/ts-staff-portal/successStories");
        return { success: true, message: "Success story deleted successfully" };
    } catch (error) {
        console.error("Error deleting success story:", error);
        return { success: false, message: "Failed to delete success story" };
    }
}
