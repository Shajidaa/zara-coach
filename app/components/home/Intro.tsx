import React from 'react';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className="bg-black py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <div className="relative group">
            {/* Subtle Gold Frame Effect */}
            <div className="absolute -inset-4 border border-[#D4AF37]/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 hidden md:block" />
            
            <div className="relative aspect-[4/3] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/10">
              <Image
                src="/images/workshop/workshop-1.jpg" // Use workshop one till 4 images here
                alt="Zara Coach Builders Workshop"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-6 hidden md:block">
              <p className="text-black font-bold text-3xl leading-none">30+</p>
              <p className="text-black text-[10px] font-bold uppercase tracking-widest mt-1">Years Experience</p>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#D4AF37] font-medium uppercase tracking-[0.3em] text-sm">
                Positioning
              </h3>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Custom Luxury Vehicle Manufacturer
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed font-light italic border-l-2 border-[#D4AF37] pl-6">
                Zara Coach Builders is a U.S.-based manufacturer specializing in the design and construction of custom luxury vehicles, including limousines, party buses, executive vans, and RV conversions.
              </p>
              
              <p className="text-white/60 text-base leading-relaxed">
                With over 30 years of industry experience, we build vehicles with a focus on structural integrity, system integration, and long-term performance.
              </p>

              <div className="bg-white/5 p-6 border-l border-[#D4AF37]">
                <p className="text-white/90 text-sm leading-relaxed uppercase tracking-wider font-semibold">
                  Compliance Statement:
                </p>
                <p className="text-white/60 text-sm mt-2">
                  We operate as a registered manufacturer with the U.S. Department of Transportation (NHTSA), building vehicles to meet Federal Motor Vehicle Safety Standards (FMVSS).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}