import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Success Stories", href: "#success" },
    { name: "Contact Us", href: "#contact" },
  ];

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
      brandClass: "bg-[#1877F2] text-white" // Facebook Blue
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram",
      brandClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white" // Instagram Gradient
    },
    { 
      icon: Youtube, 
      href: "#", 
      label: "YouTube",
      brandClass: "bg-[#FF0000] text-white" // YouTube Red
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      brandClass: "bg-[#0077B5] text-white" // LinkedIn Blue
    },
  ];

  return (
    <footer className="bg-[#172636] text-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1665a1] to-[#0891B2] flex items-center justify-center overflow-hidden">
                <span className="text-white bg-[#1665a1]/50 px-2 py-0.5 font-extrabold text-xl tracking-tighter">
                  TS
                </span>
              </div>
              <span className="font-bold text-xl text-white">
                Tour & Travel
              </span>
            </div>
            <p className="text-background/60 leading-relaxed">
              The most trusted education consultancy in Bangladesh. We are by
              your side for all assistance regarding higher education and visas
              for Malaysia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${social.brandClass}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* ... বাকি কোড একই থাকবে ... */}
          <div>
            <h3 className="text-lg font-bold text-background mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-background mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-background mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/60">
                  House #12, Road #5, Dhanmondi, Dhaka-1205
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-background/60">+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-background/60">info@eduvisabd.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">
              © 2025 EduVisa BD. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/40 hover:text-background">Privacy Policy</a>
              <a href="#" className="text-background/40 hover:text-background">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;