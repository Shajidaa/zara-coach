import Image from 'next/image';

export default function VehicleCategory({ title, text, features, images, reverse = false }: {
  title: string;
  text: string;
  features: string[];
  images: string[];
  reverse?: boolean;
}) {
  return (
    <section className="py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className={`${reverse ? 'lg:order-2' : ''} space-y-8`}>
          <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-[#D4AF37] pl-6">{title}</h2>
          <p className="text-white/70 leading-relaxed text-lg">{text}</p>
          <ul className="grid grid-cols-1 gap-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/50 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${reverse ? 'lg:order-1' : ''} grid grid-cols-2 gap-4`}>
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden border border-white/10 group">
              <Image 
                src={img} 
                alt={`${title} detail ${i}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}