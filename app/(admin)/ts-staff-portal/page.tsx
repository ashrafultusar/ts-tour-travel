import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          
         
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl bg-white p-1 mb-4">
              <Image
                src="/assets/logo/logo.jpg"
                alt="TS Tour and Travel Logo"
                fill
                priority
                className="object-contain rounded-full"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              Welcome to <span className="text-[#0891B2]">TS Tour and Travel</span>
            </h1>
            
           
            <p className="mt-2 text-lg text-[#64748B] font-medium italic">
              &ldquo;Anything, Any Time&rdquo;
            </p>
          </div>

          {/* Greeting Message */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              Your Trusted Partner for Global Education & Travel
            </h2>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              We are delighted to have you here. Whether you&apos;re dreaming of 
              studying abroad in top-tier universities or planning your next 
              adventure, our team is dedicated to making your journey smooth 
              and successful.
            </p>
            
         

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;