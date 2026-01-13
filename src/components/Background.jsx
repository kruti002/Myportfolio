import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Background = () => {
  const [stars, setStars] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        mouseX.set(e.clientX - 250);
        mouseY.set(e.clientY - 250);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      const starCount = isMobile ? 50 : 100; // Fewer stars on mobile
      for (let i = 0; i < starCount; i++) {
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
  }, [isMobile]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050510]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

      {/* Global Ambient Glow - Scaled for Mobile */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-500/20 rounded-full blur-[80px] md:blur-[120px]" />
      {!isMobile && (
        <>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </>
      )}

      {/* Dynamic Left Green Glow */}
      <motion.div
        className="absolute left-[-30%] md:left-[-20%] top-[20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full
                    bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3),transparent_70%)]
                    blur-[100px] md:blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mouse Follow Glow - Only on Desktop */}
      {!isMobile && (
        <motion.div
          style={{ x, y }}
          className="absolute w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"
        />
      )}

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
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
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
