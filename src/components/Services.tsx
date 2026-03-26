import { motion } from 'motion/react';
import { Home, FileCheck, PencilRuler, CalendarCheck, ClipboardCheck, HardHat } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-10 h-10 text-cta" />,
    title: 'Køberrådgivning',
    description: 'Ved køb af hus, kan Harkon hjælpe hvis der er tvivl om eventuelle skjulte eller kommende udgifter.',
  },
  {
    icon: <FileCheck className="w-10 h-10 text-accent" />,
    title: 'Byggetilladelse',
    description: 'Vi hjælper med at få tilladelsen i hus, på jeres drømmeprojekt.',
  },
  {
    icon: <PencilRuler className="w-10 h-10 text-cta" />,
    title: 'Tegnestue',
    description: 'Tegning af professionelle digitale tegninger.',
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-accent" />,
    title: '1 og 5 års gennemgang',
    description: 'Vi hjælper med gennemgang af huset, så eventuelle fejl og mangler kan videregives til håndværker.',
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-cta" />,
    title: 'Afleveringsforretning',
    description: 'Grundig gennemgang af byggeprojekt ved aflevering. Sikrer kvalitet og overholdelse af aftaler.',
  },
  {
    icon: <HardHat className="w-10 h-10 text-accent" />,
    title: 'Tilsyn og kontrol',
    description: 'Ved nybyggeri og renovering hjælper vi med tilsyn af jeres projekt, for at sikre at alle forpligtelser og regler bliver overholdt.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            Vores <span className="text-accent">Ydelser</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Vi tilbyder en bred vifte af bygge- og rådgivningstjenester til alle dine behov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
            >
              <div className="mb-8 p-5 bg-slate-50 rounded-2xl inline-block group-hover:bg-accent/10 transition-colors duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors font-heading">
                {service.title}
              </h3>
              <p className="text-secondary leading-relaxed text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
