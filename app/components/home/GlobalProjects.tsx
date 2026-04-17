import React from 'react';
import Image from 'next/image';

export default function GlobalProjects() {
  return (
    <section className="bg-black py-20 lg:py-32 relative overflow-hidden">
      {/* Background Subtle Map Texture (Optional Graphic) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/world-map.png')] bg-center bg-no-repeat bg-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* IMAGE SIDE - Clean professional shot without backgrounds/logos */}
          <div className="relative group flex justify-center">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src="/images/global/finished-vehicle.png" // Use the interior/exterior shot here
                alt="Zara Coach Builders Global Portfolio"
                fill
                className="object-contain transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Soft Shadow under vehicle for depth */}
            <div className="absolute bottom-10 w-[80%] h-4 bg-white/10 blur-[40px] rounded-full" />
          </div>

          {/* TEXT SIDE */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#D4AF37]" />
                <h3 className="text-[#D4AF37] font-medium uppercase tracking-[0.3em] text-sm">
                  International Reach
                </h3>
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Global Projects, Design <br />
                <span className="text-white/40">& Consultation</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                Zara Coach Builders supports clients across multiple regions, providing both full vehicle manufacturing and project-level support.
              </p>
              
              <p className="text-white/60 text-base leading-relaxed">
                In addition to complete builds, we offer design development, consultation, and system planning. This includes working with clients and external teams on projects that may be completed outside our facility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Remote Planning</h4>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    International clients coordinate directly during development or visit our location for planning and execution.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Ongoing Support</h4>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    We provide assistance with components, systems, and integration after delivery, regardless of location.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}