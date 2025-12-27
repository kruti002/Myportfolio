
import { motion } from "framer-motion";
import krutiPic from "../assets/kruti_pic.png";

const About = () => {
    return (
        <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 md:px-20 text-white z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0"
                >
                    <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.2)] border-2 border-cyan-500/20 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                            src={krutiPic}
                            alt="Kruti Shah"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-6 md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 flex overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            {"Kruti Shah".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { y: "100%" },
                                        visible: { y: 0 }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-xl md:text-2xl font-semibold text-gray-300 mt-2"
                        >
                            Software Developer · Backend & ML Engineer
                        </motion.h3>
                        <div className="text-gray-400 mt-4 leading-relaxed text-lg space-y-4">
                            <p>
                                I’m a software developer and machine learning enthusiast with hands-on experience building backend systems, web applications, and AI-powered cloud platforms. Currently pursuing my Master’s in Computer Science, I enjoy working across the stack designing robust backend services, developing responsive web applications, deployed scalable ML pipelines, and creating products that balance performance with usability.
                            </p>
                            <p>
                                Through projects like Boulder Move, a smart multimodal trip planning platform, and StyleSync, an AI-driven fashion personalization system, I’ve worked extensively with cloud deployment, containerization, real-time data processing, and predictive modeling. I’m driven by curiosity, impact, and the challenge of turning real-world problems into elegant technical solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[
                            { label: "Experience", value: "1+ Years" },
                            { label: "Specialty", value: "Backend Systems & ML" },
                            { label: "Focus", value: "Backend, Cloud, AI, and Data-Driven Applications" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className={`bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center hover:bg-white/10 transition-colors cursor-default ${index === 2 ? 'col-span-2' : ''}`}
                            >
                                <p className="text-gray-400 text-xs md:text-sm mb-1">{stat.label}</p>
                                <p className="text-cyan-400 font-bold text-base md:text-lg leading-tight">{stat.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-4 mt-4"
                    >
                        <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all text-white font-semibold">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

