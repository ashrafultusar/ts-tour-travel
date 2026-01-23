import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import React from 'react';

const BookFreeConsultation = () => {
    return (
        <div>
             
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
        </div>
    );
};

export default BookFreeConsultation;