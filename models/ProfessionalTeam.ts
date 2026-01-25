import mongoose, { Schema, model, models } from "mongoose";

const TeamSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const ProfessionalTeam = models.ProfessionalTeam || model("ProfessionalTeam", TeamSchema);
