import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import ResumePdf from '../assets/Resume.pdf';

const ResumeSection = () => {
    return (
        <section id="resume" className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-1/4 right-[10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                        Resume
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-cyan-400 transition-colors">
                        Explore my background, skills, and professional journey.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full bg-[#0d1117]/80 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-8"
                >
                    {/* Action Buttons */}
                    <div className="w-full flex flex-wrap justify-center gap-4 md:gap-8">
                        <a
                            href={ResumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                        >
                            <FaEye className="text-xl" /> View Full Screen
                        </a>
                        <a
                            href={ResumePdf}
                            download="Kruti_Shah_Resume.pdf"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#161b22] border border-white/10 text-white font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 hover:bg-white/5 hover:border-cyan-500/50 hover:text-cyan-400"
                        >
                            <FaDownload className="text-xl" /> Download PDF
                        </a>
                    </div>

                    {/* PDF Viewer */}
                    <div className="w-full h-[60vh] md:h-[800px] rounded-2xl overflow-hidden border-2 border-white/5 relative group bg-black/50 flex items-center justify-center">
                        {/* Interactive overlay prompt (Mobile only) */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-100 md:opacity-0 pointer-events-none transition-opacity z-20">
                            <div className="bg-[#050510]/80 text-cyan-400 px-6 py-3 rounded-full font-semibold border border-cyan-400/30 backdrop-blur-sm">
                                Use Buttons Above to View or Download
                            </div>
                        </div>

                        {/* We use an iframe to display the PDF - only on screens large enough */}
                        <div className="hidden md:block w-full h-full">
                            <iframe
                                src={`${ResumePdf}#toolbar=0&navpanes=0`}
                                className="w-full h-full rounded-xl bg-white/5 transition-opacity duration-500"
                                title="Resume Viewer"
                            />
                        </div>

                        {/* Eye-catching fallback for mobile to encourage using the buttons */}
                        <div className="md:hidden flex flex-col items-center justify-center gap-4 text-center p-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                <FaEye className="text-4xl text-white" />
                            </div>
                            <p className="text-gray-400 text-lg font-medium">
                                Preview is best viewed on larger screens. <br /> Please download or view full screen.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeSection;
