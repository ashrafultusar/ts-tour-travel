import Link from "next/link";
import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Menu } from "lucide-react";

export default async function Navbar() {
    const session = await auth();

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                TS
                            </div>
                            <span className="hidden font-bold text-gray-900 dark:text-white sm:block">
                                Tour & Travel
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                            <Link
                                href="/"
                                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Home
                            </Link>
                            <Link
                                href="/tours"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                            >
                                Tours
                            </Link>
                            {/* Add more links as needed */}
                        </div>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                        {session?.user ? (
                            <>
                                <Link
                                    href="/profile"
                                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    {session.user.name}
                                </Link>
                                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
                                <LogoutButton />
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-800">
                            <span className="sr-only">Open main menu</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Simplified for now, can be expanded with state) */}
        </nav>
    );
}
