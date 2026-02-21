import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Zap, Users, TrendingUp, BarChart3, Target, Sparkles,
    CheckCircle, Video, Shield, Clock, Globe, DollarSign, Award,
    PieChart, Megaphone, Rocket, LineChart
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './ForBrands.css'

gsap.registerPlugin(ScrollTrigger)

const brandProblems = [
    { icon: <DollarSign size={24} />, problem: 'High ad spend, low ROI', desc: 'Traditional advertising costs are skyrocketing while effectiveness plummets. Audiences scroll past polished ads.' },
    { icon: <Clock size={24} />, problem: 'Slow content turnaround', desc: 'Agency-created content takes weeks. By the time it launches, the moment has passed.' },
    { icon: <Users size={24} />, problem: 'Low audience trust', desc: 'Consumers trust recommendations from real people 3x more than branded content.' },
    { icon: <Target size={24} />, problem: 'Finding the right creators', desc: 'Manually searching for creators is time-consuming and often results in poor brand-fit matches.' },
]

const solutions = [
    { icon: <Sparkles size={28} />, title: 'AI Campaign Engine', desc: 'Launch UGC campaigns in minutes, not weeks. Our AI handles everything from brief creation to content curation.', metrics: '85% faster launch' },
    { icon: <Users size={28} />, title: 'Smart Creator Matching', desc: 'AI-powered matching connects you with creators who genuinely align with your brand. The right voices, every time.', metrics: '10,000+ vetted creators' },
    { icon: <Megaphone size={28} />, title: 'Automated Distribution', desc: 'One-click distribution across 40+ platforms with format-specific optimization.', metrics: '40+ platform integrations' },
    { icon: <LineChart size={28} />, title: 'Real-Time ROI Tracking', desc: 'See exactly how every dollar performs. Track conversions, engagement, and brand lift in real-time.', metrics: 'Complete attribution' },
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
    { icon: <BarChart3 size={18} />, label: 'Campaign Analytics', desc: 'Real-time performance metrics' },
    { icon: <Users size={18} />, label: 'Creator Network', desc: '10,000+ vetted creators' },
    { icon: <Video size={18} />, label: 'Content Library', desc: 'AI-organized UGC repository' },
    { icon: <Shield size={18} />, label: 'Brand Safety', desc: 'Real-time content moderation' },
    { icon: <PieChart size={18} />, label: 'ROI Dashboard', desc: 'End-to-end attribution' },
    { icon: <Globe size={18} />, label: 'Multi-Platform', desc: 'Unified distribution hub' },
]

export default function ForBrands() {
    const solutionsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.solution-card', { x: -40, opacity: 0 }, {
                x: 0, opacity: 1, stagger: 0.15, duration: 0.7,
                scrollTrigger: { trigger: solutionsRef.current, start: 'top 75%' },
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <main className="fb-main">

            {/* ════════════ HERO ════════════ */}
            <section className="fb-hero">
                <div className="fb-hero-bg">
                    <img src="/src/assets/images/workplace.jpg" alt="" className="fb-hero-bg-img" />
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
                    <SectionReveal className="fb-center-header">
                        <span className="fb-problem-label">The Problem</span>
                        <h2 className="section-heading">Why traditional marketing is <span className="fb-text-red">broken</span></h2>
                        <p className="section-subtext">Brands are spending more and getting less. Here's what you're up against.</p>
                    </SectionReveal>

                    <div className="fb-grid-2">
                        {brandProblems.map((p, i) => (
                            <SectionReveal key={p.problem} delay={i * 0.08}>
                                <div className="fb-problem-card glass-card hover-depth">
                                    <div className="fb-problem-icon">{p.icon}</div>
                                    <h3 className="fb-problem-title">{p.problem}</h3>
                                    <p className="fb-problem-desc">{p.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ SOLUTIONS ════════════ */}
            <section ref={solutionsRef} className="section-padding gradient-subtle">
                <div className="container-lg fb-px">
                    <SectionReveal className="fb-center-header">
                        <span className="fb-solution-label">The Solution</span>
                        <h2 className="section-heading">How YovoAI <span className="gradient-text">solves</span> it</h2>
                        <p className="section-subtext">A complete ecosystem built to make your brand unstoppable</p>
                    </SectionReveal>

                    <div className="fb-solutions-list">
                        {solutions.map((s) => (
                            <div key={s.title} className="solution-card glass-card fb-solution-card hover-depth">
                                <div className="fb-solution-grid">
                                    <div className="fb-solution-content">
                                        <div className="fb-solution-icon gradient-brand">{s.icon}</div>
                                        <h3 className="fb-solution-title">{s.title}</h3>
                                        <p className="fb-solution-desc">{s.desc}</p>
                                    </div>
                                    <div className="fb-solution-metric-wrap">
                                        <div className="glass-card-subtle fb-solution-metric">
                                            <div className="fb-solution-metric-value gradient-text">{s.metrics}</div>
                                            <div className="fb-solution-metric-label">Key Metric</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ BRAND DASHBOARD ════════════ */}
            <section className="section-padding">
                <div className="container-lg fb-px">
                    <div className="fb-dashboard-grid">
                        <SectionReveal>
                            <span className="section-label"><BarChart3 size={14} /> Dashboard</span>
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
                        <SectionReveal delay={0.15}>
                            <img src="/src/assets/images/visualDashbord.jpg" alt="Brand Dashboard" className="fb-dashboard-img" />
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ CASE STUDIES ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fb-px">
                    <SectionReveal className="fb-center-header">
                        <span className="section-label"><Award size={14} /> Success Stories</span>
                        <h2 className="section-heading">Brands winning with <span className="gradient-text">YovoAI</span></h2>
                    </SectionReveal>

                    <div className="fb-cases-list">
                        {caseStudies.map((cs, i) => (
                            <SectionReveal key={cs.brand} delay={i * 0.12}>
                                <div className="glass-card fb-case-card hover-depth">
                                    <div className="fb-case-tags">
                                        <span className="fb-case-brand-tag">{cs.brand}</span>
                                        <span className="fb-case-industry-tag">{cs.industry}</span>
                                    </div>
                                    <div className="fb-case-grid">
                                        <div>
                                            <h4 className="fb-case-section-title fb-text-red">Challenge</h4>
                                            <p className="fb-case-section-desc">{cs.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="fb-case-section-title fb-text-orange">Solution</h4>
                                            <p className="fb-case-section-desc">{cs.solution}</p>
                                        </div>
                                        <div>
                                            <h4 className="fb-case-section-title fb-text-green">Results</h4>
                                            <div className="fb-case-results">
                                                {cs.results.map((r) => (
                                                    <div key={r.label} className="fb-case-result-item">
                                                        <span className="fb-case-result-metric gradient-text">{r.metric}</span>
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
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ TRUSTED CTA ════════════ */}
            <section className="section-padding">
                <div className="container-lg fb-px fb-text-center">
                    <SectionReveal>
                        <div className="glass-card fb-cta-card">
                            <div className="fb-cta-badge">
                                <Award size={24} className="fb-text-orange" />
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
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </main>
    )
}
