import AboutUs from "@/components/home/aboutUs/AboutUs";
import AirlinePartners from "@/components/home/airlinePartners/AirlinePartners";
import ContactSection from "@/components/home/contactSection/ContactSection";
import Counselors from "@/components/home/counselors/Counselors";
import HeroSection from "@/components/home/heroSection/HeroSection";
import OurUniversities from "@/components/home/ourUniversities/OurUniversities";
import SuccessStories from "@/components/home/successStories/SuccessStories";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <OurUniversities />
      <AboutUs />
      <WhyChooseUs />
      <Counselors />
      <Suspense
        fallback={<div className="h-80 w-full bg-slate-100 animate-pulse" />}
      >
        <SuccessStories />
      </Suspense>
      <AirlinePartners />

      <ContactSection />
    </div>
  );
}
