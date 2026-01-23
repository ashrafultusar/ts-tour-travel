import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookFreeConsultation from "@/components/shared/bookFreeConsultation/BookFreeConsultation";

const ContactSection = () => {
  const offices = [
    {
      title: "Bangladesh Office",
      address: "Darus-Salam Arcade, 6th Floor (5th lift), 14 Purana Paltan, Dhaka 1000",
      phones: ["+880 1961-656769", "+880 1618-660577"],
      email: "enquiry@nhglobaleducation",
      hours: "Sat - Thu: 10:00 AM - 6:00 PM",
      // Bangladesh Office Pin Link
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5350383378544!2d90.41005887589574!3d23.72828038961726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8582f7df549%3A0x48ff1750793234c1!2sDarus%20Salam%20Arcade!5e0!3m2!1sen!2sbd!4v1700000000000" 
    },
    {
      title: "Malaysia Office",
      address: "Suite 32-01, 32nd Floor, Menara Keck Seng, 203 Jalan Bukit Bintang, 55100 KL",
      phones: ["+60 11-6117 5133", "+60 11-6178 5257"],
      email: "enquiry@nhglobaleducation",
      hours: "Mon - Sat: 10:00 AM - 6:00 PM",
      // Malaysia Office Pin Link
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.797651461034!2d101.7124598758441!3d3.148024253157757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362c4bf8c6bb%3A0xd7413752f356fe12!2sMenara%20Keck%20Seng!5e0!3m2!1sen!2sbd!4v1769187813621!5m2!1sen!2sbd"
    }
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

        {/* Main Layout: items-stretch ensures form and office columns are same height */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Contact Form */}
          <div className="w-full">
            <BookFreeConsultation />
          </div>

          {/* Right Side: Office Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {offices.map((office, idx) => (
              <div key={idx} className="flex flex-col h-full">
                
                {/* Office Info Card - Takes only needed height */}
                <div className="p-6 rounded-t-2xl bg-[#2563EB] text-white shadow-lg">
                  <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">
                    {office.title}
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-cyan-300" />
                      <p className="text-xs md:text-sm opacity-95 leading-relaxed">
                        {office.address}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-cyan-300" />
                      <div className="space-y-0.5">
                        {office.phones.map((p, i) => (
                          <p key={i} className="text-xs md:text-sm font-medium">{p}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 flex-shrink-0 text-cyan-300" />
                      <p className="text-xs md:text-sm break-all font-medium">
                        {office.email}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/20">
                      <div className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                        <Clock className="w-4 h-4 text-cyan-300" /> {office.hours}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section - Flex Grow fills the remaining height of the form */}
                <div className="flex-grow rounded-b-2xl overflow-hidden border-x border-b border-slate-200 shadow-md min-h-[200px]">
                  <iframe
                    src={office.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={`${office.title} Map`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;