import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaLightbulb, FaBarcode, FaMicrochip, FaExternalLinkAlt } from 'react-icons/fa';

const researchItems = [
    {
        title: "Explainable AI for Yoga Pose Detection and Correction",
        type: "Research Paper",
        description: "Educational Administration: Theory and Practice, 30(5), May 2024.",
        icon: FaBookOpen,
        color: "from-blue-400 to-indigo-500",
        delay: 0.1,
        link: "https://kuey.net/index.php/kuey/article/view/7384"
    },
    {
        title: "EcoBot: Pest Detection Alert System—Safeguarding Against Infestations",
        type: "Book Chapter",
        description: "Technologies for Energy, Agriculture, and Healthcare (1st Edition), July 2026.",
        icon: FaLightbulb,
        color: "from-emerald-400 to-green-500",
        delay: 0.2,
        link: "#"
    },
    {
        title: "HazardScout: IoT Enabled Gas Leakage Detection & Emergency Response Robot",
        type: "Utility Patent Published",
        description: "Application No: 202521045231, published at IP India.",
        icon: FaMicrochip,
        color: "from-purple-400 to-pink-500",
        delay: 0.3,
        link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
    },
    {
        title: "HazardScout Gas Detection Robot",
        type: "Design Patent Filed",
        description: "Application No: 458534-001, currently under examination at IP India.",
        icon: FaBarcode,
        color: "from-orange-400 to-red-500",
        delay: 0.4,
        link: "https://search.ipindia.gov.in/DesignApplicationStatus/"
    }
];

const ResearchCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: item.delay }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 rounded-2xl sm:rounded-3xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

            <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a0a16] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg text-white text-xl flex-shrink-0`}>
                        <item.icon />
                    </div>
                    <div>
                        <span className="inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 mb-1">
                            {item.type}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {item.title}
                        </h3>
                    </div>
                </div>
                <div className="flex justify-between items-end mt-2 pl-16">
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[85%]">
                        {item.description}
                    </p>
                    {item.link && item.link !== "#" && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors bg-white/5 p-3 rounded-full hover:bg-white/10"
                            title="View Publication"
                        >
                            <FaExternalLinkAlt className="text-sm" />
                        </a>
                    )}
                </div>
                <div className={`absolute bottom-0 left-0 h-1 rounded-b-3xl bg-gradient-to-r ${item.color} transition-all duration-500 w-0 group-hover:w-full`}></div>
            </div>
        </motion.div>
    );
};

const Research = () => {
    return (
        <section id="research" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                        Research & Patents
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my published academic research, journal publications, and technical patents.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {researchItems.map((item, index) => (
                        <ResearchCard key={index} item={item} />
                    ))}
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
};

export default Research;
