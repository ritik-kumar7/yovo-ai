import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    MapPin, Mail, Phone, Send, ArrowRight, MessageSquare,
    Globe, Sparkles, CheckCircle, ChevronDown, Rocket
} from 'lucide-react'
import './Contact.css'
import handleOnline from '../assets/images/handleOnline.jpg'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
    { icon: <MapPin size={28} />, label: 'Headquarters', value: 'Ground floor, C-116, C Block, Sector 2, Noida, Uttar Pradesh 201301', href: null },
    { icon: <Mail size={28} />, label: 'Direct Inquiries', value: 'contact@yovoai.com', href: 'mailto:contact@yovoai.com' },
    { icon: <Phone size={28} />, label: 'Global Support', value: '+91 814754 0362', href: 'tel:+918147540362' },
]

const faqs = [
    { q: 'How quickly can I launch a campaign?', a: 'With YovoAI, you can launch your first UGC campaign in under 5 minutes. Our AI handles brief creation, creator matching, and content optimization automatically.' },
    { q: 'Is there a minimum budget to get started?', a: 'No minimum budget required. YovoAI offers flexible pricing plans to suit startups to enterprise brands. Start with our free trial to explore the platform.' },
    { q: 'How does creator matching work?', a: 'Our AI analyzes brand values, target audience, content style, and performance history to match you with the most relevant creators from our 10,000+ network.' },
    { q: 'Can I use YovoAI for multiple platforms?', a: 'Yes! YovoAI supports content distribution across 40+ platforms with format-specific optimization for each.' },
]

export default function Contact() {
    const mainRef = useRef(null)
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    /* ─── Ultra Premium GSAP Animations ─── */
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Reveal
            gsap.fromTo('.anim-hero-up',
                { y: 80, opacity: 0, filter: 'blur(10px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.15, ease: 'expo.out', delay: 0.2 }
            )

            // Parallax
            gsap.utils.toArray('.anim-parallax').forEach(el => {
                gsap.to(el, {
                    yPercent: 20, ease: 'none',
                    scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
                })
            })

            // Info Cards Magnetic Pull
            gsap.fromTo('.anim-contact-card',
                { opacity: 0, scale: 0.9, y: 60 },
                {
                    opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.1, ease: 'back.out(1.2)',
                    scrollTrigger: { trigger: '.anim-contact-trig', start: 'top 85%' }
                }
            )

            // Form Reveal
            gsap.fromTo('.anim-form-reveal',
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.anim-form-trig', start: 'top 75%' } }
            )

            gsap.fromTo('.anim-map-reveal',
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: '.anim-form-trig', start: 'top 75%' } }
            )

            // FAQ Stagger
            gsap.fromTo('.anim-faq-item',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.anim-faq-trig', start: 'top 80%' } }
            )
        }, mainRef)
        return () => ctx.revert()
    }, [])

    return (
        <main className="con-main" ref={mainRef}>

            {/* ════════════ 1. HERO — DARK CINEMATIC ════════════ */}
            <section className="con-hero con-sec-dark">
                <div className="con-hero__bg-wrap">
                    <img src={handleOnline} alt="Contact" className="con-hero__bg anim-parallax" />
                    <div className="con-hero__overlay"></div>
                    <div className="con-hero__glow"></div>
                </div>

                <div className="con-container con-hero__content">
                    <div className="con-hero__badge anim-hero-up">
                        <MessageSquare size={14} className="con-text-orange" />
                        <span>Get In Touch</span>
                    </div>

                    <h1 className="con-heading !text-white anim-hero-up">
                        Let's build something <br />
                        <span className="con-text-gradient">extraordinary.</span>
                    </h1>

                    <p className="con-subheading mx-auto anim-hero-up text-white/70">
                        Whether you are a global brand looking to scale or a creator ready to monetize, our team is standing by to help you take that next giant leap.
                    </p>
                </div>
            </section>

            {/* ════════════ 2. INFO CARDS — DARK/GOLD PREMIUM ════════════ */}
            <section className="con-info con-sec-dark anim-contact-trig">
                <div className="con-container">
                    <div className="con-info__grid">
                        {contactInfo.map((info, i) => (
                            <div key={info.label} className="con-info-card anim-contact-card">
                                <div className="con-info-icon-orb">
                                    <div className="con-info-icon-inner">{info.icon}</div>
                                    <div className="con-info-icon-pulse"></div>
                                </div>
                                <h3 className="con-info-label">{info.label}</h3>
                                {info.href ? (
                                    <a href={info.href} className="con-info-value con-info-link">{info.value}</a>
                                ) : (
                                    <p className="con-info-value">{info.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="con-horizon"><div className="con-horizon__line bg-white/10"></div></div>

            {/* ════════════ 3. FORM & MAP — LIGHT ELEGANT ════════════ */}
            <section className="con-form-sec con-sec-light anim-form-trig">
                <div className="con-container">
                    <div className="con-form-grid">

                        {/* THE SLEEK FORM */}
                        <div className="con-form-wrapper anim-form-reveal">
                            <span className="con-tag-light mb-4">Direct Line</span>
                            <h2 className="con-heading !text-black mb-8">
                                Send a <span className="con-text-gradient">message.</span>
                            </h2>

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="con-form-success"
                                    >
                                        <div className="con-success-icon"><CheckCircle size={40} /></div>
                                        <h3 className="text-2xl font-light text-black mb-2">Message received.</h3>
                                        <p className="text-gray-600">Our team will be in touch with you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="con-form"
                                    >
                                        <div className="con-form-row">
                                            <div className="con-input-group">
                                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" className="con-input" />
                                            </div>
                                            <div className="con-input-group">
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="con-input" />
                                            </div>
                                        </div>
                                        <div className="con-input-group">
                                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="con-input" />
                                        </div>
                                        <div className="con-input-group">
                                            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="How can we help you?" className="con-input con-textarea" rows={5}></textarea>
                                        </div>
                                        <button type="submit" className="con-btn con-btn--primary mt-4">
                                            <Send size={18} /> Send Message
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* MAP & SIDEBAR */}
                        <div className="con-sidebar anim-map-reveal">
                            <div className="con-map-card">
                                <iframe
                                    title="YovoAI Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.070608848182!2d77.29674746659201!3d28.584243551415042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce500236944e9%3A0xbfdce5cf4c20f6aa!2sDiin%20technologies!5e0!3m2!1sen!2sin!4v1771663986962!5m2!1sen!2sin"
                                    className="con-map-iframe"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                                <div className="con-map-overlay-glow"></div>
                            </div>

                            <div className="con-quick-card">
                                <h4 className="text-xl font-light mb-6 flex items-center gap-3">
                                    <Globe className="con-text-orange" size={24} /> General Links
                                </h4>
                                <div className="space-y-4">
                                    <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="con-quick-link group">
                                        <div className="con-quick-link-icon"><Rocket size={16} /></div>
                                        <span className="font-medium text-black group-hover:text-orange-600 transition-colors">Download YovoAI</span>
                                        <ArrowRight size={16} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════ 4. FAQ — DARK GLASS STACK ════════════ */}
            <section className="con-faq-sec con-sec-dark anim-faq-trig">
                <div className="con-container">
                    <div className="con-faq__header">
                        <span className="con-tag-dark mb-4 mx-auto">Knowledge Base</span>
                        <h2 className="con-heading !text-white m-0 text-center">
                            Common <span className="con-text-gradient">Inquiries.</span>
                        </h2>
                    </div>

                    <div className="con-faq-list">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`con-faq-item anim-faq-item ${openFaq === i ? 'con-faq-item--open' : ''}`}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="con-faq-q">
                                    <span className="text-lg font-light">{faq.q}</span>
                                    <ChevronDown size={20} className="con-faq-icon" />
                                </div>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="con-faq-a text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}
