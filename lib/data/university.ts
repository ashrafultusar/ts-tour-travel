/* eslint-disable @typescript-eslint/no-explicit-any */
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { connectDB } from "@/db/dbConfig";
import University from "@/models/University";
import { serializeDocument } from "@/lib/utils/formHelpers";

// Data Cache
const getUniversitiesConfig = async (
  page: number,
  limit: number,
  search?: string,
  location?: string,
  level?: string | string[],
  offerType?: string | string[],
) => {
  return await unstable_cache(
    async () => {
      await connectDB();
      const skip = (page - 1) * limit;

      const query: any = {};
      if (search) {
        query.name = { $regex: search, $options: "i" };
      }
      if (location && location !== "All") {
        query.location = { $regex: location, $options: "i" };
      }
      if (offerType && offerType !== "All") {
        // Handle both single string and array (though usually from URL it might come as string or array depending on handling)
        const types = Array.isArray(offerType) ? offerType : [offerType];
        if (types.length > 0) {
          query.offerType = { $in: types };
        }
      }
      if (level && level !== "All") {
        const levels = Array.isArray(level) ? level : [level];
        if (levels.length > 0) {
          // If level is "Diploma", we want to find docs where 'level' array *contains* "Diploma"
          query.level = { $in: levels };
        }
      }

      const universities = await University.find(query)
        .select("-description")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const total = await University.countDocuments(query);
      const plainUniversities = universities.map((uni) =>
        serializeDocument(uni),
      );

      return {
        success: true,
        universities: plainUniversities,
        total,
        totalPages: Math.ceil(total / limit),
      };
    },
    [
      `universities-list-${page}-${limit}-${search || ""}-${location || ""}-${JSON.stringify(level)}-${JSON.stringify(offerType)}`,
    ],
    { tags: ["universities"] },
  )();
};

const getUniversityByIdConfig = async (id: string) => {
  return await unstable_cache(
    async () => {
      await connectDB();
      try {
        const university = await University.findById(id);
        if (!university)
          return { success: false, message: "University not found" };
        return { success: true, university: serializeDocument(university) };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return { success: false, message: "Invalid ID" };
      }
    },
    [`university-details-${id}`],
    { tags: ["universities", `university-${id}`] },
  )();
};

// Request Memoization
export const getUniversities = cache(
  async (
    page = 1,
    limit = 10,
    search?: string,
    location?: string,
    level?: string | string[],
    offerType?: string | string[],
  ) => {
    return await getUniversitiesConfig(
      page,
      limit,
      search,
      location,
      level,
      offerType,
    );
  },
);

export const getUniversityById = cache(async (id: string) => {
  return await getUniversityByIdConfig(id);
});
