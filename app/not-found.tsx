import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Travel Themed Background Graphic */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-blue-100 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl md:text-5xl">🌍</span>
        </div>
      </div>

      {/* Main Content */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Oops! Your Journey Hit a Detour
      </h2>
      
      <p className="max-w-md text-slate-600 mb-8 text-lg">
        We couldn't find the page you're looking for. Maybe the destination has 
        changed, or your visa for this route has expired! ✈️
      </p>

      {/* Action Links */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="duration-300 shadow-lg hover:shadow-blue-200 w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4  bg-gradient-to-r from-[#0369A1] to-[#0891B2] hover:opacity-90 text-white font-bold  rounded-xl transition-all  gap-2"
        >
          <span>🏠</span> Return Home
        </Link>
        
     
      </div>

    </div>
  );
}