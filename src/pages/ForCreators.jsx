import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Wand2, Video, AudioWaveform, LineChart, HandCoins,
    Network, Target, Zap, Trophy, Globe2, MessageCircle,
    Star, CheckCircle, Wallet, Camera, Scissors,
    LayoutTemplate, Languages, Rocket, Crown, GraduationCap, Medal, Sparkles
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './ForCreators.css'

gsap.registerPlugin(ScrollTrigger)

/* ─── Nova Glass Card Component (Creators-specific) ─── */
function NovaCard({ children, accent = '#ea580c', index = 0, className = '' }) {
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
        card.style.setProperty('--nx', `${x}px`)
        card.style.setProperty('--ny', `${y}px`)
    }, [])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ type: 'spring', damping: 20, stiffness: 100, delay: index * 0.1 }}
            className={`nova-card-wrap ${className}`}
        >
            <div
                ref={cardRef}
                className={`nova-card ${isHovered ? 'nova-card--lit' : ''}`}
                style={{ '--nova-accent': accent }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                {/* Fluid Background Layer */}
                <div className="nova-card__fluid" />
                {/* Interactive Spotlight Layer */}
                <div className="nova-card__spotlight" />
                {/* Border Glow */}
                <div className="nova-card__border" />
                {/* Content */}
                <div className="nova-card__content">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

const creatorBenefits = [
    { icon: <HandCoins size={28} />, title: 'Earn While You Create', desc: 'Get paid for doing what you love. Transparent payments ensure creators earn fairly.', highlight: 'Avg. ₹15K/month' },
    { icon: <Wand2 size={28} />, title: 'AI-Powered Content Tools', desc: 'Access cutting-edge AI tools — better editing, smarter captions, and trend-aware styling.', highlight: 'Professional-grade AI' },
    { icon: <LineChart size={28} />, title: 'Growth Analytics', desc: 'Deep analytics to understand what works. Track performance and audience growth in real-time.', highlight: 'Real-time insights' },
    { icon: <Network size={28} />, title: 'Community & Network', desc: 'Join 10,000+ creators. Collaborate, learn, and grow together in a creator-first ecosystem.', highlight: '10K+ creators' },
]

const creatorTools = [
    { icon: <Video size={22} />, title: 'Smart Capture', desc: 'AI-assisted recording that helps frame, light, and compose your shots.' },
    { icon: <Scissors size={22} />, title: 'Auto-Edit Suite', desc: 'One-tap editing — raw footage to polished content with transitions and effects.' },
    { icon: <AudioWaveform size={22} />, title: 'Voice Enhancement', desc: 'Clean audio, add background music, and enhance voice quality automatically.' },
    { icon: <LayoutTemplate size={22} />, title: 'Template Library', desc: 'Hundreds of trending templates for every platform and niche.' },
    { icon: <Languages size={22} />, title: 'Multi-Language Subtitles', desc: 'AI generates accurate subtitles in 20+ languages for global reach.' },
    { icon: <Rocket size={22} />, title: 'Smart Distribution', desc: 'Optimized publishing across all platforms with format-specific adaptation.' },
]

const earningTiers = [
    { tier: 'Rising Star', range: '0 – 1K Followers', earnings: '₹2K – ₹5K/mo', perks: ['Brand collaborations', 'AI content tools', 'Basic analytics'] },
    { tier: 'Trendsetter', range: '1K – 10K Followers', earnings: '₹5K – ₹20K/mo', perks: ['Priority brand matching', 'Premium AI tools', 'Growth coaching', 'Featured placement'] },
    { tier: 'Influencer', range: '10K – 100K Followers', earnings: '₹20K – ₹1L/mo', perks: ['Exclusive campaigns', 'Full analytics suite', 'Personal manager', 'Revenue share bonus'] },
    { tier: 'Celebrity', range: '100K+ Followers', earnings: '₹1L+/mo', perks: ['Enterprise partnerships', 'Custom AI models', 'VIP support', 'Equity opportunities'] },
]

const communityFeatures = [
    { icon: <MessageCircle size={22} />, title: 'Creator Forums', desc: 'Connect and share insights with fellow creators in our exclusive community.' },
    { icon: <Trophy size={22} />, title: 'Monthly Challenges', desc: 'Themed challenges with cash prizes, brand exposure, and recognition.' },
    { icon: <GraduationCap size={22} />, title: 'Creator Academy', desc: 'Free courses on content creation, brand strategy, and audience growth.' },
    { icon: <Medal size={22} />, title: 'Leaderboards', desc: 'Compete with peers and climb ranks to unlock exclusive perks and brand deals.' },
]

const successStories = [
    { name: 'Priya Verma', niche: 'Lifestyle', followers: '45K', earnings: '₹35K/mo', growth: '+340%', quote: "YovoAI's AI tools took my content from amateur to professional overnight." },
    { name: 'Arjun Singh', niche: 'Food', followers: '22K', earnings: '₹18K/mo', growth: '+500%', quote: "I went from 3K to 22K followers in 8 weeks with YovoAI's growth tools." },
    { name: 'Maya Patel', niche: 'Tech Reviews', followers: '89K', earnings: '₹75K/mo', growth: '+200%', quote: "The brand matching is incredible. Only campaigns that fit my audience perfectly." },
]

export default function ForCreators() {
    const benefitsRef = useRef(null)
    const benefitAccents = ['#22c55e', '#f94b6e', '#ff8902', '#3b82f6']
    const toolAccents = ['#8b5cf6', '#ec4899', '#f97316', '#14b8a6', '#facc15', '#f43f5e']
    const tierAccents = ['#94a3b8', '#38bdf8', '#f59e0b', '#ef4444']
    const communityAccents = ['#f43f5e', '#fbbf24', '#eab308', '#2dd4bf']

    return (
        <main className="fc-main">

            {/* ════════════ HERO ════════════ */}
            <section className="fc-hero">
                <div className="fc-hero-bg">
                    <img src="/src/assets/images/forCreate_bg.jpg" alt="" className="fc-hero-bg-img" />
                    <div className="fc-hero-overlay"></div>
                </div>
                <div className="fc-hero-glow" />
                <div className="fc-hero-glow fc-hero-glow-2" />
                <div className="container-lg fc-px">
                    <div className="fc-hero-content">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
                            <Video size={14} /> For Creators
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="fc-hero-title"
                        >
                            Create. Collaborate.
                            <br />
                            <span className="gradient-text">Get discovered.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="fc-hero-desc"
                        >
                            You bring the talent. We bring the AI, the brands, and the audience. YovoAI is the platform where creators earn, grow, and build lasting brands of their own.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="fc-hero-cta">
                            <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="magnetic-btn btn-primary">
                                <Wand2 size={18} /> Join as Creator
                            </a>
                            <Link to="/features" className="magnetic-btn btn-outline">See Creator Tools <ArrowRight size={18} /></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════ CREATOR BENEFITS ════════════ */}
            <section ref={benefitsRef} className="section-padding">
                <div className="container-lg fc-px">
                    <SectionReveal className="fc-center-header" variant="flipY" duration={1.1}>
                        <span className="section-label"><Zap size={14} /> Why YovoAI</span>
                        <h2 className="section-heading">Your <span className="gradient-text">superpower</span> toolkit</h2>
                        <p className="section-subtext">Everything you need to monetize your creativity and build your personal brand</p>
                    </SectionReveal>

                    <div className="fc-grid-2">
                        {creatorBenefits.map((b, i) => (
                            <NovaCard key={b.title} accent={benefitAccents[i]} index={i} className="fc-benefit-card">
                                <div className="premium-icon-orb" style={{ '--orb-color': benefitAccents[i] }}>
                                    <div className="premium-icon-orb__inner">
                                        {b.icon}
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h3 className="nova-card-title">{b.title}</h3>
                                <p className="nova-card-desc">{b.desc}</p>
                                <span className="fc-benefit-highlight gradient-text">{b.highlight}</span>
                            </NovaCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CREATOR TOOLS ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fc-px">
                    <SectionReveal className="fc-center-header" variant="scaleDown" duration={1}>
                        <span className="section-label"><Sparkles size={14} /> AI Tools</span>
                        <h2 className="section-heading">AI-Powered <span className="gradient-text">Creator Studio</span></h2>
                        <p className="section-subtext">Professional-grade tools powered by AI, accessible to every creator</p>
                    </SectionReveal>

                    <div className="fc-grid-3">
                        {creatorTools.map((tool, i) => (
                            <NovaCard key={tool.title} accent={toolAccents[i]} index={i} className="fc-tool-card">
                                <div className="premium-icon-orb premium-icon-orb--sm" style={{ '--orb-color': toolAccents[i] }}>
                                    <div className="premium-icon-orb__inner">
                                        {tool.icon}
                                    </div>
                                    <div className="premium-icon-orb__pulse" />
                                </div>
                                <h3 className="nova-card-title nova-card-title--sm">{tool.title}</h3>
                                <p className="nova-card-desc nova-card-desc--sm">{tool.desc}</p>
                            </NovaCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ EARNINGS ENGINE ════════════ */}
            <section className="section-padding">
                <div className="container-lg fc-px">
                    <SectionReveal className="fc-center-header" variant="rotateIn" duration={1.1}>
                        <span className="section-label"><Wallet size={14} /> Earnings</span>
                        <h2 className="section-heading">The Creator <span className="gradient-text">Earnings Engine</span></h2>
                        <p className="section-subtext">Transparent, fair, and growing. See what you can earn at every level.</p>
                    </SectionReveal>

                    <div className="fc-grid-4">
                        {earningTiers.map((tier, i) => (
                            <NovaCard key={tier.tier} accent={tierAccents[i]} index={i} className={`fc-tier-card ${i === 3 ? 'fc-tier-top' : ''}`}>
                                {i === 3 && <div className="fc-tier-badge" style={{ background: `linear-gradient(135deg, ${tierAccents[i]}, #000)` }}>TOP TIER</div>}
                                <h3 className="nova-card-title">{tier.tier}</h3>
                                <p className="fc-tier-range" style={{ color: tierAccents[i] }}>{tier.range}</p>
                                <div className="fc-tier-earnings gradient-text">{tier.earnings}</div>
                                <ul className="fc-tier-perks">
                                    {tier.perks.map((perk) => (
                                        <li key={perk} className="fc-tier-perk nova-card-desc nova-card-desc--sm">
                                            <CheckCircle size={14} className="fc-tier-perk-icon" style={{ color: tierAccents[i] }} />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </NovaCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ COMMUNITY + IMAGE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fc-px">
                    <div className="fc-community-grid">
                        <SectionReveal variant="fadeLeft" duration={1.1}>
                            <span className="section-label"><Network size={14} /> Community</span>
                            <h2 className="section-heading fc-heading-tight">
                                Build your <span className="gradient-text">tribe.</span>
                                <br />Grow <span className="gradient-text">together.</span>
                            </h2>
                            <p className="fc-community-desc">
                                YovoAI isn't just a platform — it's a movement. A community of creators who collaborate, inspire, and push each other to new heights.
                            </p>
                            <div className="fc-community-features">
                                {communityFeatures.map((cf) => (
                                    <div key={cf.title} className="fc-community-item">
                                        <div className="fc-community-item-icon gradient-brand">{cf.icon}</div>
                                        <div>
                                            <h4 className="fc-community-item-title">{cf.title}</h4>
                                            <p className="fc-community-item-desc">{cf.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionReveal>
                        <SectionReveal delay={0.2} variant="fadeRight" duration={1.1}>
                            <div className="fc-community-img-wrap">
                                <img src="/src/assets/images/usingTech.jpg" alt="Creator Using Technology" className="fc-community-img" />
                                <div className="fc-community-img-glow" />
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            {/* ════════════ SUCCESS STORIES ════════════ */}
            <section className="section-padding">
                <div className="container-lg fc-px">
                    <SectionReveal className="fc-center-header" variant="blur" duration={1.1}>
                        <span className="section-label"><Star size={14} /> Creator Stories</span>
                        <h2 className="section-heading">Creators <span className="gradient-text">thriving</span> on YovoAI</h2>
                    </SectionReveal>

                    <div className="fc-grid-3">
                        {successStories.map((story, i) => (
                            <NovaCard key={story.name} accent="#fbbf24" index={i} className="fc-story-card">
                                <div className="fc-story-header">
                                    <div className="nova-icon-box nova-icon-box--sm" style={{ '--nova-accent': '#fbbf24', borderRadius: '50%' }}>
                                        {story.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="nova-card-title nova-card-title--sm">{story.name}</div>
                                        <div className="nova-card-desc nova-card-desc--sm">{story.niche} Creator</div>
                                    </div>
                                </div>
                                <div className="fc-story-stats">
                                    <div className="fc-story-stat">
                                        <div className="fc-story-stat-value gradient-text">{story.followers}</div>
                                        <div className="fc-story-stat-label">Followers</div>
                                    </div>
                                    <div className="fc-story-stat">
                                        <div className="fc-story-stat-value gradient-text">{story.earnings}</div>
                                        <div className="fc-story-stat-label">Earnings</div>
                                    </div>
                                    <div className="fc-story-stat">
                                        <div className="fc-story-stat-value fc-text-green">{story.growth}</div>
                                        <div className="fc-story-stat-label">Growth</div>
                                    </div>
                                </div>
                                <p className="fc-story-quote">"{story.quote}"</p>
                                <div className="fc-story-stars">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fc-star-icon" />)}
                                </div>
                            </NovaCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CTA ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fc-px fc-text-center">
                    <SectionReveal variant="elastic" duration={1.3}>
                        <NovaCard accent="#f43f5e" className="fc-cta-card">
                            <h2 className="section-heading fc-mb-4">You create. We <span className="gradient-text">amplify.</span></h2>
                            <p className="fc-cta-highlight gradient-text">The world listens.</p>
                            <p className="fc-cta-desc">
                                Join 10,000+ creators who are already earning, growing, and building their dreams with YovoAI.
                            </p>
                            <div className="fc-cta-buttons">
                                <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="magnetic-btn btn-primary">
                                    <Wand2 size={18} /> Start Creating Today
                                </a>
                                <Link to="/for-brands" className="magnetic-btn btn-outline">Or Explore for Brands <ArrowRight size={18} /></Link>
                            </div>
                        </NovaCard>
                    </SectionReveal>
                </div>
            </section>
        </main>
    )
}
