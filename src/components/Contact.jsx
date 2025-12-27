import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useRef, useState } from "react";
// import emailjs from '@emailjs/browser'; // Uncomment when setup

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setTimeout(() => setSent(false), 5000);
            formRef.current.reset();
        }, 2000);

        // EmailJS implementation would look like this:
        /*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
            .then(() => {
                setLoading(false);
                setSent(true);
            }, (error) => {
                setLoading(false);
                alert("Something went wrong.");
            });
        */
    };

    return (
        <section id="contact" className="w-full min-h-screen py-20 px-6 md:px-20 relative z-10 text-white flex items-center">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                {/* Left Side - Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email</h4>
                                <a href="mailto:kruti@example.com" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">kruti@example.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-colors duration-300">
                                <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Location</h4>
                                <p className="text-lg font-medium text-white">United States</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#0a0a16] border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                        {/* Decorative Gradient Blob */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition-colors" />

                        <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

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
