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
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const visaTypes = [
  {
    title: "Malaysia Tourist Visa",
    duration: "30 Days",
    processing: "5-7 Working Days",
    price: "৳5,000",
    features: ["Single Entry", "30 Days Stay Limit", "E-Visa Option"],
  },
  {
    title: "Singapore Tourist Visa",
    duration: "30 Days",
    processing: "3-5 Working Days",
    price: "৳8,000",
    features: ["Multiple Entry", "30 Days Stay Limit", "Fast Processing"],
  },
  {
    title: "Thailand Tourist Visa",
    duration: "60 Days",
    processing: "5-7 Working Days",
    price: "৳6,000",
    features: ["Single Entry", "60 Days Stay Limit", "Extension Facility"],
  },
];

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
    name: "Kuala Lumpur",
    country: "Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400",
  },
  {
    name: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400",
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
      <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tourist Visa Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Hassle-free visa processing. Travel anywhere in the world with our expert guidance.
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
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f0fdfa] flex items-center justify-center mb-6 border border-[#ccfbf1]">
                  <service.icon className="w-8 h-8 text-[#1a8a81]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d4a7e] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Visa Options Section */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#1a8a81] font-bold uppercase tracking-widest text-sm">Visa Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2">
              Popular Visa Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-[#0d4a7e] mb-4">{visa.title}</h3>
                <div className="space-y-3 mb-6 border-b border-gray-50 pb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-[#0d4a7e]">{visa.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Processing:</span>
                    <span className="font-semibold text-[#0d4a7e]">{visa.processing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Service Charge:</span>
                    <span className="font-bold text-[#1a8a81] text-lg">{visa.price}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8">
                  {visa.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#1a8a81] hover:bg-[#0d4a7e] text-white rounded-lg h-12">
                  Apply Now
                </Button>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[3/4]"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d4a7e]/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                  <p className="text-white/80 text-sm">{dest.country}</p>
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
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100"
              >
                <service.icon className="w-10 h-10 mx-auto mb-4 text-[#1a8a81]" />
                <h3 className="font-bold text-[#0d4a7e] text-sm">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d4a7e] mb-8 text-center">
              Apply for Visa
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81]"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81]"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81]"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a8a81]">
                <option value="">Select Destination Country</option>
                <option value="malaysia">Malaysia</option>
                <option value="singapore">Singapore</option>
                <option value="thailand">Thailand</option>
                <option value="dubai">Dubai</option>
              </select>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a8a81]">
                <option value="">Purpose of Visit</option>
                <option value="tourism">Tourism</option>
                <option value="business">Business</option>
                <option value="medical">Medical</option>
              </select>
              <textarea
                placeholder="Additional Message (Optional)"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81] resize-none"
              />
              <Button className="w-full h-14 bg-gradient-to-r from-[#0d4a7e] to-[#1a8a81] text-white font-bold text-lg rounded-xl flex gap-2">
                Submit Application
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact Us for Visa Today
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Call us now for a free consultation or message us on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-[#facc15] hover:bg-white text-[#0d4a7e] font-black px-12 py-8 text-xl rounded-xl shadow-2xl transition-all transform hover:scale-105">
              Call Now
            </Button>
            <Button className="bg-[#25d366] hover:opacity-90 text-white font-black px-12 py-8 text-xl rounded-xl shadow-2xl transition-all transform hover:scale-105">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristVisa;