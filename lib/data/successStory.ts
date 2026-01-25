import { unstable_cache } from "next/cache";
import { cache } from "react";
import { connectDB } from "@/db/dbConfig";
import SuccessStory from "@/models/SuccessStory";
import { serializeDocument } from "@/lib/utils/formHelpers";

// Data Cache
const getSuccessStoriesConfig = unstable_cache(
    async (page: number, limit: number) => {
        await connectDB();
        const skip = (page - 1) * limit;

        const stories = await SuccessStory.find({})
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await SuccessStory.countDocuments();
        const plainStories = stories.map((story) => serializeDocument(story));

        return { success: true, stories: plainStories, total };
    },
    ["success-stories-list"],
    { tags: ["success-stories"] }
);

const getSuccessStoryByIdConfig = async (id: string) => {
    return await unstable_cache(
        async () => {
            await connectDB();
            try {
                const story = await SuccessStory.findById(id);
                if (!story) return { success: false, message: "Story not found" };
                return { success: true, story: serializeDocument(story) };
            } catch (error) {
                return { success: false, message: "Invalid ID" };
            }
        },
        [`success-story-details-${id}`],
        { tags: ["success-stories", `story-${id}`] }
    )();
};

// Request Memoization
export const getSuccessStories = cache(async (page = 1, limit = 10) => {
    return await getSuccessStoriesConfig(page, limit);
});

export const getSuccessStoryById = cache(async (id: string) => {
    return await getSuccessStoryByIdConfig(id);
});
