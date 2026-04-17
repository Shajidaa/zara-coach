import React from 'react';
import Image from 'next/image';

export default function BuiltInHouse() {
  return (
    <section className="bg-[#050505] py-20 lg:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT SIDE (Left on Desktop) */}
          <div className="order-2 lg:order-1 flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <h3 className="text-[#D4AF37] font-medium uppercase tracking-[0.3em] text-sm">
                  The Process
                </h3>
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Built In-House From <br />
                <span className="text-white/40 italic">Concept to Completion</span>
              </h2>
            </div>

            <div className="space-y-6 text-white/70">
              <p className="text-lg leading-relaxed">
                Zara Coach Builders designs and manufactures custom luxury vehicles entirely in-house. 
                Our work includes structural modification, fabrication, electrical system integration, 
                interior construction, and finishing.
              </p>
              
              <p className="text-base leading-relaxed">
                Each vehicle is built as a complete system to ensure all components function seamlessly. 
                We do not assemble pre-made packages — every project is developed based on the specific 
                requirements of the vehicle and its intended use.
              </p>

              {/* Technical Icons / List */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Structural Fabrication",
                  "Electrical Systems",
                  "Interior Engineering",
                  "Final Finishing"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-[11px] uppercase tracking-widest font-bold text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE SIDE (Right on Desktop) */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square w-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/Fabrication.jpg" // Use Fabrication + 1 to 7 here
                alt="In-house fabrication and wiring stage"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6">
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em]">
                  Quality Control
                </p>
                <p className="text-white text-xs mt-1 font-light tracking-widest uppercase">
                  Phase 02: Structural Integration
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}