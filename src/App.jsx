import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Background from './components/Background';
import About from './components/About';
import ResumeSection from './components/ResumeSection';
import DesignPortfolio from './components/DesignPortfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';

function App() {
  const [loading, setLoading] = useState(() => {
    // If the user navigates directly to the resume or design page, skip the loading screen
    if (window.location.pathname === '/resume' || window.location.pathname === '/design') {
      return false;
    }
    return true;
  });
  const location = useLocation();

  // Handle smooth scrolling for hash links seamlessly
  useEffect(() => {
    if (!loading) {
      if (location.hash) {
        // Slight delay ensures the DOM is fully rendered before trying to scroll
        setTimeout(() => {
          const id = location.hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If no hash, scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  }, [location, loading]);

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
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Experience />
                <Achievements />
                <Contact />
              </>
            } />
            <Route path="/resume" element={<ResumeSection />} />
            <Route path="/design" element={<DesignPortfolio />} />
          </Routes>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
