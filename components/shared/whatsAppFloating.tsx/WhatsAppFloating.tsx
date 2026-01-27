"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppFloating = () => {
  const whatsappNumber = "+60177085596";
  const message = "Hello, I have an inquiry!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* 1. Wave Effect (Pulsing background) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 pointer-events-none"></span>

        {/* 2. Main Icon */}
        <span className="relative z-10">
          <MessageCircle size={30} fill="currentColor" />
        </span>

        {/* 3. Hover Tooltip */}
        <span className="absolute right-16 bg-slate-800 text-white text-[13px] font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloating;
