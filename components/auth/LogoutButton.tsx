// "use client";

// import { logout } from "@/actions/auth";

// export function LogoutButton() {
//     return (
//         <button
//             onClick={() => logout()}
//             className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700"
//         >
//             Sign out
//         </button>
//     );
// }



"use client";

import { logout } from "@/actions/auth";
import { cn } from "@/lib/utils"; 

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function LogoutButton({ className, children }: LogoutButtonProps) {
  return (
    <button
      onClick={() => logout()}
      className={cn(
        // ডিফল্ট স্টাইল (যদি বাইরে থেকে className না পাঠানো হয়)
        "inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold transition-all", 
        className
      )}
    >
      {/* যদি children পাঠানো হয় তবে সেটা দেখাবে, না হলে ডিফল্ট 'Sign out' */}
      {children ? children : "Sign out"}
    </button>
  );
}