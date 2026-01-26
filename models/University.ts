import mongoose, { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true }
});

const DepartmentSchema = new Schema({
  name: { type: String, required: true },
  courses: [CourseSchema] 
});

const UniversitySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true },
    level: {
      type: [String],
      required: [true, "At least one level is required"],
      validate: [(v: string[]) => v.length > 0, "Select at least one level"],
    },
    offerType: { type: String, enum: ["Free", "Paid"], required: true },
    description: { type: String },
    image: { type: String, default: "" },
    aboutImage: { type: String, default: "" },
    departments: [DepartmentSchema],
  },
  { timestamps: true }
);

const University = models.University || model("University", UniversitySchema);
export default University;
