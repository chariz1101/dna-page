"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MerchPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show the popup 1.5 seconds after the page loads for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm transition-opacity">
      {/* Backdrop Click to Close */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      {/* Popup Container - Made smaller (max-w-[320px]) and reduced padding slightly */}
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] bg-[#0a0a0a] border border-[#00ff88]/30 rounded-2xl p-4 sm:p-5 shadow-[0_0_50px_rgba(0,255,136,0.15)] animate-in fade-in zoom-in duration-300">
        
        {/* Close 'X' Button - Moved slightly outside, thicker line, high contrast */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0a0a] border-2 border-[#00ff88] text-white hover:bg-[#00ff88] hover:text-black shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Promo Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-white/5">
          <Image
            src="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/632696972_923127213604612_7792352585874860307_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEf5O2tXlYeRvmMTTVx1jNOcH9w8rKOLDdwf3Dyso4sN5dupiTWInucFaux3n1ojJfM9ZAFKMo4CTxOtgj4aVir&_nc_ohc=ljcgpSWheJwQ7kNvwF2GifV&_nc_oc=Admm9bWowfYD3xw5_h7v44F4USlxQVyJoeGVmo5cu3q-gWPmTeJVFVp4KeiDW09SEPU&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=WWGm6n6233absdfy-7t0Mg&oh=00_Aft4fJ818Sv1RWMcOK7PY3VKX0wRDSNyFklvu1w-t6x1vQ&oe=699B8726"
            alt="New Merch Drop"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Text Content - Scaled down text to match smaller container */}
        <div className="text-center mb-5">
          <span className="inline-block px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full mb-2">
            Limited Time
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
            New Merch Drop
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm px-2">
            Grab the official D.N.A. collection before it sells out.
          </p>
        </div>

        {/* Order Button - Reduced vertical padding slightly */}
        <a 
          href="https://forms.gle/QzrtiwbV1fMHrjHcA" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="block w-full text-center bg-[#00ff88] text-black text-sm sm:text-base font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}