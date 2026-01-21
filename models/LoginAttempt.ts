import mongoose, { Schema, Document } from "mongoose";

export interface ILoginAttempt extends Document {
    email: string;
    ip: string;
    attempts: number;
    lastAttempt: Date;
}

const loginAttemptSchema = new Schema<ILoginAttempt>(
    {
        email: { type: String, required: true },
        ip: { type: String, required: true },
        attempts: { type: Number, required: true, default: 0 },
        lastAttempt: { type: Date, required: true, default: Date.now },
    },
    { timestamps: true }
);

// Index for automatic cleanup (optional, or just handle manually)
// loginAttemptSchema.index({ lastAttempt: 1 }, { expireAfterSeconds: 3600 }); // Expire after 1 hour

const LoginAttempt =
    mongoose.models.LoginAttempt ||
    mongoose.model<ILoginAttempt>("LoginAttempt", loginAttemptSchema);

export default LoginAttempt;
