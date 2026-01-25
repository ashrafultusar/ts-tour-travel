import React from "react";
import Image from "next/image";
import { 
  Plane, 
  FileCheck, 
  Clock, 
  Shield, 
  MapPin, 
  Camera, 
  Hotel, 
  Car,  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: FileCheck,
    title: "Document Preparation",
    description: "All documents are correctly prepared and verified for submission.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Express services available for urgent visa requirements.",
  },
  {
    icon: Shield,
    title: "Guarantee",
    description: "Transparent process with high success rate and support.",
  },
  {
    icon: Plane,
    title: "Air Ticketing",
    description: "Affordable air ticket booking for all major airlines.",
  },
];

const destinations = [
  {
    name: "Malaysia",
    country: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Thailand",
    country: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Singapore",
    country: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Nepal",
    country: "South Asia",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Sri Lanka",
    country: "South Asia",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Saudi Arabia",
    country: "Middle East",
    image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1000&auto=format&fit=crop",
    isSpecial: true,
  },
];

const additionalServices = [
  { icon: Hotel, title: "Hotel Booking" },
  { icon: Car, title: "Airport Transfer" },
  { icon: Camera, title: "Tour Packages" },
  { icon: MapPin, title: "Travel Insurance" },
];

const TouristVisa = () => {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Plane className="absolute top-10 right-10 w-64 h-64 -rotate-12 text-white" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            World-Class <span className="text-cyan-200">Visa Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Hassle-free processing for Hajj, Umrah, and Global Tourism. 
            Travel anywhere with expert guidance.
          </p>
        </div>
      </section>

      {/* Services Feature Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#1a8a81] font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2">
              Visa Service Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f0fdfa] flex items-center justify-center mb-6 border border-[#ccfbf1] group-hover:bg-[#1a8a81] transition-colors">
                  <service.icon className="w-8 h-8 text-[#1a8a81] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0d4a7e] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#1a8a81] font-bold uppercase tracking-widest text-sm">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2">
              Where You Can Go
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-md aspect-[3/4] cursor-pointer"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Special Tag for Saudi Arabia */}
                {dest.isSpecial && (
                   <div className="absolute top-4 left-4 z-20 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Hajj & Umrah
                   </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d4a7e] via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold text-white leading-tight">{dest.name}</h3>
                  <p className="text-white/80 text-sm font-medium">{dest.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Travel Support Section */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#1a8a81] font-bold uppercase tracking-widest text-sm">Extra Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2 mb-16">
            Travel Assistance
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform"
              >
                <service.icon className="w-10 h-10 mx-auto mb-4 text-[#1a8a81]" />
                <h3 className="font-bold text-[#0d4a7e] text-sm">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Plan Your Next Trip?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get expert visa advice and seamless travel planning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={'/contactUs'} className="bg-white text-[#0d4a7e] hover:bg-slate-100 font-bold px-10 py-7 text-lg rounded-xl shadow-xl transition-all transform hover:scale-105 active:scale-95">
              Free Consultation
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristVisa;