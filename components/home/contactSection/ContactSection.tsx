import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["House #12, Road #5", "Dhanmondi, Dhaka-1205"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+880 1XXX-XXXXXX", "+880 1XXX-XXXXXX"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@eduvisabd.com", "support@eduvisabd.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sat - Thu: 10:00 AM - 7:00 PM", "Friday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#F8FAFC]">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-[#E0F2FE] text-[#0369A1] text-sm font-semibold mb-6">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-[#0F172A]">
            Talk <span className="text-[#0891B2]">With Us</span>
          </h2>
          <p className="text-lg text-[#64748B]">
            Contact us for any questions or information. We are always by your side.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold mb-8 text-[#0F172A]">Book a Free Consultation</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#334155]">Your Name *</label>
                  <Input placeholder="Enter full name" className="bg-slate-50/50 border-slate-200" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#334155]">Phone Number *</label>
                  <Input placeholder="+880 1XXX-XXXXXX" className="bg-slate-50/50 border-slate-200" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#334155]">Email Address</label>
                <Input type="email" placeholder="your@email.com" className="bg-slate-50/50 border-slate-200" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#334155]">Interested Service?</label>
                <select className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-[#64748B] focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
                  <option value="">Select Service</option>
                  <option value="admission">Malaysia Admission</option>
                  <option value="student-visa">Student Visa</option>
                  <option value="tourist-visa">Tourist Visa</option>
                  <option value="air-ticket">Air Ticket</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#334155]">Your Message</label>
                <Textarea 
                  placeholder="Write your questions or message here..." 
                  className="bg-slate-50/50 border-slate-200 min-h-[140px]"
                />
              </div>
              
              <Button size="lg" className="w-full bg-gradient-to-r from-[#0369A1] to-[#0891B2] hover:opacity-90 text-white font-bold py-6 rounded-xl transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors">
                    <info.icon className="w-6 h-6 text-[#0369A1]" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-[#0F172A]">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-[#64748B] leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.170192323719!2d90.3773953!3d23.7413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b269477e3b%3A0xc3f7a63e9f65d6e2!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;