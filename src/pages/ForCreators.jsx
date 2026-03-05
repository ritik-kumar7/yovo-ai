import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Wand2, Video, AudioWaveform, LineChart, HandCoins,
    Network, Target, Zap, Trophy, Globe2, MessageCircle,
    Star, CheckCircle, Wallet, Camera, Scissors,
    LayoutTemplate, Languages, Rocket, Crown, GraduationCap, Medal, Sparkles
} from 'lucide-react'
import './ForCreators.css'

import forCreateBg from '../assets/images/forCreate_bg.jpg'
import forCreaterSection from '../assets/images/forCreaterSection.png'
import forCReatorContent from '../assets/images/forCReatorContent.png'
import stillLife2 from '../assets/images/stillLife2.png'
import usingTech from '../assets/images/usingTech.jpg'
import tableComputerWorkin from '../assets/images/tableComputerWorkin.png'

gsap.registerPlugin(ScrollTrigger)

/* ─── Data ─── */
const creatorBenefits = [
    { icon: <HandCoins size={28} />, title: 'Earn While You Create', desc: 'Get paid for doing what you love. Transparent payments ensure creators earn fairly.', highlight: 'Avg. ₹15K/month' },
    { icon: <Wand2 size={28} />, title: 'AI-Powered Content Tools', desc: 'Access cutting-edge AI tools — better editing, smarter captions, and trend-aware styling.', highlight: 'Professional-grade AI' },
    { icon: <LineChart size={28} />, title: 'Growth Analytics', desc: 'Deep analytics to understand what works. Track performance and audience growth in real-time.', highlight: 'Real-time insights' },
    { icon: <Network size={28} />, title: 'Community & Network', desc: 'Join 10,000+ creators. Collaborate, learn, and grow together in a creator-first ecosystem.', highlight: '10K+ creators' },
]

const creatorTools = [
    { icon: <Video size={24} />, title: 'Smart Capture', desc: 'AI-assisted recording that helps frame, light, and compose your shots perfectly every time.' },
    { icon: <Scissors size={24} />, title: 'Auto-Edit Suite', desc: 'One-tap editing — turn raw footage into polished cinematic content instantly.' },
    { icon: <AudioWaveform size={24} />, title: 'Voice Enhancement', desc: 'Clean audio, add background music, and enhance your voice automatically.' },
    { icon: <LayoutTemplate size={24} />, title: 'Template Vault', desc: 'Hundreds of trending, high-conversion templates curated by our AI engine.' },
]

const earningTiers = [
    { tier: 'Rising Star', range: '0 – 1K Followers', earnings: '₹2K – ₹5K/mo', perks: ['Brand collaborations', 'AI content tools', 'Basic analytics'] },
    { tier: 'Trendsetter', range: '1K – 10K Followers', earnings: '₹5K – ₹20K/mo', perks: ['Priority matching', 'Premium AI tools', 'Growth coaching'] },
    { tier: 'Influencer', range: '10K – 100K Followers', earnings: '₹20K – ₹1L/mo', perks: ['Exclusive campaigns', 'Personal manager', 'Revenue share bonus'] },
    { tier: 'Celebrity', range: '100K+ Followers', earnings: '₹1L+/mo', perks: ['Enterprise deals', 'Custom AI models', 'Equity opportunities'] },
]

const successStories = [
    { name: 'Priya Verma', niche: 'Lifestyle', followers: '45K', earnings: '₹35K/mo', growth: '+340%', quote: "YovoAI's AI tools took my content from amateur to professional overnight." },
    { name: 'Arjun Singh', niche: 'Food', followers: '22K', earnings: '₹18K/mo', growth: '+500%', quote: "I went from 3K to 22K followers in 8 weeks with YovoAI's growth tools." },
    { name: 'Maya Patel', niche: 'Tech', followers: '89K', earnings: '₹75K/mo', growth: '+200%', quote: "The brand matching is incredible. Only campaigns that fit my audience." },
]

export default function ForCreators() {
    const mainRef = useRef(null)
    const [activeTool, setActiveTool] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setActiveTool(p => (p + 1) % creatorTools.length), 4500)
        return () => clearInterval(t)
    }, [])

    /* ─── Ultra Premium Scroll Animations ─── */
    useEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Hero Reveal
            gsap.fromTo('.anim-fade-up',
                { y: 80, opacity: 0, filter: 'blur(10px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.15, ease: 'expo.out', delay: 0.2 }
            )

            // 2. Parallax Setup
            gsap.utils.toArray('.anim-parallax').forEach(el => {
                gsap.to(el, {
                    yPercent: 20, ease: 'none',
                    scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
                })
            })

            // 3. Float Cards (Benefits)
            gsap.fromTo('.anim-float-card',
                { y: 100, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.1, ease: 'back.out(1.2)',
                    scrollTrigger: { trigger: '.anim-float-trig', start: 'top 80%' }
                }
            )

            // 4. Image Curtain Reveal
            gsap.utils.toArray('.anim-curtain-reveal').forEach(el => {
                const img = el.querySelector('img')
                const overlay = el.querySelector('.fbc-curtain-overlay')

                let tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 75%' } })
                tl.fromTo(overlay, { yPercent: 0 }, { yPercent: -100, duration: 1.2, ease: 'power4.inOut' })
                    .fromTo(img, { scale: 1.2, filter: 'blur(10px)' }, { scale: 1, filter: 'blur(0px)', duration: 1.8, ease: 'power3.out' }, "-=1.0")
            })

            // 5. Tier Cards Stagger
            gsap.fromTo('.anim-tier',
                { opacity: 0, x: -50, rotateY: -15 },
                {
                    opacity: 1, x: 0, rotateY: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.anim-tier-trig', start: 'top 80%' }
                }
            )

            // 6. Horizon Reveal
            gsap.utils.toArray('.anim-horizon').forEach(el => {
                gsap.fromTo(el,
                    { scaleX: 0, transformOrigin: 'center' },
                    { scaleX: 1, duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 90%' } }
                )
            })

        }, mainRef)
        return () => ctx.revert()
    }, [])

    return (
        <main className="fbc-main" ref={mainRef}>

            {/* ════════════ 1. HERO — DARK OPULENCE ════════════ */}
            <section className="fbc-hero fbc-sec-dark">
                <div className="fbc-hero__bg-wrap">
                    <img src={forCreateBg} alt="Creator" className="fbc-hero__bg anim-parallax" />
                    <div className="fbc-hero__overlay"></div>
                </div>

                <div className="fbc-hero__content fbc-container">
                    <div className="fbc-hero__badge anim-fade-up">
                        <Star size={14} className="fbc-text-gold" />
                        <span>The Creator Ecosystem</span>
                    </div>

                    <h1 className="fbc-hero__title">
                        <span className="fbc-hero__title-line anim-fade-up !text-white">Create art.</span>
                        <span className="fbc-hero__title-line anim-fade-up !text-white">Build wealth.</span>
                        <span className="fbc-hero__title-glow anim-fade-up">Own the future.</span>
                    </h1>

                    <p className="fbc-hero__sub anim-fade-up">
                        You bring the talent. We bring the AI, the premium brands, and the explosive audience reach. YovoAI is where casual creators become monumental brands.
                    </p>

                    <div className="fbc-hero__actions anim-fade-up">
                        <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="fbc-btn fbc-btn--gold">
                            <Wand2 size={18} /> Join as Creator
                        </a>
                        <Link to="/features" className="fbc-btn fbc-btn--outline">
                            Explore Tools <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ════════════ 2. LIFESTYLE — LIGHT SPLIT ════════════ */}
            <section className="fbc-lifestyle fbc-sec-light">
                <div className="fbc-container">
                    <div className="fbc-lifestyle__layout">
                        <div className="fbc-lifestyle__text">
                            <span className="fbc-tag-light mb-4">Your Empire</span>
                            <h2 className="fbc-heading">
                                Monetize your <br /><span className="fbc-text-gradient">authenticity.</span>
                            </h2>
                            <p className="fbc-subheading text-gray-700">
                                Stop chasing algorithms. Connect directly with top-tier brands looking for exactly your voice. We handle the negotiations, you handle the magic.
                            </p>

                            <div className="fbc-lifestyle__stats mt-10">
                                <div><span className="fbc-stat-num">₹2.4M+</span><span className="fbc-stat-lbl">Paid to creators</span></div>
                                <div><span className="fbc-stat-num">150+</span><span className="fbc-stat-lbl">Premium Brands</span></div>
                            </div>
                        </div>

                        <div className="fbc-lifestyle__visual anim-curtain-reveal">
                            <div className="fbc-curtain-overlay bg-white"></div>
                            <img src={stillLife2} alt="Creator Setup" className="fbc-lifestyle__img" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="fbc-horizon"><div className="fbc-horizon__line anim-horizon bg-gray-200"></div></div>


            {/* ════════════ 3. BENEFITS — LIGHT FLOATING GRID ════════════ */}
            <section className="fbc-benefits fbc-sec-light anim-float-trig">
                <div className="fbc-container text-center">
                    <span className="fbc-tag-light mb-4 mx-auto">The Toolkit</span>
                    <h2 className="fbc-heading">
                        Your <span className="fbc-text-gradient">superpower</span> toolkit.
                    </h2>

                    <div className="fbc-benefits__grid mt-16">
                        {creatorBenefits.map((b, i) => (
                            <div key={i} className="fbc-benefit-card anim-float-card">
                                <div className="fbc-benefit-icon-wrap">
                                    {b.icon}
                                    <div className="fbc-benefit-icon-glow"></div>
                                </div>
                                <h3 className="fbc-benefit-title text-black">{b.title}</h3>
                                <p className="fbc-benefit-desc text-gray-600">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════ 4. STUDIO TOOLS — DARK CINEMATIC INTERACTIVE ════════════ */}
            <section className="fbc-tools fbc-sec-dark">
                <div className="fbc-container">
                    <div className="fbc-tools__layout">

                        <div className="fbc-tools__visual anim-curtain-reveal">
                            <div className="fbc-curtain-overlay bg-black"></div>
                            <img src={forCReatorContent} alt="Creator Studio UI" className="fbc-tools__img anim-parallax" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTool}
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="fbc-tools__floating-glass"
                                >
                                    <div className="fbc-text-gold mb-2">{creatorTools[activeTool].icon}</div>
                                    <h4 className="text-xl font-light text-white mb-2">{creatorTools[activeTool].title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{creatorTools[activeTool].desc}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="fbc-tools__text pl-0 lg:pl-16">
                            <span className="fbc-tag-dark mb-4">AI Studio</span>
                            <h2 className="fbc-heading !text-white">
                                Next-gen <br /><span className="fbc-text-gradient">AI tools.</span>
                            </h2>
                            <p className="fbc-subheading text-gray-400 mb-8">
                                Professional-grade cinema tools embedded straight into your workflow. Edit faster, sound better, and scale harder.
                            </p>

                            <div className="fbc-tools__list">
                                {creatorTools.map((t, i) => (
                                    <div
                                        key={i}
                                        className={`fbc-tool-item ${activeTool === i ? 'fbc-tool-item--active' : ''}`}
                                        onMouseEnter={() => setActiveTool(i)}
                                    >
                                        <div className="fbc-tool-item-line"></div>
                                        <h4 className="fbc-tool-item-title">{t.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ════════════ 5. TIERS & EARNINGS — DARK GLASS STACK ════════════ */}
            <section className="fbc-tiers fbc-sec-dark anim-tier-trig">
                <div className="fbc-container">
                    <div className="text-center mb-16">
                        <span className="fbc-tag-dark mb-4 mx-auto">Monetization</span>
                        <h2 className="fbc-heading !text-white">
                            The Earnings <span className="fbc-text-gradient">Engine.</span>
                        </h2>
                    </div>

                    <div className="fbc-tiers__grid">
                        {earningTiers.map((tier, i) => (
                            <div key={i} className={`fbc-tier-card anim-tier ${i === 3 ? 'fbc-tier-card--gold' : ''}`}>
                                {i === 3 && <div className="fbc-tier-badge"><Crown size={12} /> VIP</div>}
                                <h3 className="text-white text-2xl font-light mb-1">{tier.tier}</h3>
                                <div className="text-gray-400 text-sm tracking-wider uppercase mb-6">{tier.range}</div>

                                <div className="fbc-tier-earn mb-6">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Target Earnings</div>
                                    <div className={`text-3xl font-light ${i === 3 ? 'fbc-text-gold' : 'text-white'}`}>{tier.earnings}</div>
                                </div>

                                <div className="space-y-3">
                                    {tier.perks.map((p, j) => (
                                        <div key={j} className="flex items-center gap-3 text-sm text-gray-400">
                                            <CheckCircle size={14} className={i === 3 ? "fbc-text-gold" : "text-gray-600"} />
                                            <span>{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════ 6. COMMUNITY / WORKSPACE OVERLAP (LIGHT) ════════════ */}
            <section className="fbc-community fbc-sec-light">
                <div className="fbc-container">

                    <div className="fbc-community__layout">
                        <div className="fbc-community__text">
                            <span className="fbc-tag-light mb-4">The Tribe</span>
                            <h2 className="fbc-heading">
                                Grow <span className="fbc-text-gradient">together.</span>
                            </h2>
                            <p className="fbc-subheading text-gray-700 mb-8">
                                YovoAI is a movement. Join thousands of creators who collaborate, inspire, and push the boundaries of what's possible.
                            </p>

                            <img src={tableComputerWorkin} alt="Workspace" className="rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-500" />
                        </div>

                        <div className="fbc-community__visual anim-curtain-reveal">
                            <div className="fbc-curtain-overlay bg-white"></div>
                            <img src={usingTech} alt="Community" className="fbc-community__img" />

                            {/* Glass stat floaters */}
                            <div className="fbc-float-stat fbc-float-stat--1">
                                <div className="text-2xl font-light text-black">10K+</div>
                                <div className="text-xs text-gray-500 uppercase">Creators</div>
                            </div>
                            <div className="fbc-float-stat fbc-float-stat--2">
                                <div className="text-2xl font-light text-black">Global</div>
                                <div className="text-xs text-gray-500 uppercase">Masterclasses</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* ════════════ 7. SUCCESS STORIES — DARK CAROUSEL ════════════ */}
            <section className="fbc-stories fbc-sec-dark pb-24">
                <div className="fbc-container">
                    <div className="fbc-stories__header">
                        <div>
                            <span className="fbc-tag-dark mb-4">Case Studies</span>
                            <h2 className="fbc-heading !text-white m-0">
                                Creators <span className="fbc-text-gradient">thriving.</span>
                            </h2>
                        </div>
                        <img src={forCreaterSection} alt="Data" className="fbc-stories__accent-img anim-parallax" />
                    </div>

                    <div className="fbc-stories__grid mt-16">
                        {successStories.map((story, i) => (
                            <div key={i} className="fbc-story-card">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-white text-xl">{story.name}</h4>
                                        <p className="text-gray-400 text-sm">{story.niche} Creator</p>
                                    </div>
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-current" />)}
                                    </div>
                                </div>
                                <p className="text-white/70 italic text-lg leading-relaxed mb-8">"{story.quote}"</p>
                                <div className="flex gap-6 border-t border-white/10 pt-6">
                                    <div>
                                        <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Growth</div>
                                        <div className="text-green-400 font-light text-lg">{story.growth}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Earnings</div>
                                        <div className="text-white font-light text-lg">{story.earnings}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════ 8. FINAL CTA — LUXURY GOLD (DARK) ════════════ */}
            <section className="fbc-cta fbc-sec-dark text-center py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none"></div>
                <div className="fbc-cta__glow"></div>

                <div className="fbc-container relative z-10">
                    <Target size={48} className="fbc-text-gold mx-auto mb-8 opacity-80" />
                    <h2 className="fbc-heading !text-white">
                        Your audience is <span className="fbc-text-gradient">waiting.</span>
                    </h2>
                    <p className="fbc-subheading mx-auto text-gray-400 mb-12">
                        Turn your passion into a premium personal brand. Join the elite network of YovoAI creators today.
                    </p>

                    <div className="flex justify-center gap-6">
                        <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="fbc-btn fbc-btn--gold shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                            <Rocket size={18} /> Start Creating Now
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}
