import Image from "next/image";
import React from "react";

// Image path: public/assets/counselor/image1.png
const counselorImage = "/assets/counselor/image1.png";

const MeetCounselors = () => {
  const counselor = {
    name: "Engr. Md. John deo",
    title: "General Manager",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos sequi asperiores distinctio saepe recusandae soluta? Provident, perspiciatis repellendus natus illum maiores, quam quidem nesciunt exercitationem earum, eos id quos.",
  };

  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-[#f0f4f7] flex flex-col items-center justify-center py-10">
      {/* 1. Background Striped Pattern (Same as image) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #dbeafe 0px,
            #dbeafe 60px,
            transparent 60px,
            transparent 120px
          )`,
        }}
      />

      {/* 2. Header Title */}
      <h2 className="relative z-30 text-3xl lg:text-4xl font-bold text-[#1e293b] mb-12 text-center">
        Meet Our Counselors
      </h2>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl px-4">
        {/* 3. Quote Card (Behind the person) */}
        <div className="relative z-10 bg-white rounded-lg shadow-xl p-8 lg:p-14 max-w-xl lg:max-w-3xl lg:-mr-32 border border-white/50">
          <div className="relative">
            <p className="text-gray-600 italic leading-relaxed text-[14px] lg:text-[15px] pr-0 lg:pr-32 text-justify">
              {counselor.description}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-[#00aeef] font-bold text-lg lg:text-xl">
              {counselor.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{counselor.title}</p>
          </div>
        </div>

        {/* 4. Person Image (Foreground / On Top) */}
        <div className="relative z-20 mt-8 lg:mt-0">
          <div className="relative w-[320px] h-[450px] lg:w-[500px] lg:h-[650px]">
            <Image
              src={counselorImage}
              alt={counselor.name}
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCounselors;
