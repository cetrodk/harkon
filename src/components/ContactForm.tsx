import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Tak for din besked! Vi vender tilbage hurtigst muligt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
              Udfyld formularen eller kontakt os direkte. Vi svarer inden for 24 timer.
            </p>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-cta/5 p-5 rounded-[1.25rem] group-hover:bg-cta/10 transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-cta" />
                </div>
                <div className="ml-8">
                  <h4 className="text-xl font-bold text-primary mb-2 font-heading">Adresse</h4>
                  <p className="text-secondary leading-relaxed">
                    Harkon Byggerådgivning ApS<br />
                    Skovvej 12<br />
                    4800 Nykøbing F
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
                  <p className="text-sm text-slate-400 mt-2 font-bold uppercase tracking-wider">Man-Fre: 08:00 - 16:00</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-cta/5 p-5 rounded-[1.25rem] group-hover:bg-cta/10 transition-colors duration-300">
                  <Mail className="w-7 h-7 text-cta" />
                </div>
                <div className="ml-8">
                  <h4 className="text-xl font-bold text-primary mb-2 font-heading">Email</h4>
                  <p className="text-secondary leading-relaxed">
                    <a href="mailto:info@harkon.dk" className="hover:text-cta transition-colors font-semibold">
                      info@harkon.dk
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
                    placeholder="+45 60 22 60 68"
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
                  placeholder="Beskriv dit projekt..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-xl text-white bg-cta hover:bg-cta-hover transition-all shadow-xl hover:shadow-2xl active:scale-95 duration-300"
              >
                Send besked
                <Send className="ml-2 h-6 w-6" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
