//lib/access-helpers.ts

import { auth } from "@/auth";

export async function requireAuth() {
    const session = await auth();
    
    if (!session || !session.user) {
        throw new Error("Unauthorized - Please login first");
    }
    
    return session;
}

export async function requireRole(allowedRoles: string[]) {
    const session = await requireAuth();
    
    if (!allowedRoles.includes(session.user.role)) {
        throw new Error(`Forbidden - Required roles: ${allowedRoles.join(", ")}`);
    }
    
    return session;
}

export async function requireAdmin() {
    return requireRole(["admin"]);
}

export async function requireStaff() {
    return requireRole(["admin", "moderator"]);
}