import React from 'react';

export default function FinalCTA() {
  return (
    <section className="bg-black py-24 lg:py-40 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Start Your Custom Build
        </h2>

        {/* Support Text */}
        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Tell us about your project, timeline, and requirements. We’re available to discuss the best approach for your build.
        </p>

        {/* CTA Buttons & Phone */}
        <div className="flex flex-col items-center gap-10">
          <button className="group relative px-12 py-5 bg-[#D4AF37] hover:bg-white text-black font-bold uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1">
            Contact Us
            {/* Subtle button shadow */}
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl group-hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100" />
          </button>

          <div className="flex flex-col items-center">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-3 font-medium">
              Direct Line
            </span>
            <a 
              href="tel:9515923004" 
              className="text-white text-3xl md:text-4xl font-bold hover:text-[#D4AF37] transition-colors tracking-tight"
            >
              (951) 592-3004
            </a>
          </div>
        </div>

        {/* Closing Compliance Note (Small) */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-white/30 text-[9px] uppercase tracking-[0.2em]">
            Registered Manufacturer • U.S. DOT / NHTSA Registered • FMVSS Compliant
          </p>
        </div>
      </div>
    </section>
  );
}