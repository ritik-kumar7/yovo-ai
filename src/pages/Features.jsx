import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Video, Mic, BarChart3, Globe, ShieldCheck, Target, Zap, BrainCircuit,
    Wand2, Layers, Cpu, Eye, Clock, TrendingUp, CheckCircle, Star,
    Sliders, Database, LineChart, Workflow, Cable, AudioWaveform, LayoutTemplate,
    Settings2, HardDrive, Puzzle, Sparkles
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './Features.css'

gsap.registerPlugin(ScrollTrigger)

/* ─── Aurora Glass Card Component (Features-specific) ─── */
function AuroraCard({ children, accent = '#f97316', index = 0, className = '' }) {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-40px' })

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--ax', `${x}px`)
        card.style.setProperty('--ay', `${y}px`)
    }, [])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 45, scale: 0.97 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
            <div
                ref={cardRef}
                className={`aurora-card ${isHovered ? 'aurora-card--lit' : ''} ${className}`}
                style={{ '--aurora-accent': accent }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                <div className="aurora-card__stripe" />
                <div className="aurora-card__glow" />
                <div className="aurora-card__shine" />
                <div className="aurora-card__body">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

const coreFeatures = [
    { icon: <Video size={28} />, title: 'AI Video Engine', desc: 'Transform raw footage into polished, brand-aligned content. Our AI understands composition, pacing, and storytelling to create scroll-stopping videos.', capabilities: ['Auto-editing & transitions', 'Brand overlay injection', 'Multi-format export', 'Trend-aware styling'], gradient: 'from-amber-400 to-orange-500', img: '/src/assets/images/visualDashbord.jpg' },
    { icon: <AudioWaveform size={28} />, title: 'Voice Intelligence', desc: 'Advanced voice analysis that identifies authentic creator voices and amplifies their impact across audiences.', capabilities: ['Voice tone analysis', 'Audience resonance scoring', 'Multi-language support', 'Sentiment detection'], gradient: 'from-orange-400 to-red-500', img: '/src/assets/images/usingTech.jpg' },
    { icon: <BrainCircuit size={28} />, title: 'AI Processing Engine', desc: 'The neural backbone of YovoAI. Our proprietary models process, optimize, and enhance content in real-time.', capabilities: ['Deep learning models', 'Real-time processing', 'Content quality scoring', 'Trend prediction'], gradient: 'from-yellow-400 to-amber-500', img: '/src/assets/images/techStyleDash.jpg' },
]

const comparisonData = [
    { feature: 'Content Creation Speed', yovo: '< 5 minutes', traditional: '2–5 days', competitor: '30–60 min' },
    { feature: 'AI Content Enhancement', yovo: '✓ Advanced', traditional: '✗ None', competitor: '✓ Basic' },
    { feature: 'Creator Network', yovo: '10,000+', traditional: 'Manual Search', competitor: '1K–5K' },
    { feature: 'Brand Safety AI', yovo: '✓ Real-time', traditional: 'Manual Review', competitor: '✓ Delayed' },
    { feature: 'UGC + AI Integration', yovo: '✓ Native', traditional: '✗ None', competitor: '✓ Partial' },
    { feature: 'Multi-Platform Distribution', yovo: '✓ 40+ platforms', traditional: 'Manual', competitor: '✓ 10–15' },
    { feature: 'Predictive Analytics', yovo: '✓ AI-Powered', traditional: '✗ None', competitor: '✓ Basic' },
    { feature: 'Cost per Campaign', yovo: 'Up to 80% less', traditional: 'High', competitor: 'Moderate' },
]

const ugcFeatures = [
    { icon: <LayoutTemplate size={22} />, title: 'Campaign Templates', desc: 'Launch UGC campaigns in minutes with pre-built, customizable templates for any industry.', accent: '#f94b6e' },
    { icon: <Wand2 size={22} />, title: 'AI Content Enhancement', desc: 'Automatically enhance creator content with brand elements, subtitles, and visual effects.', accent: '#ff8902' },
    { icon: <ShieldCheck size={22} />, title: 'Content Moderation', desc: 'Real-time AI moderation ensures every piece of UGC aligns with your brand guidelines.', accent: '#fbbf24' },
    { icon: <Settings2 size={22} />, title: 'Automated Workflows', desc: 'Set up approval flows, auto-publishing, and performance-based creator rewards.', accent: '#f97316' },
    { icon: <HardDrive size={22} />, title: 'Content Library', desc: 'AI-organized content repository with smart tagging, search, and rights management.', accent: '#ea580c' },
    { icon: <Puzzle size={22} />, title: 'API & Integrations', desc: 'Connect YovoAI to your existing marketing stack with our robust API and 40+ integrations.', accent: '#e01111' },
]

const performanceMetrics = [
    { label: 'Content Quality Score', value: 94, color: 'from-green-400 to-emerald-500' },
    { label: 'Brand Safety', value: 98, color: 'from-amber-400 to-orange-500' },
    { label: 'Audience Match', value: 92, color: 'from-orange-400 to-red-500' },
    { label: 'Engagement Prediction', value: 89, color: 'from-yellow-400 to-amber-500' },
]

export default function Features() {
    const featuresRef = useRef(null)

    const coreAccents = ['#f94b6e', '#ff8902', '#fbbf24']

    return (
        <main className="relative z-10">

            {/* ════════════ HERO ════════════ */}
            <section className="features-hero">
                {/* Background Image + Overlay */}
                <div className="features-hero-bg">
                    <img src="/src/assets/images/teachingTech.jpg" alt="" className="fh-bg-img" />
                    <div className="fh-overlay"></div>
                </div>

                {/* Warm Ambient Glows */}
                <div className="fh-glow fh-glow-1"></div>
                <div className="fh-glow fh-glow-2"></div>
                <div className="fh-glow fh-glow-3"></div>

                <div className="features-hero-container">
                    <div className="features-hero-content">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
                            <Cpu size={14} /> Platform Features
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="features-hero-title"
                        >
                            Every tool you need.
                            <br />
                            <span className="gradient-text">One platform.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="features-hero-desc"
                        >
                            Deep dive into the AI-powered features that make YovoAI the most comprehensive UGC and content platform for the future.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="fh-cta-row">
                            <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="magnetic-btn btn-primary">Get Started <ArrowRight size={16} /></a>
                            <Link to="/for-creators" className="magnetic-btn btn-outline">Join as Creator <ArrowRight size={16} /></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════ CORE FEATURES (with images) ════════════ */}
            <section ref={featuresRef} className="section-padding">
                <div className="container-lg">
                    <SectionReveal className="features-center-header" variant="rotateIn" duration={1.1}>
                        <span className="section-label"><Zap size={14} /> Core Features</span>
                        <h2 className="section-heading">The <span className="gradient-text">AI Arsenal</span></h2>
                        <p className="section-subtext">Each feature is meticulously engineered to maximize content impact</p>
                    </SectionReveal>

                    <div className="features-list">
                        {coreFeatures.map((f, i) => (
                            <AuroraCard key={f.title} accent={coreAccents[i]} index={i} className="aurora-card--large">
                                <div className="features-card-grid">
                                    <div className={`features-card-content ${i % 2 !== 0 ? 'features-card-order-lg-2' : ''}`}>
                                        <div className="premium-icon-orb" style={{ '--orb-color': coreAccents[i] }}>
                                            <div className="premium-icon-orb__inner">
                                                {f.icon}
                                            </div>
                                            <div className="premium-icon-orb__pulse" />
                                        </div>
                                        <h3 className="aurora-card-title aurora-card-title--lg">{f.title}</h3>
                                        <p className="aurora-card-desc">{f.desc}</p>
                                        <div className="features-card-capabilities">
                                            {f.capabilities.map((cap) => (
                                                <div key={cap} className="features-capability-item">
                                                    <CheckCircle size={14} className="features-capability-icon" />
                                                    {cap}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`features-card-image-wrapper ${i % 2 !== 0 ? 'features-card-order-lg-1' : ''}`}>
                                        <img src={f.img} alt={f.title} className="features-card-image" />
                                    </div>
                                </div>
                            </AuroraCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ UGC CREATION ENGINE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <SectionReveal className="features-center-header" variant="glitch" duration={1}>
                        <span className="section-label"><Sparkles size={14} /> UGC Engine</span>
                        <h2 className="section-heading">The <span className="gradient-text">UGC Creation</span> Engine</h2>
                        <p className="section-subtext">Everything you need to launch, manage, and scale UGC campaigns</p>
                    </SectionReveal>

                    <div className="features-grid-3">
                        {ugcFeatures.map((item, i) => (
                            <AuroraCard key={item.title} accent={item.accent} index={i}>
                                <div className="premium-icon-orb" style={{ '--orb-color': item.accent }}>
                                    <div className="premium-icon-orb__inner">
                                        {item.icon}
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h3 className="aurora-card-title">{item.title}</h3>
                                <p className="aurora-card-desc">{item.desc}</p>
                            </AuroraCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ PERFORMANCE OPTIMIZATION ════════════ */}
            <section className="section-padding">
                <div className="container-lg">
                    <div className="features-split-grid">
                        <SectionReveal variant="slideRotate" duration={1.1}>
                            <span className="section-label"><BarChart3 size={14} /> Performance</span>
                            <h2 className="section-heading" style={{ lineHeight: 1.1 }}>
                                AI-Powered <span className="gradient-text">Performance</span> Optimization
                            </h2>
                            <p className="features-card-desc" style={{ marginBottom: '2rem' }}>
                                Our AI analyzes content performance across every metric. From predicting viral potential before publishing to real-time optimization — YovoAI ensures your content always performs at its peak.
                            </p>
                            <div className="features-metrics-list">
                                {performanceMetrics.map((m) => (
                                    <div key={m.label}>
                                        <div className="features-metric-header">
                                            <span className="features-metric-label">{m.label}</span>
                                            <span className="features-metric-value gradient-text">{m.value}%</span>
                                        </div>
                                        <div className="features-metric-bar-bg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${m.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.3 }}
                                                className="features-metric-bar-fill"
                                                style={{ background: 'linear-gradient(to right, #fbbf24, #f97316)' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.2} variant="scaleUp" duration={1.2}>
                            <div className="features-grid-2x2">
                                {[
                                    { icon: <Eye size={22} />, title: 'Smart Preview', desc: 'See how your content will perform before publishing', accent: '#f94b6e' },
                                    { icon: <Clock size={22} />, title: 'Optimal Timing', desc: 'AI determines the perfect moment to publish', accent: '#ff8902' },
                                    { icon: <TrendingUp size={22} />, title: 'Growth Insights', desc: 'Actionable recommendations for continuous improvement', accent: '#fbbf24' },
                                    { icon: <Sliders size={22} />, title: 'A/B Testing', desc: 'Automated content variants for maximum impact', accent: '#ea580c' },
                                ].map((item, i) => (
                                    <AuroraCard key={item.title} accent={item.accent} index={i} className="aurora-card--compact">
                                        <div className="premium-icon-orb premium-icon-orb--sm" style={{ '--orb-color': item.accent }}>
                                            <div className="premium-icon-orb__inner">
                                                {item.icon}
                                            </div>
                                            <div className="premium-icon-orb__pulse" />
                                        </div>
                                        <h4 className="aurora-card-title aurora-card-title--sm">{item.title}</h4>
                                        <p className="aurora-card-desc aurora-card-desc--sm">{item.desc}</p>
                                    </AuroraCard>
                                ))}
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ COMPARISON TABLE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg">
                    <SectionReveal className="features-center-header" variant="flipY" duration={1.1}>
                        <span className="section-label"><Target size={14} /> Compare</span>
                        <h2 className="section-heading">How We <span className="gradient-text">Stack Up</span></h2>
                        <p className="section-subtext">See why leading brands choose YovoAI over traditional methods</p>
                    </SectionReveal>

                    <SectionReveal variant="blur" duration={1.2}>
                        <div className="features-table-wrapper">
                            <table className="features-table">
                                <thead>
                                    <tr>
                                        <th className="features-table-th-feature">Feature</th>
                                        <th>
                                            <span className="features-table-yovo gradient-text">
                                                <Star size={14} style={{ fill: 'currentColor' }} /> YovoAI
                                            </span>
                                        </th>
                                        <th className="features-table-th-other">Traditional</th>
                                        <th className="features-table-th-other">Competitors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={row.feature} className={i % 2 === 0 ? 'features-table-tr-even' : 'features-table-tr-odd'}>
                                            <td className="features-table-td-feature">{row.feature}</td>
                                            <td className="features-table-td-yovo">{row.yovo}</td>
                                            <td className="features-table-td-traditional">{row.traditional}</td>
                                            <td className="features-table-td-competitor">{row.competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* ════════════ CTA ════════════ */}
            <section className="section-padding">
                <div className="container-lg text-center">
                    <SectionReveal variant="elastic" duration={1.3}>
                        <h2 className="section-heading mb-6">Ready to <span className="gradient-text">unleash</span> these features?</h2>
                        <p className="features-cta-desc">
                            Start your journey with YovoAI and experience the power of AI-driven content creation.
                        </p>
                        <div className="features-cta-buttons">
                            <Link to="/for-brands" className="magnetic-btn btn-primary">Launch as Brand <ArrowRight size={16} /></Link>
                            <Link to="/for-creators" className="magnetic-btn btn-outline">Join as Creator <ArrowRight size={16} /></Link>
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </main>
    )
}
