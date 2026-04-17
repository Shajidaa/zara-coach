import React from 'react';
import Image from 'next/image';

export default function CapIntro() {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE - Using Workshop 4 */}
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 group">
            <Image
              src="/images/workshop/workshop 4.jpg" 
              alt="Zara Coach Builders Manufacturing Facility"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* TEXT SIDE */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#D4AF37] font-medium uppercase tracking-[0.3em] text-sm">
                Our Capabilities
              </h3>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Full-Service Custom <br />
                Vehicle Manufacturing
              </h2>
            </div>

            <div className="space-y-6 text-white/70">
              <p className="text-lg leading-relaxed">
                Zara Coach Builders provides complete custom vehicle manufacturing, covering all stages from design and planning to fabrication and final assembly.
              </p>
              
              <p className="text-base leading-relaxed">
                Each project is developed as a fully integrated build, ensuring that structural components, electrical systems, and interior features function together as a complete system.
              </p>

              <p className="text-base leading-relaxed">
                Our capabilities span multiple vehicle platforms, allowing us to build for a wide range of applications and requirements.
              </p>
            </div>

            {/* Visual Divider */}
            <div className="pt-4">
              <div className="h-px w-24 bg-[#D4AF37]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}