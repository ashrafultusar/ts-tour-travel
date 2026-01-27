/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { connectDB } from "@/db/dbConfig";
import { uploadImage } from "@/lib/cloudinary";
import { ProfessionalTeam } from "@/models/ProfessionalTeam";
import { revalidateTag } from "next/cache";
import sanitize from "mongo-sanitize";
import { requireStaff } from "@/lib/access-helper";

export async function createTeamMember(data: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const name = sanitize(data.get("name") as string);
        const country = sanitize(data.get("country") as string);
        const designation = sanitize(data.get("designation") as string);
        const imageFile = data.get("image") as File | null;

        if (!name || !country || !designation) {
            return { success: false, message: "All fields are required!" };
        }

        let imageUrl = "";
        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, "team_members");
        }

        await ProfessionalTeam.create({
            name,
            country,
            designation,
            image: imageUrl,
        });

        revalidateTag("professional-team", "max");
        return { success: true, message: "Member created successfully!" };
    } catch (error: any) {
        console.error("Error creating team member:", error);
        return { success: false, message: error.message || "Failed to save data" };
    }
}

export async function updateTeamMember(id: string, data: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const name = sanitize(data.get("name") as string);
        const country = sanitize(data.get("country") as string);
        const designation = sanitize(data.get("designation") as string);
        const imageFile = data.get("image") as File | null;

        if (!name || !country || !designation) {
            return { success: false, message: "All fields are required!" };
        }

        const updateData: any = {
            name,
            country,
            designation,
        };

        if (imageFile && imageFile.size > 0) {
            const imageUrl = await uploadImage(imageFile, "team_members");
            updateData.image = imageUrl;
        }

        await ProfessionalTeam.findByIdAndUpdate(id, updateData);

        revalidateTag("professional-team", "max");
        revalidateTag(`team-${id}`, "max");
        return { success: true, message: "Member updated successfully!" };
    } catch (error: any) {
        console.error("Error updating team member:", error);
        return { success: false, message: error.message || "Failed to update data" };
    }
}

export async function deleteTeamMember(id: string) {
    try {
        await requireStaff()
        await connectDB();
        await ProfessionalTeam.findByIdAndDelete(id);
        revalidateTag("professional-team", "max");
        revalidateTag(`team-${id}`, "max");
        return { success: true, message: "Team member deleted successfully" };
    } catch (error: any) {
        console.error("Error deleting team member:", error);
        return { success: false, message: "Failed to delete team member" };
    }
}
