import Image from "next/image";

const AirlinePartners = () => {
  const airlines = [
    {
      name: "Malaysia Airlines",
      logo: "/assets/airlinePartners/malaysia.jpg",
    },
    {
      name: "Batik Air Malaysia",
      logo: "/assets/airlinePartners/batik_air_malaysia.jpg",
    },
    {
      name: "bimanbd",
      logo: "/assets/airlinePartners/bimanbd.jpg",
    },
    {
      name: "Emirates-airlines",
      logo: "/assets/airlinePartners/Emirates-airlines.jpg",
    },
    {
      name: "US-Bangla",
      logo: "/assets/airlinePartners/usbd.jpg",
    },
    {
      name: "Saudi-Arabian",
      logo: "/assets/airlinePartners/Saudi-Arabian.jpg",
    },
    {
      name: "airastra",
      logo: "/assets/airlinePartners/airastra.jpg",
    },
    {
      name: "AirAsia",
      logo: "/assets/airlinePartners/AirAsia.jpg",
    },
    {
      name: "quaterair",
      logo: "/assets/airlinePartners/quaterair.jpg",
    },
    {
      name: "tarkish Airlines",
      logo: "/assets/airlinePartners/tarkish.jpg",
    },
  ];

  return (
    <section className="relative w-full py-10 md:py-16 px-4 overflow-hidden min-h-75 flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/airlinePartners/bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
        <div className="mb-10">
          <h2 className="text-xl md:text-3xl font-serif tracking-[0.2em] text-white uppercase mb-2">
            Our Trusted Airline Partners
          </h2>
          <div className="w-20 md:w-32 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {airlines.map((airline, index) => (
            <div
              key={index}
              className="group relative h-24 md:h-32 w-full flex items-center justify-center transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transition-all group-hover:bg-white/20"></div>

              <div className="relative z-10 w-[70%] h-[50%]">
                <Image
                  src={airline.logo}
                  alt={airline.name}
                  fill
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 150px"
                  className="object-contain transition-all duration-300 filter drop-shadow-md brightness-110 group-hover:brightness-125"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-white/50 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">
          Connecting You to the World
        </p>
      </div>
    </section>
  );
};

export default AirlinePartners;
