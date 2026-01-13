import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-line"></div>
            <div className="footer-content">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="footer-text"
                >
                    © {currentYear} <span className="footer-name">Kruti Shah</span>.
                    Built with <span className="footer-tech">React</span>,i  and <span className="footer-tech">Framer Motion</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="footer-status"
                >
                    <span className="status-dot"></span>
                    Available for opportunities
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
