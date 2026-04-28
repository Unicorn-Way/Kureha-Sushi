import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservations' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-sm py-4 border-b border-washi/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-kurenai flex items-center justify-center rounded-sm group-hover:scale-105 transition-transform">
            <span className="text-washi font-serif text-2xl font-bold">紅</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif tracking-widest uppercase">Kureha</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light opacity-60">Ginza Modern Sushi</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest font-light hover:text-kurenai transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservations" 
            className="px-8 py-3 border border-washi/20 hover:border-kurenai hover:bg-kurenai transition-all duration-300 text-xs uppercase tracking-[0.2em]"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-washi"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal z-[100] flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-6 text-washi"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-3xl font-serif tracking-widest hover:text-kurenai transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservations" 
                className="mt-4 px-12 py-4 bg-kurenai text-washi text-sm uppercase tracking-[0.2em]"
                onClick={() => setIsOpen(false)}
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
