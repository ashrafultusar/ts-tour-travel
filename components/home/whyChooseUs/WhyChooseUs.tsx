import {
  Shield,
  Clock,
  Award,
  HeartHandshake,
  TrendingUp,
  Headphones,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Trusted Service",
      description:
        "We operate with government authorization and strictly legal processes.",
      iconBg: "bg-[#EBF2FA]",
      iconColor: "text-[#1E56A0]",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description:
        "Our expert team ensures the quickest possible visa processing time.",
      iconBg: "bg-[#E7F6F2]",
      iconColor: "text-[#14919B]",
    },
    {
      icon: Award,
      title: "98% Success Rate",
      description:
        "Our high success rate is a testament to our professional expertise.",
      iconBg: "bg-[#F0F4FF]",
      iconColor: "text-[#4F46E5]",
    },
    {
      icon: HeartHandshake,
      title: "Personal Care",
      description:
        "We provide individual guidance and mentorship to every single student.",
      iconBg: "bg-[#FFF1F2]",
      iconColor: "text-[#F43F5E]",
    },
    {
      icon: TrendingUp,
      title: "5+ Years Experience",
      description:
        "Working with years of experience and a strong reputation in the industry.",
      iconBg: "bg-[#F0FDF4]",
      iconColor: "text-[#22C55E]",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "You can reach out to our dedicated support team at any time.",
      iconBg: "bg-[#FFF7ED]",
      iconColor: "text-[#F59E0B]",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#14919B]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT CONTENT --- */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E7F6F2] text-[#14919B] text-xs font-bold uppercase tracking-widest mb-4">
                Why Choose Us?
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#2D3142] leading-tight mb-6">
                Your <span className="text-[#14919B]">Success</span> is Our
                Commitment
              </h2>
              <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                We are working tirelessly to fulfill the dreams of thousands of
                students. Our experienced team and successful track record make
                us worthy of your trust.
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#1E56A0] mb-1">
                  500+
                </div>
                <div className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Successful Visas
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#14919B] mb-1">
                  41+
                </div>
                <div className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Universities
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#F59E0B] mb-1">
                  5+
                </div>
                <div className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Years Exp.
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT: REASONS GRID --- */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="p-6 lg:p-8 rounded-3xl bg-white border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div
                  className={`w-14 h-14 ${reason.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <reason.icon className={`w-7 h-7 ${reason.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3142]">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
