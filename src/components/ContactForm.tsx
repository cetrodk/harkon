import { useState, useCallback } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 font-heading">
              Kontakt <span className="text-accent underline decoration-accent/20 underline-offset-8">Os</span>
            </h2>
            <p className="text-lg text-secondary mb-12 leading-relaxed font-sans">
              Har du spørgsmål, eller ønsker du et uforpligtende tilbud på dit byggeprojekt?
              Udfyld formularen eller kontakt os direkte. Vi svarer oftest inden for 24 timer.
            </p>

            {/*
              <address> is the correct semantic element for contact information.
              It signals to parsers (including Google's Knowledge Graph) that
              this block contains the organisation's contact details.
              not-italic removes the browser's default italic styling for <address>.
            */}
            <address className="not-italic space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-cta/5 p-5 rounded-[1.25rem] group-hover:bg-cta/10 transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-cta" />
                </div>
                <div className="ml-8">
                  <h4 className="text-xl font-bold text-primary mb-2 font-heading">Adresse</h4>
                  <p className="text-secondary leading-relaxed">
                    Harkon Byggerådgivning ApS<br />
                    Skovvej 12<br />
                    4800 Nykøbing Falster
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-accent/5 p-5 rounded-[1.25rem] group-hover:bg-accent/10 transition-colors duration-300">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div className="ml-8">
                  <h4 className="text-xl font-bold text-primary mb-2 font-heading">Telefon</h4>
                  <p className="text-secondary leading-relaxed">
                    <a href="tel:+4560226068" className="hover:text-accent transition-colors font-semibold">
                      +45 60 22 60 68
                    </a>
                  </p>
                  <p className="text-sm text-slate-400 mt-2 font-bold uppercase tracking-wider">Man-Fre: 07:00 - 16:00</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-cta/5 p-5 rounded-[1.25rem] group-hover:bg-cta/10 transition-colors duration-300">
                  <Mail className="w-7 h-7 text-cta" />
                </div>
                <div className="ml-8">
                  <h4 className="text-xl font-bold text-primary mb-2 font-heading">Email</h4>
                  <p className="text-secondary leading-relaxed">
                    <a href="mailto:brian@harkon.dk" className="hover:text-cta transition-colors font-semibold">
                      brian@harkon.dk
                    </a>
                  </p>
                </div>
              </div>
            </address>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-bl-full" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-primary uppercase tracking-widest ml-1">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-slate-50 focus:bg-white font-medium"
                  placeholder="Dit fulde navn"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-primary uppercase tracking-widest ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-slate-50 focus:bg-white font-medium"
                    placeholder="din@email.dk"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-primary uppercase tracking-widest ml-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-slate-50 focus:bg-white font-medium"
                    placeholder="+45 00 00 00 00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-primary uppercase tracking-widest ml-1">
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-slate-50 focus:bg-white resize-none font-medium"
                  placeholder="Beskriv dit projekt."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-xl text-white bg-cta hover:bg-cta-hover transition-all shadow-xl hover:shadow-2xl active:scale-95 duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {isSubmitting ? 'Sender...' : 'Send besked'}
                {!isSubmitting && <Send className="ml-2 h-6 w-6" />}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-green-700 font-semibold mt-4" role="status">
                  Tak for din besked! Vi vender tilbage hurtigst muligt.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-red-600 font-semibold mt-4" role="alert">
                  Der opstod en fejl. Prøv venligst igen, eller kontakt os direkte.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
