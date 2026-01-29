"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, GraduationCap, Building2, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  const images = [
    "/assets/home/hero.jpg",
    "/assets/home/malaysia.jpg",
    "/assets/home/maldivs.jpg",
    "/assets/home/nepal.jpg",
    "/assets/home/saudia.jpg",
    "/assets/home/singapor.jpg",
    "/assets/home/srilanka.jpg",
    "/assets/home/thailand.jpg",
    "/assets/office/image6.jpeg",
    "/assets/office/image2.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-[#FFFFFF] via-[#FDF6E9] to-[#EAF3FF] py-12 lg:py-16 flex items-center overflow-hidden">
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-150 h-150 bg-[#F3E8BB]/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-[#D1E9E6]/30 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT CONTENT --- */}
          <div className="space-y-6 lg:space-y-8 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#E1EBF7] border border-transparent px-4 py-2 rounded-full">
              <GraduationCap className="w-4 h-4 text-[#1E56A0]" />
              <span className="text-xs lg:text-sm font-semibold text-[#1E56A0]">
                Higher Education Opportunities in Malaysia
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-[40px] md:text-[54px] lg:text-[68px] font-black text-[#2D3142] leading-[1.1] tracking-tight">
                Expert Guidance For{" "}
                <span className="text-[#14919B]">Bangladeshi</span> <br />
                <span className="text-[#1E56A0]">Students In Malaysia</span>
              </h1>
            </div>

            <p className="text-[#5E6272] text-base lg:text-xl leading-relaxed max-w-lg font-medium">
              TS Tour & Travel is a professional education consultancy... (rest
              of your text)
            </p>

            <div className="flex items-center gap-3 sm:gap-4 pt-4">
              <Link href={"/contactUs"}>
                <Button className="bg-[#14919B] hover:bg-[#0E747C] text-white rounded-lg px-4 sm:px-6 lg:px-8 h-10 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg font-bold flex items-center gap-2 shadow-md cursor-pointer">
                  Get Free Consultation{" "}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href={"/universities"}>
                <Button
                  variant="outline"
                  className="border border-gray-300 text-[#2D3142] rounded-lg px-4 sm:px-6 lg:px-8 h-10 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg font-bold cursor-pointer bg-white/50 hover:bg-white"
                >
                  Find Universities
                </Button>
              </Link>
            </div>
          </div>

          {/* --- RIGHT CONTENT: VISUAL ELEMENTS --- */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="absolute top-10 -right-4 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#2D3142] rounded-full" />
              ))}
            </div>

            <div className={styles.visualWrapper}>
              <div className="absolute inset-0 border-2 border-dashed border-teal-200 rounded-full animate-[spin_30s_linear_infinite]" />

              {/* SLIDING IMAGE CIRCLE */}
              <div className={`${styles.imageCircle} relative overflow-hidden`}>
                {images?.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Study in Malaysia"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className={`object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  />
                ))}
              </div>

              {/* STAT CARDS */}
              <div
                className={`${styles.statCard1} bg-[#1E56A0] text-white rounded-xl shadow-xl`}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-bold leading-none">
                    <span
                      className={`${styles.counterAnim} ${styles.partnerCount}`}
                    ></span>
                    +
                  </p>
                  <p className="text-[10px] lg:text-xs opacity-80">
                    Partner Universities
                  </p>
                </div>
              </div>

              <div
                className={`${styles.statCard2} bg-[#14919B] text-white rounded-xl shadow-xl`}
                style={{ animationDelay: "1s" }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-bold leading-none">
                    <span
                      className={`${styles.counterAnim} ${styles.visaCount}`}
                    ></span>
                    +
                  </p>
                  <p className="text-[10px] lg:text-xs opacity-80">
                    Successful Visas
                  </p>
                </div>
              </div>

              <div
                className={`${styles.statCard3} bg-white rounded-2xl shadow-2xl p-4 lg:p-6`}
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#E1EBF7] rounded-lg">
                    <GraduationCap className="w-5 h-5 text-[#1E56A0]" />
                  </div>
                  <span className="font-bold text-[#2D3142] text-sm lg:text-base">
                    Student Visa
                  </span>
                </div>

                <Link href={"/universities"}>
                  <Button
                    size="sm"
                    className="w-full bg-[#E1EBF7] cursor-pointer text-[#1E56A0] hover:bg-[#D1DFEF] font-bold rounded-lg py-2"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
