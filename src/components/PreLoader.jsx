import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './PreLoader.css';

const lines = [
    "git commit",
    "coffee brew",
    "fix bug",
    "repeat"
];

const MatrixBackground = () => {
    const codeSnippets = [
        "const", "function", "import", "async", "await", "=>", "{...}", "[]", "process",
        "01", "10", "<div />", "useEffect", "git push", "sudo", "npm install", "react", "docker"
    ];

    return (
        <div className="matrix-background">
            {[...Array(60)].map((_, i) => (
                <motion.div
                    key={i}
                    className="matrix-column"
                    initial={{
                        y: i % 2 === 0 ? `${Math.random() * 100}vh` : "-10vh",
                        opacity: 0
                    }}
                    animate={{
                        y: ["0vh", "110vh"],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i % 2 === 0 ? 0 : Math.random() * 4
                    }}
                    style={{
                        left: `${(i / 60) * 100}%`,
                        fontSize: `${Math.random() * 8 + 12}px`,
                        fontFamily: "'Fira Code', monospace",
                        color: i % 3 === 0 ? "#00d8ff" : i % 3 === 1 ? "#00ffa3" : "#4a9eff"
                    }}
                >
                    {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
                </motion.div>
            ))}
        </div>
    );
};

const PreLoader = ({ setLoading }) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed);

        return () => clearInterval(ticker);
    }, [text, typingSpeed]);

    const tick = () => {
        let i = loopNum % lines.length;
        let fullText = lines[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(20);
        }

        if (!isDeleting && updatedText === fullText) {
            if (loopNum === lines.length - 1) {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                return;
            }
            setIsDeleting(true);
            setTypingSpeed(600);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(50);
        }
    };

    return (
        <motion.div
            className="preloader-overlay"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: "circOut" }
            }}
        >
            <MatrixBackground />
            <div className="terminal-box">
                <div className="terminal-header">
                    <div className="dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="terminal-title">bash — 80×24</div>
                </div>
                <div className="terminal-content">
                    <span className="prompt">&gt;</span>
                    <span className="text">{text}</span>
                    <span className="cursor">_</span>
                </div>
            </div>
        </motion.div>
    );
};

export default PreLoader;
