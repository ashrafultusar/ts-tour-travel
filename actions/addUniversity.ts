/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { connectDB } from "@/db/dbConfig";
import { uploadImage } from "@/lib/cloudinary";
import University from "@/models/University";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const UniversitySchema = z.object({
  universityName: z.string().min(3, "University name minimum 3 characters"),
  location: z.string().min(2, "Location is required"),
  // Array validation
  level: z.array(z.string()).min(1, "At least one level must be selected"),
  offerLetterType: z.enum(["Free", "Paid"]),
  description: z.string().optional(),
});

export async function createUniversityAction(formData: FormData) {
  try {
    await connectDB();

    const rawData = {
      universityName: formData.get("universityName"),
      location: formData.get("location"),
      level: formData.getAll("level"),
      offerLetterType: formData.get("offerLetterType"),
      description: formData.get("description"),
    };

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

    revalidateTag("university", "max");
  } catch (error: any) {
    console.error("Error creating university:", error);
    return { success: false, message: "Failed to create university. Please try again." };
  }

  redirect("/ts-staff-portal/universities");
}
