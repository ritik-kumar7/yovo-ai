import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    MapPin, Mail, Phone, Send, ArrowRight, MessageSquare,
    Globe, Sparkles, CheckCircle
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './Contact.css'
import handleOnline from '../assets/images/handleOnline.jpg'

const contactInfo = [
    { icon: <MapPin size={22} />, label: 'Visit Us', value: 'S-04, D-53, Sector 2, Noida, UP, India', href: null },
    { icon: <Mail size={22} />, label: 'Email Us', value: 'contact@yovoai.com', href: 'mailto:contact@yovoai.com' },
    { icon: <Phone size={22} />, label: 'Call Us', value: '+91 8147540362', href: 'tel:+918147540362' },

]

const faqs = [
    { q: 'How quickly can I launch a campaign?', a: 'With YovoAI, you can launch your first UGC campaign in under 5 minutes. Our AI handles brief creation, creator matching, and content optimization automatically.' },
    { q: 'Is there a minimum budget to get started?', a: 'No minimum budget required. YovoAI offers flexible pricing plans to suit startups to enterprise brands. Start with our free trial to explore the platform.' },
    { q: 'How does creator matching work?', a: 'Our AI analyzes brand values, target audience, content style, and performance history to match you with the most relevant creators from our 10,000+ network.' },
    { q: 'Can I use YovoAI for multiple platforms?', a: 'Yes! YovoAI supports content distribution across 40+ platforms with format-specific optimization for each.' },
]

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <main className="ct-main">

            {/* ════════════ HERO ════════════ */}
            <section className="ct-hero">
                <div className="ct-hero-bg">
                    <img src={handleOnline} alt="" className="ct-hero-bg-img" />
                    <div className="ct-hero-overlay"></div>
                </div>
                <div className="ct-hero-glow ct-hero-glow-1" />
                <div className="ct-hero-glow ct-hero-glow-2" />

                <div className="container-lg ct-px">
                    <div className="ct-hero-inner">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
                            <MessageSquare size={14} /> Contact Us
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="ct-hero-title"
                        >
                            Let's build something
                            <br />
                            <span className="gradient-text">amazing together.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="ct-hero-desc"
                        >
                            Have a question, partnership idea, or just want to say hello? We'd love to hear from you.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ════════════ CONTACT INFO CARDS ════════════ */}
            <section className="section-padding">
                <div className="container-lg ct-px">
                    <div className="ct-info-grid">
                        {contactInfo.map((info, i) => (
                            <SectionReveal key={info.label} delay={i * 0.08} variant="bounce" duration={0.9}>
                                <div className="glass-card ct-info-card hover-depth">
                                    <div className="premium-icon-orb premium-icon-orb--sm" style={{ '--orb-color': '#f97316', margin: '0 auto 1.5rem auto' }}>
                                        <div className="premium-icon-orb__inner">
                                            {info.icon}
                                        </div>
                                        <div className="premium-icon-orb__pulse" />
                                    </div>
                                    <h3 className="ct-info-label">{info.label}</h3>
                                    {info.href ? (
                                        <a href={info.href} className="ct-info-value ct-info-link">{info.value}</a>
                                    ) : (
                                        <p className="ct-info-value">{info.value}</p>
                                    )}
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ FORM + MAP ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg ct-px">
                    <div className="ct-form-grid">
                        {/* Form */}
                        <SectionReveal variant="fadeLeft" duration={1.1}>
                            <div className="glass-card ct-form-card">
                                <div className="ct-form-header">
                                    <Send size={20} className="ct-form-header-icon" />
                                    <h2 className="ct-form-title">Send us a message</h2>
                                </div>
                                <p className="ct-form-subtitle">We'll get back to you within 24 hours.</p>

                                {submitted ? (
                                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="ct-success">
                                        <CheckCircle size={48} className="ct-success-icon" />
                                        <h3 className="ct-success-title">Message Sent!</h3>
                                        <p className="ct-success-desc">Thanks for reaching out. We'll respond shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="ct-form">
                                        <div className="ct-form-row">
                                            <div className="ct-form-group">
                                                <label className="ct-label" htmlFor="ct-name">Full Name</label>
                                                <input id="ct-name" type="text" name="name" value={formData.name} onChange={handleChange} required className="ct-input" placeholder="Your name" />
                                            </div>
                                            <div className="ct-form-group">
                                                <label className="ct-label" htmlFor="ct-email">Email</label>
                                                <input id="ct-email" type="email" name="email" value={formData.email} onChange={handleChange} required className="ct-input" placeholder="you@example.com" />
                                            </div>
                                        </div>
                                        <div className="ct-form-group">
                                            <label className="ct-label" htmlFor="ct-subject">Subject</label>
                                            <input id="ct-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required className="ct-input" placeholder="How can we help?" />
                                        </div>
                                        <div className="ct-form-group">
                                            <label className="ct-label" htmlFor="ct-message">Message</label>
                                            <textarea id="ct-message" name="message" value={formData.message} onChange={handleChange} required className="ct-input ct-textarea" placeholder="Tell us more..." rows={5} />
                                        </div>
                                        <button type="submit" className="magnetic-btn btn-primary ct-submit-btn">
                                            <Send size={16} /> Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </SectionReveal>

                        {/* Map + Quick Links */}
                        <SectionReveal delay={0.2} variant="fadeRight" duration={1.1}>
                            <div className="ct-sidebar">
                                <div className="glass-card ct-map-card">
                                    <iframe
                                        title="YovoAI Office Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.070608848182!2d77.29674746659201!3d28.584243551415042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce500236944e9%3A0xbfdce5cf4c20f6aa!2sDiin%20technologies!5e0!3m2!1sen!2sin!4v1771663986962!5m2!1sen!2sin"
                                        className="ct-map-iframe"
                                        loading="lazy"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="glass-card ct-quick-card">
                                    <h3 className="ct-quick-title">
                                        <Globe size={18} /> Quick Links
                                    </h3>
                                    <div className="ct-quick-links">
                                        <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="ct-quick-link">
                                            <Sparkles size={14} /> Download YovoAI App
                                            <ArrowRight size={14} className="ct-quick-arrow" />
                                        </a>
                                        <a href="mailto:contact@yovoai.com" className="ct-quick-link">
                                            <Mail size={14} /> Partnership Inquiries
                                            <ArrowRight size={14} className="ct-quick-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ FAQ ════════════ */}
            <section className="section-padding">
                <div className="container-lg ct-px">
                    <SectionReveal className="ct-center-header" variant="scaleUp" duration={1}>
                        <span className="section-label"><MessageSquare size={14} /> FAQ</span>
                        <h2 className="section-heading">Frequently <span className="gradient-text">asked</span> questions</h2>
                        <p className="section-subtext">Quick answers to common questions about YovoAI</p>
                    </SectionReveal>

                    <div className="ct-faq-list">
                        {faqs.map((faq, i) => (
                            <SectionReveal key={faq.q} delay={i * 0.06} variant="slideRotate" duration={0.8}>
                                <div
                                    className={`glass-card ct-faq-item ${openFaq === i ? 'ct-faq-open' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <div className="ct-faq-question">
                                        <span>{faq.q}</span>
                                        <span className={`ct-faq-toggle ${openFaq === i ? 'ct-faq-toggle-open' : ''}`}>+</span>
                                    </div>
                                    {openFaq === i && (
                                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="ct-faq-answer">
                                            {faq.a}
                                        </motion.p>
                                    )}
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
