import { unstable_cache } from "next/cache";
import { cache } from "react";
import { connectDB } from "@/db/dbConfig";
import Blog from "@/models/Blog";
import { serializeDocument } from "@/lib/utils/formHelpers";

// ============================================
// Data Cache (Next.js Cache - Shared across requests)
// ============================================

// ============================================
// Data Cache (Next.js Cache - Shared across requests)
// ============================================

const getBlogsConfig = async (page: number, limit: number, search?: string, category?: string) => {
    const cachedFn = unstable_cache(
        async () => {
            await connectDB();
            const skip = (page - 1) * limit;

            const query: any = {};
            if (search) {
                query.title = { $regex: search, $options: "i" };
            }
            if (category && category !== "All") {
                query.category = category;
            }

            const blogs = await Blog.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit);

            const total = await Blog.countDocuments(query);
            const plainBlogs = blogs.map((blog) => serializeDocument(blog));

            return {
                success: true,
                blogs: plainBlogs,
                total,
                totalPages: Math.ceil(total / limit),
            };
        },
        [`blogs-list-${page}-${limit}-${search || ""}-${category || ""}`],
        { tags: ["blogs"] }
    );

    return await cachedFn();
};

const getBlogByIdConfig = async (id: string) => {
    const cachedFn = unstable_cache(
        async () => {
            await connectDB();
            try {
                const blog = await Blog.findById(id);
                if (!blog) return { success: false, message: "Blog not found" };

                return { success: true, blog: serializeDocument(blog) };
            } catch (error) {
                return { success: false, message: "Invalid ID" };
            }
        },
        [`blog-details-${id}`],
        { tags: ["blogs", `blog-${id}`] } // Tagged with generic 'blogs' (optionally) and specific ID
    );

    return await cachedFn();
};

// ============================================
// Request Memoization (React Cache - Per Request)
// ============================================

export const getBlogs = cache(async (page = 1, limit = 10, search?: string, category?: string) => {
    return await getBlogsConfig(page, limit, search, category);
});

export const getBlogById = cache(async (id: string) => {
    return await getBlogByIdConfig(id);
});
