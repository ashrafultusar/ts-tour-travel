/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/db/dbConfig";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import sanitize from "mongo-sanitize";
import { checkRateLimit } from "@/lib/rateLimit";

const RegisterSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export async function register(prevState: any, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());
    // Sanitize input to prevent NoSQL injection
    const sanitizedData = sanitize(rawData);

    const validatedFields = RegisterSchema.safeParse(sanitizedData);

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
        message: "Validation Error",
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

export async function authenticate(prevState: any, formData: FormData) {
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  // Sanitize email input
  const email = sanitize(formData.get("email") as string);
  const password = sanitize(formData.get("password") as string);

  // Check Rate Limit (In-Memory)
  const limitKey = `${ip}_${email}`;
  const limitResult = await checkRateLimit(limitKey);

  if (!limitResult.allowed) {
    return `Too many attempts. Please try again later.`;
  }

  try {
    await connectDB();
    await signIn("credentials", { email, password, redirect: false });
    // Redirect to profile after successful login
    redirect("/profile");
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
  // If signIn doesn't throw, it was successful (or redirected depending on config).
  // If we want to force redirect after success:
  // redirect('/');
  // But since this is a server action returning a state string in UI,
  // the client component usually handles the redirect or the signIn does it.
  // The original code was `await signIn("credentials",{ formData,redirect:'/'});`
  // Let's correct this to boolean or string URL if supported, usually it's `redirectTo`.
  // NextAuth v5 `signIn` second arg is options.

  // Correct usage:
  // await signIn("credentials", formData);
}

export async function logout() {
  await signOut({ redirect: false });
  return true;
}
