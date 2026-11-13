import { motion } from "framer-motion";
import {
    SiReact, SiHtml5, SiCss3, SiJavascript, SiDjango, SiFlask, SiBootstrap, SiTailwindcss, SiCplusplus, SiPython,
    SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiPandas, SiNumpy, SiR,
    SiGooglecloud, SiDocker, SiGit, SiGithub, SiFirebase, SiMongodb, SiMysql, SiMinio,
    SiFigma, SiCanva, SiPostman, SiFastapi, SiPostgresql, SiKubernetes, SiAmazonwebservices,
    SiTypescript, SiNodedotjs, SiTerraform, SiLinux, SiPytest, SiRust, SiDuckdb
} from "react-icons/si";
import {
    FaJava, FaPenNib, FaRegCalendarAlt, FaPuzzlePiece, FaMicrosoft, FaClock,
    FaBrain, FaChartBar, FaCode, FaCloud, FaUsers, FaUserTie, FaLightbulb,
    FaAws, FaComments, FaCog, FaRobot, FaDatabase, FaProjectDiagram, FaServer, FaCogs, FaInfinity,
    FaLayerGroup, FaStream
} from "react-icons/fa";

const skillCards = [
    {
        title: "Agentic AI & Machine Learning",
        icon: FaBrain,
        description: "Designing autonomous agentic workflows, LLM reasoning architectures, RAG pipelines, and computer vision models.",
        skills: [
            { name: "LangGraph", icon: FaRobot },
            { name: "MCP (Model Context Protocol)", icon: FaLayerGroup },
            { name: "ReAct / Tool-Calling Agents", icon: FaRobot },
            { name: "RAG / LLMs", icon: FaBrain },
            { name: "Claude / Gemini", icon: FaRobot },
            { name: "Transformers", icon: FaBrain },
            { name: "PyTorch", icon: SiPytorch },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Scikit-Learn", icon: SiScikitlearn },
            { name: "OpenCV", icon: SiOpencv },
            { name: "NLP", icon: FaBrain },
            { name: "Deep Learning", icon: FaProjectDiagram },
            { name: "XGBoost", icon: FaBrain },
            { name: "Reinforcement Learning", icon: FaRobot },
            { name: "NumPy / Pandas", icon: SiPandas }
        ]
    },
    {
        title: "Full-Stack Development",
        icon: FaCode,
        description: "Building scalable web applications, microservices, and reactive high-performance user interfaces.",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Rust", icon: SiRust },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "React.js", icon: SiReact },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Flask", icon: SiFlask },
            { name: "Django", icon: SiDjango },
            { name: "REST APIs", icon: FaServer },
            { name: "SSE (Server-Sent Events)", icon: FaStream },
            { name: "Java", icon: FaJava },
            { name: "C / C++", icon: SiCplusplus },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "HTML5 / CSS3", icon: SiHtml5 }
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: FaCloud,
        description: "Cloud-native infrastructure as code, serverless microservices, and containerized CI/CD orchestration.",
        skills: [
            { name: "Terraform", icon: SiTerraform },
            { name: "AWS (S3, SQS, EC2)", icon: SiAmazonwebservices },
            { name: "Google Cloud (GCP)", icon: SiGooglecloud },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "CI / CD Pipelines", icon: FaInfinity },
            { name: "Pytest", icon: SiPytest },
            { name: "Linux", icon: SiLinux },
            { name: "Cloud Run & Build", icon: SiGooglecloud },
            { name: "Git / GitHub", icon: SiGit }
        ]
    },
    {
        title: "Databases & Data Systems",
        icon: FaDatabase,
        description: "Relational, NoSQL, and document stores supporting low-latency retrieval, snapshots, and automated analytics.",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "AWS DocumentDB", icon: SiAmazonwebservices },
            { name: "DuckDB", icon: SiDuckdb },
            { name: "Firebase", icon: SiFirebase },
            { name: "SQL", icon: SiMysql },
            { name: "R", icon: SiR },
            { name: "Power BI", icon: FaChartBar },
            { name: "MinIO", icon: SiMinio }
        ]
    },
    {
        title: "Core CS & Methodologies",
        icon: FaLightbulb,
        description: "Computer science foundations, software engineering design principles, and developer toolkits.",
        skills: [
            { name: "Data Structures & Algos", icon: FaCode },
            { name: "Software Engineering", icon: FaServer },
            { name: "Operating Systems", icon: FaCogs },
            { name: "Deep Learning Theory", icon: FaBrain },
            { name: "Postman", icon: SiPostman },
            { name: "Figma", icon: SiFigma },
            { name: "Canva", icon: SiCanva },
            { name: "Microsoft Office", icon: FaMicrosoft }
        ]
    },
    {
        title: "Leadership & Collaboration",
        icon: FaRegCalendarAlt,
        description: "Cross-functional collaboration, technical communication, and event management.",
        skills: [
            { name: "Team Collaboration", icon: FaUsers },
            { name: "Leadership", icon: FaUserTie },
            { name: "Problem Solving", icon: FaPuzzlePiece },
            { name: "Technical Communication", icon: FaComments },
            { name: "Stakeholder Management", icon: FaUserTie },
            { name: "Event Coordination", icon: FaRegCalendarAlt },
            { name: "Adaptability", icon: FaCog },
            { name: "Time Management", icon: FaClock }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white flex flex-col justify-center">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {skillCards.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.1,
                                zIndex: 10,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderColor: "rgba(0, 216, 255, 0.6)",
                                boxShadow: "0 20px 40px -10px rgba(0, 216, 255, 0.3)",
                                transition: { duration: 0.2 }
                            }}
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
