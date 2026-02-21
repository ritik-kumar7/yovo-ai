import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Sparkles, Video, Mic, TrendingUp, DollarSign,
    Users, Target, Zap, Award, Globe, Heart,
    Star, CheckCircle, Wallet, Camera, PenTool,
    Layers, Share2, Crown
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './ForCreators.css'

gsap.registerPlugin(ScrollTrigger)

const creatorBenefits = [
    { icon: <DollarSign size={28} />, title: 'Earn While You Create', desc: 'Get paid for doing what you love. Transparent payments ensure creators earn fairly.', highlight: 'Avg. ₹15K/month' },
    { icon: <Sparkles size={28} />, title: 'AI-Powered Content Tools', desc: 'Access cutting-edge AI tools — better editing, smarter captions, and trend-aware styling.', highlight: 'Professional-grade AI' },
    { icon: <TrendingUp size={28} />, title: 'Growth Analytics', desc: 'Deep analytics to understand what works. Track performance and audience growth in real-time.', highlight: 'Real-time insights' },
    { icon: <Users size={28} />, title: 'Community & Network', desc: 'Join 10,000+ creators. Collaborate, learn, and grow together in a creator-first ecosystem.', highlight: '10K+ creators' },
]

const creatorTools = [
    { icon: <Camera size={22} />, title: 'Smart Capture', desc: 'AI-assisted recording that helps frame, light, and compose your shots.' },
    { icon: <PenTool size={22} />, title: 'Auto-Edit Suite', desc: 'One-tap editing — raw footage to polished content with transitions and effects.' },
    { icon: <Mic size={22} />, title: 'Voice Enhancement', desc: 'Clean audio, add background music, and enhance voice quality automatically.' },
    { icon: <Layers size={22} />, title: 'Template Library', desc: 'Hundreds of trending templates for every platform and niche.' },
    { icon: <Globe size={22} />, title: 'Multi-Language Subtitles', desc: 'AI generates accurate subtitles in 20+ languages for global reach.' },
    { icon: <Share2 size={22} />, title: 'Smart Distribution', desc: 'Optimized publishing across all platforms with format-specific adaptation.' },
]

const earningTiers = [
    { tier: 'Rising Star', range: '0 – 1K Followers', earnings: '₹2K – ₹5K/mo', perks: ['Brand collaborations', 'AI content tools', 'Basic analytics'] },
    { tier: 'Trendsetter', range: '1K – 10K Followers', earnings: '₹5K – ₹20K/mo', perks: ['Priority brand matching', 'Premium AI tools', 'Growth coaching', 'Featured placement'] },
    { tier: 'Influencer', range: '10K – 100K Followers', earnings: '₹20K – ₹1L/mo', perks: ['Exclusive campaigns', 'Full analytics suite', 'Personal manager', 'Revenue share bonus'] },
    { tier: 'Celebrity', range: '100K+ Followers', earnings: '₹1L+/mo', perks: ['Enterprise partnerships', 'Custom AI models', 'VIP support', 'Equity opportunities'] },
]

const communityFeatures = [
    { icon: <Heart size={22} />, title: 'Creator Forums', desc: 'Connect and share insights with fellow creators in our exclusive community.' },
    { icon: <Award size={22} />, title: 'Monthly Challenges', desc: 'Themed challenges with cash prizes, brand exposure, and recognition.' },
    { icon: <Crown size={22} />, title: 'Creator Academy', desc: 'Free courses on content creation, brand strategy, and audience growth.' },
    { icon: <Star size={22} />, title: 'Leaderboards', desc: 'Compete with peers and climb ranks to unlock exclusive perks and brand deals.' },
]

const successStories = [
    { name: 'Priya Verma', niche: 'Lifestyle', followers: '45K', earnings: '₹35K/mo', growth: '+340%', quote: "YovoAI's AI tools took my content from amateur to professional overnight." },
    { name: 'Arjun Singh', niche: 'Food', followers: '22K', earnings: '₹18K/mo', growth: '+500%', quote: "I went from 3K to 22K followers in 8 weeks with YovoAI's growth tools." },
    { name: 'Maya Patel', niche: 'Tech Reviews', followers: '89K', earnings: '₹75K/mo', growth: '+200%', quote: "The brand matching is incredible. Only campaigns that fit my audience perfectly." },
]

export default function ForCreators() {
    const benefitsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.benefit-card', { y: 50, opacity: 0, scale: 0.95 }, {
                y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.7,
                scrollTrigger: { trigger: benefitsRef.current, start: 'top 75%' },
            })
        })
        return () => ctx.revert()
    }, [])

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
                                <Sparkles size={18} /> Join as Creator
                            </a>
                            <Link to="/features" className="magnetic-btn btn-outline">See Creator Tools <ArrowRight size={18} /></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════ CREATOR BENEFITS ════════════ */}
            <section ref={benefitsRef} className="section-padding">
                <div className="container-lg fc-px">
                    <SectionReveal className="fc-center-header">
                        <span className="section-label"><Zap size={14} /> Why YovoAI</span>
                        <h2 className="section-heading">Your <span className="gradient-text">superpower</span> toolkit</h2>
                        <p className="section-subtext">Everything you need to monetize your creativity and build your personal brand</p>
                    </SectionReveal>

                    <div className="fc-grid-2">
                        {creatorBenefits.map((b) => (
                            <div key={b.title} className="benefit-card glass-card fc-benefit-card hover-depth">
                                <div className="fc-benefit-icon gradient-brand">{b.icon}</div>
                                <h3 className="fc-benefit-title">{b.title}</h3>
                                <p className="fc-benefit-desc">{b.desc}</p>
                                <span className="fc-benefit-highlight gradient-text">{b.highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CREATOR TOOLS ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fc-px">
                    <SectionReveal className="fc-center-header">
                        <span className="section-label"><Sparkles size={14} /> AI Tools</span>
                        <h2 className="section-heading">AI-Powered <span className="gradient-text">Creator Studio</span></h2>
                        <p className="section-subtext">Professional-grade tools powered by AI, accessible to every creator</p>
                    </SectionReveal>

                    <div className="fc-grid-3">
                        {creatorTools.map((tool, i) => (
                            <SectionReveal key={tool.title} delay={i * 0.08}>
                                <div className="glass-card fc-tool-card hover-depth">
                                    <div className="fc-tool-icon gradient-brand">{tool.icon}</div>
                                    <h3 className="fc-tool-title">{tool.title}</h3>
                                    <p className="fc-tool-desc">{tool.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ EARNINGS ENGINE ════════════ */}
            <section className="section-padding">
                <div className="container-lg fc-px">
                    <SectionReveal className="fc-center-header">
                        <span className="section-label"><Wallet size={14} /> Earnings</span>
                        <h2 className="section-heading">The Creator <span className="gradient-text">Earnings Engine</span></h2>
                        <p className="section-subtext">Transparent, fair, and growing. See what you can earn at every level.</p>
                    </SectionReveal>

                    <div className="fc-grid-4">
                        {earningTiers.map((tier, i) => (
                            <SectionReveal key={tier.tier} delay={i * 0.08}>
                                <div className={`glass-card fc-tier-card hover-depth ${i === 3 ? 'fc-tier-top' : ''}`}>
                                    {i === 3 && <div className="fc-tier-badge gradient-brand">TOP TIER</div>}
                                    <h3 className="fc-tier-name">{tier.tier}</h3>
                                    <p className="fc-tier-range">{tier.range}</p>
                                    <div className="fc-tier-earnings gradient-text">{tier.earnings}</div>
                                    <ul className="fc-tier-perks">
                                        {tier.perks.map((perk) => (
                                            <li key={perk} className="fc-tier-perk">
                                                <CheckCircle size={14} className="fc-tier-perk-icon" />
                                                {perk}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ COMMUNITY + IMAGE ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fc-px">
                    <div className="fc-community-grid">
                        <SectionReveal>
                            <span className="section-label"><Heart size={14} /> Community</span>
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
                        <SectionReveal delay={0.15}>
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
                    <SectionReveal className="fc-center-header">
                        <span className="section-label"><Star size={14} /> Creator Stories</span>
                        <h2 className="section-heading">Creators <span className="gradient-text">thriving</span> on YovoAI</h2>
                    </SectionReveal>

                    <div className="fc-grid-3">
                        {successStories.map((story, i) => (
                            <SectionReveal key={story.name} delay={i * 0.12}>
                                <div className="glass-card fc-story-card hover-depth">
                                    <div className="fc-story-header">
                                        <div className="fc-story-avatar gradient-brand">
                                            {story.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="fc-story-name">{story.name}</div>
                                            <div className="fc-story-niche">{story.niche} Creator</div>
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
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CTA ════════════ */}
            <section className="section-padding gradient-subtle">
                <div className="container-lg fc-px fc-text-center">
                    <SectionReveal>
                        <div className="glass-card fc-cta-card">
                            <h2 className="section-heading fc-mb-4">You create. We <span className="gradient-text">amplify.</span></h2>
                            <p className="fc-cta-highlight gradient-text">The world listens.</p>
                            <p className="fc-cta-desc">
                                Join 10,000+ creators who are already earning, growing, and building their dreams with YovoAI.
                            </p>
                            <div className="fc-cta-buttons">
                                <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="magnetic-btn btn-primary">
                                    <Sparkles size={18} /> Start Creating Today
                                </a>
                                <Link to="/for-brands" className="magnetic-btn btn-outline">Or Explore for Brands <ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </main>
    )
}
