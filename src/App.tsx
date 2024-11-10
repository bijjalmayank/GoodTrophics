import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Advantages from './components/Advantages';
import Vitamins from './components/Vitamins';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Advantages />
        </motion.div>
        <Vitamins />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;