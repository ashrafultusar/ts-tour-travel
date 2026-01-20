import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
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
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sign in to continue
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6">
            <div className="space-y-5">
              {/* Email Field */}
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
              </div>

              {/* Password Field */}
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
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white/60 pl-11 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm transition-colors duration-200"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:text-indigo-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-gray-700 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            >
              Create one now →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
