import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImg from '@/src/assets/harkon_hero.webp';

export default function Hero() {
  return (
    <section aria-label="Introduktion" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Byggeplads i Nykøbing Falster — Harkon Byggerådgivning leverer professionel bygherrerådgivning og projektering"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] font-heading">
            Professionel <span className="text-accent">Byggerådgivning</span> <br />
            i Nykøbing Falster
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Vi hjælper dig med at realisere dit byggeprojekt med teknisk præcision og arkitektonisk indsigt.
            Specialiseret rådgivning inden for byggeri, anlæg og energioptimering.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-semibold rounded-xl text-white bg-cta hover:bg-cta-hover transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 duration-300"
            >
              Få et uforpligtende tilbud
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-5 border border-white/30 text-lg font-semibold rounded-xl text-white hover:bg-white/10 transition-all backdrop-blur-md active:scale-95 duration-300"
            >
              Se vores ydelser
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full mb-1"
          />
        </div>
      </motion.div>
    </section>
  );
}
