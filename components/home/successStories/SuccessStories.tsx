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
      image: "/assets/imge.jpg",
      quote: "With the help of EduVisa BD, I got the opportunity to study at the best university in Malaysia. Their guidance at every step was extraordinary.",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      university: "Taylor's University",
      program: "MBA",
      image: "/assets/imge.jpg",
      quote: "They helped a lot in getting the scholarship. I couldn't have imagined the visa process would be so easy. Thank you EduVisa BD!",
      rating: 5,
    },
    {
      name: "Sakib Hasan",
      university: "UCSI University",
      program: "Bachelor in Engineering",
      image: "/assets/imge.jpg",
      quote: "I was very worried at first. But their team explained everything so beautifully. Now I am studying in Malaysia!",
      rating: 5,
    },
  ];

  return (
    <section id="success" className="py-16 md:py-24 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#14919B15,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FDF6E9] text-[#D97706] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#2D3142] mb-4 md:mb-6 leading-tight">
            Experiences of Our <span className="text-[#14919B]">Successful Students</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg font-medium">
            Hear from those who have fulfilled their dreams through us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(20,145,155,0.1)] transition-all duration-500 group h-full"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-2 md:-top-5 md:-right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#14919B] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                <Quote className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>

              {/* Quote Text - Using line-clamp for fixed height effect */}
              <div className="flex-grow">
                <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed italic line-clamp-4 md:line-clamp-5">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 md:gap-4 border-t border-gray-50 pt-6 mt-auto">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-4 ring-[#E7F6F2] shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#2D3142] text-sm md:text-lg truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-wide truncate">
                    {testimonial.program}
                  </p>
                  <p className="text-[11px] md:text-sm text-[#14919B] font-bold truncate">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 space-y-6">
          <p className="text-gray-500 text-sm md:text-base font-medium">
            You could be our next successful student
          </p>
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4  bg-gradient-to-r from-[#0369A1] to-[#0891B2] hover:opacity-90 text-white font-bold  rounded-xl transition-all  gap-2"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;