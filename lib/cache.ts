import { unstable_cache as nextCache } from "next/cache";
import { cache as reactCache } from "react";

// Types for the callback function
type Callback<T> = (...args: any[]) => Promise<T>;

/**
 * Enhanced cache function that combines React's request memoization
 * with Next.js specific Data Cache (unstable_cache).
 * 
 * @param cb The async function to cache
 * @param keyParts The key parts for the cache (e.g. ['users', userId])
 * @param options Revalidation options
 */
export const cachedData = <T>(
    cb: Callback<T>,
    keyParts: string[],
    options: { revalidate?: number; tags?: string[] } = {}
) => {
    return reactCache(
        nextCache(cb, keyParts, {
            revalidate: options.revalidate ?? 3600, // Default 1 hour
            tags: options.tags,
        })
    );
};

export const CACHE_TAGS = {
    USERS: "users",
    TOURS: "tours",
    // Add more tags here
};
