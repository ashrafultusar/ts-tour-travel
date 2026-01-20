"use server";

import { connectDB } from "@/db/dbConfig";

import { blogSchema } from "@/lib/validators/blog.schema";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { RegisterActionState } from "@/types/action.register";
import User from "@/models/User";

export async function registerUser(
  _: RegisterActionState,
  formData: FormData
): Promise<RegisterActionState> {
  await connectDB();
  // 
  const rawData = {
    title: formData.get("title"),
    content: formData.get("content"),
    author: formData.get("author"),
  };

  const parsed = blogSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await User.create(parsed.data);
  } catch (error) {
    console.error("DB error:", error);
    return {
      success: false,
      errors: {
        _form: ["Failed to create blog. Please try again."],
      },
    };
  }

  revalidateTag(CACHE_TAGS.BLOGS, "max");
  redirect("/blogs");
}
