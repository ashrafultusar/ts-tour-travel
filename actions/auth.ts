"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/db/dbConfig";

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
    try {
        await signIn("credentials", formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}

export async function logout() {
    await signOut();
}
