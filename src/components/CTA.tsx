import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#1e293b] z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cta opacity-10 rounded-full blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight font-heading">
            Klar til at starte dit <span className="text-accent underline decoration-accent/30 underline-offset-8">næste projekt?</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
            Kontakt os i dag for en uforpligtende snak om dine ønsker, og muligheder. Også selvom det måske ikke står under ydelser. Vi står klar til at hjælpe dig med teknisk indsigt og professionel rådgivning.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-xl text-white bg-cta hover:bg-cta-hover transition-all shadow-xl hover:shadow-2xl active:scale-95 duration-300"
            >
              Få et uforpligtende tilbud
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
            <a
              href="tel:+4560226068"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/10 text-lg font-bold rounded-xl text-white hover:bg-white/10 transition-all backdrop-blur-md active:scale-95 duration-300"
            >
              <Phone className="mr-2 h-6 w-6" />
              Ring til os: +45 60 22 60 68
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
