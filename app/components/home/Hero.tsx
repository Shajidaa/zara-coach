"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/Vehicle .jpg', // Limo interior
  '/Fabrication.jpg', // Executive van
  '/PartyBus.jpg', // Party bus
  '/Vehicle .jpg', // Sprinter/RV
 '/PartyBus.jpg',  // Exterior luxury shot
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Slow fade transition logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slideshow - Ensure key is unique */}
{heroImages.map((src, index) => (
  <div
    key={`hero-image-${index}`} // Changed to a more robust key
    className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
      index === currentImage ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <Image
      src={src}
      alt={`Custom Luxury Vehicle ${index + 1}`}
      fill
      priority={index === 0}
      className="object-cover"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>
))}

{/* Slide Indicators - Ensure key is unique */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
  {heroImages.map((_, i) => (
    <div 
      key={`indicator-${i}`} // Fixed key here too
      className={`h-[2px] w-8 transition-all duration-500 ${i === currentImage ? 'bg-[#D4AF37]' : 'bg-white/20'}`}
    />
  ))}
</div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-[1.1]">
          Custom Luxury Vehicle Manufacturing Built on <span className="text-[#D4AF37]">Experience</span>, Precision, and Compliance
        </h1>
        
        <p className="mt-8 text-white/80 text-lg md:text-xl lg:text-2xl font-light max-w-3xl leading-relaxed">
          Designing and building high-end limousines, executive vans, party buses, and specialty vehicles for clients across multiple markets.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#b8952d] text-black font-bold uppercase tracking-widest px-10 py-5 transition-all duration-300">
            Start Your Project
          </button>
          <button className="w-full sm:w-auto border border-white/30 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-bold uppercase tracking-widest px-10 py-5 transition-all duration-300 backdrop-blur-sm">
            View Our Work
          </button>
        </div>
      </div>

      {/* Slide Indicators (Optional) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, i) => (
          <div 
            key={i}
            className={`h-[2px] w-8 transition-all duration-500 ${i === currentImage ? 'bg-[#D4AF37]' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
}