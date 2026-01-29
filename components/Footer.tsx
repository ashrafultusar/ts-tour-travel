import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const services = [
    "Malaysia Admission",
    "Student Visa",
    "Tourist Visa",
    "Air Ticketing",
    "Scholarship Guidance",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/tsstudysolutionmalaysia",
      label: "Facebook",
      brandClass: "bg-[#1877F2] text-white",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      brandClass:
        "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      brandClass: "bg-[#FF0000] text-white",
    },
    {
      // TikTok Custom SVG for perfect rendering
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.62-1.49-2.11-2.47-.04 3.44-.02 6.88-.04 10.32-.08 2.51-1.42 4.97-3.71 6.01-2.26 1.08-5.11.87-7.14-.52-2.13-1.42-3.21-4.18-2.58-6.62.53-2.2 2.45-3.95 4.67-4.27.9-.14 1.83-.03 2.69.29-.02 1.35-.02 2.7-.02 4.05-.85-.35-1.84-.42-2.69-.07-1.12.44-1.92 1.6-1.9 2.81.01 1.29.98 2.45 2.25 2.64 1.37.23 2.91-.53 3.44-1.85.17-.41.24-.85.23-1.29V.02z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@ts.tour.travels7",
      label: "Tiktok",
      brandClass: "bg-black text-white",
    },
  ];

  const offices = [
    {
      name: "Bangladesh Office",
      address:
        "House No:67,Shahid Moslem Uddin Chattrabas Goli,Central Road,Paira Chattar, Rangpur, Bangladesh, 5400",
      phone: "+8801341-462233",
      email: "info@tstourtravels.com",
    },
    {
      name: "Malaysia Office",
      address:
        "Mercu Summer Suites, 8 Jalan Cendana 50250, Kuala Lumpur, Malaysia",
      phone: "+6017-708 5596",
      email: "info@tstourtravels.com",
    },
  ];

  return (
    <footer className="bg-[#172636] text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 items-start">
          <div className="space-y-6">
            <div className="flex items-center ">
              <div className="relative h-20 w-20 sm:h-24  sm:w-24 shrink-0">
                <Image
                  src="/assets/logo/logo.png"
                  alt="Agency Logo"
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  priority
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white leading-tight">
                  TS Tour & Travel
                </span>
                <span className="text-xs sm:text-sm text-[#64748B] font-medium italic">
                  ANYTHING ANYTIME
                </span>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
              The most trusted education consultancy in Bangladesh. We are by
              your side for all assistance regarding higher education and visas
              for Malaysia.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${social.brandClass}`}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Services List */}
          <div className="lg:justify-self-center">
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Details */}

          <div className="lg:col-span-1 w-full">
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {offices.map((office, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest border-b border-cyan-400/20 pb-1 mb-3">
                    {office.name}
                  </h4>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 group">
                      <MapPin className="w-4 h-4 text-cyan-400/70 shrink-0 mt-0.5" />
                      <span className="text-white/60 text-[13px] leading-snug">
                        {office.address}
                      </span>
                    </li>

                    <li className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-cyan-400/70 shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="text-white/60 text-[13px] hover:text-white transition-colors"
                      >
                        {office.phone}
                      </a>
                    </li>

                    <li className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-400/70 shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-white/60 text-[13px] hover:text-white transition-colors break-all"
                      >
                        {office.email}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 TS Tour & Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
