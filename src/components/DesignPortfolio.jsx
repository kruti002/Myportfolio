import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const DesignPortfolio = () => {
    return (
        <section id="design" className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-1/4 left-[10%] w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                        UI/UX Design Portfolio
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore my interactive designs, mockups, and prototypes crafted in Figma.
                    </p>
                </motion.div>

                {/* External Link Fallback Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <a
                        href="https://high-proud-10434963.figma.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400"
                    >
                        <FaExternalLinkAlt className="text-xl" /> View in New Tab
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="w-full flex-grow flex flex-col items-center gap-8 bg-[#0d1117]/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-3xl shadow-2xl"
                >
                    {/* Figma Prototype Embed */}
                    <div className="w-full h-[60vh] md:h-[750px] rounded-2xl overflow-hidden border-2 border-white/5 bg-[#1e1e1e] flex items-center justify-center relative">
                        <iframe
                            className="w-full h-full border-none"
                            src="https://high-proud-10434963.figma.site"
                            allowFullScreen
                            title="Figma Design Portfolio"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DesignPortfolio;
