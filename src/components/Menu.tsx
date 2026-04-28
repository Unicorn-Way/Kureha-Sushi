import { motion } from 'motion/react';

const categories = [
  {
    title: "Sushi & Sashimi",
    items: [
      { name: "Bluefin O-Toro", desc: "Premium fatty tuna belly, hand-selected", price: "24", img: "https://images.unsplash.com/photo-1534482421-0d45a48a73fe?auto=format&fit=crop&q=80&w=400" },
      { name: "Hokkaido Uni", desc: "Sea urchin with wasabi and shiso leaf", price: "28", img: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&q=80&w=400" },
      { name: "King Salmon Nigiri", desc: "Torched with charcoal salt and yuzu", price: "16", img: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  {
    title: "Specialty Rolls",
    items: [
      { name: "The Crimson Leaf", desc: "Spicy tuna, cucumber, topped with seared wagyu", price: "32", img: "https://images.unsplash.com/photo-1559700018-f2cbdf5ee897?auto=format&fit=crop&q=80&w=400" },
      { name: "Ginza Garden", desc: "Asparagus tempura, avocado, truffle soy", price: "22", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=400" },
      { name: "Moonlight Sashimi", desc: "Chef's selection of 7 seasonal cuts", price: "55", img: "https://images.unsplash.com/photo-1534482421-0d45a48a73fe?auto=format&fit=crop&q=80&w=400" },
    ]
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-40 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-kurenai uppercase tracking-[0.4em] text-sm font-semibold">Seasonal Menu</span>
          <h2 className="text-5xl md:text-7xl font-serif italic">Our Selection</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-12">
              <h3 className="text-3xl font-serif border-b border-washi/10 pb-6 mb-12 flex justify-between items-center">
                {cat.title}
                <span className="text-xs uppercase tracking-widest font-sans font-light opacity-40">0{idx + 1}</span>
              </h3>
              
              <div className="space-y-12">
                {cat.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex group cursor-pointer"
                  >
                    <div className="w-24 h-24 overflow-hidden rounded-sm flex-shrink-0">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="ml-8 flex-grow">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-serif group-hover:text-kurenai transition-colors">{item.name}</h4>
                        <div className="flex-grow mx-4 border-b border-dotted border-washi/20" />
                        <span className="font-serif text-lg">${item.price}</span>
                      </div>
                      <p className="text-sm font-light text-washi/60 leading-relaxed italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-12 py-5 border border-washi/20 hover:border-kurenai hover:text-kurenai transition-all duration-500 uppercase tracking-[0.2em] text-xs">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
