import { motion } from "framer-motion";
import cuBoulderLogo from "../assets/cu_boulder_logo.png";
import djSanghviLogo from "../assets/dj_sanghvi_logo.png";

const educationData = [
    {
        institution: "University of Colorado Boulder",
        location: "Boulder, CO",
        degree: "Master of Science in Computer Science",
        duration: "Aug 2025 – May 2027",
        cgpa: "3.767/4.0",
        logo: cuBoulderLogo,
        coursework: [
            "Datacenter Scale Computing",
            "Big Data Architecture",
            "Neural Nets and Deep Learning",
            "Natural Language Processing",
            "Design and Analysis of Algorithms",
            "Data Science Team",
            "Intro to CS MS Research",
            "Computer Science Colloquium",
            "Intro to Computing"
        ],
        highlights: [
            "Pursuing Master of Science in Computer Science with a focus on Agentic AI, Cloud-Native Systems, and Distributed Infrastructure."
        ]
    },
    {
        institution: "Dwarkadas J. Sanghvi College of Engineering",
        location: "Mumbai, India",
        degree: "B.Tech in Computer Engineering with Honors in Intelligent Computing",
        duration: "Aug 2021 – May 2025",
        cgpa: "9.05/10.0",
        logo: djSanghviLogo,
        coursework: ["Data Structures", "Software Engineering", "Data Warehousing and Mining", "Natural Language Processing", "DBMS", "Operating Systems", "Design and Analysis of Algorithms", "Artificial Intelligence"],
        highlights: [
            "Published 2 research papers & book chapter",
            "Utility Patent: Published (HazardScout) | Design Patent: Under examination",
            "Advanced to pre-finale round (Top 70 of 29,000+ teams) in Myntra HackerRamp WeForShe 2024",
            "OC Member, Internship Fair at Dwarkadas J. Sanghvi College of Engineering",
            "Selected for JPMorgan Chase College to Corporate Program (Top 60 students)"
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
                        Education
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                {/* Logo */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={edu.logo}
                                            alt={`${edu.institution} logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-lg md:text-xl text-gray-300 mb-2 font-medium">
                                        {edu.degree}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                        {edu.location && (
                                            <span className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                                {edu.location}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                            {edu.duration}
                                        </span>
                                        <span className="flex items-center gap-2 font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                            CGPA: {edu.cgpa}
                                        </span>
                                    </div>

                                    {/* Coursework */}
                                    {edu.coursework.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Relevant Coursework:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.coursework.map((course, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Highlights */}
                                    {edu.highlights.length > 0 && (
                                        <div className="space-y-3">
                                            {edu.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <div className="mt-2 flex-shrink-0">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                                                    </div>
                                                    <span className="text-sm leading-relaxed">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
