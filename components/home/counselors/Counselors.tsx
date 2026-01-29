import Image from "next/image";

const counselorImage = "/assets/counselor/ounselors.png";

const MeetCounselors = () => {
  const counselor = {
    name: "Tofayel Ahamed",
    title: "CEO",
    description:
      "With years of expertise in global education and travel consultancy, Tofayel Ahamed leads our mission to bridge the gap between local talent and international opportunities. His vision is to empower students by providing seamless guidance for their academic journeys abroad. Under his leadership, we don't just plan trips; we craft life-changing educational experiences that shape future leaders.",
  };

  return (
    <section className="relative h-auto overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#f0f4f7] flex flex-col items-center justify-center py-16 md:py-28">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#14919B] rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00aeef] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mb-12 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#2D3142] tracking-tight">
          Our <span className="text-[#14919B]">Counselor</span>
        </h2>
        <div className="h-1.5 w-24 bg-[#14919B] mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex flex-col lg:block w-full max-w-7xl px-6">
        {/* Image Container */}

        <div className="relative z-10 lg:z-30 order-1  lg:order-0 lg:absolute  lg:-top-17 lg:right-0 group">
          <div className="relative w-[300px] h-[380px] md:w-[450px] md:h-[580px] lg:w-[500px] lg:h-[700px] transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src={counselorImage}
              alt={`Counselor ${counselor.name}`}
              fill
              priority
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 450px, 500px"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Text Card */}

        <div
          className="relative z-20 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] 
                      p-8 md:p-12 lg:p-20 
                      lg:pr-[400px] 
                      max-w-full lg:max-w-[1050px] 
                      -mt-20 md:-mt-32 lg:mt-0 
                      order-2 lg:order-none 
                      border border-white/50"
        >
          <div className="relative">
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium italic relative z-10 text-justify">
              <span className="text-[#14919B] text-2xl font-serif">“</span>
              {counselor.description}
              <span className="text-[#14919B] text-2xl font-serif">”</span>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-[#14919B] font-bold text-xl md:text-2xl">
              {counselor?.name}
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-semibold mt-1">
              {counselor?.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCounselors;
