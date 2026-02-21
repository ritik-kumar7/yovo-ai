import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Zap, Target, Sparkles, UserMinus, SearchX,
    CheckCircle, Video, ShieldCheck, Clock, TrendingDown, Hourglass,
    Cpu, UserCheck, Rocket, BarChart4, Network, Library, PieChart, Share2, Award
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './ForBrands.css'
import workplace from '../assets/images/workplace.jpg'
import visualDashbord from '../assets/images/visualDashbord.jpg'

gsap.registerPlugin(ScrollTrigger)

/* ─── Elite Prism Card Component (Brands-specific) ─── */
function PrismCard({ children, accent = '#f97316', index = 0, className = '' }) {
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
        card.style.setProperty('--px', `${x}px`)
        card.style.setProperty('--py', `${y}px`)
    }, [])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, rotateX: 5 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="prism-card-wrapper"
        >
            <div
                ref={cardRef}
                className={`prism-card ${isHovered ? 'prism-card--lit' : ''} ${className}`}
                style={{ '--prism-accent': accent }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                {/* Rotating gradient border */}
                <div className="prism-card__border" />
                {/* Inner glass layer */}
                <div className="prism-card__glass">
                    <div className="prism-card__glare" />
                    <div className="prism-card__glow" />
                </div>
                {/* Content in document flow to provide height */}
                <div className="prism-card__content">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

const brandProblems = [
    { icon: <TrendingDown size={24} />, problem: 'High ad spend, low ROI', desc: 'Traditional advertising costs are skyrocketing while effectiveness plummets. Audiences scroll past polished ads.' },
    { icon: <Hourglass size={24} />, problem: 'Slow content turnaround', desc: 'Agency-created content takes weeks. By the time it launches, the moment has passed.' },
    { icon: <UserMinus size={24} />, problem: 'Low audience trust', desc: 'Consumers trust recommendations from real people 3x more than branded content.' },
    { icon: <SearchX size={24} />, problem: 'Finding the right creators', desc: 'Manually searching for creators is time-consuming and often results in poor brand-fit matches.' },
]

const solutions = [
    { icon: <Cpu size={28} />, title: 'AI Campaign Engine', desc: 'Launch UGC campaigns in minutes, not weeks. Our AI handles everything from brief creation to content curation.', metrics: '85% faster launch' },
    { icon: <UserCheck size={28} />, title: 'Smart Creator Matching', desc: 'AI-powered matching connects you with creators who genuinely align with your brand. The right voices, every time.', metrics: '10,000+ vetted creators' },
    { icon: <Rocket size={28} />, title: 'Automated Distribution', desc: 'One-click distribution across 40+ platforms with format-specific optimization.', metrics: '40+ platform integrations' },
    { icon: <BarChart4 size={28} />, title: 'Real-Time ROI Tracking', desc: 'See exactly how every dollar performs. Track conversions, engagement, and brand lift in real-time.', metrics: 'Complete attribution' },
]

const caseStudies = [
    {
        brand: 'Organix Foods', industry: 'FMCG',
        challenge: 'Low organic reach and declining engagement despite high ad spend.',
        solution: 'Launched 50+ creator-driven UGC campaigns with AI enhancement.',
        results: [{ metric: '5x', label: 'Organic Reach' }, { metric: '312%', label: 'Engagement Growth' }, { metric: '68%', label: 'Cost Reduction' }],
        quote: "YovoAI turned our customers into creators. 5x organic reach within weeks!", author: 'Amit Sharma, Brand Manager',
    },
    {
        brand: 'Bloomwear', industry: 'Fashion',
        challenge: 'Struggling to build authentic connections with Gen-Z audience.',
        solution: 'Partnered with 200+ micro-creators through YovoAI\'s matching algorithm.',
        results: [{ metric: '4.2x', label: 'ROAS Improvement' }, { metric: '250%', label: 'UGC Volume' }, { metric: '89%', label: 'Brand Sentiment' }],
        quote: "Our brand engagement skyrocketed. UGC + AI is a game-changer!", author: 'Rahul Mehta, CMO',
    },
]

const brandDashboardFeatures = [
    { icon: <BarChart4 size={18} />, label: 'Campaign Analytics', desc: 'Real-time performance metrics' },
    { icon: <Network size={18} />, label: 'Creator Network', desc: '10,000+ vetted creators' },
    { icon: <Library size={18} />, label: 'Content Library', desc: 'AI-organized UGC repository' },
    { icon: <ShieldCheck size={18} />, label: 'Brand Safety', desc: 'Real-time content moderation' },
    { icon: <PieChart size={18} />, label: 'ROI Dashboard', desc: 'End-to-end attribution' },
    { icon: <Share2 size={18} />, label: 'Multi-Platform', desc: 'Unified distribution hub' },
]

export default function ForBrands() {
    const solutionsRef = useRef(null)

    const problemAccents = ['#ef4444', '#f97316', '#fbbf24', '#f59e0b']
    const solutionAccents = ['#f94b6e', '#ff8902', '#fb923c', '#facc15']
    const caseAccents = ['#f97316', '#ef4444']

    return (
        <main className="fb-main">

            {/* ════════════ HERO ════════════ */}
            <section className="fb-hero">
                <div className="fb-hero-bg">
                    <img src={workplace} alt="" className="fb-hero-bg-img" />
                    <div className="fb-hero-overlay"></div>
                </div>
                <div className="fb-hero-glow" />
                <div className="fb-hero-glow fb-hero-glow-2" />
                <div className="container-lg fb-px">
                    <div className="fb-hero-inner">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
                            <Target size={14} /> For Brands
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="fb-hero-title"
                        >
                            Turn your audience into
                            <br />
                            <span className="gradient-text">your marketing engine.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="fb-hero-desc"
                        >
                            Stop spending millions on ads nobody trusts. YovoAI empowers your customers to create content that drives real engagement and measurable results.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="fb-hero-cta">
                            <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="magnetic-btn btn-primary"><Rocket size={18} /> Launch a Campaign</a>
                            <Link to="/features" className="magnetic-btn btn-outline">See All Features <ArrowRight size={18} /></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════ BRAND PROBLEMS ════════════ */}
            <section className="section-padding">
                <div className="container-lg fb-px">
                    <SectionReveal className="fb-center-header" variant="rotateIn" duration={1}>
                        <span className="fb-problem-label">The Problem</span>
                        <h2 className="section-heading">Why traditional marketing is <span className="fb-text-red">broken</span></h2>
                        <p className="section-subtext">Brands are spending more and getting less. Here's what you're up against.</p>
                    </SectionReveal>

                    <div className="fb-grid-2">
                        {brandProblems.map((p, i) => (
                            <SectionReveal key={p.problem} delay={i * 0.08} variant="glitch" duration={0.9}>
                                <PrismCard accent={problemAccents[i]} index={i} className="fb-problem-card">
                                    <div className="premium-icon-orb" style={{ '--orb-color': problemAccents[i] }}>
                                        <div className="premium-icon-orb__inner">
                                            {p.icon}
                                        </div>
                                        <div className="premium-icon-orb__pulse" />
                                    </div>
                                    <h3 className="prism-card-title">{p.problem}</h3>
                                    <p className="prism-card-desc">{p.desc}</p>
                                </PrismCard>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ SOLUTIONS ════════════ */}
            <section ref={solutionsRef} className="section-padding gradient-subtle">
                <div className="container-lg fb-px">
                    <SectionReveal className="fb-center-header" variant="flipX" duration={1.1}>
                        <span className="fb-solution-label">The Solution</span>
                        <h2 className="section-heading">How YovoAI <span className="gradient-text">solves</span> it</h2>
                        <p className="section-subtext">A complete ecosystem built to make your brand unstoppable</p>
                    </SectionReveal>

                    <div className="fb-solutions-list">
                        {solutions.map((s, i) => (
                            <PrismCard key={s.title} accent={solutionAccents[i]} index={i} className="fb-solution-card">
                                <div className="fb-solution-grid">
                                    <div className="fb-solution-content">
                                        <div className="premium-icon-orb" style={{ '--orb-color': solutionAccents[i] }}>
                                            <div className="premium-icon-orb__inner">
                                                {s.icon}
                                            </div>
                                            <div className="premium-icon-orb__pulse" />
                                        </div>
                                        <h3 className="prism-card-title prism-card-title--lg">{s.title}</h3>
                                        <p className="prism-card-desc prism-card-desc--lg">{s.desc}</p>
                                    </div>
                                    <div className="fb-solution-metric-wrap">
                                        <div className="prism-metric-box">
                                            <div className="prism-metric-value">{s.metrics}</div>
                                            <div className="prism-metric-label">Key Metric</div>
                                        </div>
                                    </div>
                                </div>
                            </PrismCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ BRAND DASHBOARD ════════════ */}
            <section className="section-padding">
                <div className="container-lg fb-px">
                    <div className="fb-dashboard-grid">
                        <SectionReveal variant="slideRotate" duration={1.1}>
                            <span className="section-label"><BarChart4 size={14} /> Dashboard</span>
                            <h2 className="section-heading fb-heading-tight">Your <span className="gradient-text">command center</span> for growth</h2>
                            <p className="fb-dashboard-desc">
                                Monitor campaigns, manage creators, track ROI, and optimize in real-time — all from one premium interface.
                            </p>
                            <div className="fb-dashboard-features">
                                {brandDashboardFeatures.map((f) => (
                                    <div key={f.label} className="fb-dashboard-item">
                                        <div className="fb-dashboard-item-icon gradient-brand">{f.icon}</div>
                                        <div>
                                            <div className="fb-dashboard-item-label">{f.label}</div>
                                            <div className="fb-dashboard-item-desc">{f.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.2} variant="scaleUp" duration={1.2}>
                            <img src={visualDashbord} alt="Brand Dashboard" className="fb-dashboard-img" />
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ CASE STUDIES ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fb-px">
                    <SectionReveal className="fb-center-header" variant="blur" duration={1.1}>
                        <span className="section-label"><Award size={14} /> Success Stories</span>
                        <h2 className="section-heading">Brands winning with <span className="gradient-text">YovoAI</span></h2>
                    </SectionReveal>

                    <div className="fb-cases-list">
                        {caseStudies.map((cs, i) => (
                            <PrismCard key={cs.brand} accent={caseAccents[i]} index={i} className="fb-case-card">
                                <div className="fb-case-tags">
                                    <span className="fb-case-brand-tag" style={{ color: caseAccents[i], borderColor: 'currentColor', background: `color-mix(in srgb, ${caseAccents[i]} 10%, transparent)` }}>{cs.brand}</span>
                                    <span className="fb-case-industry-tag">{cs.industry}</span>
                                </div>
                                <div className="fb-case-grid">
                                    <div>
                                        <h4 className="fb-case-section-title">Challenge</h4>
                                        <p className="prism-card-desc">{cs.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="fb-case-section-title" style={{ color: caseAccents[i] }}>Solution</h4>
                                        <p className="prism-card-desc">{cs.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="fb-case-section-title" style={{ color: '#22c55e' }}>Results</h4>
                                        <div className="fb-case-results">
                                            {cs.results.map((r) => (
                                                <div key={r.label} className="fb-case-result-item">
                                                    <span className="fb-case-result-metric" style={{ background: `linear-gradient(135deg, ${caseAccents[i]}, #000)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{r.metric}</span>
                                                    <span className="fb-case-result-label">{r.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="fb-case-quote-section">
                                    <p className="fb-case-quote">"{cs.quote}"</p>
                                    <p className="fb-case-author">— {cs.author}</p>
                                </div>
                            </PrismCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ TRUSTED CTA ════════════ */}
            <section className="section-padding">
                <div className="container-lg fb-px fb-text-center">
                    <SectionReveal variant="elastic" duration={1.3}>
                        <PrismCard accent="#fbbf24" className="fb-cta-card">
                            <div className="fb-cta-badge">
                                <Award size={28} style={{ color: '#f97316' }} />
                                <span className="fb-cta-badge-text gradient-text">Trusted by 150+ Brands</span>
                            </div>
                            <h2 className="section-heading fb-mb-6">Powered by voices that <span className="gradient-text">matter.</span></h2>
                            <p className="fb-cta-desc">
                                From emerging D2C startups to enterprise brands, YovoAI is the trusted partner for authentic, high-performing content at scale.
                            </p>
                            <div className="fb-cta-buttons">
                                <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="magnetic-btn btn-primary"><Rocket size={16} /> Start Your Campaign</a>
                                <Link to="/for-creators" className="magnetic-btn btn-outline">Or Become a Creator <ArrowRight size={16} /></Link>
                            </div>
                        </PrismCard>
                    </SectionReveal>
                </div>
            </section>
        </main>
    )
}
