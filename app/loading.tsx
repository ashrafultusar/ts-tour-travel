// app/loading.tsx  (Next.js App Router-এর জন্য root loading file)
// অথবা components/Loading.tsx হিসেবে রেখে যেকোনো জায়গায় import করতে পারো

export default function Loading() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 px-4">
      {/* Very subtle moving background gradient (no custom keyframes needed) */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-pulse opacity-60" />

      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Glowing Logo */}
        <div className="relative">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-xl shadow-indigo-500/30 dark:shadow-purple-500/30 animate-pulse">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TS
              </span>
            </div>
          </div>
        </div>

        {/* Spinner */}
        <div className="relative h-20 w-20">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-indigo-400/30 animate-spin [animation-duration:1.2s]" />
          
          {/* Middle ring - reverse direction */}
          <div className="absolute inset-2 rounded-full border-4 border-purple-400/40 animate-spin [animation-direction:reverse] [animation-duration:1.8s]" />
          
          {/* Inner spinner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full border-4 border-t-indigo-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin [animation-duration:0.9s]" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
            Loading...
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
            Just a moment while we prepare everything for you
          </p>
        </div>
      </div>
    </div>
  );
}