import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              HARKON<span className="text-[#FF6600]">.</span>
            </h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Professionel byggerådgivning og ingeniørarbejde i Nykøbing Falster. 
              Vi sikrer kvalitet og tryghed i dit byggeprojekt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Hurtige Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#3182CE] transition-colors">Ydelser</a></li>
              <li><a href="#about" className="hover:text-[#3182CE] transition-colors">Om os</a></li>
              <li><a href="#projects" className="hover:text-[#3182CE] transition-colors">Projekter</a></li>
              <li><a href="#contact" className="hover:text-[#3182CE] transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Østergågade 12</li>
              <li>4800 Nykøbing Falster</li>
              <li>CVR: 12345678</li>
              <li className="pt-2"><a href="tel:+4512345678" className="hover:text-white transition-colors">+45 12 34 56 78</a></li>
              <li><a href="mailto:info@harkon.dk" className="hover:text-white transition-colors">info@harkon.dk</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Harkon Byggerådgivning ApS. Alle rettigheder forbeholdes.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-[#3182CE] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#3182CE] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#3182CE] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
