import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Background from './components/Background';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-white">
      <AnimatePresence mode="wait">
        {loading && <PreLoader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-screen"
        >
          <Background />
          <Navbar />
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
