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

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-6">
       
        <div className="relative z-20 order-1 lg:order-2 group">
          <div className="relative w-[300px] h-[380px] md:w-[450px] md:h-[580px] lg:w-[500px] lg:h-[650px] transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src={counselorImage}
              alt={counselor.name}
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-8 border-r-8 border-[#14919B]/20 -z-10" />
        </div>

     
        <div
          className="relative z-30 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
                        p-8 md:p-12 lg:p-16 
                        max-w-full lg:max-w-3xl 
                        -mt-20 md:-mt-28 lg:mt-0 lg:-mr-40 order-2 lg:order-1 
                        border border-white"
        >
          <div className="relative">
          
            <svg 
              className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 text-[#14919B] opacity-10" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91244 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.01701C6.46473 8 6.01701 8.44772 6.01701 9V12C6.01701 12.5523 5.56928 13 5.01701 13H4.01701V21H6.01701Z" />
            </svg>
            
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium italic relative z-10 text-justify">
              <span className="text-[#14919B] text-2xl font-serif">&ldquo;</span>
              {counselor.description}
              <span className="text-[#14919B] text-2xl font-serif">&rdquo;</span>
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-[#14919B]" />
            <div>
              <h3 className="text-[#2D3142] font-black text-2xl md:text-3xl tracking-tight">
                {counselor?.name}
              </h3>
              <p className="text-[#14919B] text-sm md:text-base font-bold uppercase tracking-[0.2em] mt-1">
                {counselor?.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCounselors;
