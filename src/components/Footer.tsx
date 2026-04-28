import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal py-20 border-t border-washi/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="w-16 h-16 bg-kurenai flex items-center justify-center rounded-sm mb-6">
            <span className="text-washi font-serif text-3xl font-bold">紅</span>
          </div>
          <h2 className="text-4xl font-serif tracking-[0.2em] uppercase mb-2">Kureha</h2>
          <span className="text-xs uppercase tracking-[0.4em] font-light opacity-60">Ginza Modern Sushi</span>
        </div>

        <div className="grid md:grid-cols-3 gap-16 text-center md:text-left border-y border-washi/5 py-16">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-kurenai">Newsletter</h4>
            <p className="text-sm font-light text-washi/60 max-w-xs mx-auto md:mx-0 italic">
              Subscribe to receive exclusive seasonal menu updates and special event invitations.
            </p>
            <div className="flex border-b border-washi/20 pb-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent text-sm w-full outline-none font-light italic"
              />
              <button className="text-[10px] uppercase tracking-widest font-bold ml-4">Join</button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-kurenai">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-washi/80 uppercase tracking-widest">
              <li><a href="#" className="hover:text-kurenai transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-kurenai transition-colors">Philosophy</a></li>
              <li><a href="#menu" className="hover:text-kurenai transition-colors">Menu</a></li>
              <li><a href="#reservations" className="hover:text-kurenai transition-colors">Bookings</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-kurenai">Connect</h4>
            <div className="flex justify-center md:justify-start gap-8">
              <a href="#" className="hover:text-kurenai transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-kurenai transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-kurenai transition-colors"><Twitter size={20} /></a>
            </div>
            <p className="text-xs font-light text-washi/40 uppercase tracking-widest">
              NY • TOKYO • LONDON
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 text-[10px] uppercase tracking-[0.3em]">
          <p>© 2026 Kureha Sushi Group. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
