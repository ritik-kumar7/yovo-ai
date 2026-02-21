import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Eye, Lightbulb, Rocket, Heart, Globe, Zap,
    CheckCircle, Target, Users, Brain, Sparkles
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const values = [
    { icon: <Eye size={26} />, title: 'Authenticity First', desc: 'We believe in the power of real voices. Every piece of content should feel genuine, not manufactured.', color: 'bg-grad-1' },
    { icon: <Lightbulb size={26} />, title: 'Innovation Always', desc: 'We push boundaries with AI that understands culture, context, and the nuances of human communication.', color: 'bg-grad-2' },
    { icon: <Heart size={26} />, title: 'Community Centered', desc: 'We build for communities, not just companies. When creators thrive, brands follow.', color: 'bg-grad-3' },
    { icon: <Globe size={26} />, title: 'Global Vision', desc: "Every voice matters, everywhere. We're building a platform that transcends borders and languages.", color: 'bg-grad-4' },
    { icon: <Zap size={26} />, title: 'Speed of Culture', desc: 'Content moves fast. Our AI moves faster — adapting in real time to trends and conversations.', color: 'bg-grad-5' },
    { icon: <Target size={26} />, title: 'Results Driven', desc: 'Beautiful content means nothing without results. Every feature drives measurable impact.', color: 'bg-grad-6' },
]

const roadmap = [
    { phase: 'Phase 1', title: 'Foundation', status: 'completed', items: ['UGC platform launch', 'Creator onboarding', 'Brand campaign engine', 'Analytics dashboard'] },
    { phase: 'Phase 2', title: 'AI Integration', status: 'current', items: ['AI content enhancement', 'Smart creator matching', 'Automated distribution', 'Performance prediction'] },
    { phase: 'Phase 3', title: 'Scale', status: 'upcoming', items: ['Multi-language AI', 'Enterprise API', 'Global creator network', 'Advanced AI models'] },
    { phase: 'Phase 4', title: 'Next Frontier', status: 'upcoming', items: ['Voice-first creation', 'AR/VR content', 'AI brand agents', 'Decentralized UGC'] },
]

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
                        <SectionReveal>
                            <div className="about-vision-card hover-depth">
                                <div className="about-vision-icon-1">
                                    <Eye size={28} />
                                </div>
                                <h2 className="about-vision-title">Our Vision</h2>
                                <p className="about-vision-desc">
                                    A world where every authentic voice has the power to shape culture, drive commerce, and build communities — powered by AI that elevates human creativity.
                                </p>
                                <p className="about-vision-subdesc">
                                    We envision a future where brands don't broadcast messages — they inspire movements. Where AI doesn't create content — it amplifies the brilliance that's already there.
                                </p>
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.15}>
                            <div className="about-vision-card hover-depth">
                                <div className="about-vision-icon-2">
                                    <Rocket size={28} />
                                </div>
                                <h2 className="about-vision-title">Our Mission</h2>
                                <p className="about-vision-desc">
                                    To democratize content creation by building the most powerful AI-powered UGC platform — one that makes every brand story irresistible and every creator unstoppable.
                                </p>
                                <p className="about-vision-subdesc">
                                    We're creating an ecosystem where creators earn, brands grow, and communities flourish. Every day, we make content creation simpler, smarter, and more impactful.
                                </p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ FOUNDER MINDSET + IMAGE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <div className="about-founder-grid">
                        <SectionReveal>
                            <img src="/src/assets/images/contentReading.jpg" alt="Content Strategy" className="about-founder-img" />
                        </SectionReveal>
                        <SectionReveal delay={0.15}>
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
                    <SectionReveal className="about-center-header">
                        <span className="section-label"><Brain size={14} /> AI Philosophy</span>
                        <h2 className="section-heading">
                            AI that <span className="gradient-text">amplifies,</span> not replaces
                        </h2>
                        <p className="section-subtext">We believe AI should make human creativity more powerful, not substitute it</p>
                    </SectionReveal>

                    <div className="about-grid-cols-3">
                        {[
                            { icon: <Brain size={24} />, title: 'Contextual Intelligence', desc: 'Our AI understands cultural context, brand nuance, and audience psychology — not just keywords.' },
                            { icon: <Users size={24} />, title: 'Human-in-the-Loop', desc: 'Every AI suggestion is a starting point. Creators always have the final say on their content.' },
                            { icon: <Zap size={24} />, title: 'Real-Time Adaptation', desc: 'Our models learn continuously from engagement patterns to make each piece of content better.' },
                            { icon: <Target size={24} />, title: 'Ethical AI', desc: 'Transparent algorithms, fair creator compensation, and zero exploitation. Our AI has principles.' },
                            { icon: <Globe size={24} />, title: 'Cultural Sensitivity', desc: 'Built-in understanding of regional nuances, languages, and cultural contexts for global reach.' },
                            { icon: <Heart size={24} />, title: 'Creator Empowerment', desc: 'AI tools designed to make creators better — not dependencies, but superpowers.' },
                        ].map((item, i) => (
                            <SectionReveal key={item.title} delay={i * 0.08}>
                                <div className="about-card hover-depth">
                                    <div className="about-card-icon gradient-brand">
                                        {item.icon}
                                    </div>
                                    <h3 className="about-card-title">{item.title}</h3>
                                    <p className="about-card-desc">{item.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ VALUES ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <SectionReveal className="about-center-header">
                        <span className="section-label"><Heart size={14} /> Our DNA</span>
                        <h2 className="section-heading">What <span className="gradient-text">drives</span> us</h2>
                    </SectionReveal>

                    <div className="about-grid-cols-3">
                        {values.map((v, i) => (
                            <SectionReveal key={v.title} delay={i * 0.08}>
                                <div className="about-card hover-depth">
                                    <div className={`about-card-icon ${v.color}`}>
                                        {v.icon}
                                    </div>
                                    <h3 className="about-card-title">{v.title}</h3>
                                    <p className="about-card-desc">{v.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ ROADMAP ════════════ */}
            <section ref={timelineRef} className="section-padding">
                <div className="container-lg">
                    <SectionReveal className="about-center-header">
                        <span className="section-label"><Rocket size={14} /> Roadmap</span>
                        <h2 className="section-heading">Where we're <span className="gradient-text">headed</span></h2>
                        <p className="section-subtext">Our journey to redefine content creation and brand-creator collaboration</p>
                    </SectionReveal>

                    <div className="about-roadmap-grid">
                        {roadmap.map((phase) => (
                            <div key={phase.phase} className={`about-roadmap-card hover-depth ${phase.status === 'current' ? 'current' : ''}`}>
                                {phase.status === 'current' && (
                                    <div className="about-roadmap-badge gradient-brand">CURRENT</div>
                                )}
                                <div className="about-roadmap-phase">{phase.phase}</div>
                                <h3 className="about-roadmap-title">{phase.title}</h3>
                                <ul className="about-roadmap-list">
                                    {phase.items.map((item) => (
                                        <li key={item} className="about-roadmap-item">
                                            <CheckCircle size={14} className={`about-roadmap-icon ${phase.status === 'completed' ? 'text-completed' : phase.status === 'current' ? 'text-current' : 'text-upcoming'}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ FUTURE + IMAGE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <div className="about-founder-grid">
                        <SectionReveal>
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
                        <SectionReveal delay={0.2}>
                            <img src="/src/assets/images/stillLife.png" alt="Future Innovation" className="about-founder-img" />
                        </SectionReveal>
                    </div>
                </div>
            </section>
        </main>
    )
}
