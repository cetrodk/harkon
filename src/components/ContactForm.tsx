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
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Kontakt <span className="text-[#3182CE]">Os</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Har du spørgsmål, eller ønsker du et uforpligtende tilbud på dit byggeprojekt? 
              Udfyld formularen eller kontakt os direkte.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#3182CE]/10 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-[#3182CE]" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Adresse</h4>
                  <p className="text-slate-600">
                    Harkon Byggerådgivning ApS<br />
                    Østergågade 12<br />
                    4800 Nykøbing Falster
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FF6600]/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Telefon</h4>
                  <p className="text-slate-600">
                    <a href="tel:+4512345678" className="hover:text-[#3182CE] transition-colors">
                      +45 12 34 56 78
                    </a>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Man-Fre: 08:00 - 16:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#3182CE]/10 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-[#3182CE]" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">
                    <a href="mailto:info@harkon.dk" className="hover:text-[#3182CE] transition-colors">
                      info@harkon.dk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3182CE] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Dit fulde navn"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3182CE] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3182CE] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="+45 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3182CE] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Beskriv dit projekt..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-[#3182CE] hover:bg-[#2c75ba] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Send besked
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
