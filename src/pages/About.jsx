import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Eye, Lightbulb, Rocket, Heart, Globe2, Zap,
    CheckCircle, Target, Brain, Sparkles, UserCog,
    Activity, ShieldCheck, Crown, BadgeCheck, HeartHandshake,
    LineChart
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const aiPhilosophy = [
    { icon: <Brain size={24} />, title: 'Contextual Intelligence', desc: 'Our AI understands cultural context, brand nuance, and audience psychology — not just keywords.', accent: '#f94b6e' },
    { icon: <UserCog size={24} />, title: 'Human-in-the-Loop', desc: 'Every AI suggestion is a starting point. Creators always have the final say on their content.', accent: '#e01111' },
    { icon: <Activity size={24} />, title: 'Real-Time Adaptation', desc: 'Our models learn continuously from engagement patterns to make each piece of content better.', accent: '#ff8902' },
    { icon: <ShieldCheck size={24} />, title: 'Ethical AI', desc: 'Transparent algorithms, fair creator compensation, and zero exploitation. Our AI has principles.', accent: '#f97316' },
    { icon: <Globe2 size={24} />, title: 'Cultural Sensitivity', desc: 'Built-in understanding of regional nuances, languages, and cultural contexts for global reach.', accent: '#fbbf24' },
    { icon: <Crown size={24} />, title: 'Creator Empowerment', desc: 'AI tools designed to make creators better — not dependencies, but superpowers.', accent: '#ea580c' },
]

const values = [
    { icon: <BadgeCheck size={24} />, title: 'Authenticity First', desc: 'We believe in the power of real voices. Every piece of content should feel genuine, not manufactured.', accent: '#f94b6e' },
    { icon: <Lightbulb size={24} />, title: 'Innovation Always', desc: 'We push boundaries with AI that understands culture, context, and the nuances of human communication.', accent: '#ff8902' },
    { icon: <HeartHandshake size={24} />, title: 'Community Centered', desc: 'We build for communities, not just companies. When creators thrive, brands follow.', accent: '#fbbf24' },
    { icon: <Globe2 size={24} />, title: 'Global Vision', desc: "Every voice matters, everywhere. We're building a platform that transcends borders and languages.", accent: '#f97316' },
    { icon: <Zap size={24} />, title: 'Speed of Culture', desc: 'Content moves fast. Our AI moves faster — adapting in real time to trends and conversations.', accent: '#e01111' },
    { icon: <LineChart size={24} />, title: 'Results Driven', desc: 'Beautiful content means nothing without results. Every feature drives measurable impact.', accent: '#ea580c' },
]

const roadmap = [
    { phase: 'Phase 1', title: 'Foundation', status: 'completed', items: ['UGC platform launch', 'Creator onboarding', 'Brand campaign engine', 'Analytics dashboard'] },
    { phase: 'Phase 2', title: 'AI Integration', status: 'current', items: ['AI content enhancement', 'Smart creator matching', 'Automated distribution', 'Performance prediction'] },
    { phase: 'Phase 3', title: 'Scale', status: 'upcoming', items: ['Multi-language AI', 'Enterprise API', 'Global creator network', 'Advanced AI models'] },
    { phase: 'Phase 4', title: 'Next Frontier', status: 'upcoming', items: ['Voice-first creation', 'AR/VR content', 'AI brand agents', 'Decentralized UGC'] },
]

/* ─── Neon Edge Card Component (About-specific) ─── */
function NeonEdgeCard({ children, accent = '#f97316', index = 0, className = '' }) {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
    }, [])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
            <div
                ref={cardRef}
                className={`neon-card ${isHovered ? 'neon-card--active' : ''} ${className}`}
                style={{ '--neon-accent': accent }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                <div className="neon-card__edge" />
                <div className="neon-card__spotlight" />
                <div className="neon-card__content">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

export default function About() {
    const timelineRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-roadmap-card', { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, stagger: 0.2, duration: 0.7,
                scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <main className="about-main">

            {/* ════════════ HERO ════════════ */}
            <section className="about-hero">
                <div className="about-hero-bg">
                    <img src="/src/assets/images/fpkdl.com_960_1771655178_coworking-space-office-sharing-desk-corporate-workplace-diversity-efficiency-modern-work_926199-2735151.jpg" alt="Background" className="about-hero-bg-img" />
                    <div className="about-hero-overlay"></div>
                </div>

                <div className="about-hero-glow-1" />
                <div className="about-hero-glow-2" />

                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
                            <Sparkles size={14} /> Our Story
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="about-hero-title"
                        >
                            We're building the
                            <br />
                            <span className="gradient-text">future of voice.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="about-hero-desc"
                        >
                            YovoAI was born from a simple truth: the most powerful marketing doesn't come from brands — it comes from people. We're on a mission to give every voice the technology to be heard, remembered, and amplified.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ════════════ VISION & MISSION ════════════ */}
            <section className="section-padding">
                <div className="container-lg">
                    <div className="about-split-grid">
                        <SectionReveal variant="flipX" duration={1.1}>
                            <NeonEdgeCard accent="#f97316" index={0} className="neon-card--vision">
                                <div className="premium-icon-orb" style={{ '--orb-color': '#f97316' }}>
                                    <div className="premium-icon-orb__inner">
                                        <Eye size={28} />
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h2 className="neon-vision-title">Our Vision</h2>
                                <p className="neon-vision-desc">
                                    A world where every authentic voice has the power to shape culture, drive commerce, and build communities — powered by AI that elevates human creativity.
                                </p>
                                <p className="neon-vision-subdesc">
                                    We envision a future where brands don't broadcast messages — they inspire movements. Where AI doesn't create content — it amplifies the brilliance that's already there.
                                </p>
                            </NeonEdgeCard>
                        </SectionReveal>
                        <SectionReveal delay={0.2} variant="flipX" duration={1.1}>
                            <NeonEdgeCard accent="#ea580c" index={1} className="neon-card--vision">
                                <div className="premium-icon-orb" style={{ '--orb-color': '#ea580c' }}>
                                    <div className="premium-icon-orb__inner">
                                        <Rocket size={28} />
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h2 className="neon-vision-title">Our Mission</h2>
                                <p className="neon-vision-desc">
                                    To democratize content creation by building the most powerful AI-powered UGC platform — one that makes every brand story irresistible and every creator unstoppable.
                                </p>
                                <p className="neon-vision-subdesc">
                                    We're creating an ecosystem where creators earn, brands grow, and communities flourish. Every day, we make content creation simpler, smarter, and more impactful.
                                </p>
                            </NeonEdgeCard>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ FOUNDER MINDSET + IMAGE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <div className="about-founder-grid">
                        <SectionReveal variant="scaleUp" duration={1.2}>
                            <img src="/src/assets/images/contentReading.jpg" alt="Content Strategy" className="about-founder-img" />
                        </SectionReveal>
                        <SectionReveal delay={0.2} variant="slideRotate" duration={1.1}>
                            <span className="section-label"><Lightbulb size={14} /> Founder's Perspective</span>
                            <h2 className="section-heading about-heading-tight">
                                "We saw the <span className="gradient-text">gap.</span>
                                <br />We built the <span className="gradient-text">bridge."</span>
                            </h2>
                            <p className="about-founder-desc">
                                Brands were spending millions on polished ads that audiences scrolled past. Meanwhile, a creator with a smartphone was generating more trust and engagement organically. The disconnect was glaring.
                            </p>
                            <p className="about-founder-subdesc">
                                YovoAI exists to solve this. We combine the raw power of authentic user-generated content with cutting-edge AI to create a flywheel: brands activate creators, AI amplifies their voice, everyone wins.
                            </p>
                            <p className="about-founder-quote">
                                "The best marketing doesn't look like marketing. It looks like a friend recommending something they love. That's what YovoAI enables — at scale."
                            </p>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ AI PHILOSOPHY ════════════ */}
            <section className="section-padding">
                <div className="container-lg">
                    <SectionReveal className="about-center-header" variant="blur" duration={1.1}>
                        <span className="section-label"><Brain size={14} /> AI Philosophy</span>
                        <h2 className="section-heading">
                            AI that <span className="gradient-text">amplifies,</span> not replaces
                        </h2>
                        <p className="section-subtext">We believe AI should make human creativity more powerful, not substitute it</p>
                    </SectionReveal>

                    <div className="about-grid-cols-3">
                        {aiPhilosophy.map((item, i) => (
                            <NeonEdgeCard key={item.title} accent={item.accent} index={i}>
                                <div className="premium-icon-orb" style={{ '--orb-color': item.accent }}>
                                    <div className="premium-icon-orb__inner">
                                        {item.icon}
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h3 className="neon-card-title">{item.title}</h3>
                                <p className="neon-card-desc">{item.desc}</p>
                            </NeonEdgeCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ VALUES ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <SectionReveal className="about-center-header" variant="scaleDown" duration={1}>
                        <span className="section-label"><Heart size={14} /> Our DNA</span>
                        <h2 className="section-heading">What <span className="gradient-text">drives</span> us</h2>
                    </SectionReveal>

                    <div className="about-grid-cols-3">
                        {values.map((v, i) => (
                            <NeonEdgeCard key={v.title} accent={v.accent} index={i}>
                                <div className="premium-icon-orb" style={{ '--orb-color': v.accent }}>
                                    <div className="premium-icon-orb__inner">
                                        {v.icon}
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h3 className="neon-card-title">{v.title}</h3>
                                <p className="neon-card-desc">{v.desc}</p>
                            </NeonEdgeCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ ROADMAP ════════════ */}
            <section ref={timelineRef} className="section-padding">
                <div className="container-lg">
                    <SectionReveal className="about-center-header" variant="elastic" duration={1.2}>
                        <span className="section-label"><Rocket size={14} /> Roadmap</span>
                        <h2 className="section-heading">Where we're <span className="gradient-text">headed</span></h2>
                        <p className="section-subtext">Our journey to redefine content creation and brand-creator collaboration</p>
                    </SectionReveal>

                    <div className="about-roadmap-grid">
                        {roadmap.map((phase, i) => {
                            const statusAccent = phase.status === 'completed' ? '#22c55e' : phase.status === 'current' ? '#f97316' : '#94a3b8'
                            return (
                                <NeonEdgeCard key={phase.phase} accent={statusAccent} index={i} className={`neon-roadmap ${phase.status === 'current' ? 'neon-roadmap--current' : ''}`}>
                                    {phase.status === 'current' && (
                                        <div className="neon-roadmap-badge">CURRENT</div>
                                    )}
                                    <div className="neon-roadmap-phase">{phase.phase}</div>
                                    <h3 className="neon-roadmap-title">{phase.title}</h3>
                                    <ul className="neon-roadmap-list">
                                        {phase.items.map((item) => (
                                            <li key={item} className="neon-roadmap-item">
                                                <CheckCircle size={14} className={`neon-roadmap-icon ${phase.status === 'completed' ? 'text-completed' : phase.status === 'current' ? 'text-current' : 'text-upcoming'}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </NeonEdgeCard>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════ FUTURE + IMAGE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <div className="about-founder-grid">
                        <SectionReveal variant="fadeLeft" duration={1.2}>
                            <span className="section-label"><Sparkles size={14} /> The Future</span>
                            <h2 className="section-heading">
                                Tomorrow's <span className="gradient-text">content,</span> today.
                            </h2>
                            <p className="about-future-desc">
                                We're investing in voice-first AI, generative content engines, multilingual processing, and AR-enhanced UGC. The creator economy is worth $250B — and we're just getting started. YovoAI will be the operating system for the next generation of content.
                            </p>
                            <div className="about-button-group">
                                <Link to="/features" className="magnetic-btn btn-primary">
                                    Explore Features <ArrowRight size={16} />
                                </Link>
                                <Link to="/for-creators" className="magnetic-btn btn-outline">
                                    Join as Creator <ArrowRight size={16} />
                                </Link>
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.2} variant="fadeRight" duration={1.2}>
                            <img src="/src/assets/images/stillLife.png" alt="Future Innovation" className="about-founder-img" />
                        </SectionReveal>
                    </div>
                </div>
            </section>
        </main>
    )
}
