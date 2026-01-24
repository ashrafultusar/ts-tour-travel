import { unstable_cache } from "next/cache";
import { cache } from "react";
import { connectDB } from "@/db/dbConfig";
import { ProfessionalTeam } from "@/models/ProfessionalTeam";
import { serializeDocument } from "@/lib/utils/formHelpers";

// Data Cache
const getTeamMembersConfig = unstable_cache(
    async (page: number, limit: number) => {
        await connectDB();
        const skip = (page - 1) * limit;

        const members = await ProfessionalTeam.find({})
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await ProfessionalTeam.countDocuments();
        const plainMembers = members.map((member) => serializeDocument(member));

        return { success: true, members: plainMembers, total };
    },
    ["team-members-list"],
    { tags: ["professional-team"] }
);

const getTeamMemberByIdConfig = async (id: string) => {
    return await unstable_cache(
        async () => {
            await connectDB();
            try {
                const member = await ProfessionalTeam.findById(id);
                if (!member) return { success: false, message: "Member not found" };
                return { success: true, member: serializeDocument(member) };
            } catch (error) {
                return { success: false, message: "Invalid ID" };
            }
        },
        [`team-member-details-${id}`],
        { tags: ["professional-team", `team-${id}`] }
    )();
};

// Request Memoization
export const getTeamMembers = cache(async (page = 1, limit = 10) => {
    return await getTeamMembersConfig(page, limit);
});

export const getTeamMemberById = cache(async (id: string) => {
    return await getTeamMemberByIdConfig(id);
});
