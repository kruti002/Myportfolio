import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { SiX } from "react-icons/si";
import logo from "../assets/Logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 px-6 py-4 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-transparent border-none' : 'bg-[#050510]/30 border-b border-white/5'}`}>
      <div className="flex items-center gap-2 font-code">
        <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          &lt;
        </span>
        <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Kruti Shah
        </span>
        <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          /&gt;
        </span>
      </div>

      {/* Desktop Menu - Hidden to prioritize Hamburger Drawer */}
      <div className="hidden"></div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
      px-6 py-2 rounded-full
      bg-black/40
      border border-[#00d8ff]
      text-[#00d8ff] font-semibold
      shadow-[0_0_15px_rgba(0,216,255,0.5)]
      hover:bg-[#00d8ff]
      hover:text-black
      transition-all
      "
            >
              Reach Out
            </motion.button>
          </a>
        </div>

        {/* Hamburger Menu Toggle - Visible on All Screens */}
        <div className="text-white text-2xl cursor-pointer z-50" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-[#050510] border-l border-white/10 p-8 flex flex-col gap-8 z-50 shadow-2xl"
            >
              <div className="flex justify-end">
                <button onClick={toggleMenu} className="text-white text-2xl hover:text-cyan-400 transition-colors">
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-10">
                {["Home", "About", "Education", "Skills", "Projects", "Experience", "Achievements", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white hover:text-cyan-400 text-lg font-medium tracking-wide transition-colors"
                  >
                    {item}
                  </a>
                ))}

                <a href="#contact" onClick={toggleMenu} className="px-6 py-2 rounded-full bg-gradient-to-r from-[#ff007f] to-[#ff007f]/80 text-white font-semibold mt-4 text-center">
                  Reach Out
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
