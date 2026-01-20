import { auth } from "@/auth";
import { User } from "lucide-react";
import { LogoutButton } from "@/components/auth/LogoutButton";
import Link from "next/link";
import Image from "next/image";

export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user) {
        return (
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Not authenticated</h2>
                    <p className="mt-2 text-gray-600">Please info login to view your profile.</p>
                    <Link href="/login" className="mt-4 inline-block rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                        Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                    <div className="h-32 bg-linear-to-r from-indigo-500 to-purple-600 sm:h-40"></div>
                    <div className="relative px-6 pb-6">
                        <div className="-mt-16 flex items-end sm:-mt-20">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-700 dark:ring-gray-800 sm:h-32 sm:w-32">
                                {session.user.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt={session.user.name || "User"}
                                        width={128}
                                        height={128}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <User className="h-12 w-12 text-gray-400 sm:h-16 sm:w-16" />
                                )}
                            </div>
                        </div>

                        <div className="mt-6 sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {session.user.name}
                                </h1>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {session.user.email}
                                </p>
                                <p className="mt-1 text-xs text-indigo-500 uppercase font-bold tracking-wide">
                                    {session.user.role || "User"}
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none">
                                <LogoutButton />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-6 py-6 dark:border-gray-700">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                            <div>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">User ID</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white font-mono bg-gray-100 dark:bg-gray-900 p-1 rounded">
                                    {session.user.id}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                                    {session.user.role}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
