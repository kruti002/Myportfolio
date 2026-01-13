import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes, FaBrain, FaFileAlt, FaAward } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiPython, SiTensorflow, SiFirebase, SiFastapi, SiGooglecloud, SiDocker, SiJavascript, SiGooglemaps, SiPostgresql, SiNumpy, SiPandas, SiHtml5, SiCss3, SiFlask, SiOpencv, SiKeras, SiFlutter, SiArduino, SiCplusplus } from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import bouldermoveImg from "../assets/bouldermove.png";
import stylesyncImg from "../assets/stylesync.png";
import patentImg from "../assets/patent.jpg";
import ecotrackImg from "../assets/ecotrack.jpeg";
import kisansandhanImg from "../assets/kissandhan.jpeg";

const projects = [
    {
        title: "Boulder Move",
        shortDescription: "A cloud-native multimodal trip planning system with custom transit routing and ML-based on-time arrival prediction.",
        fullDescription: "Boulder Move is an end-to-end smart multimodal trip planning system that computes realistic, context-aware routes by combining walking and public transit. The platform uses custom GTFS-based RAPTOR transit routing and OSMnx-powered pedestrian graphs instead of relying solely on Google Maps. Routes are enriched with real-time weather conditions and event-based congestion awareness, and evaluated using an XGBoost machine learning model that predicts the probability of on-time arrival. The system is deployed on Google Cloud, with the routing backend running on Compute Engine and the ML inference service hosted on Cloud Run using Dockerized pipelines.",
        technologies: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
            { name: "Python", icon: SiPython },
            { name: "React", icon: SiReact },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Docker", icon: SiDocker },
            { name: "OSMnx" },
            { name: "NetworkX" }
        ],
        links: {
            github: "https://github.com/kruti002/bouldermove_dcsc",
            demo: "#"
        },
        color: "from-blue-500 to-indigo-400",
        image: bouldermoveImg,
        features: [
            "Custom GTFS + RAPTOR engine for public transit routing with end-to-end walking + transit + walking itineraries",
            "Walking, driving, and biking routes powered by Google Maps API",
            "Real-time weather impact (OpenWeather API) and event congestion detection (Ticketmaster API)",
            "XGBoost-based on-time arrival prediction model deployed via Artifact Registry and Cloud Run using Cloud Build CI/CD",
            "Scalable PostgreSQL database hosted on Cloud SQL (GCP)"
        ]
    },
    {
        title: "StyleSync - Myntra HackerRamp",
        shortDescription: "AI-driven fashion platform featuring 3D virtual try-ons, skin tone color analysis, and community-driven trend forecasting.",
        fullDescription: "Experience a revolutionary approach to fashion with StyleSync. Developed for Myntra HackerRamp, this platform combines a 3D virtual try-on system using advanced computer vision models like DRM, MTM, and TFM with personalized skin tone color analysis. Python libraries are used to extract key color features from user images, which are then classified into specific seasonal palettes using Google's Gemini AI. Apparel recommendations are then accurately delivered using a ResNet50-based feature extraction pipeline. Additionally, the platform features a community-driven trend forecasting system where users influence latest trends through a voting system.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "Flask", icon: SiFlask },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Keras", icon: SiKeras },
            { name: "OpenCV", icon: SiOpencv },
            { name: "Pandas", icon: SiPandas },
            { name: "React", icon: SiReact }
        ],
        links: {
            github: "https://github.com/kruti002/Myntra-Hackerramp",
            demo: "#"
        },
        color: "from-purple-400 to-pink-300",
        image: stylesyncImg,
        isMobile: true,
        features: [
            "3D Virtual Try-On: Uses DRM, MTM, and TFM models for realistic clothing warping, pose transfer, and texture fusion",
            "Skin Tone Color Analysis: Automated analysis using MTCNN and Dlib to discover flattering color palettes",
            "Gemini AI Recommendations: Personalized fashion advice and textual content generation for users",
            "Trend-Centric Forecasting: Community voting system that dynamically influences AI-driven product recommendations",
            "Advanced Feature Extraction: ResNet50 and Vgg19 architectures for precise image and fashion processing"
        ]
    },
    {
        title: "Intelligent Yoga Pose Analysis",
        shortDescription: "AI-driven real-time yoga posture recognition and correction system using MediaPipe and XAI for transparent feedback.",
        fullDescription: "Developed a real-time yoga pose analysis system that identifies 33 body landmarks and classifies 82 different poses using a Random Forest model. The platform integrates Explainable UI (SHAP) to provide interpretable feedback, help practitioners understand specific misalignments. This core research has been published as a scientific paper, exploring the intersection of Computer Vision and Explainable AI for healthcare applications.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "MediaPipe" },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "OpenCV", icon: SiOpencv },
            { name: "SHAP (XAI)", icon: FaBrain },
            { name: "React", icon: SiReact }
        ],
        achievements: [
            { type: "Research Paper", text: "Published Research Paper on XAI-driven real-time analysis", link: "https://kuey.net/index.php/kuey/article/view/7384" }
        ],
        links: {
            github: "https://github.com/kruti002/RESEARCH_PAPER_1",
            demo: "https://kuey.net/index.php/kuey/article/view/7384"
        },
        color: "from-green-400 to-emerald-300",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
        features: [
            "Explainable AI (XAI): Integrates SHAP and LIME to provide transparent, human-readable feedback on pose accuracy",
            "Real-time keypoint detection for 33 body landmarks using MediaPipe and BlazePose",
            "Pose classification across 82 categories using a high-accuracy Random Forest model",
            "Transparent AI feedback using SHAP for interpretable correction suggestions",
            "Injury prevention through comparative analysis with ideal pose datasets",
            "Actionable real-time insights for virtual yoga training and self-practice"
        ]
    },
    {
        title: "Pipeline Traversing Robot",
        shortDescription: "Autonomous robotic system for multi-axis pipeline inspection with gas leak detection and obstacle avoidance.",
        fullDescription: "Designed and built an innovative robot capable of traversing pipelines horizontally and vertically using a unique combination of castor wheels and strong magnetic adhesion. This hardware-integrated system is engineered for industrial inspection, featuring real-time gas leakage detection and environmental monitoring. This mechanism and design are backed by a published Indian Utility Patent and an ongoing Design Patent.",
        technologies: [
            { name: "Arduino/C++", icon: SiArduino },
            { name: "Flutter", icon: SiFlutter },
            { name: "Python", icon: SiPython },
            { name: "C++", icon: SiCplusplus },
            { name: "Firebase", icon: SiFirebase },
            { name: "Hardware Integration" }
        ],
        achievements: [
            {
                type: "Utility Patent",
                text: "Appl. No: 202521045231 (India)",
                status: "Published",
                link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
            },
            {
                type: "Design Patent",
                text: "Appl. No: 458534-001",
                status: "Ongoing",
                link: "https://search.ipindia.gov.in/DesignApplicationStatus/"
            }
        ],
        links: {
            github: "https://github.com/kruti002/gas_leakage_detector_fyp",
            demo: "#"
        },
        color: "from-orange-500 to-yellow-400",
        image: patentImg,
        features: [
            "Vertical/Horizontal Traversal: Engineered magnetic adhesion and castor wheel mechanisms for multi-surface mobility",
            "Real-time Leak Detection: Integrated MQ-series gas sensors and DHT sensors for environmental safety monitoring",
            "Autonomous Navigation: Ultrasonic proximity sensors and imaging for real-time obstacle avoidance",
            "Mobile App Integration: Flutter-based mobile application for real-time data visualization",
            "System Monitoring: Integrated temperature and humidity logging via hardware-software handoff"
        ]
    },
    {
        title: "EcoTrack",
        shortDescription: "Cross-platform carbon footprint tracking app with gamification, OCR-based data entry, and personalized eco-insights.",
        fullDescription: "EcoTrack is a comprehensive Flutter based mobile application designed to help users monitor and reduce their carbon footprint through daily habit tracking. The app calculates emissions across four key categories: transportation, electricity consumption, diet, and waste generation using India-specific emission factors.The platform combines environmental awareness with gamification to encourage sustainable lifestyle choices.",
        technologies: [
            { name: "Flutter", icon: SiFlutter },
            { name: "Python", icon: SiPython },
            { name: "Flask", icon: SiFlask },
            { name: "Firebase", icon: SiFirebase },

        ],
        links: {
            github: "https://github.com/kruti002/carbon_emission",
            demo: "#"
        },
        color: "from-green-500 to-emerald-400",
        image: ecotrackImg,
        isMobile: true,
        features: [
            "Carbon Calculator: Tracks emissions from transportation (0.14 kg CO₂/km), electricity (0.82 kg CO₂/kWh), diet (1.25 kg CO₂/meal), and waste (0.1 kg CO₂/kg)",
            "OCR Data Entry: Upload receipts and bills for automatic carbon footprint data extraction using image recognition",
            "Gamified Leaderboard: Points based ranking system with top user showcase to encourage eco-friendly competition",
            "Interactive Insights: Real time carbon footprint breakdown with visual charts showing impact by category",
            "Eco Activities Hub: Personalized daily eco-friendly habit recommendations based on user behavior and mood",

        ]
    },
    {
        title: "Kisan Sandhan - FarmersPoint",
        shortDescription: "AI-powered agricultural platform with multilingual speech translation, ML crop recommendations, and government scheme integration.",
        fullDescription: "FarmersPoint (Kisan Sandhan) is a comprehensive agricultural technology platform developed for CodeShastra hackathon that empowers farmers through intelligent tools and multilingual accessibility. The platform features a real-time speech-to-text translation system supporting Indian languages like Marathi, enabling farmers to interact in their native tongue. It includes a machine learning-based crop recommendation engine that analyzes soil parameters (N, P, K) and environmental factors (temperature, humidity, rainfall) to suggest optimal crops. The system integrates automated tracking of government schemes like PM-Kisan, scrapes educational resources from official portals (NMSA, PMKSY), and processes agricultural policy documents, creating a one-stop solution for modern farming.",
        technologies: [
            { name: "Flutter", icon: SiFlutter },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Flask", icon: SiFlask },
            { name: "Python", icon: SiPython },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Scikit-learn" },
            { name: "Selenium" }
        ],
        links: {
            github: "https://github.com/kruti002/Codeshastra_Mishtidoi_",
            demo: "#"
        },
        color: "from-green-600 to-lime-400",
        image: kisansandhanImg,
        isMobile: true,
        features: [
            "Multilingual Speech Services: Real-time speech-to-text and translation supporting Indian regional languages using Google Speech Recognition and gTTS",
            "ML Crop Recommendation: Scikit-learn based prediction model analyzing soil nutrients and climate data to recommend optimal crops",
            "Government Scheme Integration: Automated PM-Kisan status tracking and eligibility checking through web scraping",
            "Educational Resource Hub: Selenium-powered scraper fetching agricultural policies, circulars, and notices from NMSA and PMKSY portals",
            "Document Processing: PDF analysis system for handling official agricultural reports and government notices",

        ]
    }

];

const ProjectCard = ({ project, setSelectedProject }) => {
    const cardRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = -(x - centerX) / 15;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            animate={{
                rotateX: rotate.x,
                rotateY: rotate.y,
                y: rotate.x !== 0 || rotate.y !== 0 ? -15 : 0,
                scale: rotate.x !== 0 || rotate.y !== 0 ? 1.05 : 1
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                duration: 0.1
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelectedProject(project)}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1200px"
            }}
            className="group relative bg-[#0a0a16] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/40 transition-shadow duration-300 flex flex-col h-full cursor-pointer"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />

            {/* Image Preview */}
            <div className="relative h-48 w-full overflow-hidden bg-black/40 border-b border-white/10">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] to-transparent opacity-60" />
            </div>

            <div className="p-8 flex flex-col h-full z-10" style={{ transform: "translateZ(30px)" }}>
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                        <FaCode className="text-2xl text-white" />
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={project.links.github}
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors text-xl"
                            title="View Code"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={project.links.demo}
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors text-xl"
                            title="Live Demo"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors">
                        {project.title}
                    </h3>
                    {project.achievements && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.achievements.map((achievement, idx) => (
                                <span key={idx} className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                                    {achievement.type.includes("Paper") ? <FaFileAlt /> : <FaAward />}
                                    {achievement.type}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:bg-white/10 transition-colors">
                            {tech.icon && <tech.icon className="text-sm" />}
                            {tech.name}
                        </span>
                    ))}
                </div>

                <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        const root = document.getElementById('root');
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            // Force repaint and hide content behind modal
            if (root) {
                root.style.filter = 'blur(0px)'; // Force repaint
                setTimeout(() => {
                    root.style.filter = '';
                }, 0);
            }
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
                        Projects
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} setSelectedProject={setSelectedProject} />
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && createPortal(
                <AnimatePresence>
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black z-[9998]"
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: '#000000',
                                zIndex: 9998,
                                transform: 'translateZ(0)',
                                willChange: 'opacity'
                            }}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 100 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a16] border border-white/20 rounded-3xl z-[9999] shadow-2xl"
                            style={{ zIndex: 9999 }}
                        >
                            {/* Project Image Section */}
                            <div className={`relative w-full ${selectedProject.isMobile ? 'min-h-[400px] md:min-h-[600px]' : 'min-h-[300px] md:min-h-[450px]'} bg-[#050505] flex items-center justify-center overflow-hidden border-b border-white/10`}>
                                {/* Subtle background glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-10`} />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative w-full h-full p-4 md:p-8 flex items-center justify-center ${selectedProject.isMobile ? 'py-12' : ''}`}
                                >
                                    <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1a1a2e] ${selectedProject.isMobile ? 'max-w-[280px] md:max-w-[320px] shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'max-w-4xl w-full'}`}>
                                        {selectedProject.isMobile && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a2e] rounded-b-xl z-20" />
                                        )}
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-auto block relative z-10"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12">
                                {/* Title and Description */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                                            {selectedProject.title}
                                        </h2>
                                    </div>

                                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                                        {selectedProject.fullDescription}
                                    </p>

                                    {/* Technology Tags with Icons */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + idx * 0.05 }}
                                                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-gray-200 border border-white/20"
                                            >
                                                {tech.icon && <tech.icon className="text-lg" />}
                                                {tech.name}
                                            </motion.span>
                                        ))}
                                    </div>
                                    {/* Achievements Section */}
                                    {selectedProject.achievements && (
                                        <div className="mb-8 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.05)]">
                                            <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                                                <FaAward className="text-2xl" />
                                                Recognition & Achievements
                                            </h3>
                                            <div className="space-y-4">
                                                {selectedProject.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start gap-4">
                                                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                                            {achievement.type.includes("Paper") ? <FaFileAlt /> : <FaAward />}
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <h4 className="font-bold text-white mb-1">{achievement.type}</h4>
                                                                {achievement.status && (
                                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                                                        {achievement.status}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-gray-400 text-sm leading-relaxed mb-2">
                                                                {achievement.text}
                                                            </p>
                                                            {achievement.link && (
                                                                <a
                                                                    href={achievement.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-indigo-400 text-xs font-semibold hover:underline flex items-center gap-1"
                                                                >
                                                                    View Here <FaExternalLinkAlt className="text-[10px]" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Key Features */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                                        Key Features
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedProject.features.map((feature, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + idx * 0.05 }}
                                                className="flex items-start gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors"
                                            >
                                                <div className="mt-1.5 flex-shrink-0">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.color}`}></div>
                                                </div>
                                                <span className="leading-relaxed text-sm">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        href={selectedProject.links.github}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-center"
                                    >
                                        <FaGithub className="text-xl" /> View Code
                                    </motion.a>
                                    <motion.a
                                        href={selectedProject.links.demo}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-1 px-6 py-4 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 text-center`}
                                    >
                                        <FaExternalLinkAlt className="text-xl" /> Check Live Site
                                    </motion.a>
                                </div>
                            </div>
                            {/* Close Button - Moved to bottom of Container for layering */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-[100] text-white/70 hover:text-white transition-all bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full p-3 border border-white/10 shadow-xl"
                            >
                                <FaTimes className="text-xl md:text-2xl" />
                            </button>
                        </motion.div>
                    </>
                </AnimatePresence>,
                document.body
            )}
        </section >
    );
};

export default Projects;
