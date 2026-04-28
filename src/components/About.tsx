import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-washi text-charcoal relative overflow-hidden">
      <div className="japanese-pattern absolute inset-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1925" 
              alt="Sushi Craft" 
              className="w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Subtle floating detail */}
            <div className="absolute -bottom-10 -right-10 hidden lg:block w-48 h-48 bg-charcoal text-washi p-8 flex flex-col justify-center">
              <span className="text-4xl font-serif mb-2">匠</span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Takumi - Master Craftsmanship</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <div className="space-y-4">
            <span className="text-kurenai uppercase tracking-[0.4em] text-sm font-semibold">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight">
              The Art of <br />
              <span className="italic">KAIROU</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-lg font-light leading-relaxed text-charcoal/80">
            <p>
              At Kureha, we believe sushi is more than just food—it is a dialogue between the season, the chef, and the guest. Inspired by the crimson hues of Kyoto's autumn, we bring the essence of Ginza's technical precision to the heart of the city.
            </p>
            <p>
              Our fish is sourced daily from Tokyo's Toyosu Market and local sustainable fisheries, ensuring that every bite honors the cycle of nature and the spirit of 'Omotenashi'—selfless hospitality.
            </p>
          </div>

          <div className="pt-8">
            <a 
              href="#menu" 
              className="group flex items-center gap-6 text-sm uppercase tracking-[0.3em] font-semibold"
            >
              Discover the craft
              <span className="w-12 h-[1px] bg-charcoal group-hover:w-20 transition-all duration-500" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative kanji */}
      <div className="absolute top-64 right-10 opacity-5 select-none hidden xl:block">
        <span className="text-[20rem] font-serif leading-none italic pointer-events-none">伝統</span>
      </div>
    </section>
  );
}
