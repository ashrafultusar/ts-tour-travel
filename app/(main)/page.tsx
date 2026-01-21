import HeroSection from "@/components/home/heroSection/HeroSection";
import OurUniversities from "@/components/home/ourUniversities/OurUniversities";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-1">
      <Suspense
        fallback={<div className="h-screen w-full bg-slate-50 animate-pulse" />}
      >
        <HeroSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full bg-slate-100 animate-pulse" />}
      >
        <OurUniversities />
      </Suspense>
    </div>
  );
}
