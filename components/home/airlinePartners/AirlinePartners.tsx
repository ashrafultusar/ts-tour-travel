import React from 'react';
import Image from 'next/image';

const AirlinePartners = () => {
  const airlines = [
    { name: "Malaysia Airlines", logo: "/assets/airlinePartners/malaysia-airlines-logo.png" },
    { name: "Batik Air Malaysia", logo: "/assets/airlinePartners/batik_air_malaysia.png" },
    { name: "Biman Bangladesh", logo: "/assets/airlinePartners/Biman-Bangladesh-Airlines-Logo.png" },
    { name: "Emirates", logo: "/assets/airlinePartners/Emirates-airlines.jpg" },
    { name: "US-Bangla-Airlines", logo: "/assets/airlinePartners/US-Bangla-Airlines-Logo-png.png" },
    { name: "Saudi Arabian Airlines", logo: "/assets/airlinePartners/Saudi-Arabian-Airlines-Logo.png" },
  ];

  return (
    <section className="relative w-full py-10 md:py-16 px-4 overflow-hidden min-h-[300px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
        {/* Title Section */}
        <div className="mb-10">
          <h2 className="text-xl md:text-3xl font-serif tracking-[0.2em] text-white uppercase mb-2">
            Our Trusted Airline Partners
          </h2>
          <div className="w-20 md:w-32 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        {/* Logos Grid - Same Size Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {airlines.map((airline, index) => (
            <div 
              key={index}
              className="group relative h-24 md:h-32 w-full flex items-center justify-center transition-all duration-500 hover:scale-105"
            >
              {/* Glass Box Effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transition-all group-hover:bg-white/20"></div>
              
              {/* Logo Image - Uniform Size Applied Here */}
              <div className="relative z-10 w-[80%] h-[60%]">
                <Image 
                  src={airline.logo} 
                  alt={airline.name} 
                  fill
                  className="object-contain filter drop-shadow-md brightness-110" 
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-10 text-white/50 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">
          Connecting You to the World
        </p>
      </div>
    </section>
  );
};

export default AirlinePartners;