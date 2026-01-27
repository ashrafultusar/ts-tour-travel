/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { connectDB } from "@/db/dbConfig";
import { z } from "zod";
import sanitize from "mongo-sanitize";

import Blog from "@/models/Blog";
import { uploadImage } from "@/lib/cloudinary";
import { revalidateTag } from "next/cache";
import { requireStaff } from "@/lib/access-helper";

const BlogSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string().min(1, "Category is required"),
  readTime: z.coerce.number().min(1, "Read time must be at least 1 minute"),
  content: z.string().min(20, "Content must be at least 20 characters"),
});

export async function createBlog(formData: FormData) {
  try {
    await requireStaff();
    await connectDB();

    const tagsString = formData.get("tags") as string;
    const tags = tagsString ? JSON.parse(tagsString) : [];

    const rawData = sanitize({
      title: formData.get("title"),
      category: formData.get("category"),
      readTime: formData.get("readTime"),
      content: formData.get("content"),
    });

    const validatedFields = BlogSchema.safeParse(rawData);

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Slug generation
    const slug = validatedFields.data.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    // Check unique slug
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return {
        success: false,
        message: "A blog with this title already exists.",
      };
    }

    const imageFile = formData.get("image") as File | null;
    let imageUrl = "";

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile, "blogs");
    }

    await Blog.create({
      title: validatedFields.data.title,
      slug,
      category: validatedFields.data.category,
      readTime: validatedFields.data.readTime,
      content: validatedFields.data.content,
      tags,
      image: imageUrl,
    });

    revalidateTag("blogs", "max");
    return { success: true, message: "Blog created successfully!" };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, message: "Failed to create blog." };
  }
}

export async function updateBlog(id: string, formData: FormData) {
  try {
    await requireStaff()
    await connectDB();

    // Parse tags if present
    const tagsString = formData.get("tags") as string;
    const tags = tagsString ? JSON.parse(tagsString) : undefined;

    const rawData = sanitize({
      title: formData.get("title"),
      category: formData.get("category"),
      readTime: formData.get("readTime"),
      content: formData.get("content"),
    });

    // Validation
    const validatedFields = BlogSchema.safeParse(rawData);

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const imageFile = formData.get("image") as File | null;
    let imageUrl = undefined;

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile, "blogs");
    }

    const updateData: any = {
      title: validatedFields.data.title,
      category: validatedFields.data.category,
      readTime: validatedFields.data.readTime,
      content: validatedFields.data.content,
    };

    if (tags) updateData.tags = tags;
    if (imageUrl) updateData.image = imageUrl;

    await Blog.findByIdAndUpdate(id, updateData);

    revalidateTag("blogs", "max");
    revalidateTag(`blog-${id}`, "max");
    return { success: true, message: "Blog updated successfully" };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, message: "Failed to update blog" };
  }
}

export async function deleteBlog(id: string) {
  try {
    await requireStaff()
    await connectDB();
    await Blog.findByIdAndDelete(id);
    revalidateTag("blogs", "max");
    revalidateTag(`blog-${id}`, "max");
    return { success: true, message: "Blog deleted successfully" };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, message: "Failed to delete blog" };
  }
}
