import Image from 'next/image';

export default function Integration() {
  const images = ['/images/SPRINTER RV CONVERSIONS 1.jpg', '/images/SPRINTER RV CONVERSIONS 2.JPG', '/images/SPRINTER RV CONVERSIONS 3.jpg', '/images/SPRINTER RV CONVERSIONS 1.JPG 4.JPG'];
  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
                {images.map((s, i) => (
                    <div key={i} className="relative aspect-video border border-white/10 opacity-60 hover:opacity-100 transition-opacity">
                        <Image src={s} fill className="object-cover" alt="Integration" />
                    </div>
                ))}
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl font-bold">Engineering & System Integration</h2>
                <p className="text-white/60">Every vehicle is built with a focus on system integration. From electrical and lighting to structural modifications, each element is designed to function as a complete build.</p>
                <div className="grid grid-cols-1 gap-2 text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
                    <p>• Electrical System Design</p>
                    <p>• Lighting Integration</p>
                    <p>• Control Interface Development</p>
                    <p>• Structural Modification</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}