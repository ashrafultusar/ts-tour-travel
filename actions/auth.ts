"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/db/dbConfig";
import LoginAttempt from "@/models/LoginAttempt";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const RegisterSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export async function register(prevState: any, formData: FormData) {
    try {
        const data = Object.fromEntries(formData.entries());
        const validatedFields = RegisterSchema.safeParse(data);

        if (!validatedFields.success) {
            return {
                error: validatedFields.error.flatten().fieldErrors,
                message: "Validation Error"
            };
        }

        const { name, email, password } = validatedFields.data;

        await connectDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { message: "Email already exists." };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // We don't sign in here automatically, user should login. 
        // Or we can sign them in. For now, let's redirect to login.
        return { success: true, message: "Account created successfully." };

    } catch (error) {
        console.error("Registration error:", error);
        return { message: "Failed to create account." };
    }
}

export async function authenticate(
    prevState: any,
    formData: FormData,
) {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const email = formData.get("email") as string;

    await connectDB();

    // 1. Check Rate Limit
    const limitResult = await checkRateLimit(email, ip);
    if (!limitResult.allowed) {
        return `Too many attempts. Please try again later.`;
    }

    try {
        await signIn("credentials",{ formData,redirect:'/'});
        // If successful, reset attempts
        await resetRateLimit(email, ip);
        
    } catch (error) {
        if (error instanceof AuthError) {
            // Track failed attempt
            await incrementRateLimit(email, ip);

            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        // Rethrow redirect error
        throw error;
    }
}

async function checkRateLimit(email: string, ip: string) {
    const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
    const MAX_ATTEMPTS = 5;

    const attempt = await LoginAttempt.findOne({
        $or: [{ email }, { ip }]
    }).sort({ lastAttempt: -1 });

    if (!attempt) return { allowed: true };

    const timePassed = Date.now() - new Date(attempt.lastAttempt).getTime();

    if (timePassed < WINDOW_MS && attempt.attempts >= MAX_ATTEMPTS) {
        return { allowed: false };
    }

    // Reset if window passed
    if (timePassed > WINDOW_MS) {
        await LoginAttempt.deleteMany({ $or: [{ email }, { ip }] });
        return { allowed: true };
    }

    return { allowed: true };
}

async function incrementRateLimit(email: string, ip: string) {
    const attempt = await LoginAttempt.findOne({ $or: [{ email }, { ip }] });
    if (attempt) {
        attempt.attempts += 1;
        attempt.lastAttempt = new Date();
        await attempt.save();
    } else {
        await LoginAttempt.create({ email, ip, attempts: 1 });
    }
}

async function resetRateLimit(email: string, ip: string) {
    await LoginAttempt.deleteMany({ $or: [{ email }, { ip }] });
}

export async function logout() {
    await signOut();
}
