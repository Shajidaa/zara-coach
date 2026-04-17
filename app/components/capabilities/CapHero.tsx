import Image from 'next/image';

export default function CapHero() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <Image 
        src="/images/SPRINTER RV CONVERSIONS 1.JPG 5.JPG" 
        alt="Zara Coach Capabilities" 
        fill 
        priority 
        className="object-cover" 
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Capabilities</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light">
          Comprehensive custom vehicle manufacturing across multiple platforms, combining fabrication, system integration, and interior development.
        </p>
      </div>
    </section>
  );
}