import { motion } from 'motion/react';
import { Building2, Ruler, PencilRuler, HardHat, ClipboardCheck, Home } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-10 h-10 text-[#3182CE]" />,
    title: 'Bygherrerådgivning',
    description: 'Vi varetager dine interesser som bygherre gennem hele byggeprocessen. Fra idéudvikling til aflevering.',
  },
  {
    icon: <Ruler className="w-10 h-10 text-[#FF6600]" />,
    title: 'Projektering & Ingeniør',
    description: 'Statik, konstruktionstegninger og teknisk rådgivning. Vi sikrer, at dit projekt er bygbart og sikkert.',
  },
  {
    icon: <PencilRuler className="w-10 h-10 text-[#3182CE]" />,
    title: 'Tegnestue',
    description: 'Teknisk udformning af byggeprojekter. Skitser, plantegninger og 3D-visualiseringer til byggesager.',
  },
  {
    icon: <HardHat className="w-10 h-10 text-[#FF6600]" />,
    title: 'Byggeledelse & Tilsyn',
    description: 'Vi styrer byggepladsen og fører tilsyn med kvalitet, tid og økonomi, så du undgår overraskelser.',
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-[#3182CE]" />,
    title: 'Tilstandsvurdering',
    description: 'Få overblik over bygningens tilstand ved køb, salg eller renovering. Vi udarbejder grundige rapporter.',
  },
  {
    icon: <Home className="w-10 h-10 text-[#FF6600]" />,
    title: 'Køberrådgivning',
    description: 'Ved køb af hus, kan Harkon hjælpe hvis der er tvivl om eventuelle skjulte eller kommende udgifter.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Vores <span className="text-[#3182CE]">Ekspertise</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vi tilbyder en bred vifte af ydelser inden for byggerådgivning og ingeniørarbejde.
            Skræddersyede løsninger til både private og erhverv.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-xl inline-block group-hover:bg-slate-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#3182CE] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
