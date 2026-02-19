import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ydelser', href: '#services' },
    { name: 'Om os', href: '#about' },
    { name: 'Projekter', href: '#projects' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${scrolled
          ? 'top-4 left-4 right-4 bg-white/80 backdrop-blur-lg shadow-lg border border-slate-200/50 rounded-2xl py-3'
          : 'top-0 left-0 right-0 bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-2xl font-bold tracking-tighter font-heading ${scrolled ? 'text-primary' : 'text-white'}`}>
              HARKON<span className="text-accent">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all hover:text-accent relative group ${scrolled ? 'text-secondary' : 'text-white/90'
                  }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Få et tilbud
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-primary hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 right-0 mt-4 mx-4 md:hidden bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden z-50`}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-base font-semibold text-secondary hover:text-accent hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 px-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-cta text-white px-5 py-4 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
                >
                  Få et tilbud
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
