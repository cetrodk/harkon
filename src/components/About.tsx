import { motion } from 'motion/react';
import { MapPin, CheckCircle, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-800 mb-6">
              <MapPin className="w-4 h-4 mr-2 text-[#FF6600]" />
              Baseret i Nykøbing Falster
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Din lokale partner i <br />
              <span className="text-[#3182CE]">byggerådgivning</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Harkon Byggerådgivning er en specialiseret rådgivningsvirksomhed med dybe rødder i Nykøbing Falster. 
              Vi kombinerer lokal indsigt med teknisk ekspertise for at levere byggeprojekter af højeste kvalitet.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Erfaring og Ekspertise</h4>
                  <p className="text-slate-600">Mange års erfaring med komplekse byggeprojekter i regionen.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-[#3182CE]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Kvalitetssikring</h4>
                  <p className="text-slate-600">Vi går aldrig på kompromis med kvaliteten i vores rådgivning.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#3182CE] hover:bg-[#2c75ba] transition-all shadow-md hover:shadow-lg"
            >
              Læs mere om os
            </a>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#FF6600]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#3182CE]/10 rounded-full blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <p className="text-white font-medium text-lg">Vi bygger fremtiden sammen</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="bg-[#FF6600]/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Kundetilfredshed</p>
                  <p className="text-2xl font-bold text-slate-900">98%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
