import Image from 'next/image';

export default function DesignSupport() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Design & Development Support</h2>
        <p className="max-w-3xl mx-auto text-white/60 mb-12">We provide design development, consultation, and system planning for custom vehicle projects, working with external teams to develop layouts before fabrication begins.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['/design-1.jpg', '/design-2.jpg', '/design-3.jpg'].map((img, i) => (
            <div key={i} className="relative aspect-[16/9] border border-white/10 group overflow-hidden">
               <Image src={img} fill className="object-cover transition-transform group-hover:scale-105" alt="Design" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}