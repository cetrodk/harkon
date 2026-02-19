import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[#3182CE] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3182CE] to-[#2c75ba] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Klar til at starte dit <span className="text-[#FF6600]">næste projekt?</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kontakt os i dag for en uforpligtende snak om dine muligheder. Vi står klar til at hjælpe dig videre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-[#3182CE] bg-white hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Få et uforpligtende tilbud
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+4512345678"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-full text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ring til os: +45 12 34 56 78
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
