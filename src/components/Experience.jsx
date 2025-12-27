import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
    {
        title: "Software Developer Intern",
        company: "Tech Innovators Inc.",
        period: "May 2024 - Present",
        type: "work",
        description: "Contributed to backend microservices using Python and Flask. Optimized database queries in PostgreSQL, reducing latency by 30%. Collaborated with frontend team to integrate REST APIs."
    },
    {
        title: "Master of Computer Science",
        company: "University of Technology",
        period: "2023 - 2025",
        type: "education",
        description: "Specializing in Artificial Intelligence and Machine Learning. Relevant Coursework: Advanced Algorithms, Cloud Computing, Neural Networks."
    },
    {
        title: "Web Development Intern",
        company: "Creative Solutions LLP",
        period: "Jan 2023 - Apr 2023",
        type: "work",
        description: "Built responsive web interfaces using React.js and Tailwind CSS. Implemented user authentication with Firebase and deployed applications on Vercel."
    },
    {
        title: "Bachelor of Technology",
        company: "State University",
        period: "2019 - 2023",
        type: "education",
        description: "Major in Computer Science & Engineering. Graduated with Honors. Capstone Project: Automated Traffic Control System using OpenCV."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
                        My Journey
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 transform md:-translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className={`p-6 rounded-2xl bg-[#0a0a16] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-lg relative ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                        <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                        <span className="md:hidden mt-3 inline-block text-xs text-gray-500 font-mono">{exp.period}</span>
                                    </div>
                                </div>

                                {/* Center Dot & Icon */}
                                <div className="absolute left-[4px] md:left-1/2 md:-translate-x-1/2 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-[#050510] border-2 border-cyan-500 flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                        {exp.type === 'work' ? (
                                            <FaBriefcase className="text-cyan-400 text-xs" />
                                        ) : (
                                            <FaGraduationCap className="text-purple-400 text-xs" />
                                        )}
                                    </div>
                                </div>

                                {/* Date Side (Desktop only) */}
                                <div className={`hidden md:block flex-1 py-2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                                    }`}>
                                    <div className="text-lg font-mono text-gray-500">{exp.period}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
