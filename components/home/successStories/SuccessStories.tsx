import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { getSuccessStories } from "@/lib/data/successStory";


interface Testimonial {
  _id: string;
  studentName: string;
  university: string;
  subject: string;
  image: string;
  story: string;
  rating?: number; 
}

const SuccessStories: React.FC = async () => {
  const { stories } = await getSuccessStories();

  return (
    <section id="success" className="py-16 md:py-24 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#14919B15,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FDF6E9] text-[#D97706] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#2D3142] leading-tight">
            Experiences of Our <span className="text-[#14919B]">Successful Students</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden py-10">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-linear-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-linear-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          <div className="flex w-max gap-6 md:gap-10 animate-testimonial-scroll hover:paused cursor-pointer">
            {/* Map over the stories with the correct keys from your console log */}
            {stories?.map((testimonial: Testimonial, index) => (
              <div
                key={`${testimonial._id}-${index}`}
                className="w-[80vw] md:w-105 shrink-0 relative flex flex-col p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#14919B20] transition-all duration-300 group"
              >
                <div className="absolute -top-4 right-8 w-10 h-10 rounded-full bg-[#14919B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Quote className="w-4 h-4 text-white fill-current" />
                </div>

                <div className="flex gap-1 mb-6">

                  {[...Array(testimonial?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>

                <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed italic min-h-22.5">
                  {testimonial?.story}
                </p>

                <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-auto">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-4 ring-[#E7F6F2] shrink-0">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.studentName}
                      fill
                      sizes="(max-width: 768px) 48px, 56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[#2D3142] text-sm md:text-base truncate">
                      {testimonial?.studentName}
                    </h4>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest truncate">
                      {testimonial?.subject}
                    </p>
                    <p className="text-xs md:text-sm text-[#14919B] font-bold truncate">
                      {testimonial?.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes testimonialScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33% - 20px)); } 
        }
        .animate-testimonial-scroll {
          animation: testimonialScroll 40s linear infinite;
        }
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