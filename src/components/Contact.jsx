import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaCopy, FaCheck } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [copied, setCopied] = useState(false);

    // Email to copy
    const contactEmail = "shahkruti957@gmail.com"; // Replace with your actual email

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Environment variables for security (Vite-specific)
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const thankYouTemplateId = import.meta.env.VITE_EMAILJS_THANK_YOU_TEMPLATE_ID;

        // 1. Send the notification to YOU
        const sendNotification = emailjs.sendForm(
            serviceId,
            templateId,
            formRef.current,
            publicKey
        );

        // 2. Send the "Thank You" email to the SENDER
        const sendAutoReply = emailjs.sendForm(
            serviceId,
            thankYouTemplateId,
            formRef.current,
            publicKey
        );

        Promise.all([sendNotification, sendAutoReply])
            .then(() => {
                setLoading(false);
                setSent(true);
                setTimeout(() => setSent(false), 5000);
                formRef.current.reset();
            })
            .catch((error) => {
                setLoading(false);
                console.error('EmailJS Error:', error);
                alert("Something went wrong. Please try again or copy my email address directly.");
            });
    };

    return (
        <section id="contact" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white flex items-center">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                {/* Left Side - Info & Project Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center gap-10"
                >
                    {/* Header with Signal Pulse & Connection Lines */}
                    <div className="relative isolate">

                        {/* 1. Pulse Beacon (Signal Waves) */}
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="relative flex items-center justify-center w-8 h-8">
                                {/* Core */}
                                <div className="w-3 h-3 bg-white rounded-full relative z-10 shadow-[0_0_20px_rgba(56,189,248,0.9)]" />
                                {/* Wave 1 */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-cyan-400/60"
                                    animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                                />
                                {/* Wave 2 (Delayed) */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-cyan-400/40"
                                    animate={{ scale: [1, 3.5], opacity: [0.6, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                />
                                {/* Wave 3 (Wide) */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-purple-400/20"
                                    animate={{ scale: [1, 4.5], opacity: [0.4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
                                />
                            </div>
                            <span className="text-cyan-400 font-mono text-sm tracking-[0.25em] uppercase font-bold drop-shadow-lg">Available for work</span>
                        </div>



                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight relative z-10">
                            Let's build something <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                extraordinary.

                                {/* 2. Premium Levitating Airplane - REMOVED (Moved to Contact Form) */}

                                {/* Floating Trail Particles */}
                                <div className="absolute -top-6 -right-10 pointer-events-none w-20 h-20 opacity-50">
                                    <motion.div
                                        className="absolute w-1.5 h-1.5 bg-white/60 rounded-full"
                                        style={{ left: '10%', bottom: '20%' }}
                                        animate={{ y: [0, -30], x: [0, -5], opacity: [0, 1, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                                    />
                                </div>
                            </span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    {/* Gradient Project Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden shadow-2xl border border-white/10 group"
                    >
                        {/* Confetti/Particle Effects */}
                        <div className="absolute inset-0 opacity-30">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bg-white rounded-full"
                                    style={{
                                        width: Math.random() * 6 + 2,
                                        height: Math.random() * 6 + 2,
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Do you want to start a <br /> project together?
                            </h3>

                            <button
                                onClick={handleCopyEmail}
                                className="group relative px-6 py-3 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 rounded-xl text-white font-medium transition-all duration-300 flex items-center gap-3 active:scale-95"
                            >
                                {copied ? (
                                    <>
                                        <FaCheck className="text-green-400" />
                                        <span>Email Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaCopy className="text-cyan-400 group-hover:scale-110 transition-transform" />
                                        <span>shahkruti957@gmail.com</span>
                                    </>
                                )}

                                {/* Button Glow */}
                                <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {[
                            { icon: FaGithub, href: "https://github.com/kruti002" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/kruti-shah-5500b4225/" },
                            { icon: FaTwitter, href: "https://x.com/krutishah957" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                            >
                                <social.icon className="text-xl" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#0a0a16] border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                        {/* Decorative Gradient Blob */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition-colors" />

                        <div className="flex items-center gap-3 mb-8">
                            <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="group/input">
                                <label className="block text-sm text-gray-500 mb-2 group-focus-within/input:text-cyan-400 transition-colors">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 focus:bg-white/10 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="group/input">
                                <label className="block text-sm text-gray-500 mb-2 group-focus-within/input:text-cyan-400 transition-colors">Your Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 focus:bg-white/10 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="group/input">
                                <label className="block text-sm text-gray-500 mb-2 group-focus-within/input:text-cyan-400 transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 focus:bg-white/10 transition-all resize-none"
                                    placeholder="Hello! I'd like to discuss..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? "Sending..." : (
                                    <>
                                        Send Message <FaPaperPlane className="text-sm" />
                                    </>
                                )}
                            </button>

                            {sent && (
                                <p className="text-green-400 text-center text-sm mt-2 animate-pulse">
                                    Message sent successfully!
                                </p>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
