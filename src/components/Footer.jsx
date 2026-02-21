import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

const footerLinks = {
    Product: [
        { label: 'Features', path: '/features' },
        { label: 'For Brands', path: '/for-brands' },
        { label: 'For Creators', path: '/for-creators' },
    ],
    Company: [
        { label: 'About', path: '/about' },
        { label: 'Careers', path: '#' },
        { label: 'Privacy Policy', path: '#' },
    ],
}

const socials = [
    {
        label: 'YouTube', href: 'https://www.youtube.com/@YovoAIofficial', icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.1 5 12 5 12 5h-.1s-4.1 0-7.1.1c-.4 0-1.2.1-1.9.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.9.1 6.9.1s4.1 0 7.1-.1c.4 0 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM9.8 15.1V8.9l6.2 3.1-6.2 3.1z" /></svg>
        )
    },
    {
        label: 'Instagram', href: '#', icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.787 2 14.447 2 11.821v-.642c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427A4.902 4.902 0 013.678 3.17a4.902 4.902 0 011.772-1.153C6.086 1.77 6.813 1.601 7.877 1.552 8.944 1.505 9.284 1.493 11.714 1.493h.601zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
        )
    },
    {
        label: 'Twitter', href: '#', icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 013.102 5.112v.13c0 1.988 1.415 3.647 3.293 4.023a4.099 4.099 0 01-1.853.07 4.11 4.11 0 003.834 2.85A8.236 8.236 0 012 14.658a11.616 11.616 0 006.29 1.843" /></svg>
        )
    },
]

export default function Footer() {
    return (
        <footer className="footer relative">
            <div className="footer-top-border" />

            {/* CTA Strip */}
            <div className="footer-cta gradient-brand">
                <div className="footer-cta-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="footer-cta-title"
                    >
                        Ready to be heard?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="footer-cta-desc"
                    >
                        Join YovoAI – Where voices rise, brands grow, and content goes viral.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="footer-btn-group"
                    >
                        <a
                            href="https://play.google.com/store/apps/details?id=com.diin.yovoai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-btn-primary"
                        >
                            Launch a Campaign <ArrowRight size={16} />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.diin.yovoai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-btn-outline"
                        >
                            Become a Creator <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="footer-brand">
                            <img src="/Yovoai-logo.jpg" alt="YovoAI" className="footer-logo" />
                            <span className="footer-logo-text">
                                <span className="footer-logo-text-gradient">Yovo</span>
                                <span className="footer-logo-text-white">AI</span>
                            </span>
                        </Link>
                        <p className="footer-desc">
                            AI-powered UGC platform empowering brands and creators to transform authentic voices into viral content.
                        </p>
                        <div className="footer-socials">
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="footer-column-title">{title}</h3>
                            <ul className="footer-links">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="footer-link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h3 className="footer-column-title">Contact</h3>
                        <ul className="footer-links">
                            <li className="footer-contact-item">
                                <MapPin size={15} className="footer-contact-icon" />
                                <span>S-04, D-53, Sector 2, Noida, UP, India</span>
                            </li>
                            <li className="footer-contact-item">
                                <Mail size={15} className="footer-contact-icon" />
                                <a href="mailto:contact@yovoai.com" className="footer-contact-link">contact@yovoai.com</a>
                            </li>
                            <li className="footer-contact-item">
                                <Phone size={15} className="footer-contact-icon" />
                                <a href="tel:+918147540362" className="footer-contact-link">+91 8147540362</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} YovoAI. All rights reserved.
                    </p>
                    <div className="footer-built-with">
                        <span>Built with</span>
                        <span className="footer-heart">♥</span>
                        <span>for the creator economy</span>
                    </div>
                </div>
            </div>

            {/* Decorative */}
            <div className="footer-decorative-glow" />
        </footer>
    )
}
