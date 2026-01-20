"use client";

import { logout } from "@/actions/auth";

export function LogoutButton() {
    return (
        <button
            onClick={() => logout()}
            className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700"
        >
            Sign out
        </button>
    );
}
