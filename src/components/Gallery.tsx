import { motion } from 'motion/react';

const galleryImages = [
  "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559700018-f2cbdf5ee897?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1534482421-0d45a48a73fe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-washi relative overflow-hidden">
      <div className="japanese-pattern absolute inset-0 pointer-events-none opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-kurenai uppercase tracking-[0.4em] text-sm font-semibold block mb-4">Visual Journey</span>
            <h2 className="text-6xl md:text-8xl font-serif text-charcoal tracking-tighter italic">Gallery</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full relative"
          >
            <div className="w-12 h-[1px] bg-kurenai/30 mx-auto mb-8" />
            <p className="text-charcoal/70 font-light text-lg leading-relaxed italic">
              A celebration of light, shadow, and the surgical precision of sushi preparation. Every frame captures the heartbeat of <span className="text-kurenai font-medium">Takumi</span> craftsmanship.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Premium sushi craftsmanship ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                <span className="w-12 h-[1px] bg-washi/40 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <span className="text-washi text-[10px] uppercase tracking-[0.5em] font-medium mb-1">Explore</span>
                <span className="text-washi/60 text-[8px] uppercase tracking-[0.3em]">Detail Collection</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -left-20 opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="text-[30rem] font-serif leading-none rotate-12 inline-block">美</span>
      </div>
    </section>
  );
}
