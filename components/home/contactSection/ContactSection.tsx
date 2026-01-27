import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookFreeConsultation from "@/components/shared/bookFreeConsultation/BookFreeConsultation";

const ContactSection = () => {
  const offices = [
    {
      title: "Bangladesh Office",
      address:
        "House No:67,Shahid Moslem Uddin Chattrabas Goli,Central Road,Paira Chattar, Rangpur, Bangladesh, 5400",
      phones: ["+8801341-462233"],
      email: "info@tstourtravels.com",
      hours: "Sat - Thu: 10:00 AM - 6:00 PM",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.6104181539167!2d89.2499675869332!3d25.7503939507081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32dfc99c1f351%3A0xad69d303fb9f0b89!2sCentral%20Road%20%26%20Paira%20Chattar%2C%20Rangpur!5e0!3m2!1sen!2sbd!4v1769272167743!5m2!1sen!2sbd",
    },
    {
      title: "Malaysia Office",
      address:
        "Mercu Summer Suites, 8 Jalan Cendana 50250, Kuala Lumpur, Malaysia",
      phones: ["+6017-708 5596"],
      email: "info@tstourtravels.com",
      hours: "Mon - Fri: 10:00 AM - 6:00 PM",

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63740.1319365875!2d101.706871!3d3.158312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d654405935%3A0x2eb296a9174f7be6!2sMercu%20Summer%20Suites%20Kuala%20Lumpur%20Bukit%20Bintang%20by%20Classy!5e0!3m2!1sen!2sus!4v1769272439296!5m2!1sen!2sus",
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
            Contact us for any questions or information. We are always by your
            side.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="w-full">
            <BookFreeConsultation />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {offices.map((office, idx) => (
              <div key={idx} className="flex flex-col h-full">
                <div className="p-6 rounded-t-2xl bg-[#0375a6] text-white shadow-lg flex-none">
                  <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">
                    {office.title}
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 min-h-[60px] md:min-h-[80px]">
                      <MapPin className="w-4 h-4 mt-1 shrink-0 text-cyan-300" />
                      <p className="text-xs md:text-sm opacity-95 leading-relaxed">
                        {office.address}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 mt-1 shrink-0 text-cyan-300" />
                      <div className="space-y-0.5">
                        {office.phones.map((p, i) => (
                          <p key={i} className="text-xs md:text-sm font-medium">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 shrink-0 text-cyan-300" />
                      <p className="text-xs md:text-sm break-all font-medium">
                        {office.email}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/20">
                      <div className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                        <Clock className="w-4 h-4 text-cyan-300" />{" "}
                        {office.hours}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow rounded-b-2xl overflow-hidden border-x border-b border-slate-200 shadow-md mt-1 min-h-[200px]">
                  <iframe
                    src={office.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
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
