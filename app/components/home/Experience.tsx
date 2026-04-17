import React from 'react';
import Image from 'next/image';

export default function Experience() {
  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* IMAGE SIDE - Premium Interior Detail */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden border border-white/5">
              <Image
                src="/images/experience/premium-detail.jpg" // Use a high-end interior detail shot
                alt="Premium vehicle interior detailing"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-110"
              />
              {/* Subtle Gold Vignette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.4em]">Est. 1990s</span>
                <span className="h-px w-8 bg-white/20"></span>
              </div>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                Experience That <br />
                Supports Every Build
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                With over <span className="text-white font-semibold italic">30 years of industry experience</span>, 
                we understand the structural, technical, and functional requirements involved in custom vehicle manufacturing.
              </p>
              
              <p className="text-white/50 text-base leading-relaxed max-w-xl">
                Our experience allows us to approach each project with consistency, ensuring that every build is properly executed, fully integrated, and built for long-term reliability.
              </p>

              {/* Stats / Highlight */}
              <div className="pt-8 flex gap-12 border-t border-white/10">
                <div>
                  <p className="text-[#D4AF37] text-3xl font-bold">30+</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Years of Precision</p>
                </div>
                <div>
                  <p className="text-[#D4AF37] text-3xl font-bold">100%</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">In-House Quality</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}