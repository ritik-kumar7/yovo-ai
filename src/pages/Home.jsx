import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Play, LineChart, Eye, Megaphone, UserPlus, Star,
    BarChart4, Video, AudioWaveform, Share2, ShieldCheck, Focus, ChevronRight, ChevronDown, Rocket, Timer, PlayCircle, Volume2, Zap, Sparkles
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './Home.css'
import bgVideo from '../assets/video/bg_videoYovo.mp4'
import futurasticAi from '../assets/images/futurasticAi.jpg'
import techStyleDash from '../assets/images/techStyleDash.jpg'

gsap.registerPlugin(ScrollTrigger)

/* ─── Data ─── */
const stats = [
    { number: '12M+', label: 'Organic Impressions', icon: <Eye size={22} />, color: '#f94b6eff' },
    { number: '150+', label: 'Brand Campaigns', icon: <Megaphone size={22} />, color: '#ff8400ff' },
    { number: '10K+', label: 'Active Creators', icon: <UserPlus size={22} />, color: '#ffd902ff' },
]

const features = [
    { icon: <Rocket size={26} />, title: '100x Organic Reach', desc: 'AI-optimized UGC strategies that outperform traditional ads by putting real voices at the center.', color: '#f73ce1ff' },
    { icon: <Timer size={26} />, title: '80% Faster Content', desc: 'Generate, refine, and publish studio-quality content in minutes — not weeks.', color: '#ff671cff' },
    { icon: <LineChart size={26} />, title: '60% Better Engagement', desc: 'Authentic UGC + AI-optimized formats that audiences actually trust and share.', color: '#ff0000ff' },
]

const howItWorks = [
    { step: '01', title: 'Activate', desc: 'Empower your users to create & share authentic content that represents your brand.', icon: <PlayCircle size={20} /> },
    { step: '02', title: 'Amplify', desc: 'Refine, remix, and retarget content using advanced AI for maximum viral impact.', icon: <Volume2 size={20} /> },
    { step: '03', title: 'Accelerate', desc: 'Achieve exponential reach, brand recall, and measurable ROI — at scale.', icon: <Zap size={20} /> },
]

const testimonials = [
    { text: "YovoAI turned our customers into creators. 5x organic reach within weeks.", author: 'Amit Sharma', position: 'Brand Manager, Organix Foods', avatar: 'AS' },
    { text: "The AI tools are magic. Everyday videos became viral content effortlessly.", author: 'Sneha Iyer', position: 'Founder, Fitly', avatar: 'SI' },
    { text: "Our brand engagement skyrocketed. UGC + AI is a complete game-changer.", author: 'Rahul Mehta', position: 'CMO, Bloomwear', avatar: 'RM' },
]

const productShowcase = [
    { icon: <Video size={22} />, title: 'AI Video Engine', desc: 'Transform raw footage into brand-aligned content automatically.', color: '#DC143C' },
    { icon: <AudioWaveform size={22} />, title: 'Voice Intelligence', desc: 'Analyze and amplify authentic creator voices that resonate.', color: '#800020' },
    { icon: <BarChart4 size={22} />, title: 'Smart Analytics', desc: 'Real-time performance tracking with AI-driven insights.', color: '#E0115F' },
    { icon: <Share2 size={22} />, title: 'Distribution Engine', desc: 'Publish optimized content across all platforms simultaneously.', color: '#FF2400' },
    { icon: <ShieldCheck size={22} />, title: 'Brand Safety', desc: 'AI moderation ensures brand alignment at every touchpoint.', color: '#DE3163' },
    { icon: <Focus size={22} />, title: 'Precision Matching', desc: 'Match with ideal creators and audiences intelligently.', color: '#960018' },
]

/* ─── Top Brands Data ─── */
const marqueeBrands = [
    {
        id: 'cleanfox',
        node: <div className="mock-logo" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>Cleanfox</div>,
    },
    {
        id: 'bending-spoons',
        node: (
            <div className="mock-logo" style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', gap: '0.2rem' }}>
                BENDING SP
                <svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.17 6c-1.85 0-3.56.96-4.52 2.53L12 11.26 10.35 8.53C9.39 6.96 7.68 6 5.83 6 2.61 6 0 8.68 0 12s2.61 6 5.83 6c1.85 0 3.56-.96 4.52-2.53L12 12.74l1.65 2.73c.96 1.57 2.67 2.53 4.52 2.53 3.22 0 5.83-2.68 5.83-6s-2.61-6-5.83-6zm0 9c-1.07 0-2.07-.56-2.62-1.47L13.8 11h.01l-1.01-1.68L14.54 6.4c.06-.09.11-.18.18-.26.85 1.09 1.15 2.57.8 4.02-.37 1.54-1.57 2.78-3.11 3.14-1.42.33-2.88.02-3.95-.81l1.89 3.03C11.3 17.06 12.33 18 13.5 18H18.17z" />
                </svg>
                NS
            </div>
        ),
    },
    {
        id: 'asana',
        node: (
            <div className="mock-logo" style={{ fontWeight: 600, letterSpacing: '-0.05em' }}>
                <svg width="1.1em" height="1.1em" viewBox="0 0 32 32" fill="currentColor">
                    <circle cx="16" cy="10" r="4.5" />
                    <circle cx="9" cy="22" r="4.5" />
                    <circle cx="23" cy="22" r="4.5" />
                </svg>
                asana
            </div>
        ),
    },
    {
        id: 'headway',
        node: (
            <div className="mock-logo" style={{ fontWeight: 700 }}>
                <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                    <path d="M8 7h2v10H8zm6 0h2v10h-2zm-4 4h4v2h-4z" fill="#fff" />
                </svg>
                Headway
            </div>
        ),
    },
    {
        id: 'clickfunnels',
        node: (
            <div className="mock-logo" style={{ fontWeight: 500, letterSpacing: '-0.02em', alignItems: 'center' }}>
                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h16v3L14 14v6l-4 3v-9L4 7z" />
                </svg>
                click funnels
            </div>
        ),
    },
    {
        id: 'stripe',
        node: <div className="mock-logo" style={{ fontWeight: 800, letterSpacing: '-0.05em' }}>stripe</div>,
    },

];


/* ─── Premium 3D Tilt Card Component ─── */
function PremiumCard({ children, className = '', index = 0, color = '#6366f1' }) {
    const cardRef = useRef(null)
    const glowRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -8
        const rotateY = ((x - centerX) / centerX) * 8

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`

        if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${color}18, transparent 40%)`
        }
    }, [color])

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current
        if (!card) return
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)'
        if (glowRef.current) {
            glowRef.current.style.background = 'transparent'
        }
        setIsHovered(false)
    }, [])

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true)
    }, [])

    const offsets = [0, 24, -12, 16, -20, 8]
    const offset = offsets[index % offsets.length]

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{ marginTop: `${offset}px` }}
        >
            <div
                ref={cardRef}
                className={`premium-card ${isHovered ? 'premium-card--hovered' : ''} ${className}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                style={{ '--card-accent': color }}
            >
                {/* Inner highlight */}
                <div className="premium-card__highlight" />
                {/* Dynamic glow */}
                <div ref={glowRef} className="premium-card__glow" />
                {/* Animated gradient border */}
                <div className="premium-card__border" />
                {/* Content */}
                <div className="premium-card__content">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

/* ─── Particle Canvas Component ─── */
function ParticleField({ className = '' }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animationId
        let particles = []

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }
        resize()
        window.addEventListener('resize', resize)

        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.4 + 0.1,
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
            particles.forEach((p) => {
                p.x += p.speedX
                p.y += p.speedY
                if (p.x < 0) p.x = canvas.offsetWidth
                if (p.x > canvas.offsetWidth) p.x = 0
                if (p.y < 0) p.y = canvas.offsetHeight
                if (p.y > canvas.offsetHeight) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(220, 20, 60, ${p.opacity})`
                ctx.fill()
            })
            animationId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className={`particle-field ${className}`} />
}


/* ─── Stagger anim variants ─── */
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }


export default function Home() {
    const heroRef = useRef(null)
    const showcaseRef = useRef(null)
    const [activeFeature, setActiveFeature] = useState(0)

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
                        <source src={bgVideo} type="video/mp4" />
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


            {/* ════════════════════ STATS — PREMIUM ════════════════════ */}
            <section className="home-stats premium-stats-section">
                <div className="home-stats-container">
                    <div className="home-stats-grid">
                        {stats.map((stat, i) => (
                            <PremiumCard key={stat.label} index={i} color={stat.color} className="premium-stat-card">
                                <div className="premium-stat-inner">
                                    <div className="premium-icon-orb premium-icon-orb--stat" style={{ '--orb-color': stat.color }}>
                                        <div className="premium-icon-orb__inner">
                                            {stat.icon}
                                        </div>
                                        <div className="premium-icon-orb__pulse" />
                                    </div>
                                    <div className="premium-stat-text">
                                        <div className="premium-stat-number">{stat.number}</div>
                                        <div className="premium-stat-label">{stat.label}</div>
                                    </div>
                                </div>
                            </PremiumCard>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════ VIDEO SHOWCASE ════════════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="home-section-container">
                    <div className="home-split-grid">
                        <SectionReveal variant="slideRotate" duration={1}>
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
                        <SectionReveal delay={0.2} variant="scaleUp" duration={1.2}>
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


            {/* ════════════════════ WHY YOVOAI — PREMIUM CARDS ════════════════════ */}
            <section className="section-padding premium-section">
                <div className="premium-section__bg">
                    <div className="premium-section__radial premium-section__radial--1" />
                    <div className="premium-section__radial premium-section__radial--2" />
                    <ParticleField />
                </div>
                <div className="home-section-container">
                    <SectionReveal className="home-center-header" variant="blur" duration={1}>
                        <span className="section-label section-label--glow"><Zap size={13} /> Why Choose Us</span>
                        <h2 className="section-heading premium-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            Why <span className="gradient-text-premium">YovoAI</span>?
                        </h2>
                        <p className="section-subtext premium-subtext">The power of AI-driven UGC that transforms your brand's voice into measurable growth</p>
                    </SectionReveal>

                    <div className="premium-features-grid">
                        {features.map((f, i) => (
                            <PremiumCard key={f.title} index={i} color={f.color}>
                                <div className="premium-icon-orb" style={{ '--orb-color': f.color }}>
                                    <div className="premium-icon-orb__inner">
                                        {f.icon}
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h3 className="premium-card-title">{f.title}</h3>
                                <p className="premium-card-desc">{f.desc}</p>
                            </PremiumCard>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════ PRODUCT SHOWCASE — INTERACTIVE AI CORE ════════════════════ */}
            <section ref={showcaseRef} className="section-padding engine-master-section">
                <div className="engine-master-bg">
                    <div className="engine-master-glow" style={{ background: productShowcase[activeFeature]?.color || '#DC143C' }} />
                    <ParticleField />
                </div>
                <div className="home-section-container">
                    <SectionReveal className="home-center-header" variant="scaleUp" duration={1}>
                        <span className="section-label section-label--glow"><Sparkles size={13} /> Product</span>
                        <h2 className="section-heading premium-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            The <span className="gradient-text-premium">AI Engine</span> Behind Your Growth
                        </h2>
                        <p className="section-subtext premium-subtext">A complete ecosystem of intelligent tools designed to maximize your content impact</p>
                    </SectionReveal>

                    <div className="engine-hub-layout">
                        {/* Left Column */}
                        <div className="engine-hub-column left-column">
                            {productShowcase.slice(0, 3).map((item, i) => {
                                const index = i;
                                return (
                                    <div
                                        key={item.title}
                                        className={`engine-hub-card ${activeFeature === index ? 'is-active' : ''}`}
                                        onMouseEnter={() => setActiveFeature(index)}
                                        style={{ '--item-color': item.color }}
                                    >
                                        <div className="engine-hub-card-header">
                                            <div className="engine-hub-icon">
                                                {item.icon}
                                            </div>
                                            <h3 className="engine-hub-title">{item.title}</h3>
                                        </div>
                                        <p className="engine-hub-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Center Column */}
                        <div className="engine-hub-center">
                            <div className="engine-core">
                                <div className="engine-core-rings">
                                    <div className="engine-ring engine-ring-1" />
                                    <div className="engine-ring engine-ring-2" style={{ borderColor: `color-mix(in srgb, ${productShowcase[activeFeature]?.color} 30%, transparent)` }} />
                                    <div className="engine-ring engine-ring-3" style={{ borderColor: `color-mix(in srgb, ${productShowcase[activeFeature]?.color} 40%, transparent)` }} />
                                </div>

                                <div className="engine-core-center" style={{ '--core-color': productShowcase[activeFeature]?.color || '#DC143C' }}>
                                    <div className="engine-core-icon-wrap" key={activeFeature}>
                                        {productShowcase[activeFeature]?.icon}
                                    </div>
                                    <div className="engine-core-sparkles">
                                        <Sparkles size={24} />
                                        <Zap size={20} />
                                        <Star size={16} />
                                    </div>
                                </div>

                                <div className="engine-data-stream" style={{ color: productShowcase[activeFeature]?.color }}>
                                    {productShowcase[activeFeature]?.title.toUpperCase()} // ACTIVE
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="engine-hub-column right-column">
                            {productShowcase.slice(3, 6).map((item, i) => {
                                const index = i + 3;
                                return (
                                    <div
                                        key={item.title}
                                        className={`engine-hub-card ${activeFeature === index ? 'is-active' : ''}`}
                                        onMouseEnter={() => setActiveFeature(index)}
                                        style={{ '--item-color': item.color }}
                                    >
                                        <div className="engine-hub-card-header">
                                            <div className="engine-hub-icon">
                                                {item.icon}
                                            </div>
                                            <h3 className="engine-hub-title">{item.title}</h3>
                                        </div>
                                        <p className="engine-hub-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>


            {/* ════════════════════ HOW IT WORKS ════════════════════ */}
            <section className="section-padding">
                <div className="home-section-container">
                    <SectionReveal className="home-center-header" variant="flipY" duration={1}>
                        <span className="section-label"><Focus size={13} /> Process</span>
                        <h2 className="section-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            How It <span className="gradient-text">Works</span>
                        </h2>
                    </SectionReveal>

                    <div className="home-process-container">
                        <div className="home-process-line" />
                        <div className="home-process-grid">
                            {howItWorks.map((step, i) => (
                                <SectionReveal key={step.step} delay={i * 0.15} variant="bounce" duration={0.9}>
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

                        <SectionReveal delay={0.4} className="home-process-stat" variant="elastic" duration={1.2}>
                            <div className="home-process-stat-inner">
                                <div className="home-process-stat-header">
                                    <LineChart size={18} />
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
                        <SectionReveal variant="fadeLeft" duration={1.1}>
                            <div className="home-image-wrapper">
                                <img src={futurasticAi} alt="AI-Powered Future" className="home-image" />
                                <div className="home-image-shadow" />
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.2} variant="fadeRight" duration={1.1}>
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
                    <SectionReveal className="home-center-header" variant="scaleDown" duration={1}>
                        <span className="section-label"><Star size={13} /> Testimonials</span>
                        <h2 className="section-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            What Our <span className="gradient-text">Users Say</span>
                        </h2>
                    </SectionReveal>

                    <div className="home-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <SectionReveal key={t.author} delay={i * 0.1} variant="rotateIn" duration={0.9}>
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
                        <SectionReveal variant="glitch" duration={1}>
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
                        <SectionReveal delay={0.2} variant="fadeRight" duration={1.2}>
                            <div className="home-image-wrapper">
                                <img src={techStyleDash} alt="AI Dashboard" className="home-image" />
                                <div className="home-image-shadow-alt" />
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════ TOP BRANDS MARQUEE ════════════════════ */}
            <section className="section-padding top-brands-section">
                <div className="home-section-container">
                    <SectionReveal className="home-center-header" variant="fadeUp" duration={1}>
                        <span className="section-label section-label--glow"><Star size={13} /> Trusted By</span>
                        <h2 className="section-heading premium-heading" style={{ fontFamily: 'var(--f-heading)' }}>
                            Top <span className="gradient-text-premium">Brands</span>
                        </h2>
                    </SectionReveal>

                    <div className="marquee-container">
                        <div className="marquee-content">
                            {marqueeBrands.map((brand, i) => (
                                <div key={`brand1-${brand.id}-${i}`} className={`marquee-item marquee-item-${brand.id}`}>
                                    {brand.node}
                                </div>
                            ))}
                        </div>
                        <div className="marquee-content" aria-hidden="true">
                            {marqueeBrands.map((brand, i) => (
                                <div key={`brand2-${brand.id}-${i}`} className={`marquee-item marquee-item-${brand.id}`}>
                                    {brand.node}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
