import Image from "next/image";

const counselorImage = "/assets/counselor/image1.png";

const MeetCounselors = () => {
  const counselor = {
    name: "Engr. Md. Jahirul Islam Piash",
    title: "General Manager",
    description:
      "Engr. Jahirul Islam Piash serves as the General Manager of Tawakkul Malaysia Education Consultancy, overseeing all operations in Bangladesh. With a solid background in engineering and management, he plays a crucial role in ensuring that the company's services are executed smoothly and meet high standards.",
  };

  return (
    // min-h-screen সরিয়ে দিয়ে h-auto বা নির্দিষ্ট প্যাডিং দেওয়া হয়েছে যেন হাইট কমে যায়
    <section className="relative h-auto overflow-hidden bg-[#f0f4f7] flex flex-col items-center justify-center py-12 md:py-24">
      {/* 1. Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
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

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl px-4">
        {/* --- Image Section --- */}
        {/* z-index মোবাইলে পেছনে (z-0) এবং বড় স্ক্রিনে সামনে (lg:z-20) */}
        <div className="relative z-0 lg:z-20 order-1 lg:order-2">
          <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[550px] lg:w-[480px] lg:h-[600px]">
            <Image
              src={counselorImage}
              alt={counselor.name}
              fill
              priority
              className="object-contain object-bottom drop-shadow-xl"
            />
          </div>
        </div>

        {/* --- Text Card Section --- */}
        {/* মোবাইলে কার্ডটি ইমেজের উপরে ভেসে থাকার জন্য -mt-24 এবং z-10 রাখা হয়েছে */}
        <div
          className="relative z-10 bg-white rounded-xl shadow-2xl p-6 md:p-10 lg:p-14 
                        max-w-[340px] md:max-w-2xl lg:max-w-3xl 
                        -mt-24 md:-mt-32 lg:mt-0 lg:-mr-32 order-2 lg:order-1 
                        border border-white/50"
        >
          <div className="relative">
            <p className="text-gray-600 italic leading-relaxed text-[14px] md:text-base lg:pr-32 text-justify pt-2">
              {counselor.description}
            </p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-[#00aeef] font-bold text-lg md:text-2xl">
              {counselor.name}
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-1 font-semibold uppercase tracking-wider">
              {counselor.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCounselors;
