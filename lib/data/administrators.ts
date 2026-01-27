"use server";
import { serializeDocument } from "../utils/formHelpers";
import User from "@/models/User";
import { connectDB } from "@/db/dbConfig";
import { revalidateTag, unstable_cache } from "next/cache";
import { cache } from "react";
import { requireStaff } from "../access-helper";

//  get all user
export const getAllUsersConfig = unstable_cache(
  async () => {
    await connectDB();
    const users = await User.find({}).sort({ createdAt: -1 });
    return users.map((user) => serializeDocument(user));
  },
  ["all-users-list"],
  { tags: ["users"] },
);

export const getAllUsers = cache(async () => {
  await requireStaff();
  return await getAllUsersConfig();
});

// edit role
export const updateUserRole = async (userId: string, newRole: string) => {
  try {
    await requireStaff();
    await connectDB();
    await User.findByIdAndUpdate(userId, { role: newRole });
    revalidateTag("users", "max");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to update role" };
  }
};

export const deleteUser = async (userId: string) => {
  try {
    await requireStaff();
    await connectDB();
    await User.findByIdAndDelete(userId);
    revalidateTag("users", "max");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete user" };
  }
};
