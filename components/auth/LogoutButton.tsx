"use client";

import { logout } from "@/actions/auth";
import { cn } from "@/lib/utils";

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function LogoutButton({ className, children }: LogoutButtonProps) {
  const handleLogout = async () => {
    await logout(); // call server action
    window.location.reload(); // reload page after successful logout
  };

  return (
    <button
      onClick={handleLogout}
      className={cn(
        "inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold transition-all",
        className,
      )}
    >
      {children ? children : "Sign out"}
    </button>
  );
}
