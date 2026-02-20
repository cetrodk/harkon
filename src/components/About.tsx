import { motion } from 'motion/react';
import { MapPin, CheckCircle, Award, Users } from 'lucide-react';
import aboutImg from '@/src/assets/about.webp';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-secondary mb-8">
              <MapPin className="w-4 h-4 mr-2 text-accent" />
              Baseret i Nykøbing Falster
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8 leading-[1.15] font-heading">
              Din lokale partner i <br />
              <span className="text-accent">professionel byggerådgivning</span>
            </h2>

            <p className="text-lg text-secondary mb-10 leading-relaxed font-sans">
              Harkon Byggerådgivning er en specialiseret rådgivningsvirksomhed med dybe rødder i Nykøbing Falster.
              Vi kombinerer lokal indsigt med teknisk ekspertise for at levere byggeprojekter af højeste kvalitet.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 p-2 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-primary mb-1 font-heading">Erfaring og Ekspertise</h4>
                  <p className="text-secondary">Mange års erfaring med komplekse byggeprojekter i regionen.</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 p-2 bg-cta/5 rounded-lg group-hover:bg-cta/10 transition-colors">
                  <Award className="w-6 h-6 text-cta" />
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-primary mb-1 font-heading">Kvalitetssikring</h4>
                  <p className="text-secondary">Vi går aldrig på kompromis med kvaliteten i vores rådgivning.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-cta hover:bg-cta-hover transition-all shadow-xl hover:shadow-2xl active:scale-95 duration-300"
            >
              Læs mere om os
            </a>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-cta/10 rounded-full blur-3xl animate-pulse" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={aboutImg}
                alt="Harkon Byggerådgivnings team i arbejde — lokal byggerådgivning med teknisk ekspertise i Nykøbing Falster"
                width="800"
                height="600"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
                <p className="text-white font-bold text-2xl font-heading">Vi bygger fremtiden sammen</p>
              </div>

              {/* Floating stat card — lives inside the image frame over the gradient scrim */}
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="absolute top-8 right-8 hidden md:block"
              >
                <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl px-5 py-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-widest leading-none mb-1.5">Kundetilfredshed</p>
                      <p className="text-white text-3xl font-black font-heading leading-none tabular-nums">98%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
