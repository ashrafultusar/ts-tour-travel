"use client";

import { useState, useActionState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { register } from "@/actions/auth";
import { useFormStatus } from "react-dom";

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group relative flex w-full justify-center rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl active:scale-[0.98] aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      aria-disabled={pending}
    >
      {pending ? "Creating account..." : "Create account"}
    </button>
  );
}

export default function RegisterPage() {
  const [state, dispatch] = useActionState(register, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(99,102,241,0.08)_0%,transparent_25%),radial-gradient(circle_at_85%_30%,rgba(168,85,247,0.07)_0%,transparent_35%)] dark:bg-[radial-gradient(circle_at_15%_50%,rgba(99,102,241,0.12)_0%,transparent_25%),radial-gradient(circle_at_85%_30%,rgba(168,85,247,0.11)_0%,transparent_35%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-5 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-10 rounded-2xl bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:bg-gray-900/70 dark:shadow-indigo-950/30 sm:p-10 border border-white/30 dark:border-gray-700/40 transition-all duration-500 hover:shadow-3xl hover:scale-[1.005]">
          {/* Brand / Logo */}
          <div className="text-center">
            <div className="mx-auto h-14 w-14 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 p-0.5 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white dark:bg-gray-900 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                TS
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Join us and start your journey
            </p>
          </div>

          {/* Form */}
          <form action={dispatch} className="mt-8 space-y-6">
            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <User
                      className="h-5 w-5 text-gray-400 dark:text-gray-500"
                      strokeWidth={2}
                    />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white/60 pl-11 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm transition-colors duration-200"
                    placeholder="Full name"
                  />
                </div>
                {state?.error?.name && <p className="text-sm text-red-500">{state.error.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Mail
                      className="h-5 w-5 text-gray-400 dark:text-gray-500"
                      strokeWidth={2}
                    />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white/60 pl-11 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm transition-colors duration-200"
                    placeholder="you@example.com"
                  />
                </div>
                {state?.error?.email && <p className="text-sm text-red-500">{state.error.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Lock
                      className="h-5 w-5 text-gray-400 dark:text-gray-500"
                      strokeWidth={2}
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white/60 pl-11 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm transition-colors duration-200 pr-11"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" strokeWidth={2} />
                    ) : (
                      <Eye className="h-5 w-5" strokeWidth={2} />
                    )}
                  </button>
                </div>
                {state?.error?.password && <p className="text-sm text-red-500">{state.error.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Lock
                      className="h-5 w-5 text-gray-400 dark:text-gray-500"
                      strokeWidth={2}
                    />
                  </div>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white/60 pl-11 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm transition-colors duration-200 pr-11"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" strokeWidth={2} />
                    ) : (
                      <Eye className="h-5 w-5" strokeWidth={2} />
                    )}
                  </button>
                </div>
                {state?.error?.confirmPassword && <p className="text-sm text-red-500">{state.error.confirmPassword}</p>}
              </div>

              {/* Terms checkbox */}
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:text-indigo-500"
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <div>
              <RegisterButton />
            </div>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {state?.message && (
                <>
                  <p className="text-sm text-red-500">{state.message}</p>
                </>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            >
              Sign in →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
