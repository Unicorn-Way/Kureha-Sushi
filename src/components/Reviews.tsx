import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Alex Sterling",
    role: "Food Critic",
    content: "The level of precision in their O-Toro preparation is unmatched in Manhattan. Kureha captures the soul of Ginza with startling accuracy.",
    rating: 5
  },
  {
    name: "Elena Ross",
    role: "Designer",
    content: "Minimalism at its finest. From the charcoal interior to the delicate gold flakes on the rolls, every detail is a masterclass in aesthetics.",
    rating: 5
  },
  {
    name: "Kenji Sato",
    role: "Regular Guest",
    content: "I've been to the original Ginza locations, and Kureha is the first US restaurant that feels truly authentic and not over-commercialized.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 md:py-40 bg-washi relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <Quote className="mx-auto text-kurenai mb-8" size={40} />
          <span className="text-kurenai uppercase tracking-[0.4em] text-sm font-semibold">Voices</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-charcoal">The Reception</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="p-10 bg-charcoal text-washi space-y-6 relative group border border-washi/10 transition-all duration-700 hover:border-kurenai/30"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-kurenai text-kurenai" />
                ))}
              </div>
              <p className="text-lg font-light italic leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-serif text-xl">{review.name}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">{review.role}</p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-washi/20 group-hover:border-kurenai/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
