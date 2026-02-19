import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jens Hansen',
    role: 'Bygherre, Privat Bolig',
    text: 'Harkon var en uvurderlig hjælp under vores husbyggeri. De sikrede, at tidsplanen holdt, og at kvaliteten var i top. Kan varmt anbefales!',
  },
  {
    name: 'Mette Sørensen',
    role: 'Ejendomsadministrator',
    text: 'Vi bruger fast Harkon til energimærkning og tilstandsvurderinger af vores ejendomme. Altid professionel og grundig rådgivning.',
  },
  {
    name: 'Lars Nielsen',
    role: 'Direktør, Nielsen Byg A/S',
    text: 'Som entreprenør sætter jeg pris på en rådgiver, der forstår både teorien og praksis. Harkon er løsningsorienterede og nemme at samarbejde med.',
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance resets whenever the user manually changes the slide
  useEffect(() => {
    const interval = setInterval(nextTestimonial, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [currentIndex, nextTestimonial]);

  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-label="Kundeudtalelser">
      <div className="absolute top-0 left-0 w-full h-full bg-accent/5 -skew-y-3 transform origin-top-left z-0" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-16 font-heading">
          Hvad siger vores <span className="text-accent">kunder?</span>
        </h2>

        <div
          className="relative bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-slate-100"
          role="region"
          aria-roledescription="karrusel"
          aria-label="Kundeudtalelser"
        >
          <Quote className="absolute top-10 left-10 w-16 h-16 text-accent/10" aria-hidden="true" />

          <div className="min-h-[200px] flex items-center justify-center" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <blockquote className="text-xl md:text-3xl text-primary font-medium italic mb-10 leading-relaxed font-sans">
                  {testimonials[currentIndex].text}
                </blockquote>
                <div>
                  <p className="text-2xl font-bold text-primary mb-1 font-heading">{testimonials[currentIndex].name}</p>
                  <p className="text-secondary font-bold uppercase tracking-widest text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-secondary transition-all active:scale-95 border border-slate-200"
              aria-label="Forrige udtalelse"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-3 items-center" role="tablist" aria-label="Vælg udtalelse">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  role="tab"
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  aria-label={`Udtalelse fra ${testimonial.name}`}
                  aria-selected={index === currentIndex}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-secondary transition-all active:scale-95 border border-slate-200"
              aria-label="Næste udtalelse"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
