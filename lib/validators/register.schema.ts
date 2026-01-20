import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(150, "Title too long"),

  email: z
    .string()
    .min(20, "Content must be at least 20 characters")
    .max(50, "Content too long"),

  password: z
    .string()
    .min(6, "Author name too short")
    .max(50, "Author name too long"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
