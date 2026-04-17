import React from 'react';
import Image from 'next/image';

export default function Process() {
  const steps = [
    {
      title: "Design & Layout",
      desc: "Renderings and planning define the structure, seating, and systems.",
      icon: "01"
    },
    {
      title: "Engineering & Integration",
      desc: "All components are positioned and designed for proper function and fit.",
      icon: "02"
    },
    {
      title: "Fabrication & Build",
      desc: "Structural, electrical, and interior work completed as a unified system.",
      icon: "03"
    },
    {
      title: "Final Finishing",
      desc: "Detailing, testing, and refinement before delivery.",
      icon: "04"
    }
  ];

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER AREA */}
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            From Design to Completed Vehicle
          </h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto"></div>
        </div>

        {/* IMAGE GRID (SHOWCASING RENDERINGS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {/* Main Large Rendering */}
          <div className="md:col-span-2 relative aspect-video border border-white/10 overflow-hidden group">
            <Image 
              src="/images/renderings/rendering-1.jpg" // Using your Limo file renderings
              alt="Technical Vehicle Rendering"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 text-[10px] text-[#D4AF37] tracking-[0.2em] uppercase border border-[#D4AF37]/30">
              Technical Blueprint
            </div>
          </div>

          {/* Side Small Images */}
          <div className="grid grid-rows-2 gap-4">
            <div className="relative aspect-video border border-white/10 overflow-hidden">
              <Image 
                src="/images/renderings/rendering-2.jpg" 
                alt="Layout Drawing"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video border border-white/10 overflow-hidden">
              <Image 
                src="/images/renderings/rendering-3.jpg" 
                alt="Build Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step) => (
            <div key={step.icon} className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-black border-b border-[#D4AF37]/30">
                  {step.icon}
                </span>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}