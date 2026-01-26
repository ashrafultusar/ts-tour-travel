"use server";

import { connectDB } from "@/db/dbConfig";
import { requireStaff } from "@/lib/access-helper";
import { uploadImage } from "@/lib/cloudinary";
import { ProfessionalTeam } from "@/models/ProfessionalTeam";
import { revalidatePath } from "next/cache";

export async function createTeamMember(data: FormData) {
  try {
    await requireStaff()
    await connectDB();
    console.log("--- Database Connected ---");

    const name = data.get("name") as string;
    const country = data.get("country") as string;
    const designation = data.get("designation") as string;
    const imageFile = data.get("image") as File | null;

    if (!name || !country || !designation) {
      return { success: false, message: "All fields are required!" };
    }

    let imageUrl = "";
    if (imageFile && imageFile.size > 0) {
      console.log("Uploading image to Cloudinary...");
      imageUrl = await uploadImage(imageFile, "team_members");
      console.log("Image Uploaded:", imageUrl);
    }

  
    const result = await ProfessionalTeam.create({
      name,
      country,
      designation,
      image: imageUrl,
    });

    console.log("Data saved to DB:", result);

    revalidatePath("/team"); 
    return { success: true, message: "Member created successfully!" };

  } catch (error: any) {
    console.error("Server Action Detailed Error:", error);
    return { success: false, message: error.message || "Failed to save data" };
  }
}