import CapHero from "../components/capabilities/CapHero";
import CapIntro from "../components/capabilities/CapIntro";
import DesignSupport from "../components/capabilities/DesignSupport";
import Integration from "../components/capabilities/Integration";
import VehicleCategory from "../components/capabilities/VehicleCategory";


export default function CapabilitiesPage() {
  return (
    <main className="bg-black text-white">
      <CapHero />
      <CapIntro />
      
      {/* Section 2: Limousines (Text Left, Image Right) */}
      <VehicleCategory 
        title="Limousine Conversions"
        text="We design and build custom limousine conversions focused on passenger experience, layout efficiency, and system integration. Each build is tailored to the intended use, with careful planning of seating configurations, lighting systems, and integrated features."
        features={["Custom seating layouts", "Ambient and LED lighting systems", "Integrated audio and entertainment", "Bar and storage configurations", "Climate and passenger comfort systems"]}
        images={['/images/limo/1.jpg', '/images/limo/2.jpg', '/images/limo/3.jpg', '/images/limo/4.jpg']}
      />

      {/* Section 3: Party Bus (Text Right, Image Left) */}
      <VehicleCategory 
        reverse
        title="Party Bus Conversions"
        text="Our party bus builds are designed for larger groups, focusing on durability, space optimization, and consistent system performance. Each vehicle is engineered to support high-capacity use while maintaining reliability across all integrated systems."
        features={["High-capacity seating configurations", "Integrated audio and lighting systems", "Reinforced flooring and structure", "Multi-zone control systems", "Custom interior layouts"]}
        images={['/images/party-bus/1.jpg', '/images/party-bus/2.jpg', '/images/party-bus/3.jpg', '/images/party-bus/4.jpg']}
      />

      {/* Section 4: Executive Vans */}
      <VehicleCategory 
        title="Executive Vans"
        text="Executive vans are designed for professional and private transport, combining comfort, usability, and refined interior finishes. Each build focuses on clean integration of seating, lighting, and control systems."
        features={["Reclining captain seating", "Privacy partitions and controls", "Integrated lighting and climate systems", "Premium materials and finishes", "Touchscreen control interfaces"]}
        images={['/images/executive/Executive vans.jpg', '/images/executive/Executive vans.jpg 1.jpg', '/images/executive/Executive vans.jpg 1.jpg', '/images/executive/Executive vans.jpg']} // Reusing as you mentioned having only 2
      />

      {/* Section 5: Sprinter RV (Reverse) */}
      <VehicleCategory 
        reverse
        title="Sprinter RV Conversions"
        text="We build custom RV-style Sprinter conversions designed for travel, comfort, and extended use. Layouts are developed to maximize space, storage, and functionality while maintaining a clean and durable finish."
        features={["Sleeping configurations", "Storage and cabinetry", "Electrical and lighting systems", "Climate and ventilation solutions", "Integrated control systems"]}
        images={['/images/SPRINTER RV CONVERSIONS 1.jpg', '/images/SPRINTER RV CONVERSIONS 2.JPG', '/images/SPRINTER RV CONVERSIONS 3.jpg', '/images/SPRINTER RV CONVERSIONS 1.JPG 4.JPG']}
      />

      {/* Section 6: Mercedes Metris */}
      <VehicleCategory 
        title="Mercedes Metris Custom Builds"
        text="Our Metris builds focus on compact, high-end interior transformations with advanced system integration and modern layouts. These vehicles are designed to maximize usable space while maintaining functionality and premium finish quality."
        features={["Custom seating systems", "Ambient lighting integration", "Touchscreen control systems", "Custom wood and leather finishes", "Built-in refrigeration and storage"]}
        images={['/images/metris/1.jpg', '/images/metris/2.jpg', '/images/metris/3.jpg', '/images/metris/4.jpg']}
      />

      <Integration />
      <DesignSupport />
      
      {/* Final CTA */}
      <div className="py-20 bg-black text-center">
        <h2 className="text-4xl font-bold mb-4">Discuss Your Project</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Contact us to review your requirements and determine the best approach for your build.</p>
        <a href="tel:9515923004" className="text-2xl font-bold text-[#D4AF37] block mb-6">(951) 592-3004</a>
        <button className="bg-[#D4AF37] text-black px-10 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors">
          Contact Us
        </button>
      </div>
    </main>
  );
}