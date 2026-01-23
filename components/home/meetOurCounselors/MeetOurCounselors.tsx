import React from 'react';
import Image from 'next/image';

const MeetOurCounselors = () => {
  return (
    <section className="relative w-full py-16 bg-[#f8fafc] overflow-hidden">
      {/* Background Striped Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 100%' }}>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e293b] mb-16">
          Meet Our Counselors
        </h2>

        <div className="relative flex flex-col md:flex-row items-center">
          {/* Text Content Box */}
          <div className="w-full md:w-3/4 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/60 relative z-20">
            <div className="relative">
              {/* Quote Icon */}
              <span className="absolute -left-6 -top-2 text-4xl text-gray-800 italic font-serif">"</span>
              
              <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                Sabbin Islam Sanan, the Managing Director of Tawakkul Malaysia Education Consultancy, is a 
                visionary leader dedicated to expanding educational opportunities for students worldwide. 
                His strategic approach and commitment to excellence have been pivotal in enhancing the 
                company's reputation as a trusted educational consultancy. Sabbin champions values of 
                transparency and collaboration, ensuring every decision aligns with the mission to empower 
                students in their educational pursuits. Under his guidance, Tawakkul Malaysia has set new 
                benchmarks for quality, fostering a culture of innovation and continuous improvement.
              </p>
              
              <span className="absolute -bottom-4 text-4xl text-gray-800 italic font-serif ml-1">"</span>
            </div>

            <div className="mt-8">
              <h4 className="text-[#3b82f6] font-bold text-lg">Md Sabbin Islam Sanan</h4>
              <p className="text-gray-500 text-sm">Managing Director</p>
            </div>
          </div>

          {/* Image Component */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:-ml-24 flex justify-center md:justify-end z-30">
            <div className="relative w-64 h-80 md:w-[400px] md:h-[500px]">
              {/* Replace with your actual image path */}
              <img
                src="/path-to-your-image.png" 
                alt="Md Sabbin Islam Sanan"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-gray-800"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurCounselors;