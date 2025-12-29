import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaTrophy, FaHandsHelping, FaBrain, FaUsers, FaHeart, FaLightbulb } from "react-icons/fa";

const achievements = [
    {
        title: "NSS Club Volunteer",
        description: "Volunteered at D J. Sanghvi College, organizing blood donation and beach cleaning events",
        icon: FaHandsHelping,
        color: "from-teal-400 to-cyan-500",
        category: "Volunteering"
    },
    {
        title: "Trinity Fest - Events Coordinator",
        description: "Co-Committee Member organizing the Trinity college fest and carnival, responsible for logistics, student engagement, and event management",
        icon: FaUsers,
        color: "from-pink-500 to-rose-500",
        category: "Leadership"
    },
    {
        title: "Synapse ML Club - Mentee",
        description: "Machine Learning Mentee at DJSCE, participating in hands-on projects and collaborating on research initiatives",
        icon: FaBrain,
        color: "from-indigo-400 to-purple-500",
        category: "Learning"
    },
    {
        title: "Robin Hood Army Volunteer",
        description: "Volunteering at a zero-funds organization redistributing surplus food to the less fortunate and providing education to underprivileged children (2024 - Present)",
        icon: FaHeart,
        color: "from-red-400 to-rose-500",
        category: "Volunteering"
    },
    {
        title: "ACM Internship Fair - OC Member",
        description: "Appointed as OC Member at DJSCE, responsible for onboarding companies and facilitating coordination between them and students",
        icon: FaUsers,
        color: "from-green-400 to-emerald-500",
        category: "Leadership"
    },
    {
        title: "Logithon Hackathon - Top 6",
        description: "Secured a spot in the top 6 out of 200 teams organized by Softlink Global Pvt. Ltd. in collaboration with Datta Meghe College of Engineering",
        icon: FaTrophy,
        color: "from-purple-400 to-pink-500",
        category: "Hackathon"
    },
    {
        title: "JPMorgan Chase - College to Corporate",
        description: "Successfully completed the External Engagement Program, bridging academia with the corporate world",
        icon: FaLightbulb,
        color: "from-blue-400 to-cyan-500",
        category: "Program"
    },
    {
        title: "Myntra HackerRamp WeForShe'24",
        description: "Entered the pre-final round, ranking in the top 70 teams out of 29,000+ registrations",
        icon: FaTrophy,
        color: "from-yellow-400 to-orange-500",
        category: "Hackathon"
    }
];

const PinWithProximity = ({ achievement, index, smoothProgress, targetProgress, roadX }) => {
    // Calculate distance between car and this pin
    const proximity = useTransform(smoothProgress, (p) => {
        const distance = Math.abs(p - targetProgress);
        return Math.max(0, 1 - distance * 10); // 1 when car is exactly at pin, 0 when far
    });

    const scale = useTransform(proximity, [0, 1], [1, 1.4]);
    const glow = useTransform(proximity, [0, 1], [0.4, 1]);

    // Determine horizontal distance to the card container edge
    // roadX is relative to the 400px center container (0-400)
    const cardEdgeDistance = index % 2 === 0 ? roadX : 400 - roadX;

    // Use percentage for left positioning to stay accurate if container scales
    const leftPercent = (roadX / 400) * 100;

    return (
        <motion.div
            initial={{ scale: 0, y: 50 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ left: `${leftPercent}%` }}
        >
            {/* Intensity Glow */}
            <motion.div
                style={{ opacity: glow, scale }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color} blur-xl -z-10`}
            />

            {/* Pin Head */}
            <motion.div
                style={{ scale }}
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${achievement.color} shadow-[0_0_20px_rgba(255,255,255,0.4)] border-4 border-[#0f172a] z-20 flex items-center justify-center`}
            >
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            </motion.div>

            {/* Pin Stick (Deep into road) */}
            <div className="w-1.5 h-10 bg-white/40 -mt-1 z-10 rounded-full" />

            {/* Base Shadow on Road */}
            <div className="w-6 h-2 bg-black/40 rounded-full blur-sm -mt-1" />

            {/* Connector Line to Content (Dynamic Width) */}
            <div
                className={`absolute top-4 h-[2px] bg-gradient-to-r ${index % 2 === 0 ? 'from-transparent to-cyan-500' : 'from-purple-500 to-transparent'}`}
                style={{
                    width: `${cardEdgeDistance + 80}px`,
                    [index % 2 === 0 ? 'right' : 'left']: '15px'
                }}
            />
        </motion.div>
    );
};

const Achievements = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- Configuration ---
    const roadPathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (roadPathRef.current) {
            setPathLength(roadPathRef.current.getTotalLength());
        }
    }, [roadPathRef]);

    // 1. Non-linear scroll progress (Gravity/Acceleration feel)
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 1,
        restDelta: 0.001
    });

    const pathHeight = achievements.length * 200 + 400; // Extended height for smoother start/end
    const waveAmplitude = 150; // Width of the wave
    const wavePeriod = 800;    // Length of one full wave cycle (increased for smoother curves)

    // --- Car Physics & Position ---
    const y = useTransform(smoothProgress, [0, 1], [0, pathHeight]);

    // 2. Sample Position and Angle from SVG Path
    const x = useTransform(smoothProgress, (p) => {
        if (!roadPathRef.current || pathLength === 0) return 200;
        const point = roadPathRef.current.getPointAtLength(p * pathLength);
        return point.x;
    });

    const carY = useTransform(smoothProgress, (p) => {
        if (!roadPathRef.current || pathLength === 0) return 0;
        const point = roadPathRef.current.getPointAtLength(p * pathLength);
        return point.y;
    });

    const rotate = useTransform(smoothProgress, (p) => {
        if (!roadPathRef.current || pathLength === 0) return 0;
        // Sample two points very close together to find the tangent/slope
        const step = 0.001;
        const p1 = Math.max(0, p - step);
        const p2 = Math.min(1, p + step);
        const pt1 = roadPathRef.current.getPointAtLength(p1 * pathLength);
        const pt2 = roadPathRef.current.getPointAtLength(p2 * pathLength);

        const angle = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
        return angle * (180 / Math.PI) + 90; // +90 to align car head-on
    });

    // 3. Road perspective width animation
    const roadWidth = useTransform(smoothProgress, [0, 1], [40, 80]);


    // --- Generate High-Resolution Smooth Path ---
    const generatePathInfo = () => {
        let path = "M 200 40";
        const steps = 5; // High resolution for buttery smooth curves
        for (let i = 40; i <= pathHeight; i += steps) {
            const currentY = i;
            const currentX = 200 - waveAmplitude * Math.sin(2 * Math.PI * (currentY / wavePeriod));
            path += ` L ${currentX} ${currentY}`;
        }
        return path;
    };
    const pathData = generatePathInfo();

    return (
        <section id="achievements" ref={containerRef} className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                        Achievements & Activities
                    </h2>
                    <p className="text-gray-400 text-lg">My journey beyond academics</p>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Main Timeline Container - Winding Road */}
                <div className="relative mt-20" style={{ height: `${pathHeight}px` }}>

                    {/* Winding Road SVG (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-full max-w-[400px] hidden md:block" style={{ transform: 'translateX(-50%)' }}>
                        {/* Start Sign Marker */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-50"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-colors rounded-full" />
                                <div className="relative px-6 py-1.5 rounded-full bg-[#0a0a16]/80 border border-cyan-500/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                    <span className="text-[11px] font-black tracking-[0.4em] text-cyan-300 uppercase pointer-events-none">
                                        Start
                                    </span>
                                </div>
                                <div className="w-[1px] h-6 bg-gradient-to-b from-cyan-500 to-transparent mx-auto" />
                            </div>
                        </motion.div>
                        <svg
                            className="w-full h-full overflow-visible"
                            viewBox={`0 0 400 ${pathHeight}`}
                            preserveAspectRatio="none"
                            shapeRendering="geometricPrecision"
                        >
                            <defs>
                                <linearGradient id="roadBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="roadBorderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
                                    <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.8 }} />
                                    <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.8 }} />
                                </linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <mask id="fadeMask">
                                    <rect width="400" height={pathHeight} fill="url(#maskGradient)" />
                                    <linearGradient id="maskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                                        <stop offset="85%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                                    </linearGradient>
                                </mask>
                            </defs>

                            {/* Road Body (Dynamic Stroke Width) */}
                            <motion.path
                                ref={roadPathRef}
                                d={pathData}
                                stroke="url(#roadBorderGradient)"
                                strokeWidth={roadWidth}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.6 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                style={{ filter: 'url(#glow)', mask: 'url(#fadeMask)' }}
                            />

                            {/* Center Dashed Line (Perspective) */}
                            <motion.path
                                d={pathData}
                                stroke="white"
                                strokeWidth={useTransform(smoothProgress, [0, 1], [2, 4])}
                                fill="none"
                                strokeDasharray="15 15"
                                strokeOpacity="0.8"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                animate={{ strokeDashoffset: [0, -30] }}
                                transition={{
                                    pathLength: { duration: 1.5, ease: "easeInOut" },
                                    strokeDashoffset: { duration: 0.5, repeat: Infinity, ease: "linear" }
                                }}
                                style={{ mask: 'url(#fadeMask)' }}
                            />

                            {/* Start of Path (Closed) */}
                            <circle cx="200" cy="40" r="12" fill="#06b6d4" filter="url(#glow)" fillOpacity="0.8" />
                            <circle cx="200" cy="40" r="5" fill="white" className="shadow-lg" />
                        </svg>

                        {/* 🏎️ THE NEW CAR (Bounty to Path) */}
                        <motion.div
                            style={{
                                x,
                                y: carY,
                                rotate,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transformOrigin: 'center',
                                zIndex: 50,
                                willChange: 'transform'
                            }}
                        >
                            {/* 💻 THE DEVELOPER'S WORKSTATION (New Vehicle) */}
                            <motion.div
                                style={{
                                    rotate: useTransform(smoothProgress, v => Math.sin(v * 100) * 2)
                                }}
                                className="relative -translate-x-1/2 -translate-y-1/2 scale-150"
                            >
                                {/* Floating Laptop / Workstation SVG */}
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    {/* Under-glow (Engine/Magic) */}
                                    <circle cx="25" cy="35" r="15" fill="#06b6d4" fillOpacity="0.3" filter="url(#glow)" />

                                    {/* Laptop Base (Lower half) */}
                                    <path d="M 5 35 L 45 35 L 40 42 L 10 42 Z" fill="#0b0f19" stroke="#06b6d4" strokeWidth="1.5" />
                                    <rect x="20" y="36" width="10" height="2" rx="1" fill="#06b6d4" fillOpacity="0.5" />

                                    {/* Laptop Screen (Upper half - tilted) */}
                                    <motion.path
                                        d="M 8 34 L 42 34 L 45 10 L 5 10 Z"
                                        fill="#0f172a"
                                        stroke="#8b5cf6"
                                        strokeWidth="2"
                                        animate={{ fill: ["#0f172a", "#1e293b", "#0f172a"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    {/* Screen Content (Code Lines) */}
                                    <rect x="12" y="15" width="20" height="2" fill="#06b6d4" fillOpacity="0.6">
                                        <animate attributeName="width" values="0;20;0" dur="3s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="12" y="20" width="26" height="2" fill="#8b5cf6" fillOpacity="0.6">
                                        <animate attributeName="width" values="0;26;0" dur="4s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="12" y="25" width="15" height="2" fill="#06b6d4" fillOpacity="0.6" />

                                    {/* Camera/Sensor Dot */}
                                    <circle cx="25" cy="13" r="1" fill="#ec4899" />
                                </svg>

                                {/* Data Stream Headlights (Beams) */}
                                <motion.div
                                    animate={{
                                        opacity: [0.2, 0.5, 0.2],
                                        scaleY: [1, 1.2, 1]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-t from-transparent via-cyan-400/10 to-transparent pointer-events-none"
                                    style={{ clipPath: 'polygon(40% 100%, 60% 100%, 100% 0, 0 0)' }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Timeline Items */}
                    <div className="absolute inset-0">
                        {achievements.map((achievement, index) => {
                            const checkpointY = (pathHeight / achievements.length) * (index + 0.5);
                            // CALCULATE EXACT ROAD CENTER AT THIS POINT
                            const roadX = 200 - waveAmplitude * Math.sin(2 * Math.PI * (checkpointY / wavePeriod));

                            return (
                                <div
                                    key={index}
                                    className="absolute left-0 w-full flex items-center justify-center md:justify-between h-[200px]"
                                    style={{ top: `${checkpointY - 100}px` }}
                                >
                                    {/* 1. Left Side Content (Even Index) */}
                                    <div className={`hidden md:flex w-[35%] justify-end ${index % 2 === 0 ? 'opacity-100' : 'opacity-0'}`}>
                                        {index % 2 === 0 && (
                                            <AchievementCard achievement={achievement} index={index} align="right" />
                                        )}
                                    </div>

                                    {/* 2. Center Column with Pin */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[400px] h-full pointer-events-none hidden md:block">
                                        <PinWithProximity
                                            achievement={achievement}
                                            index={index}
                                            smoothProgress={smoothProgress}
                                            targetProgress={(index + 0.5) / achievements.length}
                                            roadX={roadX}
                                        />
                                    </div>

                                    {/* 3. Right Side Content (Odd Index) */}
                                    <div className={`hidden md:flex w-[35%] justify-start ${index % 2 !== 0 ? 'opacity-100' : 'opacity-0'}`}>
                                        {index % 2 !== 0 && (
                                            <AchievementCard achievement={achievement} index={index} align="left" />
                                        )}
                                    </div>

                                    {/* Mobile Layout (Always Stacked) */}
                                    <div className="md:hidden w-full px-4">
                                        <AchievementCard achievement={achievement} index={index} align="center" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center mt-32 pb-20 relative">

                    <p className="text-gray-400 text-lg italic max-w-2xl mx-auto px-6">
                        "Continuously learning, growing, and giving back to the community"
                    </p>
                </div>
            </div>
        </section>
    );
};

const AchievementCard = ({ achievement, index, align }) => (
    <motion.div
        initial={{ opacity: 0, x: align === 'right' ? -50 : (align === 'left' ? 50 : 0), y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative w-full max-w-sm group ${align === 'right' ? 'text-right' : align === 'left' ? 'text-left' : 'text-center'}`}
    >
        <div className={`
            relative p-6 rounded-2xl bg-gradient-to-br from-[#0a0a16] to-[#1a1a2e] border border-white/10 
            hover:border-cyan-500/30 transition-all duration-300 shadow-xl overflow-visible z-30
            hover:-translate-y-1
        `}>
            {/* Icon */}
            <div className={`
                absolute -top-6 w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} 
                flex items-center justify-center shadow-lg text-white text-xl
                ${align === 'center' ? 'left-1/2 -translate-x-1/2' : align === 'right' ? '-right-6' : '-left-6'}
            `}>
                <achievement.icon />
            </div>

            <div className="mt-4">
                <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 mb-2`}>
                    {achievement.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                    {achievement.description}
                </p>
            </div>
        </div>
    </motion.div>
);

export default Achievements;
