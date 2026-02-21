import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Play, TrendingUp, Users, Target, Star,
    BarChart3, Video, Mic, Globe, Shield, Sparkles, ChevronRight, ChevronDown, Zap, Clock
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

/* ─── Data ─── */
const stats = [
    { number: '12M+', label: 'Organic Impressions', icon: <TrendingUp size={20} /> },
    { number: '150+', label: 'Brand Campaigns', icon: <Target size={20} /> },
    { number: '10K+', label: 'Active Creators', icon: <Users size={20} /> },
]

const features = [
    { icon: <Zap size={24} />, title: '100x Organic Reach', desc: 'AI-optimized UGC strategies that outperform traditional ads by putting real voices at the center.' },
    { icon: <Clock size={24} />, title: '80% Faster Content', desc: 'Generate, refine, and publish studio-quality content in minutes — not weeks.' },
    { icon: <TrendingUp size={24} />, title: '60% Better Engagement', desc: 'Authentic UGC + AI-optimized formats that audiences actually trust and share.' },
]

const howItWorks = [
    { step: '01', title: 'Activate', desc: 'Empower your users to create & share authentic content that represents your brand.', icon: <Users size={20} /> },
    { step: '02', title: 'Amplify', desc: 'Refine, remix, and retarget content using advanced AI for maximum viral impact.', icon: <Sparkles size={20} /> },
    { step: '03', title: 'Accelerate', desc: 'Achieve exponential reach, brand recall, and measurable ROI — at scale.', icon: <TrendingUp size={20} /> },
]

const testimonials = [
    { text: "YovoAI turned our customers into creators. 5x organic reach within weeks.", author: 'Amit Sharma', position: 'Brand Manager, Organix Foods', avatar: 'AS' },
    { text: "The AI tools are magic. Everyday videos became viral content effortlessly.", author: 'Sneha Iyer', position: 'Founder, Fitly', avatar: 'SI' },
    { text: "Our brand engagement skyrocketed. UGC + AI is a complete game-changer.", author: 'Rahul Mehta', position: 'CMO, Bloomwear', avatar: 'RM' },
]

const productShowcase = [
    { icon: <Video size={20} />, title: 'AI Video Engine', desc: 'Transform raw footage into brand-aligned content automatically.' },
    { icon: <Mic size={20} />, title: 'Voice Intelligence', desc: 'Analyze and amplify authentic creator voices that resonate.' },
    { icon: <BarChart3 size={20} />, title: 'Smart Analytics', desc: 'Real-time performance tracking with AI-driven insights.' },
    { icon: <Globe size={20} />, title: 'Distribution Engine', desc: 'Publish optimized content across all platforms simultaneously.' },
    { icon: <Shield size={20} />, title: 'Brand Safety', desc: 'AI moderation ensures brand alignment at every touchpoint.' },
    { icon: <Target size={20} />, title: 'Precision Matching', desc: 'Match with ideal creators and audiences intelligently.' },
]


/* ─── Stagger anim variants ─── */
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }


export default function Home() {
    const heroRef = useRef(null)
    const showcaseRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* Showcase cards */
            gsap.fromTo('.showcase-card', { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, stagger: 0.08, duration: 0.6,
                scrollTrigger: { trigger: showcaseRef.current, start: 'top 80%' },
            })
        })
        return () => ctx.revert()
    }, [])


    return (
        <main className="home-main">

            {/* ════════════════════════════════════════════════════════
          HERO — CENTERED  /  PREMIUM / YOVO AI BRANDING
         ════════════════════════════════════════════════════════ */}
            <section ref={heroRef} className="home-hero grain">
                {/* BG Video (subtle, not dominant) */}
                <div className="home-hero-bg">
                    <video autoPlay muted loop playsInline className="home-hero-video">
                        <source src="/src/assets/video/bg_videoYovo.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* ── Centered Content ── */}
                <div className="home-hero-content">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="home-hero-inner"
                    >

                        {/* Present Label */}
                        <motion.div
                            variants={fadeUp}
                        >
                            <span className="home-hero-label">
                                YOVO AI PRESENT
                            </span>
                        </motion.div>

                        {/* Headline Part 1 */}
                        <motion.div
                            variants={fadeUp}
                            className="home-hero-title-wrapper"
                        >
                            <h1 className="home-hero-title1">
                                Experience Ai Creation
                            </h1>
                        </motion.div>

                        {/* Headline Part 2 */}
                        <motion.h1
                            variants={fadeUp}
                            className="home-hero-title2"
                        >
                            like never before
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={fadeUp}
                            className="home-hero-desc"
                        >
                            Get a unique, AI-experience in no time with our powerful models.
                            Transform authentic voices into measurable brand growth.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={fadeUp} className="home-hero-cta-group">
                            <Link
                                to="/features"
                                className="home-hero-btn-primary"
                            >
                                <Sparkles size={16} fill="white" strokeWidth={0} /> Explore Platform
                            </Link>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.diin.yovoai"
                                target="_blank" rel="noopener noreferrer"
                                className="home-hero-btn-secondary"
                            >
                                <Sparkles size={16} className="home-hero-btn-icon-hidden" />
                                Become a Creator
                            </a>
                        </motion.div>

                        {/* Social Proof — rating section */}
                        <motion.div variants={fadeUp} className="home-hero-social-proof">
                            <div className="home-hero-avatars">
                                {['AS', 'PR', 'MK', 'RJ'].map((initials, i) => (
                                    <div
                                        key={initials}
                                        className="home-hero-avatar"
                                        style={{ zIndex: 4 - i }}
                                    >
                                        {initials}
                                    </div>
                                ))}
                            </div>
                            <div className="home-hero-rating">
                                <div className="home-hero-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} className="text-[#0A0A0A] fill-[#0A0A0A]" />
                                    ))}
                                </div>
                                <p className="home-hero-rating-text">
                                    Trusted by <span className="home-hero-rating-bold">10,000+</span> creators & brands
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="home-scroll-indicator"
                    >
                        <div className="home-scroll-indicator-inner">
                            <span className="home-scroll-text">Scroll</span>
                            <ChevronDown size={16} className="text-[#9ca3af] animate-scroll-down" />
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ════════════════════ STATS ════════════════════ */}
            <section className="home-stats">
                <div className="home-stats-container">
                    <div className="home-stats-grid">
                        {stats.map((stat, i) => (
                            <SectionReveal key={stat.label} delay={i * 0.08}>
                                <div className="home-stat-card">
                                    <div className="home-stat-icon">
                                        {stat.icon}
                                    </div>
                                    <div className="home-stat-number">{stat.number}</div>
                                    <div className="home-stat-label">{stat.label}</div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════ VIDEO SHOWCASE ════════════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="home-section-container">
                    <div className="home-split-grid">
                        <SectionReveal>
                            <span className="section-label"><Video size={13} /> See it in Action</span>
                            <h2 className="section-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                                From <span className="gradient-text">voice to viral</span> in seconds
                            </h2>
                            <p className="home-section-desc">
                                Watch how creators transform their authentic voices into scroll-stopping content. No agency needed. No delays.
                            </p>
                            <div className="home-feature-list">
                                {['AI-enhanced video editing in real-time', 'Instant multi-platform distribution', 'Smart analytics that predict virality'].map((item) => (
                                    <div key={item} className="home-feature-item">
                                        <div className="home-feature-icon">
                                            <ChevronRight size={12} />
                                        </div>
                                        <span className="home-feature-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/features" className="btn-primary home-btn-sm">
                                Explore All Features <ArrowRight size={15} />
                            </Link>
                        </SectionReveal>
                        <SectionReveal delay={0.15}>
                            <div className="home-video-wrapper">
                                <div className="home-video-container">
                                    <div className="home-video-device">
                                        <iframe
                                            src="https://www.youtube.com/embed/1pdkiWD5sCw?autoplay=1&mute=1&loop=1&controls=0&playlist=1pdkiWD5sCw&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1"
                                            width="100%" height="100%"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen frameBorder="0"
                                            title="YovoAI Demo"
                                            className="home-video-iframe"
                                        />
                                    </div>
                                    <div className="home-video-shadow" />
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>


            {/* ════════════════════ WHY YOVOAI ════════════════════ */}
            <section className="section-padding">
                <div className="home-section-container">
                    <SectionReveal className="home-center-header">
                        <span className="section-label"><Zap size={13} /> Why Choose Us</span>
                        <h2 className="section-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            Why <span className="gradient-text">YovoAI</span>?
                        </h2>
                        <p className="section-subtext">The power of AI-driven UGC that transforms your brand's voice into measurable growth</p>
                    </SectionReveal>

                    <div className="home-features-grid">
                        {features.map((f, i) => (
                            <SectionReveal key={f.title} delay={i * 0.1}>
                                <div className="home-feature-card">
                                    <div className="home-feature-card-icon">
                                        {f.icon}
                                    </div>
                                    <h3 className="home-feature-card-title">{f.title}</h3>
                                    <p className="home-feature-card-desc">{f.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════ PRODUCT SHOWCASE ════════════════════ */}
            <section ref={showcaseRef} className="section-padding gradient-subtle">
                <div className="home-section-container">
                    <SectionReveal className="home-center-header">
                        <span className="section-label"><Sparkles size={13} /> Product</span>
                        <h2 className="section-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            The <span className="gradient-text">AI Engine</span> Behind Your Growth
                        </h2>
                        <p className="section-subtext">A complete ecosystem of intelligent tools designed to maximize your content impact</p>
                    </SectionReveal>

                    <div className="home-showcase-grid">
                        {productShowcase.map((item) => (
                            <div key={item.title} className="showcase-card home-showcase-card">
                                <div className="home-showcase-header">
                                    <div className="home-showcase-icon">
                                        {item.icon}
                                    </div>
                                    <h3 className="home-showcase-title">{item.title}</h3>
                                </div>
                                <p className="home-showcase-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════ HOW IT WORKS ════════════════════ */}
            <section className="section-padding">
                <div className="home-section-container">
                    <SectionReveal className="home-center-header">
                        <span className="section-label"><Target size={13} /> Process</span>
                        <h2 className="section-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            How It <span className="gradient-text">Works</span>
                        </h2>
                    </SectionReveal>

                    <div className="home-process-container">
                        <div className="home-process-line" />
                        <div className="home-process-grid">
                            {howItWorks.map((step, i) => (
                                <SectionReveal key={step.step} delay={i * 0.15}>
                                    <div className="home-process-step">
                                        <div className="home-process-number">
                                            {step.step}
                                        </div>
                                        <h3 className="home-process-title">
                                            {step.icon} {step.title}
                                        </h3>
                                        <p className="home-process-desc">{step.desc}</p>
                                    </div>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal delay={0.4} className="home-process-stat">
                            <div className="home-process-stat-inner">
                                <div className="home-process-stat-header">
                                    <TrendingUp size={18} />
                                    <span className="home-process-stat-title">3x Increase</span>
                                </div>
                                <p className="home-process-stat-desc">Avg. community-led conversions in 30 days</p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>


            {/* ════════════════════ VALUE PROP ════════════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="home-section-container">
                    <div className="home-split-grid">
                        <SectionReveal>
                            <div className="home-image-wrapper">
                                <img src="/src/assets/images/futurasticAi.jpg" alt="AI-Powered Future" className="home-image" />
                                <div className="home-image-shadow" />
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.15}>
                            <span className="section-label"><Sparkles size={13} /> Our Promise</span>
                            <h2 className="section-heading home-section-header-tight">
                                Not another <span className="gradient-text">AI tool.</span>
                                <br />A growth revolution.
                            </h2>
                            <p className="home-section-desc">
                                YovoAI is a paradigm shift. We merge the raw authenticity of user-generated content with precision AI to create marketing that doesn't feel like marketing.
                            </p>
                            <div className="home-feature-list">
                                {['Turn every customer into a content creator', 'AI that understands your brand DNA', 'Creation to viral distribution in minutes', 'Measurable ROI from day one'].map((item) => (
                                    <div key={item} className="home-feature-item-align">
                                        <div className="home-feature-icon home-feature-icon-mt">
                                            <ChevronRight size={12} />
                                        </div>
                                        <span className="home-feature-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/about" className="btn-primary home-btn-sm">
                                Learn Our Story <ArrowRight size={15} />
                            </Link>
                        </SectionReveal>
                    </div>
                </div>
            </section>


            {/* ════════════════════ TESTIMONIALS ════════════════════ */}
            <section className="section-padding">
                <div className="home-section-container">
                    <SectionReveal className="home-center-header">
                        <span className="section-label"><Star size={13} /> Testimonials</span>
                        <h2 className="section-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            What Our <span className="gradient-text">Users Say</span>
                        </h2>
                    </SectionReveal>

                    <div className="home-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <SectionReveal key={t.author} delay={i * 0.1}>
                                <div className="home-testimonial-card">
                                    <div className="home-testimonial-stars">
                                        {[...Array(5)].map((_, j) => <Star key={j} size={14} />)}
                                    </div>
                                    <p className="home-testimonial-text">"{t.text}"</p>
                                    <div className="home-testimonial-author">
                                        <div className="home-testimonial-avatar">{t.avatar}</div>
                                        <div className="home-testimonial-info">
                                            <div className="home-testimonial-name">{t.author}</div>
                                            <div className="home-testimonial-position">{t.position}</div>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════ FEATURE HIGHLIGHT ════════════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="home-section-container">
                    <div className="home-split-grid">
                        <SectionReveal>
                            <span className="section-label"><Zap size={13} /> Next-Gen AI</span>
                            <h2 className="section-heading home-section-header-tight">
                                Content that <span className="gradient-text">converts.</span>
                                <br />Communities that <span className="gradient-text">last.</span>
                            </h2>
                            <p className="home-section-desc">
                                Our proprietary AI models understand culture, context, and communities. Every piece is designed to feel authentic, drive engagement, and build lasting connections.
                            </p>
                            <div className="home-mini-stats-grid">
                                {[
                                    { num: '95%', label: 'Brand Safety Score' },
                                    { num: '2.4x', label: 'Avg. Engagement Rate' },
                                    { num: '<5min', label: 'Content Creation Time' },
                                    { num: '40+', label: 'Platform Integrations' },
                                ].map((s) => (
                                    <div key={s.label} className="home-mini-stat-card">
                                        <div className="home-mini-stat-num">{s.num}</div>
                                        <div className="home-mini-stat-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.2}>
                            <div className="home-image-wrapper">
                                <img src="/src/assets/images/techStyleDash.jpg" alt="AI Dashboard" className="home-image" />
                                <div className="home-image-shadow-alt" />
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>
        </main>
    )
}
