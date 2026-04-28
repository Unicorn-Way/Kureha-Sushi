import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

export default function Reservations() {
  return (
    <section id="reservations" className="py-24 md:py-40 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-kurenai uppercase tracking-[0.4em] text-sm font-semibold">Join Us</span>
              <h2 className="text-5xl md:text-7xl font-serif italic">The Experience</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-kurenai">
                  <MapPin size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Location</span>
                </div>
                <p className="text-washi/70 font-light leading-relaxed">
                  128 Ginza Terrace Ave,<br />
                  Manhattan, NY 10013
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-kurenai">
                  <Phone size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Contact</span>
                </div>
                <p className="text-washi/70 font-light leading-relaxed">
                  +1 (212) 888-0099<br />
                  reservations@kurehasushi.com
                </p>
              </div>

              <div className="space-y-4 col-span-full">
                <div className="flex items-center gap-3 text-kurenai">
                  <Clock size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Hours</span>
                </div>
                <div className="grid grid-cols-2 gap-8 text-washi/70 font-light text-sm">
                  <div>
                    <p className="uppercase text-[10px] tracking-widest mb-1 opacity-40">Dinner Only</p>
                    <p>Tue – Thu: 5:30pm – 10:00pm</p>
                    <p>Fri – Sat: 5:30pm – 11:30pm</p>
                  </div>
                  <div>
                    <p className="uppercase text-[10px] tracking-widest mb-1 opacity-40">Weekend Lunch</p>
                    <p>Sat – Sun: 12:00pm – 2:30pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Mini Map Mockup */}
            <div className="h-64 bg-washi/5 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 relative group">
              <div className="absolute inset-0 bg-kurenai/10 mix-blend-multiply pointer-events-none" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901373516!2d-74.0049!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd5462875a4d0ab61!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 opacity-40 group-hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-washi/5 p-8 md:p-16 border border-washi/10 relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Calendar size={48} />
            </div>
            
            <h3 className="text-3xl font-serif mb-12 italic">Reserve Your Seat</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-semibold text-kurenai">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Seijuro Nakamuras" 
                  className="w-full bg-transparent border-b border-washi/20 py-4 focus:border-kurenai outline-none transition-colors font-light"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-semibold text-kurenai">Guests</label>
                  <select className="w-full bg-transparent border-b border-washi/20 py-4 focus:border-kurenai outline-none transition-colors font-light appearance-none text-washi/50">
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>Omakase (Counter)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-semibold text-kurenai">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-transparent border-b border-washi/20 py-4 focus:border-kurenai outline-none transition-colors font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-semibold text-kurenai">Special Requests / Occasion</label>
                <textarea 
                  rows={2}
                  placeholder="Anniversary, dietary restrictions..." 
                  className="w-full bg-transparent border-b border-washi/20 py-4 focus:border-kurenai outline-none transition-colors font-light resize-none"
                />
              </div>

              <button 
                className="w-full py-6 bg-kurenai hover:bg-kurenai/80 text-washi uppercase tracking-[0.4em] text-xs font-bold transition-all duration-300 mt-8"
              >
                Confirm Booking
              </button>
            </form>
            
            <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-washi/30">
              * Reservations are held for 15 minutes.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
