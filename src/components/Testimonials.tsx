import { useState, useEffect } from 'react';
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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#3182CE]/5 -skew-y-3 transform origin-top-left z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
          Hvad siger vores <span className="text-[#3182CE]">kunder?</span>
        </h2>

        <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-[#FF6600]/20" />
          
          <div className="min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#3182CE]' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
