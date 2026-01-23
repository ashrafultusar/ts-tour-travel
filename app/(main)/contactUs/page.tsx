import ContactSection from '@/components/home/contactSection/ContactSection';
import React from 'react';

const page = () => {
    return (
        <div>
               <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            World-class education, affordable costs, and a bright future - all
            in one destination.
          </p>
        </div>
      </section>
            <ContactSection/>
        </div>
    );
};

export default page;