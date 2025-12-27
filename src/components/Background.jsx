import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Background = () => {
  const [stars, setStars] = useState([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 }; // Smooth spring
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Center the div (assuming 500px width/height -> offset by 250)
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 100; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 5 + 2,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050510]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

      {/* Global Ambient Glow - Static */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* Dynamic Left Green Glow */}
      <motion.div
        className="absolute left-[-20%] top-[20%] w-[600px] h-[600px] rounded-full
                    bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35),transparent_70%)]
                    blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Extra Depth Layer */}
      <motion.div
        className="absolute left-[-30%] top-[30%] w-[800px] h-[800px] rounded-full
                    bg-emerald-500/10 blur-[180px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mouse Follow Glow */}
      <motion.div
        style={{ x, y }}
        className="absolute w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"
      />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Background;
