import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-20 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6 font-heading tracking-tighter">
              HARKON<span className="text-accent">.</span>
            </h3>
            <p className="text-slate-400 max-w-sm leading-relaxed font-sans text-lg">
              Professionel byggerådgivning og ingeniørarbejde i Nykøbing Falster.
              Vi sikrer arkitektonisk kvalitet og teknisk tryghed i dit byggeprojekt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading uppercase tracking-widest">Hurtige Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-accent transition-all hover:translate-x-1 inline-block">Ydelser</a></li>
              <li><a href="#about" className="hover:text-accent transition-all hover:translate-x-1 inline-block">Om os</a></li>
              <li><a href="#projects" className="hover:text-accent transition-all hover:translate-x-1 inline-block">Projekter</a></li>
              <li><a href="#contact" className="hover:text-accent transition-all hover:translate-x-1 inline-block">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading uppercase tracking-widest">Kontakt</h4>
            <ul className="space-y-4 text-slate-400 font-sans">
              <li className="flex items-start">
                <span>Skovvej 12<br />4800 Nykøbing F</span>
              </li>
              <li className="font-bold text-slate-500 uppercase tracking-tighter text-xs">CVR: 34119406</li>
              <li className="pt-2">
                <a href="tel:+4560226068" className="text-white hover:text-accent transition-colors font-bold text-lg">
                  +45 60 22 60 68
                </a>
              </li>
              <li>
                <a href="mailto:info@harkon.dk" className="text-slate-300 hover:text-accent transition-colors">
                  info@harkon.dk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Harkon Byggerådgivning ApS. Alle rettigheder forbeholdes.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="p-3 bg-slate-800/50 rounded-xl text-slate-400 hover:text-accent hover:bg-slate-800 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-slate-800/50 rounded-xl text-slate-400 hover:text-accent hover:bg-slate-800 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-slate-800/50 rounded-xl text-slate-400 hover:text-accent hover:bg-slate-800 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
