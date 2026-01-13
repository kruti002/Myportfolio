import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import krutiPic from "../assets/kruti_pic.png";
import { lazy, Suspense } from "react";

// Use React.lazy for dynamic import in Vite
// We map the named export 'World' to 'default' because React.lazy expects a default export
const World = lazy(() => import("../ui/globe").then((m) => ({ default: m.World })));

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Globe Configuration
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
    ];

    return (
        <section
            id="about"
            className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden perspective-[2500px]"
        >
            {/* 1. Global Background Mix */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-orange-400/5 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {isMobile ? (
                /* === MOBILE COMPUTER LAYOUT === */
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-[380px] mt-10 px-2"
                >
                    {/* The Monitor Frame */}
                    <div className="relative bg-[#0f0f0f] rounded-[30px] p-2 border border-gray-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">

                        {/* Inner Screen */}
                        <div className="bg-[#0d1117] rounded-[22px] overflow-hidden relative border border-white/5 min-h-[600px] flex flex-col">

                            {/* Background Grid Layer */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]" />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

                            {/* System Top Bar */}
                            <div className="h-10 bg-[#161b22] flex items-center justify-between px-5 border-b border-white/5 relative z-10">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="text-[9px] text-gray-500 font-bold tracking-tighter opacity-70">KRUTI_OS MOBILE</div>
                                <div className="w-8" /> {/* Spacer */}
                            </div>

                            {/* Scrollable Screen Content */}
                            <div className="flex-1 overflow-y-auto relative z-10 p-6 space-y-8 no-scrollbar">

                                {/* 1. Profile Section */}
                                <div className="flex flex-col items-center pt-2">
                                    <div className="relative w-28 h-28 mb-4 p-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                                        <img src={krutiPic} alt="Kruti Shah" className="w-full h-full rounded-full object-cover border-4 border-[#0d1117]" />
                                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#0d1117] rounded-full flex items-center justify-center border border-white/10">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-1">Kruti Shah</h2>
                                    <div className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10">
                                        Software Developer
                                    </div>
                                </div>

                                {/* 2. Bio Card */}
                                <div className="bg-[#161b22]/50 border border-white/5 rounded-2xl p-4">
                                    <div className="text-[10px] text-gray-500 font-mono mb-2">// bio.init()</div>
                                    <p className="text-gray-300 text-xs leading-relaxed font-sans">
                                        Software developer & ML enthusiast currently pursuing MS in CS.
                                        I build backend systems and scalable ML pipelines across the stack.
                                    </p>
                                </div>

                                {/* 3. Stats Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex flex-col items-center">
                                        <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-1">Exp</div>
                                        <div className="text-xs text-white font-bold">1+ Years</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex flex-col items-center">
                                        <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-1">Focus</div>
                                        <div className="text-xs text-cyan-400 font-bold">Cloud & AI</div>
                                    </div>
                                </div>

                                {/* 4. The Globe (Visual Feature) */}
                                <div className="relative h-44 rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
                                    <div className="absolute inset-0 scale-[1.3] translate-y-4">
                                        <Suspense fallback={<div className="h-full flex items-center justify-center text-[10px] text-gray-500">Connecting...</div>}>
                                            <World globeConfig={globeConfig} data={sampleArcs} />
                                        </Suspense>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d1117] to-transparent" />
                                    <div className="absolute top-3 left-3 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
                                        <span className="text-[8px] text-white/50 uppercase tracking-widest font-bold">Flexible Time Zone</span>
                                    </div>
                                </div>
                            </div>

                            {/* Home Indicator (iPhone Style) */}
                            <div className="h-6 flex items-center justify-center relative z-10">
                                <div className="w-16 h-1 bg-white/10 rounded-full" />
                            </div>
                        </div>

                        {/* Monitor Stand Base (Mobile Version) */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] -z-10"
                            style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }} />
                    </div>
                </motion.div>
            ) : (
                /* === DESKTOP 3D DESK SCENE === */
                <motion.div
                    initial={{ rotateY: -10, rotateX: 10, scale: 0.9, opacity: 0 }}
                    whileInView={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 w-full max-w-7xl transform-style-3d flex items-center justify-center p-10"
                >
                    <div className="relative w-[1000px] h-[700px] transform-style-3d group">

                        {/* --- DESK STRUCTURE --- */}
                        <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] transform-style-3d"
                            style={{ transform: "rotateX(20deg)" }}>

                            {/* 1. The Tabletop Surface */}
                            <div
                                className="absolute inset-0 rounded-[40px] transform-style-3d origin-center"
                                style={{
                                    transform: "rotateX(50deg)",
                                    background: "linear-gradient(90deg, #3E2723 0%, #5D4037 50%, #3E2723 100%)",
                                    boxShadow: "0 30px 60px rgba(0,0,0,0.6)"
                                }}
                            >
                                {/* Wood Texture */}
                                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-multiply rounded-[40px]" />

                                {/* --- ITEMS ON THE DESK --- */}

                                {/* Keyboard */}
                                <div className="absolute bottom-[60px] left-[25%] -translate-x-1/2 w-[440px] h-[160px] bg-[#151515] rounded-xl border-[1px] border-white/5 border-b-[6px] border-b-[#0a0a0a] shadow-2xl transform-style-3d group/keyboard"
                                    style={{ transform: "translateZ(2px)" }}>
                                    {/* Subtle RGB Underglow */}
                                    <div className="absolute -inset-4 bg-purple-500/10 blur-xl -z-10 rounded-full opacity-60" />
                                    <div className="w-full h-full p-3 flex flex-col gap-1.5">
                                        <div className="flex gap-1.5 h-1/5">
                                            <div className="flex-1 bg-red-500/20 rounded-[4px] border-b-2 border-red-900/50 shadow-sm" />
                                            {Array.from({ length: 12 }).map((_, i) => <div key={`r1-${i}`} className="flex-1 bg-[#222] rounded-[4px] border-b-2 border-[#000] shadow-sm" />)}
                                        </div>
                                        <div className="flex gap-1.5 h-1/5">
                                            <div className="w-12 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            {Array.from({ length: 12 }).map((_, i) => <div key={`r2-${i}`} className="flex-1 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />)}
                                        </div>
                                        <div className="flex gap-1.5 h-1/5">
                                            <div className="w-14 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            {Array.from({ length: 11 }).map((_, i) => <div key={`r3-${i}`} className="flex-1 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />)}
                                            <div className="bg-cyan-500/20 flex-1 rounded-[4px] border-b-2 border-cyan-900/50" />
                                        </div>
                                        <div className="flex gap-1.5 h-1/5">
                                            <div className="w-16 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            {Array.from({ length: 11 }).map((_, i) => <div key={`r4-${i}`} className="flex-1 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />)}
                                        </div>
                                        <div className="flex gap-1.5 h-1/5">
                                            <div className="w-12 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            <div className="w-12 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            <div className="w-12 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            <div className="flex-[4] bg-[#333] rounded-[4px] border-b-2 border-[#151515] shadow-sm" />
                                            <div className="w-12 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            <div className="w-12 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            <div className="flex-1 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            <div className="flex-1 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                            <div className="flex-1 bg-[#222] rounded-[4px] border-b-2 border-[#000]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Mouse */}
                                <div className="absolute bottom-[80px] left-[85%] -translate-x-1/2 w-[80px] h-[120px] bg-[#1a1a1a] rounded-[40px] border-b-[3px] border-[#0f0f0f] shadow-lg transform-style-3d"
                                    style={{ transform: "translateZ(2px)" }}>
                                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-[#444] rounded-full" />
                                    <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                </div>

                            </div>
                        </div>


                        {/* --- MONITOR (Right Side) --- */}
                        <div
                            className="absolute top-[20px] left-[65%] -translate-x-1/2 w-[760px] h-[480px] transform-style-3d group"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            {/* Stand Neck */}
                            <div className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 w-36 h-28 bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] -z-10"
                                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)" }} />
                            {/* Stand Base */}
                            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-52 h-10 bg-[#f3f4f6] rounded-xl shadow-2xl origin-bottom"
                                style={{ transform: "rotateX(50deg)" }} />

                            {/* Monitor Frame */}
                            <div className="absolute inset-0 bg-[#0f0f0f] rounded-2xl border border-gray-700 shadow-2xl p-3 transform-style-3d">

                                {/* Inner Screen Container */}
                                <div className="w-full h-full bg-[#0d1117] rounded-xl overflow-hidden relative font-mono shadow-inner group-hover:brightness-110 transition-all duration-500">
                                    {/* Background Grid & Effects */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 mix-blend-screen" />

                                    {/* === TOP BAR (System Status) === */}
                                    <div className="h-8 bg-[#161b22] flex items-center justify-between px-4 border-b border-white/5 relative z-10">
                                        {/* Mac Traffic Lights */}
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
                                        </div>
                                        <div className="text-[10px] text-gray-500 tracking-widest font-semibold opacity-50">KRUTI_OS V3.0 DESKTOP</div>
                                        <div className="flex items-center gap-3 text-[10px]">
                                            <span className="text-gray-500">NETWORK: <span className="text-green-400">ONLINE</span></span>
                                            <span className="text-blue-400">SYSTEM.ACTIVE</span>
                                        </div>
                                    </div>

                                    {/* === MAIN CONTENT (Redesigned Layout: 3 Columns) === */}
                                    <div className="p-5 flex flex-col h-[calc(100%-2rem)] relative z-10 text-white perspective-[500px]">

                                        {/* UPPER SECTION: 3 Columns */}
                                        <div className="flex-1 flex gap-3 min-h-0 mb-3 items-stretch">

                                            {/* 1. Developer Class (Extreme Left) - RESTORED & WIDER */}
                                            <div className="flex-[1.4] bg-[#0d1117]/80 rounded-lg border border-white/10 p-3 relative overflow-hidden flex flex-col justify-center backdrop-blur-sm shadow-inner group/code">
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />
                                                <div className="text-[10px] leading-relaxed text-gray-400 font-mono relative z-10">
                                                    <div className="flex"><span className="text-purple-400">class</span> <span className="text-yellow-200 ml-2 font-bold">Developer</span> <span className="text-white">{"{"}</span></div>
                                                    <div className="pl-4 mt-1"><span className="text-blue-400">constructor</span>() <span className="text-white">{"{"}</span></div>
                                                    <div className="pl-8 group-hover/code:translate-x-1 transition-transform duration-300"><span className="text-red-300">this</span>.<span className="text-white">name</span> = <span className="text-green-400">'Kruti Shah'</span>;</div>
                                                    <div className="pl-8 group-hover/code:translate-x-1 transition-transform duration-300 delay-75"><span className="text-red-300">this</span>.<span className="text-white">role</span> = <span className="text-green-400">'Software Developer'</span>;</div>
                                                    <div className="pl-8 group-hover/code:translate-x-1 transition-transform duration-300 delay-100"><span className="text-red-300">this</span>.<span className="text-white">passion</span> = <span className="text-green-400">'Cloud & AI'</span>;</div>
                                                    <div className="pl-4 text-white">{"}"}</div>
                                                    <div className="pl-4 mt-2"><span className="text-blue-400">code</span>() <span className="text-white">{"{"}</span></div>
                                                    <div className="pl-8 text-gray-500 italic">// Building the Future...</div>
                                                    <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Innovation"</span>;</div>
                                                    <div className="pl-4 text-white">{"}"}</div>
                                                    <div className="text-white">{"}"}</div>
                                                </div>
                                            </div>

                                            {/* 2. Flexible Time Zone (Center) - WIDE & VISIBLE */}
                                            <div className="flex-1 bg-[#0d1117] rounded-lg border border-white/10 relative overflow-hidden flex flex-col shadow-lg group/globe">
                                                {/* Header */}
                                                <div className="absolute top-3 left-3 z-20">
                                                    <h3 className="text-white text-[10px] font-bold leading-tight drop-shadow-md">
                                                        Time Zone
                                                    </h3>
                                                    <div className="text-[9px] text-cyan-400 font-medium">Flexible / Remote</div>
                                                </div>

                                                {/* Globe Scale & Position */}
                                                <div className="absolute inset-0 top-[20px] flex items-center justify-center pointer-events-none">
                                                    <div className="w-[180%] h-[180%] ml-4 mt-8 opacity-90 contrast-125 group-hover/globe:grayscale-0 transition-all duration-700">
                                                        <Suspense fallback={<div className="text-[8px] text-gray-500">Loading...</div>}>
                                                            <World globeConfig={globeConfig} data={sampleArcs} />
                                                        </Suspense>
                                                    </div>
                                                </div>

                                                {/* Bottom Fade */}
                                                <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#0d1117] to-transparent z-10" />
                                            </div>

                                            {/* 3. Profile Pic (Right) */}
                                            <div className="w-[130px] flex flex-col gap-2">
                                                <div className="flex-1 bg-[#1c1c1c] rounded-lg border border-white/5 flex flex-col items-center justify-center p-3 relative overflow-hidden shadow-lg group/profile">
                                                    {/* BG Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover/profile:opacity-100 transition-opacity" />

                                                    <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-purple-600 z-10 shadow-xl group-hover/profile:scale-105 transition-transform duration-300">
                                                        <img src={krutiPic} alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-[#1c1c1c]" />
                                                    </div>
                                                    <div className="text-[10px] text-gray-300 mt-3 font-bold">Kruti Shah</div>
                                                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[8px] text-green-400 mt-1 flex items-center gap-1.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                        Online
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        {/* LOWER SECTION: Bio & Stats */}
                                        <div className="bg-[#161b22] rounded-lg border border-white/5 p-4 relative overflow-hidden">

                                            {/* Bio Text */}
                                            <p className="text-[11px] text-gray-300 leading-5 mb-4 font-sans opacity-90">
                                                I’m a software developer and machine learning enthusiast with hands-on experience building backend systems, web applications, and AI-powered cloud platforms. Currently pursuing my Master’s in Computer Science, I work across the stack:designing robust backend services, developing responsive web applications, and deploying scalable ML pipelines.
                                            </p>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-3">
                                                <div>
                                                    <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Experience</div>
                                                    <div className="text-xs text-white font-bold">1+ Years</div>
                                                </div>
                                                <div>
                                                    <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Specialty</div>
                                                    <div className="text-xs text-blue-400 font-bold">Backend Systems & ML</div>
                                                </div>
                                                <div>
                                                    <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Focus</div>
                                                    <div className="text-[10px] text-gray-300 leading-tight">Backend, Cloud, AI, Data-Driven Apps</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default About;