/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#3182CE] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Showcase />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}
