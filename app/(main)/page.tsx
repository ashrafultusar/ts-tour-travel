import AboutUs from "@/components/home/aboutUs/AboutUs";
import AirlinePartners from "@/components/home/airlinePartners/AirlinePartners";
import ContactSection from "@/components/home/contactSection/ContactSection";
import HeroSection from "@/components/home/heroSection/HeroSection";
import OurUniversities from "@/components/home/ourUniversities/OurUniversities";
import SuccessStories from "@/components/home/successStories/SuccessStories";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Suspense
        fallback={<div className="h-screen w-full bg-slate-50 animate-pulse" />}
      >
        <HeroSection />
      </Suspense>
      
      {/* OurUniversities */}
      <Suspense
        fallback={<div className="h-40 w-full bg-slate-100 animate-pulse" />}
      >
        <OurUniversities />
      </Suspense>

      {/* AboutUs */}
      <Suspense
        fallback={<div className="h-40 w-full bg-slate-100 animate-pulse" />}
      >
        <AboutUs />
      </Suspense>

      {/* WhyChooseUs */}
      <Suspense
        fallback={<div className="h-40 w-full bg-slate-100 animate-pulse" />}
      >
        <WhyChooseUs />
      </Suspense>

      {/* SuccessStories */}
      <Suspense
        fallback={<div className="h-40 w-full bg-slate-100 animate-pulse" />}
      >
        <SuccessStories />
      </Suspense>

      <AirlinePartners />

      {/* ContactSection */}
      <Suspense
        fallback={<div className="h-40 w-full bg-slate-100 animate-pulse" />}
      >
        <ContactSection />
      </Suspense>
    </div>
  );
}
