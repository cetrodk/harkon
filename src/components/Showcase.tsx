import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Nyt Boligkvarter',
    category: 'Bygherrerådgivning',
    // SEO alt: describe the image content, context and relevance to the business
    alt: 'Nyt boligkvarter med moderne parcelhuse — Harkon Byggerådgivning varetog bygherrerådgivning fra idé til aflevering',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Erhvervsbyggeri',
    category: 'Projektering',
    alt: 'Moderne erhvervsbygning med glasfacade — projektering og ingeniørrådgivning udført af Harkon Byggerådgivning',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Energirenovering',
    category: 'Tegnestue',
    alt: 'Energirenovering af eksisterende bolig med nye vinduer og isolering — teknisk tegnestueprojekt hos Harkon',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb1566ee6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Offentlig Institution',
    category: 'Tilsyn',
    alt: 'Offentlig institutionsbygning under opførelse — Harkon Byggerådgivning førte kvalitetstilsyn på projektet',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Showcase() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
              Udvalgte <span className="text-accent">Projekter</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              Se et udvalg af de projekter, vi har været en del af. Fra teknisk udfordrende erhvervsbyggerier til moderne private boliger.
            </p>
          </div>
          <a
            href="#projects"
            className="hidden md:inline-flex items-center text-cta font-bold hover:text-cta-hover transition-all mt-4 md:mt-0 group bg-slate-50 px-6 py-3 rounded-xl border border-slate-200"
          >
            Se alle projekter
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all cursor-pointer aspect-[3/4]"
            >
              <img
                src={project.image}
                alt={project.alt}
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">{project.title}</h3>
                <div className="w-10 h-1 bg-accent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="#projects"
            className="inline-flex items-center justify-center w-full px-8 py-4 bg-slate-50 border border-slate-200 text-cta font-bold rounded-xl hover:bg-slate-100 transition-all"
          >
            Se alle projekter <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
