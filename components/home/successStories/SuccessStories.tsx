import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  university: string;
  program: string;
  image: string;
  quote: string;
  rating: number;
}

const SuccessStories: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rafi Ahmed",
      university: "University of Malaya",
      program: "BSc in Computer Science",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
      quote: "With the help of EduVisa BD, I got the opportunity to study at the best university in Malaysia. Their guidance at every step was extraordinary.",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      university: "Taylor's University",
      program: "MBA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      quote: "They helped a lot in getting the scholarship. I couldn't have imagined the visa process would be so easy. Thank you EduVisa BD!",
      rating: 5,
    },
    {
      name: "Sakib Hasan",
      university: "UCSI University",
      program: "Bachelor in Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      quote: "I was very worried at first. But their team explained everything so beautifully. Now I am studying in Malaysia!",
      rating: 5,
    },
  ];

  return (
    <section id="success" className="py-16 md:py-24 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#14919B15,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FDF6E9] text-[#D97706] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#2D3142] leading-tight">
            Experiences of Our <span className="text-[#14919B]">Successful Students</span>
          </h2>
        </div>

        {/* CSS Slider Container */}
        <div className="relative w-full overflow-hidden py-10">
          
          {/* Side Fading Overlays */}
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          {/* Sliding Track - Stop on Hover Logic here */}
          <div className="flex w-max gap-6 md:gap-10 animate-testimonial-scroll hover:[animation-play-state:paused] cursor-pointer">
            {/* Duplicating the list for seamless loop */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[80vw] md:w-[420px] shrink-0 relative flex flex-col p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#14919B20] transition-all duration-300 group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8 w-10 h-10 rounded-full bg-[#14919B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Quote className="w-4 h-4 text-white fill-current" />
                </div>

                {/* Star Ratings */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed italic min-h-[90px]">
                  {testimonial.quote}
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-auto">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-4 ring-[#E7F6F2] shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[#2D3142] text-sm md:text-base truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest truncate">
                      {testimonial.program}
                    </p>
                    <p className="text-xs md:text-sm text-[#14919B] font-bold truncate">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-[#0369A1] to-[#0891B2] hover:from-[#0891B2] hover:to-[#0369A1] text-white font-extrabold rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/20 active:scale-95">
            Join Our Success Community
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes testimonialScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33% - 20px)); } 
        }
        .animate-testimonial-scroll {
          animation: testimonialScroll 40s linear infinite;
        }
        /* Mobile speed boost */
        @media (max-width: 768px) {
          .animate-testimonial-scroll {
            animation: testimonialScroll 25s linear infinite;
          }
        }
      `}} />
    </section>
  );
};

export default SuccessStories;