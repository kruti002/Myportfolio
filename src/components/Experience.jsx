import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

const experiences = [
    {
        title: "AI Intern",
        company: "One Oath Foundation",
        period: "Aug 2023 - Sep 2023",
        type: "work",
        highlights: [
            "Automated an assessment system using KNN for response classification and FPDF for instant report generation",
            "Built a ML-based recommendation system using Deep Reinforcement Learning to suggest personalized developmental steps for children, improving accuracy by 12%"
        ]
    },
    {
        title: "Python Intern",
        company: "Emkay Global Financial Services Limited",
        period: "July 2023 - Sep 2023",
        type: "work",
        highlights: [
            "Created a real-time alert system using Python for algorithmic orders without an identifier, featuring dynamic notifications, order export, and query search by symbols, client ID, and user batch, processing inputs every 15 seconds",
            "Engineered an application to generate order-to-trade ratios from compressed transaction files, automating and customizing email reports of the results",
            "Conducted a stock prediction study on Infosys using LSTM, forecasting a 5–7% rise pre-earnings and 2–3% drop post-earnings"
        ]
    },
    {
        title: "Data Analyst",
        company: "NOQ's Digital Pvt Ltd",
        period: "June 2023 - July 2023",
        type: "work",
        highlights: [
            "Managed and maintained databases, restructuring raw data into organized formats to enable seamless analysis and reporting",
            "Designed data models to uncover customer trends and behavioral patterns, supporting strategic business decisions",
            "Created dashboards using Google Sheets and Power BI, automating data extraction from multiple sources for real-time insights"
        ]
    },
    {
        title: "GirlScript Summer Of Code (Contributor)",
        company: "Open Source",
        period: "May 2023 - July 2023",
        type: "opensource",
        highlights: [
            "Developed a job application bot to automate the process, reducing it to a matter of seconds"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
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
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <motion.div
                                        className={`group p-6 rounded-2xl bg-gradient-to-br from-[#0a0a16] to-[#0f0f1e] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                            }`}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {/* Animated background gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                                                {exp.title}
                                            </h3>
                                            <p className="text-cyan-400 font-semibold mb-3 text-sm md:text-base">
                                                {exp.company}
                                            </p>

                                            {/* Highlights as bullet points */}
                                            <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                                {exp.highlights.map((highlight, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: false }}
                                                        transition={{ delay: 0.1 * idx }}
                                                        className={`text-gray-300 text-sm leading-relaxed flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                                    >
                                                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                                                        <span className="flex-1">{highlight}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <span className="md:hidden mt-4 inline-block text-xs text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Center Dot & Icon */}
                                <div className="absolute left-[4px] md:left-1/2 md:-translate-x-1/2 mt-1">
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center z-10 relative shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            delay: index * 0.15 + 0.2
                                        }}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                    >
                                        {exp.type === 'opensource' ? (
                                            <FaCode className="text-white text-sm" />
                                        ) : (
                                            <FaBriefcase className="text-white text-sm" />
                                        )}
                                    </motion.div>
                                </div>

                                {/* Date Side (Desktop only) */}
                                <div className={`hidden md:block flex-1 py-2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                                    }`}>
                                    <motion.div
                                        className="text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: index * 0.15 + 0.3 }}
                                    >
                                        {exp.period}
                                    </motion.div>
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
