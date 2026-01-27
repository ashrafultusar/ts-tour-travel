import { GraduationCap, Plane, FileCheck, Ticket } from "lucide-react";

const AboutUs = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Malaysia Admission",
      description:
        "Complete assistance for Bachelor, Masters, and PhD programs in top Malaysian universities.",
      features: [
        "University Selection",
        "Scholarship Guidance",
        "Document Processing",
      ],
      iconBg: "bg-[#EBF2FA]",
      iconColor: "text-[#1E56A0]",
      dotColor: "bg-[#1E56A0]",
    },
    {
      icon: FileCheck,
      title: "Student Visa",
      description:
        "End-to-end visa processing and guidance from A to Z for Malaysian student visas.",
      features: ["Visa Application", "Interview Prep", "Follow-up Service"],
      iconBg: "bg-[#E7F6F2]",
      iconColor: "text-[#14919B]",
      dotColor: "bg-[#14919B]",
    },
    {
      icon: Plane,
      title: "Tourist Visa",
      description:
        "Fast and reliable tourist visa services for Malaysia and other popular destinations.",
      features: ["Quick Processing", "Hotel Booking", "Travel Insurance"],
      iconBg: "bg-[#FFF4E5]",
      iconColor: "text-[#F59E0B]",
      dotColor: "bg-[#F59E0B]",
    },
    {
      icon: Ticket,
      title: "Air Ticket",
      description:
        "Affordable air ticket booking services for domestic and international travel.",
      features: ["Best Price Guarantee", "Flexible Booking", "24/7 Support"],
      iconBg: "bg-[#EEF2FF]",
      iconColor: "text-[#4F46E5]",
      dotColor: "bg-[#4F46E5]",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-[#F8FAFC] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E1EBF7] text-[#1E56A0] text-xs font-bold uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#2D3142]">
            One-Roof Solution{" "}
            <span className="text-[#14919B]">For All Your Needs</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            We are dedicated to supporting your dreams of studying or traveling
            abroad with expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-start"
            >
              {/* Icon Box */}
              <div
                className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300`}
              >
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#2D3142]">
                {service.title}
              </h3>

              <p className="text-gray-500 mb-6 text-sm leading-relaxed min-h-15">
                {service.description}
              </p>

              <ul className="space-y-3  w-full">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-semibold text-gray-600"
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${service.dotColor} shrink-0`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
