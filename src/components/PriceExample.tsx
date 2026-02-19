import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import tegningImg from '@/src/assets/tegning.jpg';

export default function PriceExample() {
  return (
    <section id="price-example" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative blur orbs — same pattern as CTA */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cta opacity-10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Pris<span className="text-accent">eksempel</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Gennemsigtighed i prissætning. Her er et konkret eksempel på hvad en byggeansøgning koster.
          </p>
        </motion.div>

        {/* Two-column layout — image left, info right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Floor plan image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={tegningImg}
                alt="Plantegning af enfamiliehus på 165 m2 med carport — byggeansøgning udarbejdet af Harkon Byggerådgivning"
                className="w-full h-auto object-contain bg-white"
                loading="lazy"
                width="1500"
                height="900"
              />
            </div>
          </motion.div>

          {/* Pricing info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-slate-300 mb-8">
              <FileText className="w-4 h-4 mr-2 text-accent" />
              Byggeansøgning
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight font-heading">
              Priseksempel på <br />
              <span className="text-accent">byggeansøgning</span>
            </h3>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Priseksempel på en byggeansøgning af et enfamiliehus
              på 165 m2, og 48 m2 carport. Alt fra idemøde til
              modtagelse af byggetilladelse.
            </p>

            {/* Price details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Projekt</span>
                <span className="text-white font-bold font-heading">Byggeansøgning</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Pris eksempel</span>
                <span className="text-accent font-black text-3xl font-heading">23.750,-</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-cta hover:bg-cta-hover transition-all shadow-xl hover:shadow-2xl active:scale-95 duration-300"
            >
              Få dit eget tilbud
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
