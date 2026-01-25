import mongoose, { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        category: { type: String, required: true },
        readTime: { type: Number, required: true },
        content: { type: String, required: true },
        tags: { type: [String], default: [] },
        image: { type: String, default: "" },
    },
    { timestamps: true }
);

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
