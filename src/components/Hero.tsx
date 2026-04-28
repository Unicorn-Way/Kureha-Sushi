import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image / Video Mock */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2070" 
          alt="Premium Sushi Preparation" 
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="block text-kurenai text-sm md:text-base font-medium tracking-[0.5em] uppercase mb-6">
            銀座 モダン 寿司
          </span>
          <h1 className="text-6xl md:text-9xl font-serif tracking-tighter leading-none mb-8">
            Kureha <span className="italic block mt-2 text-kurenai/90 md:inline md:mt-0">Sushi</span>
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide text-washi/80 mb-12 max-w-2xl mx-auto italic">
            "An authentic Japanese sushi experience where tradition meets modern elegance."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-12 py-5 bg-washi text-charcoal font-semibold uppercase tracking-[0.2em] text-xs hover:bg-kurenai hover:text-washi transition-all duration-500"
            >
              View Menu
            </a>
            <a 
              href="#reservations" 
              className="w-full sm:w-auto px-12 py-5 border border-washi/30 hover:border-kurenai transition-all duration-500 uppercase tracking-[0.2em] text-xs"
            >
              Reserve a Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Scrolls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] font-light mb-4 opacity-40">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-washi/40 to-transparent"
        />
      </div>
    </section>
  );
}
