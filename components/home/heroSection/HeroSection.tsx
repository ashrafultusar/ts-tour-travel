import React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Phone, 
  Globe, 
  GraduationCap, 
  Building2, 
  Plane 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// CSS Module Import
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FFFCF5] py-12 lg:py-16 flex items-center overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <div className="space-y-6 lg:space-y-8 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#F0F7F6] border border-teal-100 px-4 py-2 rounded-full">
              <GraduationCap className="w-4 h-4 text-[#0D9488]" />
              <span className="text-xs lg:text-sm font-medium text-[#0D9488]">
                Higher Education Opportunities in Malaysia
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-black text-[#1E293B] leading-[1.1] tracking-tight">
                Empowering Students for <br />
                <span className="text-[#E11D48]">Malaysian Success</span> <br />
                with <span className="text-[#2563EB]">Expert Guidance</span>
              </h1>
            </div>

            <p className="text-[#64748B] text-base lg:text-xl leading-relaxed max-w-lg">
              We simplify every step of your journey—from selecting the perfect 
              university to securing your student visa. Build your dream career 
              with our dedicated support.
            </p>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-lg shadow-yellow-200 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="text-lg lg:text-xl font-bold text-[#1E293B]">+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-lg shadow-yellow-200 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="text-lg lg:text-xl font-bold text-[#1E293B]">www.eduvisabd.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-[#14919B] hover:bg-[#0E747C] text-white rounded-xl px-6 lg:px-8 h-12 lg:h-14 text-base lg:text-lg font-bold flex items-center gap-2 shadow-lg">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-200 text-gray-700 rounded-xl px-6 lg:px-8 h-12 lg:h-14 text-base lg:text-lg font-bold hover:bg-gray-50">
                Explore Universities
              </Button>
            </div>
          </div>

          {/* --- RIGHT CONTENT: VISUAL ELEMENTS --- */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Dots Pattern Overlay */}
            <div className="absolute top-10 -right-4 grid grid-cols-4 gap-2 opacity-30">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-400 rounded-full" />
              ))}
            </div>

            <div className={styles.visualWrapper}>
              {/* Spinning Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-teal-200 rounded-full animate-[spin_30s_linear_infinite]" />
              
              {/* Inner Circle Image */}
              <div className={styles.imageCircle}>
                <Image
                  src="/assets/home/malaysia-cityscape.jpg"
                  alt="Study in Malaysia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* STAT CARD 1 */}
              <div className={`${styles.statCard1} bg-[#1E40AF] text-white`}>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-black leading-none">39+</p>
                  <p className="text-[8px] lg:text-[10px] font-medium opacity-80 uppercase tracking-wider">Partner Universities</p>
                </div>
              </div>

              {/* STAT CARD 2 */}
              <div 
                className={`${styles.statCard2} bg-[#14919B] text-white`}
                style={{ animationDelay: "1s" }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-black leading-none">820+</p>
                  <p className="text-[8px] lg:text-[10px] font-medium opacity-80 uppercase tracking-wider">Successful Visas</p>
                </div>
              </div>

              {/* STAT CARD 3 */}
              <div 
                className={styles.statCard3}
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3 mb-2 lg:mb-3">
                  <div className="p-1.5 lg:p-2 bg-blue-50 rounded-lg">
                     <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <span className="font-bold text-[#1E293B] text-sm lg:text-lg">Student Visa</span>
                </div>
                <p className="text-gray-500 text-[10px] lg:text-sm mb-3 lg:mb-5 leading-relaxed">
                  Unlock world-class education in Malaysia today!
                </p>
                <Button size="sm" className="w-full bg-[#E0E7FF] text-[#1E40AF] hover:bg-[#C7D2FE] font-bold rounded-lg lg:rounded-xl py-4 lg:py-6">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;