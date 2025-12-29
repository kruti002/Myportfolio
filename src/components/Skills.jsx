import { motion } from "framer-motion";
import {
    SiReact, SiHtml5, SiCss3, SiJavascript, SiDjango, SiFlask, SiBootstrap, SiTailwindcss, SiCplusplus, SiPython,
    SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiPandas, SiNumpy, SiR,
    SiGooglecloud, SiDocker, SiGit, SiGithub, SiFirebase, SiMongodb, SiMysql, SiMinio,
    SiFigma, SiCanva, SiPostman
} from "react-icons/si";
import { FaJava, FaPenNib, FaRegCalendarAlt, FaPuzzlePiece, FaMicrosoft, FaClock, FaBrain, FaChartBar, FaCode, FaCloud, FaUsers, FaUserTie, FaLightbulb, FaAws, FaComments, FaCog } from "react-icons/fa";


const skillCards = [
    {
        title: "Full-Stack Development",
        icon: FaCode,
        description: "Building scalable web applications with modern frontend and backend frameworks, including database integration.",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "Java", icon: FaJava },
            { name: "C", icon: SiCplusplus },
            { name: "C++", icon: SiCplusplus },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
            { name: "SQL", icon: SiMysql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Django", icon: SiDjango },
            { name: "Flask", icon: SiFlask },
            { name: "ReactJS", icon: SiReact },
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "Tailwind", icon: SiTailwindcss }
        ]
    },
    {
        title: "Data Science",
        icon: FaChartBar,
        description: "Analyzing and visualizing data, performing statistical analysis, and building data-driven insights.",
        skills: [
            { name: "NumPy", icon: SiNumpy },
            { name: "Pandas", icon: SiPandas },
            { name: "Matplotlib", icon: SiPython },
            { name: "R", icon: SiR },
            { name: "MATLAB", icon: FaBrain },
            { name: "SQL", icon: SiMysql },
            { name: "Power BI", icon: FaChartBar }
        ]
    },
    {
        title: "Machine Learning",
        icon: FaBrain,
        description: "Building predictive models, NLP systems, and intelligent applications using modern ML frameworks.",
        skills: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "SciKit Learn", icon: SiScikitlearn },
            { name: "OpenCV", icon: SiOpencv },
            { name: "NLP", icon: FaBrain }
        ]
    },
    {
        title: "Cloud",
        icon: FaCloud,
        description: "Cloud platforms and deployment tools for scalable, reliable applications.",
        skills: [
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "AWS", icon: FaAws },
            { name: "Docker", icon: SiDocker },
            { name: "Firebase", icon: SiFirebase },
            { name: "MinIO", icon: SiMinio }
        ]
    },
    {
        title: "Tools",
        icon: FaLightbulb,
        description: "Design, version control, and collaboration tools that support development.",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Postman", icon: SiPostman },
            { name: "Microsoft Office", icon: FaMicrosoft },
            { name: "Figma", icon: SiFigma },
            { name: "Canva", icon: SiCanva }
        ]
    },
    {
        title: "Soft Skills",
        icon: FaRegCalendarAlt,
        description: "Professional skills that help me manage projects, communicate effectively, and collaborate.",
        skills: [
            { name: "Team Collaboration", icon: FaUsers },
            { name: "Leadership", icon: FaUserTie },
            { name: "Problem Solving", icon: FaPuzzlePiece },
            { name: "Communication", icon: FaComments },
            { name: "Adaptability", icon: FaCog },
            { name: "Event Management", icon: FaRegCalendarAlt },
            { name: "Content Writing", icon: FaPenNib },
            { name: "Time Management", icon: FaClock }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white flex flex-col justify-center">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {skillCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{
                                scale: 1.1,
                                zIndex: 10,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderColor: "rgba(0, 216, 255, 0.6)",
                                boxShadow: "0 20px 40px -10px rgba(0, 216, 255, 0.3)",
                                transition: { duration: 0.2 }
                            }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-8 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col cursor-default"
                        >
                            {/* Decorative Corner Markers */}
                            <div className="absolute top-4 left-4 text-white/20 text-xl font-thin">+</div>
                            <div className="absolute top-4 right-4 text-white/20 text-xl font-thin">+</div>
                            <div className="absolute bottom-4 left-4 text-white/20 text-xl font-thin">+</div>
                            <div className="absolute bottom-4 right-4 text-white/20 text-xl font-thin">+</div>

                            {/* Center Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-white/10 text-white text-3xl group-hover:scale-110 transition-transform duration-300">
                                    <card.icon />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-center text-white mb-3">{card.title}</h3>
                            <p className="text-gray-400 text-center text-sm mb-8 px-4">{card.description}</p>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {card.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/20 hover:text-white hover:border-white/30 transition-all cursor-default"
                                    >
                                        <skill.icon className="text-sm" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
