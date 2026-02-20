import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ArrowRight, X, ZoomIn } from 'lucide-react';
import tegningImg from '@/src/assets/tegning.jpg';

export default function PriceExample() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen]);

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
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer group"
              onClick={() => setModalOpen(true)}
            >
              <img
                src={tegningImg}
                alt="Plantegning af enfamiliehus på 165 m2 med carport — byggeansøgning udarbejdet af Harkon Byggerådgivning"
                className="w-full h-auto object-contain"
                loading="lazy"
                width="1500"
                height="900"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
            onClick={() => setModalOpen(false)}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Luk"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              src={tegningImg}
              alt="Plantegning af enfamiliehus på 165 m2 med carport"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
