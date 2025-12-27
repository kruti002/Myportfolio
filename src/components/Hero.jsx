import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { useState, useEffect } from "react";
import avatarImg from "../assets/avator.png";
import ResumePdf from "../assets/Resume.pdf";

const Hero = () => {
    const roles = ["Software Developer", "Backend Developer", "ML Developer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 4000); // Slower interval for typewriter effect

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 pt-24 pb-10 overflow-hidden">
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6 z-10">
                <div className="relative h-10 w-full overflow-hidden flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentRoleIndex}
                            className="text-xl md:text-2xl font-semibold text-cyan-400 overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 pr-1"
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            {roles[currentRoleIndex]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
                >
                    Hello, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Kruti Shah
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-lg"
                >
                    Software developer and ML engineer at heart, I design scalable backend systems and intelligent models that power data-driven, high-impact applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4 mt-4"
                >


                    <a
                        href={ResumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all transform hover:scale-105"
                    >
                        My Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6 mt-6 text-2xl text-gray-400"
                >
                    <a href="https://x.com/krutishah957" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><SiX /></a>
                    <a href="https://www.linkedin.com/in/kruti-shah-5500b4225/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
                    <a href="https://github.com/kruti002" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
                </motion.div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative z-10 mt-10 md:mt-0">
                {/* Glow effect behind the character */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-teal-500/40 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-emerald-400/30 rounded-full blur-[80px]"
                />

                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={avatarImg}
                    alt="Kruti Shah"
                    className="relative z-10 w-[80%] md:w-[600px] h-auto drop-shadow-2xl floating-animation"
                />
            </div>

            {/* CSS for floating animation defined in style tag or global css */}
            <style>{`
        .floating-animation {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
