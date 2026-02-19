import { motion } from 'motion/react';
import { Building2, Ruler, PencilRuler, HardHat, ClipboardCheck, Home } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-10 h-10 text-cta" />,
    title: 'Bygherrerådgivning',
    description: 'Vi varetager dine interesser som bygherre gennem hele byggeprocessen. Fra idéudvikling til aflevering.',
  },
  {
    icon: <Ruler className="w-10 h-10 text-accent" />,
    title: 'Projektering & Ingeniør',
    description: 'Statik, konstruktionstegninger og teknisk rådgivning. Vi sikrer, at dit projekt er bygbart og sikkert.',
  },
  {
    icon: <PencilRuler className="w-10 h-10 text-cta" />,
    title: 'Tegnestue',
    description: 'Teknisk udformning af byggeprojekter. Skitser, plantegninger og 3D-visualiseringer til byggesager.',
  },
  {
    icon: <HardHat className="w-10 h-10 text-accent" />,
    title: 'Byggeledelse & Tilsyn',
    description: 'Vi styrer byggepladsen og fører tilsyn med kvalitet, tid og økonomi, så du undgår overraskelser.',
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-cta" />,
    title: 'Tilstandsvurdering',
    description: 'Få overblik over bygningens tilstand ved køb, salg eller renovering. Vi udarbejder grundige rapporter.',
  },
  {
    icon: <Home className="w-10 h-10 text-accent" />,
    title: 'Køberrådgivning',
    description: 'Ved køb af hus, kan Harkon hjælpe hvis der er tvivl om eventuelle skjulte eller kommende udgifter.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            Vores <span className="text-accent">Ekspertise</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Vi tilbyder en bred vifte af ydelser inden for byggerådgivning og ingeniørarbejde.
            Skræddersyede løsninger til både private og erhverv.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2 cursor-pointer"
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
