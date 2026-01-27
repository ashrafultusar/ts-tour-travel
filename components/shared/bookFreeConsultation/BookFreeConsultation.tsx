"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React, { useState, ChangeEvent, FormEvent } from "react";

// TypeScript Type Definition
interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const BookFreeConsultation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();

    const myNumber = "+60177085596";

    const text =
      `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || "Not provided"}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message || "No message"}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${myNumber}&text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
        <h3 className="text-2xl text-center font-bold mb-8 text-[#0F172A]">
          Book a Free Consultation
        </h3>

        <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#334155]">
                Your Name *
              </label>
              <Input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="bg-slate-50/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#334155]">
                Phone Number *
              </label>
              <Input
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXX-XXXXXX"
                className="bg-slate-50/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#334155]">
              Email Address
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@gmail.com"
              className="bg-slate-50/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#334155]">
              Interested Service *
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            >
              <option value="">Select Service</option>
              <option value="Malaysia Admission">Malaysia Admission</option>

              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Air Ticket">Air Ticket</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#334155]">
              Your Message
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="bg-slate-50/50 min-h-30"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0891B2] hover:bg-[#0369A1] text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/10"
          >
            <Send className="w-5 h-5" />
            Send to WhatsApp Inbox
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookFreeConsultation;
