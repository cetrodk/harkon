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
    <div className="min-h-screen bg-white font-sans text-primary selection:bg-cta selection:text-white">
      {/* Navbar renders its own <nav> landmark */}
      <Navbar />
      {/*
        <main> wraps all primary page content.
        This is the main landmark — screen readers and Googlebot use it to
        skip directly to the core content of the page.
      */}
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Showcase />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      {/* Footer renders its own <footer> landmark */}
      <Footer />
    </div>
  );
}
