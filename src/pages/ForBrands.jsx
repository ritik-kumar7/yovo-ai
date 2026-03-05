import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Target, UserMinus, SearchX,
    TrendingDown, Hourglass, Cpu, UserCheck,
    Rocket, BarChart4, Network, Library,
    PieChart, Share2, Award, ShieldCheck,
    Globe2, Layers, ChevronRight, Sparkles, Eye, Play
} from 'lucide-react'
import './ForBrands.css'

import workplace from '../assets/images/workplace.jpg'
import forBrandAd from '../assets/images/forBrandAd.png'
import forBrandSection from '../assets/images/forBrandSection.jpg'
import forBrandSectionImages from '../assets/images/forBrandSectionImages.png'
import forBrandWin from '../assets/images/forBrandWin.png'
import forBrandCam from '../assets/images/ForBranadCam.jpg'

gsap.registerPlugin(ScrollTrigger)

/* ─── Data ─── */
const brandProblems = [
    { icon: <TrendingDown size={28} />, problem: 'High ad spend, low ROI', desc: 'Advertising costs are skyrocketing while effectiveness plummets. Audiences instinctively scroll past polished ads.' },
    { icon: <Hourglass size={28} />, problem: 'Slow turnaround', desc: 'Agency-created content takes weeks. By the time it launches, the cultural moment has entirely passed.' },
    { icon: <UserMinus size={28} />, problem: 'Zero audience trust', desc: 'Consumers trust recommendations from real people 3x more than branded content. Authenticity cannot be forged.' },
]

const solutions = [
    { icon: <Cpu size={26} />, title: 'AI Campaign Engine', desc: 'Launch UGC campaigns in minutes, not weeks. Our AI handles everything from brief creation to content curation.', metric: '85% faster launch' },
    { icon: <UserCheck size={26} />, title: 'Smart Creator Matching', desc: 'AI-powered matching connects you with creators who genuinely align with your brand. The right voices, every time.', metric: '10,000+ vetted creators' },
    { icon: <Rocket size={26} />, title: 'Automated Distribution', desc: 'One-click distribution across 40+ platforms with format-specific optimization.', metric: '40+ platforms' },
    { icon: <BarChart4 size={26} />, title: 'Real-Time Track', desc: 'See exactly how every dollar performs. Track conversions, engagement, and brand lift in real-time.', metric: 'Complete attribution' },
]

const processSteps = [
    { num: '01', title: 'Define', desc: 'Set your campaign goals, target audience, and brand guidelines through our intelligent brief builder. AI suggests the optimal parameters.' },
    { num: '02', title: 'Match', desc: 'Our algorithm scans 10,000+ creators, filtering for brand affinity, past performance, and audience demographic overlap.' },
    { num: '03', title: 'Create', desc: 'Creators produce authentic content using our Studio app, with AI enforcing brand safety and quality guidelines before submission.' },
    { num: '04', title: 'Amplify', desc: 'Approved content is syndicated across TikTok, Reels, Shorts, and ad networks with one click, tracked via our unified dashboard.' },
]

const caseStudies = [
    { brand: 'Organix Foods', metric: '5x', label: 'Organic Reach', desc: 'Launched 50+ creator-driven UGC campaigns with AI enhancement, reducing CAC by 68%.' },
    { brand: 'Bloomwear', metric: '4.2x', label: 'ROAS', desc: 'Partnered with 200+ micro-creators, boosting UGC volume by 250% and driving record sales.' },
]

export default function ForBrands() {
    const mainRef = useRef(null)
    const [activeSol, setActiveSol] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setActiveSol(p => (p + 1) % solutions.length), 5000)
        return () => clearInterval(t)
    }, [])

    /* ─── Ultra Premium Scroll Animations ─── */
    useEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Aurora Veil Reveal & Royal Stagger Cascade (Hero)
            gsap.fromTo('.anim-aurora',
                { opacity: 0, scale: 1.1, filter: 'blur(30px) brightness(1.5)' },
                { opacity: 0.8, scale: 1, filter: 'blur(0px) brightness(1)', duration: 3, ease: 'power3.inOut' }
            )
            gsap.fromTo('.anim-royal',
                { y: 60, opacity: 0, filter: 'blur(10px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.15, ease: 'expo.out', delay: 0.6 }
            )

            // 2. Horizon Split Transition (Dividers)
            gsap.utils.toArray('.anim-horizon').forEach(el => {
                gsap.fromTo(el,
                    { scaleX: 0, transformOrigin: 'center' },
                    { scaleX: 1, duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 90%' } }
                )
            })

            // 3. Phantom Depth Rise
            gsap.fromTo('.anim-phantom',
                { z: -100, rotationX: 10, opacity: 0, filter: 'blur(10px)', y: 40 },
                {
                    z: 0, rotationX: 0, opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.4, stagger: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: '.anim-phantom-trig', start: 'top 80%' }
                }
            )

            // 4. Cinematic Mask Sweep
            gsap.fromTo('.anim-mask-sweep',
                { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
                {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.8, ease: 'power4.inOut',
                    scrollTrigger: { trigger: '.anim-mask-sweep', start: 'top 80%' }
                }
            )

            // 5. Liquid Silk Unfold
            gsap.utils.toArray('.anim-silk').forEach(el => {
                gsap.fromTo(el,
                    { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 40 },
                    {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, duration: 1.8, ease: 'power3.inOut',
                        scrollTrigger: { trigger: el, start: 'top 85%' }
                    }
                )
            })

            // 6. Magnetic Pull In (Process Cards)
            gsap.utils.toArray('.anim-magnetic').forEach(el => {
                gsap.fromTo(el,
                    { opacity: 0, scale: 0.9, y: 60 },
                    {
                        opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.2)',
                        scrollTrigger: { trigger: el, start: 'top 85%' }
                    }
                )
            })

            // 7. 3D Perspective Tilt In
            gsap.fromTo('.anim-tilt',
                { rotationY: 20, rotationX: 10, z: -150, opacity: 0, filter: 'brightness(0.5)' },
                {
                    rotationY: 0, rotationX: 0, z: 0, opacity: 1, filter: 'brightness(1)', duration: 1.8, ease: 'expo.out',
                    scrollTrigger: { trigger: '.anim-tilt-trig', start: 'top 75%' }
                }
            )

            // 8. Dark-to-Light Exposure
            gsap.fromTo('.anim-exposure',
                { filter: 'brightness(0) contrast(2)', opacity: 0 },
                {
                    filter: 'brightness(1) contrast(1)', opacity: 1, duration: 2.5, ease: 'power2.inOut',
                    scrollTrigger: { trigger: '.anim-exposure', start: 'top 60%' }
                }
            )

            // 9. Nebula Glow Entrance
            gsap.fromTo('.anim-nebula',
                { opacity: 0, boxShadow: '0 0 0px rgba(249, 115, 22, 0)' },
                {
                    opacity: 1, boxShadow: '0 0 100px rgba(249, 115, 22, 0.25)', duration: 2,
                    scrollTrigger: { trigger: '.anim-exposure', start: 'top 50%' }
                }
            )

            // 10. Velvet Curtain Reveal (CTA)
            gsap.fromTo('.anim-curtain-l', { xPercent: 0 }, { xPercent: -100, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: '.anim-curtain-trig', start: 'top 60%' } })
            gsap.fromTo('.anim-curtain-r', { xPercent: 0 }, { xPercent: 100, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: '.anim-curtain-trig', start: 'top 60%' } })

            // 11. Luxury Parallax Drift
            gsap.utils.toArray('.anim-parallax').forEach(el => {
                gsap.to(el, {
                    yPercent: 15, ease: 'none',
                    scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
                })
            })

        }, mainRef)
        return () => ctx.revert()
    }, [])

    return (
        <main className="fbx-main" ref={mainRef}>

            {/* ════════════ 1. HERO — PREVIOUS FULL BLEED STYLE, DARK SEC ════════════ */}
            <section className="fbx-hero fbx-sec-dark">
                {/* Full Bleed Cinematic Background */}
                <div className="fbx-hero__bg-wrap anim-aurora">
                    <img src={workplace} alt="Brand" className="fbx-hero__bg anim-parallax" />
                    <div className="fbx-hero__overlay"></div>
                </div>

                <div className="fbx-hero__content">
                    <div className="fbx-hero__badge anim-royal">
                        <span className="fbx-badge-dot"></span>
                        <Target size={14} className="ml-1 mr-1" /> For Brands
                    </div>

                    <h1 className="fbx-hero__title">
                        <span className="fbx-hero__title-line anim-royal !text-white">Turn audience</span>
                        <span className="fbx-hero__title-line anim-royal !text-white">into your</span>
                        <span className="fbx-hero__title-glow anim-royal text-orange-500">Engine.</span>
                    </h1>

                    <p className="fbx-hero__sub anim-royal">
                        Stop spending millions on ads nobody trusts. YovoAI empowers your customers to create content that drives real engagement and measurable results.
                    </p>

                    <div className="fbx-hero__actions anim-royal">
                        <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="fbx-btn fbx-btn--primary anim-float">
                            <Rocket size={18} /> Launch a Campaign
                        </a>
                        <Link to="/features" className="fbx-btn fbx-btn--secondary">
                            See All Features <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Pulse Frame Highlight at bottom */}
                <div className="fbx-hero__scroll-ind anim-pulse-frame">
                    <div className="fbx-hero__scroll-line"></div>
                </div>
            </section>


            {/* ════════════ 2. PROBLEM — LIGHT SECTION, PHANTOM DEPTH ════════════ */}
            <section className="fbx-prob fbx-sec-light anim-phantom-trig">
                <div className="fbx-container">
                    <div className="fbx-prob__header anim-phantom">
                        <span className="fbx-tag-light mb-4">The Problem</span>
                        <h2 className="fbx-heading">
                            Traditional marketing is <span className="fbx-text-gradient">broken.</span>
                        </h2>
                        <p className="fbx-subheading text-center mx-auto">Brands are spending more and getting less. Here's what you're up against.</p>
                    </div>

                    <div className="fbx-prob__grid">
                        <div className="fbx-prob__list">
                            {brandProblems.map((p, i) => (
                                <div key={i} className="fbx-prob__item anim-phantom">
                                    <div className="fbx-prob__icon-wrap">
                                        {p.icon}
                                    </div>
                                    <div className="fbx-prob__text">
                                        <h3>{p.problem}</h3>
                                        <p>{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="fbx-prob__image-wrap anim-mask-sweep">
                            <img src={forBrandAd} alt="Analytics" className="fbx-prob__img anim-parallax" />
                            <div className="fbx-prob__img-glass">
                                <div className="fbx-stat-blur">
                                    <div className="fbx-stat-val">-42%</div>
                                    <div className="fbx-stat-lbl">Average ROAS decline</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ HORIZON SPLIT ════════════ */}
            <div className="fbx-horizon"><div className="fbx-horizon__line anim-horizon bg-gray-200"></div></div>


            {/* ════════════ 3. SOLUTIONS — DARK SECTION, LIQUID SILK ════════════ */}
            <section className="fbx-sol fbx-sec-dark">
                <div className="fbx-container">
                    <div className="fbx-sol__head anim-royal">
                        <span className="fbx-tag-dark mb-4">The Solution</span>
                        <h2 className="fbx-heading">
                            How YovoAI <span className="fbx-text-gradient">solves</span> it.
                        </h2>
                        <p className="fbx-subheading text-center mx-auto">A complete ecosystem built to make your brand unstoppable.</p>
                    </div>

                    <div className="fbx-sol__layout">
                        {/* Interactive Tabs */}
                        <div className="fbx-sol__tabs">
                            {solutions.map((s, i) => (
                                <button
                                    key={i}
                                    className={`fbx-sol__tab ${activeSol === i ? 'fbx-sol__tab--active' : ''}`}
                                    onClick={() => setActiveSol(i)}
                                    onMouseEnter={() => setActiveSol(i)}
                                >
                                    <span className="fbx-sol__tab-num">0{i + 1}</span>
                                    <span className="fbx-sol__tab-name">{s.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Visual & Glass Morph Detail */}
                        <div className="fbx-sol__visual">
                            <div className="fbx-sol__img-box anim-silk">
                                <img src={forBrandSectionImages} alt="Platform" className="fbx-sol__img" />
                            </div>

                            {/* Glass Morph Reveal Panel */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSol}
                                    initial={{ opacity: 0, y: 20, backdropFilter: 'blur(0px)' }}
                                    animate={{ opacity: 1, y: 0, backdropFilter: 'blur(20px)' }}
                                    exit={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="fbx-sol__glass-card"
                                >
                                    <div className="fbx-sol__glass-icon">{solutions[activeSol].icon}</div>
                                    <h3 className="fbx-sol__glass-title text-white">{solutions[activeSol].title}</h3>
                                    <p className="fbx-sol__glass-desc">{solutions[activeSol].desc}</p>
                                    <div className="fbx-sol__glass-metric">
                                        <strong>{solutions[activeSol].metric}</strong> expected result
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ 4. PROCESS — LIGHT SECTION, MAGNETIC STACK ════════════ */}
            <section className="fbx-proc fbx-sec-light">
                <div className="fbx-container">
                    <div className="fbx-proc__layout">

                        <div className="fbx-proc__sticky-side">
                            <span className="fbx-tag-light mb-4">How It Works</span>
                            <h2 className="fbx-heading fbx-proc__head">
                                Four steps to <span className="fbx-text-gradient">live.</span>
                            </h2>
                            <p className="fbx-subheading fbx-proc__sub text-gray-600">Automated workflows replace weeks of agency back-and-forth.</p>
                        </div>

                        <div className="fbx-proc__cards">
                            {processSteps.map((step, i) => (
                                <div key={i} className="fbx-proc__card anim-magnetic" style={{ top: `calc(30vh + ${i * 40}px)` }}>
                                    <div className="fbx-proc__card-inner border-gray-200 bg-white">
                                        <div className="fbx-proc__card-num !text-gray-100">{step.num}</div>
                                        <h3 className="fbx-proc__card-title text-black">{step.title}</h3>
                                        <p className="fbx-proc__card-desc !text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════ 5. DASHBOARD — DARK SECTION, TILT ════════════ */}
            <section className="fbx-dash fbx-sec-dark anim-tilt-trig">
                <div className="fbx-container">
                    <div className="fbx-dash__layout">
                        <div className="fbx-dash__visual">
                            {/* 3D Perspective Tilt In */}
                            <div className="fbx-dash__img-wrap anim-tilt">
                                <img src={forBrandSection} alt="Dashboard" className="fbx-dash__img" />
                                <div className="fbx-dash__glow anim-nebula"></div>
                            </div>
                        </div>

                        <div className="fbx-dash__text">
                            <span className="fbx-tag-dark mb-4">Command Center</span>
                            <h2 className="fbx-heading text-left">
                                Radical <span className="fbx-text-gradient">transparency.</span>
                            </h2>
                            <p className="fbx-subheading text-left mb-12">
                                Stop guessing. Our attribution engine traces every view, click, and conversion back to the exact creator.
                            </p>

                            <div className="fbx-dash__features">
                                {[
                                    { t: 'Live ROI Tracking', d: 'Pixel-perfect conversion tracking.' },
                                    { t: 'Brand Safety AI', d: 'Content is scanned before going live.' },
                                    { t: 'Unified Treasury', d: 'Automated global creator payouts.' }
                                ].map((f, i) => (
                                    <div key={i} className="fbx-dash__feat anim-royal text-left">
                                        <ShieldCheck size={20} className="fbx-dash__feat-icon" />
                                        <div>
                                            <h4 className="text-white">{f.t}</h4>
                                            <p className="text-gray-400">{f.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ 6. ECOSYSTEM — LIGHT SECTION, EXPOSURE ════════════ */}
            <section className="fbx-eco fbx-sec-light">
                <div className="fbx-eco__bg anim-exposure">
                    <img src={forBrandCam} alt="Studio" className="fbx-eco__bg-img anim-parallax" />
                    <div className="fbx-eco__overlay"></div>
                </div>

                <div className="fbx-eco__content">
                    <span className="fbx-tag-light mb-4 !border-white/20 !text-white/80 !bg-white/10">The Ecosystem</span>
                    <h2 className="fbx-heading !text-white mb-6">
                        One ecosystem.<br />
                        <span className="fbx-text-gradient">Infinite Scale.</span>
                    </h2>
                    <p className="fbx-eco__desc text-white/80">
                        Whether you need five hyper-niche creators or five thousand brand ambassadors, YovoAI scales elastically to meet your campaign demands.
                    </p>
                    <div className="fbx-eco__stats">
                        <div className="fbx-eco__stat"><span className="fbx-eco__val text-white">10K+</span><span className="fbx-eco__lbl text-white/60">Active Creators</span></div>
                        <div className="fbx-eco__stat"><span className="fbx-eco__val text-white">40+</span><span className="fbx-eco__lbl text-white/60">Platforms</span></div>
                    </div>
                </div>
            </section>


            {/* ════════════ 7. VELVET CURTAIN CTA & WINNER SECTION ════════════ */}
            <section className="fbx-cta fbx-sec-dark anim-curtain-trig">
                {/* Velvet Curtain Reveal masks */}
                <div className="fbx-cta__curtain fbx-cta__curtain--left anim-curtain-l"></div>
                <div className="fbx-cta__curtain fbx-cta__curtain--right anim-curtain-r"></div>

                <div className="fbx-cta__inner">
                    <div className="fbx-cta__win-img anim-mask-sweep">
                        <img src={forBrandWin} alt="Winner" />
                        <div className="fbx-cta__win-overlay"></div>
                    </div>

                    <div className="fbx-cta__content anim-royal text-center">
                        <Award size={40} className="fbx-cta__icon mx-auto mb-6 text-orange-500" />
                        <h2 className="fbx-heading text-white">
                            Join the brands<br />that are <span className="fbx-text-gradient">winning.</span>
                        </h2>
                        <p className="fbx-subheading max-w-2xl mx-auto my-8 text-white/60">
                            The future belongs to brands that build with their community, not just market to them. Your ultimate growth engine is waiting.
                        </p>

                        <div className="flex justify-center gap-6 mt-12">
                            <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="fbx-btn fbx-btn--primary fbx-btn--lg anim-float">
                                Start Your Campaign
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
