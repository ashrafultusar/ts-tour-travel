import Image from "next/image";

const counselorImage = "/assets/counselor/image1.png";

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
          Our <span className="text-[#14919B]">Leadership</span>
        </h2>
        <div className="h-1.5 w-24 bg-[#14919B] mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex flex-col lg:block w-full max-w-7xl px-6">
        
        {/* Image Container */}
        {/* sm/md তে z-10 (কার্ডের নিচে) এবং lg তে z-30 (কার্ডের উপরে) */}
        <div className="relative z-10 lg:z-30 order-1  lg:order-none lg:absolute  lg:-top-17 lg:right-0 group">
          <div className="relative w-[300px] h-[380px] md:w-[450px] md:h-[580px] lg:w-[500px] lg:h-[700px] transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src={counselorImage}
              alt={counselor.name}
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Text Card */}
        {/* sm/md তে z-20 যাতে ইমেজ নিচে থাকে, নেগেটিভ মার্জিন দিয়ে উপরে ওঠানো হয়েছে */}
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
            {/* Quote Icon */}
            <svg 
              className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 text-[#14919B] opacity-10" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91244 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.01701C6.46473 8 6.01701 8.44772 6.01701 9V12C6.01701 12.5523 5.56928 13 5.01701 13H4.01701V21H6.01701Z" />
            </svg>
            
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