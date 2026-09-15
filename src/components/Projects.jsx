import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes, FaBrain, FaFileAlt, FaAward, FaShieldAlt, FaLayerGroup, FaServer, FaRobot } from "react-icons/fa";
import {
    SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiPython, SiTensorflow, SiFirebase, SiFastapi,
    SiGooglecloud, SiDocker, SiJavascript, SiGooglemaps, SiPostgresql, SiNumpy, SiPandas, SiHtml5,
    SiCss3, SiFlask, SiOpencv, SiKeras, SiFlutter, SiArduino, SiCplusplus, SiAmazonwebservices,
    SiScikitlearn, SiPytorch, SiTypescript, SiTerraform, SiGrafana, SiLinux, SiPytest
} from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import chronobaseImg from "../assets/chronobase.png";
import bouldermoveImg from "../assets/bouldermove.png";
import stylesyncImg from "../assets/stylesync.png";
import patentImg from "../assets/patent.jpg";
import ecotrackImg from "../assets/ecotrack.jpeg";
import kisansandhanImg from "../assets/kissandhan.jpeg";

const categories = [
    "All",
    "Agentic AI & ML",
    "Cloud & Distributed",
    "Full Stack & Mobile",
    "IoT & Robotics"
];

const projects = [
    {
        title: "ChronoBase: Git for Databases",
        category: "Cloud & Distributed",
        badge: "Featured Cloud Architecture",
        shortDescription: "Cloud-native data versioning platform supporting Git-like snapshots, branching, and point-in-time recovery.",
        fullDescription: "ChronoBase is a distributed, cloud-native data versioning platform engineered to bring Git semantics to database systems. It supports atomic point-in-time snapshots, zero-copy database branching, and state rollbacks. The cloud infrastructure is automated via Terraform, orchestrating AWS S3, SQS, EventBridge, and DocumentDB for resilient asynchronous snapshot processing. Backend microservices are provisioned on EC2 with encrypted and compressed MongoDB ingestion and multi-tenant isolation, monitored in real time via custom Grafana dashboards for latency, resource usage, and error metrics.",
        technologies: [
            { name: "Terraform", icon: SiTerraform },
            { name: "AWS S3 & SQS", icon: SiAmazonwebservices },
            { name: "EventBridge", icon: SiAmazonwebservices },
            { name: "DocumentDB", icon: SiAmazonwebservices },
            { name: "MongoDB", icon: SiMongodb },
            { name: "EC2 & Linux", icon: SiLinux },
            { name: "Grafana", icon: SiGrafana },
            { name: "JavaScript / Node", icon: SiNodedotjs },
            { name: "Docker", icon: SiDocker }
        ],
        links: {
            github: "https://github.com/kruti002/ChronoBase",
            demo: "https://github.com/kruti002/ChronoBase"
        },
        color: "from-blue-600 via-indigo-600 to-cyan-500",
        image: chronobaseImg,
        features: [
            "Git-like database semantics: Point-in-time snapshots, branching, and seamless rollback of states",
            "Infrastructure as Code: Automated AWS stack (S3, SQS, EventBridge, DocumentDB) using Terraform",
            "Resilient ingestion: Backend services on EC2 with encrypted and compressed MongoDB multi-tenant storage",
            "Observability: Real-time Grafana telemetry dashboards tracking compute, queues, and query latency"
        ]
    },
    {
        title: "Agentic AI Cloud Security Platform",
        category: "Agentic AI & ML",
        badge: "AI Security Pipeline",
        shortDescription: "Hybrid cloud security analytics pipeline and anomaly detection system with a LangGraph AI agent for automated SOC incident workflows.",
        fullDescription: "Orchestrated a hybrid cloud security analytics pipeline processing LANL Windows authentication logs and synthetic cloud telemetry stored in AWS S3. Trained a deep autoencoder anomaly detection model in PyTorch to learn baseline authentication behavior and detect abnormal login patterns and potential lateral movement achieving ROC–AUC of 0.83. Modeled user-machine authentication events as a bipartite graph and developed a LangGraph based AI agent to generate SOC incident summaries, assign severity scores, and automate response workflows.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "LangGraph", icon: FaBrain },
            { name: "PyTorch", icon: SiPytorch },
            { name: "AWS S3", icon: SiAmazonwebservices },
            { name: "Scikit-learn", icon: SiScikitlearn },
            { name: "FastAPI", icon: SiFastapi },
            { name: "React", icon: SiReact },
            { name: "Docker", icon: SiDocker }
        ],
        links: {
            github: "https://github.com/kruti002/Secuirity_Pipeline_Using_Agentic_AI",
            demo: "https://github.com/kruti002/Secuirity_Pipeline_Using_Agentic_AI"
        },
        color: "from-cyan-500 to-indigo-600",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
        features: [
            "Hybrid cloud security analytics pipeline processing LANL Windows logs and AWS S3 telemetry",
            "Deep autoencoder anomaly detection model detecting lateral movement (ROC–AUC of 0.83)",
            "Bipartite graph modeling of user-machine authentication events",
            "LangGraph AI agent automating SOC incident summaries, severity scoring, and workflow responses"
        ]
    },
    {
        title: "BoulderMove: Smart Multimodal Trip Planner",
        category: "Cloud & Distributed",
        badge: "Cloud-Native & ML",
        shortDescription: "Cloud-native multimodal trip planning platform combining GTFS/RAPTOR transit routing, OSMnx pedestrian routing, and ML arrival prediction.",
        fullDescription: "BoulderMove is an end-to-end smart multimodal trip planning system that computes realistic, context-aware routes by combining walking and public transit. The platform uses custom GTFS-based RAPTOR transit routing and OSMnx-powered pedestrian graphs with Pytest validation. Routes are enriched with real-time weather conditions and event-based congestion awareness, and evaluated using an XGBoost machine learning model on Google Cloud Run that predicts on-time arrival with 87% accuracy. Deployed with Netlify frontend, Cloud Build CI/CD, and Cloud SQL.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "React", icon: SiReact },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Docker", icon: SiDocker },
            { name: "Pytest", icon: SiPytest },
            { name: "OSMnx" }
        ],
        links: {
            github: "https://github.com/kruti002/bouldermove_dcsc",
            demo: "https://github.com/kruti002/bouldermove_dcsc"
        },
        color: "from-blue-500 to-indigo-400",
        image: bouldermoveImg,
        features: [
            "Custom GTFS + RAPTOR engine for public transit routing with end-to-end multi-modal itineraries",
            "Decoupled XGBoost inference service on Google Cloud Run achieving 87% on-time prediction accuracy",
            "Real-time weather impact (OpenWeather API) and event congestion detection (Ticketmaster API)",
            "Netlify frontend and containerized backend services with Cloud Build CI/CD and Cloud SQL"
        ]
    },
    {
        title: "StyleSync: AI-Driven Fashion Platform",
        category: "Agentic AI & ML",
        badge: "Myntra HackerRamp Finalist",
        shortDescription: "AI-driven fashion personalization platform featuring 3D virtual try-ons, skin tone analysis, and trend forecasting.",
        fullDescription: "Developed for Myntra HackerRamp WeForShe 2024 (Top 70 out of 29,000+ teams), StyleSync combines a 3D virtual try-on pipeline integrating DRM, MTM, and TFM models with VGG19 to generate high-fidelity clothing overlays across poses while preserving garment textures. Features MTCNN and OpenCV skin-tone color analysis for flattering palette matching (90% accuracy), ResNet50 fashion embeddings, and community-driven trend forecasting.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Keras", icon: SiKeras },
            { name: "OpenCV", icon: SiOpencv },
            { name: "Flask", icon: SiFlask },
            { name: "Pandas", icon: SiPandas },
            { name: "React", icon: SiReact }
        ],
        achievements: [
            { type: "Hackathon Award", text: "Top 70 of 29,000+ teams in Myntra HackerRamp WeForShe 2024" }
        ],
        links: {
            github: "https://github.com/kruti002/Myntra-Hackerramp",
            demo: "https://github.com/kruti002/Myntra-Hackerramp"
        },
        color: "from-purple-400 to-pink-300",
        image: stylesyncImg,
        isMobile: true,
        features: [
            "3D Virtual Try-On: Uses DRM, MTM, and TFM models for realistic garment warping, pose transfer, and texture fusion",
            "Skin Tone Analysis: MTCNN and Dlib vision pipeline achieving 90% accuracy in personalized color palette matching",
            "Trend Forecasting: ResNet50 embeddings coupled with dynamic community voting and recommendation generation",
            "VGG19 Feature Preservation: High-definition texture preservation during multi-angle pose rendering"
        ]
    },
    {
        title: "IdentityVault: AWS IAM & Access Vault",
        category: "Cloud & Distributed",
        badge: "Cloud Security",
        shortDescription: "Cloud identity, IAM role-based access management, and token exchange architecture built on AWS.",
        fullDescription: "IdentityVault is a secure cloud identity and access management solution built on AWS. It provides automated provisioning of least-privilege IAM policies, fine-grained Role-Based Access Control (RBAC), and authentication delegation via AWS Cognito. Features S3 encrypted storage for credential assets, CloudWatch audit logging, and automated compliance verification.",
        technologies: [
            { name: "AWS IAM", icon: SiAmazonwebservices },
            { name: "AWS Cognito", icon: SiAmazonwebservices },
            { name: "AWS S3", icon: SiAmazonwebservices },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "CloudWatch", icon: SiAmazonwebservices }
        ],
        links: {
            github: "https://github.com/kruti002/IdentityVault_Using_Aws",
            demo: "https://github.com/kruti002/IdentityVault_Using_Aws"
        },
        color: "from-amber-500 via-orange-600 to-indigo-700",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
        features: [
            "Granular RBAC and least-privilege AWS IAM policy synthesis",
            "User authentication and multi-factor authorization flows via AWS Cognito",
            "Encrypted cloud asset storage with AWS S3 server-side encryption",
            "Comprehensive security auditing and access anomaly alerting with CloudWatch"
        ]
    },
    {
        title: "Stock Portfolio & LSTM Forecasting",
        category: "Agentic AI & ML",
        badge: "Quantitative AI",
        shortDescription: "Quantitative stock analytics and time series forecasting engine using LSTM neural networks and TypeScript.",
        fullDescription: "Engineered a financial analytics platform that processes corporate transaction logs, computes order-to-trade ratios, and models price volatility around corporate earnings announcements. Integrates an LSTM deep learning model trained on historical equity data that detects pre-earnings gains (5-7%) and post-earnings corrections (2-3%), paired with a reactive TypeScript analytics dashboard.",
        technologies: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "Python", icon: SiPython },
            { name: "PyTorch / LSTM", icon: SiPytorch },
            { name: "React", icon: SiReact },
            { name: "Pandas", icon: SiPandas },
            { name: "Tailwind CSS", icon: SiTailwindcss }
        ],
        links: {
            github: "https://github.com/kruti002/Stock_portfolio",
            demo: "https://github.com/kruti002/Stock_portfolio"
        },
        color: "from-emerald-500 to-teal-700",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
        features: [
            "LSTM time-series neural network capturing pre and post earnings equity price movements",
            "Real-time analytics engine calculating order-to-trade ratios and monitoring discrepancies",
            "Interactive TypeScript dashboard visualizing volatility, returns, and allocation breakdown",
            "Automated compliance report generation reducing manual analytical turnaround by 50%"
        ]
    },
    {
        title: "Intelligent Yoga Pose Analysis (XAI)",
        category: "Agentic AI & ML",
        badge: "Published Research Paper",
        shortDescription: "Real-time AI posture classification and biomechanical feedback system using MediaPipe and Explainable AI (SHAP).",
        fullDescription: "Developed an AI yoga posture recognition and correction system that identifies 33 body landmarks and classifies 82 distinct poses using Random Forest and Deep Learning architectures. Integrates Explainable AI (SHAP & LIME) to provide transparent, interpretable guidance on joint angles and misalignments to prevent injury. Published as scientific research in Educational Administration: Theory and Practice (2024).",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "MediaPipe" },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "OpenCV", icon: SiOpencv },
            { name: "SHAP (XAI)", icon: FaBrain },
            { name: "React", icon: SiReact }
        ],
        achievements: [
            { type: "Research Paper", text: "Published Research Paper in Educational Administration: Theory & Practice (2024)", link: "https://kuey.net/index.php/kuey/article/view/7384" }
        ],
        links: {
            github: "https://github.com/kruti002/RESEARCH_PAPER_1",
            demo: "https://kuey.net/index.php/kuey/article/view/7384"
        },
        color: "from-green-400 to-emerald-300",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
        features: [
            "Explainable AI (XAI): Integrates SHAP to deliver transparent, human-readable correction advice",
            "Real-time 33-point anatomical landmark extraction with MediaPipe and BlazePose",
            "High-precision classification across 82 yoga poses using Random Forest classifiers",
            "Biomechanical misalignment analysis for injury prevention and virtual coaching"
        ]
    },
    {
        title: "HazardScout: Gas Leak Inspection Robot",
        category: "IoT & Robotics",
        badge: "Utility Patent Published",
        shortDescription: "Autonomous robotic system for multi-axis pipeline inspection with gas leakage detection and magnetic adhesion.",
        fullDescription: "Designed and built an innovative hardware-integrated robot capable of traversing pipelines horizontally and vertically using a combination of castor wheels and strong magnetic adhesion. Engineered for industrial inspection with real-time gas leakage detection (MQ series sensors), ultrasonic obstacle avoidance, and telemetry streaming to a Flutter mobile app. Backed by a published Indian Utility Patent (202521045231) and design patent (458534-001).",
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
                text: "Appl. No: 202521045231 (India) - Published",
                status: "Published",
                link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
            },
            {
                type: "Design Patent",
                text: "Appl. No: 458534-001 (India) - Filed",
                status: "Filed",
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
            "Autonomous Navigation: Ultrasonic proximity sensors for real-time obstacle avoidance",
            "Mobile App Integration: Flutter-based mobile application for real-time data telemetry visualization"
        ]
    },
    {
        title: "EcoTrack: Carbon Footprint Tracker",
        category: "Full Stack & Mobile",
        badge: "Sustainable Tech",
        shortDescription: "Gamified carbon footprint tracking app with OCR data entry, emission analytics, and eco habit insights.",
        fullDescription: "EcoTrack is a Flutter mobile application designed to help users monitor and reduce their environmental impact. Computes emissions across transportation, electricity, diet, and waste generation using India-specific emission coefficients. Features receipt OCR extraction, visual chart breakdowns, and a competitive gamified leaderboard.",
        technologies: [
            { name: "Flutter", icon: SiFlutter },
            { name: "Python", icon: SiPython },
            { name: "Flask", icon: SiFlask },
            { name: "Firebase", icon: SiFirebase }
        ],
        links: {
            github: "https://github.com/kruti002/carbon_emission",
            demo: "https://github.com/kruti002/carbon_emission"
        },
        color: "from-green-500 to-emerald-400",
        image: ecotrackImg,
        isMobile: true,
        features: [
            "Carbon Calculator: Real-time calculation across transit, electricity, diet, and waste categories",
            "OCR Data Entry: Upload receipts and utility bills for automatic carbon impact extraction",
            "Gamified Leaderboard: Points-based eco ranking system to motivate sustainable lifestyle habits",
            "Interactive Insights: Visual analytics depicting monthly emission patterns and reduction tips"
        ]
    },
    {
        title: "Kisan Sandhan - FarmersPoint",
        category: "Full Stack & Mobile",
        badge: "CodeShastra Hackathon",
        shortDescription: "Multilingual agricultural technology platform with speech translation, ML crop recommendations, and scheme tracking.",
        fullDescription: "FarmersPoint (Kisan Sandhan) is an agricultural platform empowering farmers with intelligent tools and multilingual accessibility. Features real-time speech-to-text in regional Indian languages (Marathi, Hindi), an ML crop recommendation model evaluating soil nutrients (NPK) and weather, and automated web scrapers for government scheme tracking (PM-Kisan, NMSA).",
        technologies: [
            { name: "Flutter", icon: SiFlutter },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Flask", icon: SiFlask },
            { name: "Python", icon: SiPython },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Scikit-learn", icon: SiScikitlearn }
        ],
        links: {
            github: "https://github.com/kruti002/Codeshastra_Mishtidoi_",
            demo: "https://github.com/kruti002/Codeshastra_Mishtidoi_"
        },
        color: "from-green-600 to-lime-400",
        image: kisansandhanImg,
        isMobile: true,
        features: [
            "Multilingual Speech Interface: Real-time speech-to-text and translation in regional Indian languages",
            "ML Crop Recommendation: Soil nutrient and meteorological predictive modeling for optimal crop yields",
            "Government Scheme Tracking: Automated PM-Kisan portal updates and document verification",
            "Agricultural Knowledge Base: Selenium scraper extracting official circulars and farming advisories"
        ]
    },
    {
        title: "Hack-a-thletes LOC: Supply Chain Hub",
        category: "Full Stack & Mobile",
        badge: "LOC Hackathon",
        shortDescription: "Logistics tracking and supply chain management platform created for the LOC Hackathon.",
        fullDescription: "Developed for the LOC (Lines of Code) Hackathon, this platform streamlines consignment logistics, inventory routing, and delivery milestone notifications with an intuitive, responsive management portal.",
        technologies: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
            { name: "React", icon: SiReact },
            { name: "Node.js", icon: SiNodedotjs }
        ],
        achievements: [
            { type: "Hackathon", text: "LOC (Lines of Code) Hackathon Project" }
        ],
        links: {
            github: "https://github.com/kruti002/Hack-a-thletes_LOC1",
            demo: "https://github.com/kruti002/Hack-a-thletes_LOC1"
        },
        color: "from-blue-500 via-cyan-500 to-teal-400",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
        features: [
            "Consignment and shipment tracking with milestone status visualization",
            "Automated delivery dispatch schedules and inventory management",
            "Responsive logistics operations interface built for desktop and mobile",
            "Engineered and presented at the LOC Hackathon"
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
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            ref={cardRef}
            animateStyle={{
                rotateX: rotate.x,
                rotateY: rotate.y,
                y: rotate.x !== 0 || rotate.y !== 0 ? -15 : 0,
                scale: rotate.x !== 0 || rotate.y !== 0 ? 1.03 : 1
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-transparent to-transparent opacity-80" />

                {project.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-[10px] font-bold text-cyan-300">
                        {project.badge}
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8 flex flex-col h-full z-10" style={{ transform: "translateZ(30px)" }}>
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                        <FaCode className="text-xl text-white" />
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors text-xl p-1"
                            title="View Code on GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-cyan-400 transition-colors text-lg p-1"
                            title="Live Demo or Details"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
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

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:bg-white/10 transition-colors">
                            {tech.icon && <tech.icon className="text-xs" />}
                            {tech.name}
                        </span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                            +{project.technologies.length - 5}
                        </span>
                    )}
                </div>

                <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all pt-2 border-t border-white/5">
                    View Project Details
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    // Prevent body scroll when modal is open
    useEffect(() => {
        const root = document.getElementById('root');
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            if (root) {
                root.style.filter = 'blur(0px)';
                setTimeout(() => {
                    root.style.filter = '';
                }, 0);
            }
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
                        Projects & Repositories
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6">
                        Explore open-source systems, cloud-native architectures, autonomous agentic AI, and research applications.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-10" />

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                                    activeCategory === cat
                                        ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-400/40"
                                        : "text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white border border-white/5"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} setSelectedProject={setSelectedProject} />
                        ))}
                    </AnimatePresence>
                </motion.div>
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
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 80 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 80 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a16] border border-white/20 rounded-3xl z-[9999] shadow-2xl custom-scrollbar"
                        >
                            {/* Project Image Section */}
                            <div className={`relative w-full ${selectedProject.isMobile ? 'min-h-[360px] md:min-h-[500px]' : 'min-h-[260px] md:min-h-[380px]'} bg-[#050505] flex items-center justify-center overflow-hidden border-b border-white/10`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-15`} />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative w-full h-full p-4 md:p-8 flex items-center justify-center ${selectedProject.isMobile ? 'py-10' : ''}`}
                                >
                                    <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1a1a2e] ${selectedProject.isMobile ? 'max-w-[260px] md:max-w-[300px] shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'max-w-3xl w-full'}`}>
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
                            <div className="p-6 md:p-10">
                                <div className="mb-8">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                                            {selectedProject.title}
                                        </h2>
                                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                                            {selectedProject.category}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                                        {selectedProject.fullDescription}
                                    </p>

                                    {/* Technology Tags */}
                                    <div className="flex flex-wrap gap-2.5 mb-8">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-gray-200 border border-white/20"
                                            >
                                                {tech.icon && <tech.icon className="text-sm" />}
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Achievements Section */}
                                    {selectedProject.achievements && (
                                        <div className="mb-8 p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.05)]">
                                            <h3 className="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
                                                <FaAward className="text-xl" />
                                                Recognition & Achievements
                                            </h3>
                                            <div className="space-y-3">
                                                {selectedProject.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                                                            {achievement.type.includes("Paper") ? <FaFileAlt /> : <FaAward />}
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <h4 className="font-bold text-white text-sm">{achievement.type}</h4>
                                                                {achievement.status && (
                                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                                                        {achievement.status}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-gray-400 text-xs leading-relaxed">
                                                                {achievement.text}
                                                            </p>
                                                            {achievement.link && (
                                                                <a
                                                                    href={achievement.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-indigo-400 text-xs font-semibold hover:underline flex items-center gap-1 mt-1"
                                                                >
                                                                    View Publication <FaExternalLinkAlt className="text-[10px]" />
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
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                                        Key Architecture Highlights
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5"
                                            >
                                                <div className="mt-1 flex-shrink-0">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.color}`}></div>
                                                </div>
                                                <span className="leading-relaxed text-xs md:text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-center text-sm"
                                    >
                                        <FaGithub className="text-lg" /> View Code on GitHub
                                    </motion.a>
                                    <motion.a
                                        href={selectedProject.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 text-center text-sm`}
                                    >
                                        <FaExternalLinkAlt className="text-base" /> Check Live / Demo
                                    </motion.a>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-[100] text-white/70 hover:text-white transition-all bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full p-2.5 border border-white/10 shadow-xl"
                            >
                                <FaTimes className="text-lg" />
                            </button>
                        </motion.div>
                    </>
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Projects;
