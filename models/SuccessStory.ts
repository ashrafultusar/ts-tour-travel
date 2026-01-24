import mongoose, { Schema, model, models } from "mongoose";

const SuccessStorySchema = new Schema(
    {
        studentName: { type: String, required: true },
        subject: { type: String, required: true },
        university: { type: String, required: true },
        country: { type: String },
        story: { type: String, required: true },
        image: { type: String, default: "" },
    },
    { timestamps: true }
);

const SuccessStory = models.SuccessStory || model("SuccessStory", SuccessStorySchema);

export default SuccessStory;
