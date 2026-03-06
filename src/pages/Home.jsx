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
import './HomeLux.css'
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

/* ─── Luxury Animations Setup ─── */
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }
const fadeUpBlur = { hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }, show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }
const textReveal = { hidden: { opacity: 0, y: 50, rotateX: -40, transformOrigin: "top center" }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }
const popIn = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "back.out(1.5)" } } }

export default function Home() {
    const heroRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 0. Hero Background Intro
            gsap.fromTo('.home-hero-bg',
                { scale: 1.15, opacity: 0, filter: 'brightness(0)' },
                { scale: 1, opacity: 1, filter: 'brightness(1)', duration: 2.5, ease: "power3.out" }
            );

            // 1. Stats Section (Global Impact) - 3D Flip & Counter Animation
            gsap.fromTo('.lux-stats-hdr',
                { opacity: 0, y: 40, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: '.lux-stats', start: "top 80%" } }
            );

            const statsCards = gsap.utils.toArray('.lux-stat-item');
            if (statsCards.length > 0) {
                gsap.fromTo(statsCards,
                    { opacity: 0, rotationY: -90, z: -100 },
                    {
                        opacity: 1, rotationY: 0, z: 0,
                        duration: 1.5, stagger: 0.2, ease: "elastic.out(1, 0.6)",
                        scrollTrigger: {
                            trigger: '.lux-stats',
                            start: "top 75%",
                        }
                    }
                );
            }

            // 2. Video Showcase - Masked Image Unveil + Asymmetrical Stagger
            gsap.fromTo('.lux-video-left',
                { opacity: 0, x: -100, filter: 'blur(12px)' },
                { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: '.lux-video', start: "top 75%" } }
            );

            gsap.fromTo('.lux-video-device',
                { clipPath: 'inset(100% 0 0 0 round 40px)', scale: 0.9 },
                { clipPath: 'inset(0% 0% 0% 0% round 24px)', scale: 1, duration: 2, ease: "power3.inOut", scrollTrigger: { trigger: '.lux-video', start: "top 70%" } }
            );

            // 3. Why Choose Us - Immersive Horizontal Scroll
            gsap.fromTo('.why-hdr',
                { opacity: 0, y: -50, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: '.lux-why-wrapper', start: "top 80%" } }
            );

            const luxWhyContainer = document.querySelector('.lux-why-track');
            if (luxWhyContainer) {
                gsap.to('.lux-why-track', {
                    xPercent: -100 * (3 - 1) / 3, // Since there are 3 items, container is 300% wide. Move by -66.66% to reach last item.
                    ease: "none",
                    scrollTrigger: {
                        trigger: '.lux-why-wrapper',
                        pin: true,
                        scrub: 1,
                        end: "+=2500" // 2500px scroll duration for a premium luxurious feel
                    }
                });
            }

            // 4. Product Ecosystem - Horizontal Translation / Sticky right cards
            gsap.fromTo('.pr-hdr',
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.lux-product', start: "top 80%" } }
            );

            const prRows = gsap.utils.toArray('.lux-pr-row');
            if (prRows.length > 0) {
                prRows.forEach((row, index) => {
                    gsap.fromTo(row,
                        { opacity: 0, x: 150, rotateX: 25 },
                        {
                            opacity: 1, x: 0, rotateX: 0, duration: 1.2, ease: "power4.out",
                            scrollTrigger: {
                                trigger: row,
                                start: "top 90%",
                            }
                        }
                    );
                });
            }

            // 5. Process Timeline - Glowing Stroke Draw
            gsap.fromTo('.lux-process .lux-label', { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1.5, scrollTrigger: { trigger: '.lux-process', start: "top 80%" } });

            const ptRows = gsap.utils.toArray('.lux-pt-row');
            if (ptRows.length > 0) {
                ptRows.forEach((row, i) => {
                    gsap.fromTo(row,
                        { opacity: 0, scale: 0.8, y: 50 },
                        {
                            opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "power3.out",
                            scrollTrigger: {
                                trigger: row,
                                start: "top 85%",
                            }
                        }
                    );
                });
            }
            // Central Stat Hero pop
            gsap.fromTo('.lux-stat-hero',
                { scale: 0.5, opacity: 0, rotation: -5 },
                { scale: 1, opacity: 1, rotation: 0, duration: 1.8, ease: "elastic.out(1, 0.4)", scrollTrigger: { trigger: '.lux-stat-hero', start: "top 75%" } }
            );

            // 6. Value Prop - Heavy Parallax Mask Reveal
            gsap.fromTo('.lux-value-bg',
                { scale: 1.2, filter: 'brightness(2)' },
                { scale: 1, filter: 'brightness(0.6)', duration: 2, ease: "power2.out", scrollTrigger: { trigger: '.lux-value', start: "top bottom", end: "center center", scrub: 1 } }
            );

            gsap.fromTo('.lux-value-content-anim',
                { opacity: 0, y: 60, scale: 0.9 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out(1.1)",
                    scrollTrigger: { trigger: '.lux-value', start: "top 50%" }
                }
            );

            // 7. Feature Highlight - Cinematic Tilt
            gsap.fromTo('.hl-left',
                { opacity: 0, x: -60, filter: "blur(10px)" },
                { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: '.lux-highlight', start: "top 75%" } }
            );
            gsap.fromTo('.hl-right',
                { opacity: 0, rotationY: 20, z: -200, scale: 0.8 },
                { opacity: 1, rotationY: 0, z: 0, scale: 1, duration: 1.8, ease: "power4.out", scrollTrigger: { trigger: '.lux-highlight', start: "top 75%" } }
            );

            // 8. Testimonials - Perspective Cards Flow
            gsap.fromTo('.test-hdr', { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: '.lux-testimonials', start: "top 85%" } });

            const tests = gsap.utils.toArray('.lux-test-quote-block');
            if (tests.length > 0) {
                gsap.fromTo(tests,
                    { opacity: 0, y: 100, rotateZ: 3, scale: 0.95 },
                    {
                        opacity: 1, y: 0, rotateZ: 0, scale: 1, duration: 1.5, stagger: 0.2, ease: "expo.out",
                        scrollTrigger: {
                            trigger: '.lux-test-slider',
                            start: "top 80%",
                        }
                    }
                );
            }

            // 9. Brands Marquee label fade
            gsap.fromTo('.top-brands-section .lux-label', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: '.top-brands-section', start: "top 90%" } });

            // Universal Parallax support
            const parallaxImgs = gsap.utils.toArray('.lux-parallax-img');
            parallaxImgs.forEach(img => {
                gsap.to(img, {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

        });
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
                            variants={fadeUpBlur}
                        >
                            <span className="home-hero-label">
                                YOVO AI PRESENT
                            </span>
                        </motion.div>

                        {/* Headline Part 1 */}
                        <motion.div
                            variants={textReveal}
                            className="home-hero-title-wrapper"
                        >
                            <h1 className="home-hero-title1">
                                Experience Ai Creation
                            </h1>
                        </motion.div>

                        {/* Headline Part 2 */}
                        <motion.h1
                            variants={textReveal}
                            className="home-hero-title2"
                        >
                            like never before
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={fadeUpBlur}
                            className="home-hero-desc"
                        >
                            Get a unique, AI-experience in no time with our powerful models.
                            Transform authentic voices into measurable brand growth.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={popIn} className="home-hero-cta-group">
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
                        <motion.div variants={fadeUpBlur} className="home-hero-social-proof">
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

            {/* ════════════════════ LUXURY REDESIGN ════════════════════ */}

            {/* 1. Global Impact (Stats) */}
            <section className="lux-section lux-dark lux-stats relative bg-[#050505]">
                {/* Subtle radial bg */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
                <div className="lux-container text-center lux-stats-hdr">
                    <span className="lux-label border-white/20 text-white/50">Global Impact</span>
                    <h2 className="lux-heading mt-6 leading-tight">Transforming<br />Brand <span className="lux-gradient italic font-light">Influence</span></h2>
                </div>
                <div className="lux-stats-grid mt-24 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="lux-stat-item relative group bg-[#0a0a0a] border border-white/5 rounded-3xl p-12 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500">
                            {/* Glow accent */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundColor: stat.color, boxShadow: `0 0 20px ${stat.color}` }}></div>
                            <div className="lux-stat-val text-7xl font-light font-heading mb-6 tracking-tighter" style={{ color: stat.color }}>{stat.number}</div>
                            <div className="lux-stat-info flex items-center justify-center gap-4">
                                <span className="lux-stat-icon p-3 rounded-xl bg-white/5 text-white/80 group-hover:scale-110 transition-transform duration-500" style={{ color: stat.color }}>{stat.icon}</span>
                                <span className="lux-stat-lbl text-xl text-white/70 font-light">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Video Showcase (Asymmetrical Layout) */}
            <section className="lux-section lux-video lux-light bg-white py-32">
                <div className="lux-container lux-split items-center">
                    <div className="lux-split-left lux-video-left">
                        <span className="lux-label border-black/20 text-black/50">Video Generation</span>
                        <h2 className="lux-heading mt-6 mb-8 text-black leading-tight">From <span className="lux-gradient">Voice</span><br />To Viral.</h2>
                        <p className="lux-desc text-black/70 text-lg leading-relaxed mb-8 max-w-xl">Watch how creators transform their authentic voices into scroll-stopping content. No agency needed. No delays.</p>
                        <div className="lux-feature-stack flex flex-col gap-5 border-l border-black/10 pl-6">
                            {['AI-enhanced video editing in real-time', 'Instant multi-platform distribution', 'Smart analytics that predict virality'].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-black/80 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex-shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                        <Link to="/features" className="lux-btn-primary mt-12 bg-black text-white hover:bg-gray-900 shadow-xl rounded-full px-10 py-4 flex w-fit items-center gap-3 transition-transform hover:-translate-y-1">
                            Explore Features <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="lux-split-right pr-0 md:pl-16 w-full">
                        <div className="lux-video-device w-full aspect-[4/5] md:aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative">
                            <iframe
                                src="https://www.youtube.com/embed/1pdkiWD5sCw?autoplay=1&mute=1&loop=1&controls=0&playlist=1pdkiWD5sCw&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1"
                                allow="autoplay; encrypted-media"
                                allowFullScreen frameBorder="0"
                                title="YovoAI Demo"
                                className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us (Horizontal Pinning Premium Architecture) */}
            <section className="lux-why-wrapper bg-[#fafafa] overflow-hidden h-screen flex flex-col">
                {/* Header Section (Static flow) */}
                <div className="why-hdr text-center pt-20 md:pt-28 pb-4 flex-shrink-0 w-full z-20 relative">
                    <span className="lux-label border-black/20 text-black/50 tracking-[0.2em] bg-white/50 backdrop-blur-md px-6 py-2 rounded-full inline-block mb-3 text-xs md:text-sm">Why Choose Us</span>
                    <h2 className="lux-heading leading-tight text-4xl md:text-5xl lg:text-6xl">The Power of<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400">AI-Driven UGC</span></h2>
                </div>

                {/* Horizontal Track Section (Takes remaining space) */}
                <div className="relative flex-1 w-full flex items-center">
                    <div className="lux-why-track flex absolute top-0 left-0 h-full items-center" style={{ width: `${features.length * 100}vw` }}>
                        {features.map((f, i) => (
                            <div key={i} className="w-screen h-full flex flex-col items-center justify-center relative px-6 md:px-20 pb-16 md:pb-24">
                                {/* Abstract Geometric Background */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vh] h-[40vh] md:w-[50vh] md:h-[50vh] border border-black/[0.03] rounded-[30%] rotate-45 group-hover:rotate-90 group-hover:scale-125 transition-all duration-[2000ms] select-none pointer-events-none mix-blend-multiply"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vh] h-[55vh] md:w-[70vh] md:h-[70vh] border border-black/[0.02] rounded-full group-hover:scale-110 transition-transform duration-[1500ms] select-none pointer-events-none mix-blend-multiply"></div>

                                <div className="relative z-10 max-w-3xl text-center group">
                                    <div className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex justify-center items-center mb-6 md:mb-10 group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-1000 ease-out cursor-crosshair border border-black/5" style={{ color: f.color }}>
                                        <div className="transform scale-[1.3] md:scale-[1.8] group-hover:scale-[2] group-hover:rotate-12 transition-transform duration-1000 ease-out">{f.icon}</div>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading font-light text-black mb-4 tracking-tight leading-tight transition-colors duration-700 drop-shadow-sm px-4">{f.title}</h3>
                                    <p className="text-base md:text-lg lg:text-xl text-black/50 font-light leading-relaxed group-hover:text-black/80 transition-colors duration-700 max-w-2xl mx-auto px-4 max-h-[100px] md:max-h-full overflow-hidden text-ellipsis">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Product Ecosystem (Immersive List) */}
            <section className="lux-section lux-dark lux-product bg-[#050505] min-h-screen py-32 flex items-center relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
                {/* Abstract moving gradient orb behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-pink-600/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

                <div className="lux-container lux-split items-start relative z-10 w-full max-w-7xl">
                    <div className="lux-split-left pr-hdr relative h-full">
                        <div className="sticky top-40 pt-10">
                            <span className="lux-label border-white/20 text-white/50">Platform Core</span>
                            <h2 className="lux-heading mt-6 leading-tight text-white mb-8">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Engine</span><br />Behind Growth</h2>
                            <p className="lux-desc max-w-md text-white/60 text-xl font-light">A complete ecosystem of intelligent tools designed to seamlessly maximize your content's cultural impact.</p>
                        </div>
                    </div>
                    <div className="lux-product-list w-full flex flex-col relative z-10">
                        {productShowcase.map((item, i) => (
                            <div key={i} className="lux-pr-row group relative py-12 flex flex-col md:flex-row items-start md:items-center gap-6 cursor-crosshair border-b border-white/5 hover:border-white/20 transition-colors duration-700" style={{ '--h-color': item.color }}>

                                {/* Background massive abstract text on hover */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10rem] font-heading font-black opacity-0 group-hover:opacity-[0.02] transition-all duration-1000 pointer-events-none whitespace-nowrap overflow-hidden translate-x-20 group-hover:translate-x-0 tracking-tighter" style={{ color: item.color }}>
                                    {item.title.split(' ')[0]}
                                </div>

                                <div className="w-16 flex-shrink-0 text-white/10 group-hover:text-current transition-colors flex flex-col items-center translate-y-2">
                                    <div className="w-3 h-3 rotate-45 border border-current bg-transparent group-hover:bg-current transition-all duration-700 shadow-[0_0_0_current] group-hover:shadow-[0_0_15px_current]"></div>
                                    <div className="w-[1px] h-16 bg-white/10 mt-4 group-hover:bg-current group-hover:h-32 transition-all duration-700"></div>
                                </div>

                                <div className="flex-1 flex flex-col pr-8 z-10">
                                    <h3 className="text-3xl md:text-5xl font-light text-white/50 group-hover:text-white transition-all duration-700 tracking-tight mb-4 group-hover:translate-x-2">{item.title}</h3>
                                    <p className="text-white/40 text-lg group-hover:text-white/70 transition-all duration-700 max-w-lg group-hover:translate-x-2">{item.desc}</p>
                                </div>

                                <div className="hidden md:flex w-20 h-20 items-center justify-center rounded-full bg-white/[0.02] border border-white/5 relative z-10 opacity-50 group-hover:opacity-100 group-hover:scale-125 group-hover:border-white/20 transition-all duration-700" style={{ color: item.color }}>
                                    <div className="transform scale-125">{item.icon}</div>
                                </div>
                            </div>
                        ))}
                        <div className="border-b border-white/5"></div>
                    </div>
                </div>
            </section>

            {/* 5. Process (Massive Typography Timeline) */}
            <section className="lux-section lux-process lux-light bg-white py-40 overflow-hidden relative">
                {/* Luxury noise overlay or gradient */}
                <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-gradient-to-bl from-orange-500/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>

                <div className="lux-container max-w-7xl mx-auto relative z-10">
                    <span className="lux-label border-black/20 text-black/50 inline-block mb-32 tracking-[0.2em]">How It Works</span>

                    <div className="lux-process-timeline flex flex-col gap-32 relative">
                        {howItWorks.map((step, i) => (
                            <div key={i} className={`lux-pt-row relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-32 w-full group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Abstract Background & Icon Overlay */}
                                <div className="flex-1 flex justify-center items-center relative w-full h-[300px]">
                                    <div className="absolute w-64 h-64 md:w-80 md:h-80 border-[0.5px] border-black/5 rounded-[40%] group-hover:rounded-full group-hover:border-black/10 group-hover:scale-110 transition-all duration-[2000ms] animate-[spin_20s_linear_infinite] z-0 select-none pointer-events-none mix-blend-multiply flex items-center justify-center">
                                        <div className="w-56 h-56 md:w-72 md:h-72 border-[0.5px] border-black/5 rounded-full rotate-45 group-hover:-rotate-45 transition-transform duration-[3000ms]"></div>
                                    </div>
                                    <div className="w-40 h-40 rounded-full bg-white/80 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center text-black/30 group-hover:text-orange-500 group-hover:scale-125 transition-all duration-700 relative z-10 mx-auto">
                                        <div className="transform scale-[2.5]">{step.icon}</div>
                                    </div>
                                </div>

                                {/* Content Block without boundaries */}
                                <div className={`flex-1 flex flex-col relative z-10 ${i % 2 !== 0 ? 'items-end text-right md:pr-16' : 'items-start text-left md:pl-16'}`}>
                                    <div className="flex items-center gap-4 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        {i % 2 !== 0 && <span className="bg-orange-500 shadow-[0_0_15px_#f97316] w-2 h-2 rounded-full block"></span>}
                                        <div className="w-16 h-[1px] bg-orange-500"></div>
                                        {i % 2 === 0 && <span className="bg-orange-500 shadow-[0_0_15px_#f97316] w-2 h-2 rounded-full block"></span>}
                                    </div>
                                    <h3 className="text-5xl md:text-7xl font-light mb-8 text-black group-hover:scale-[1.05] transition-transform duration-700 tracking-tight origin-left">{step.title}</h3>
                                    <p className="text-black/50 text-xl md:text-2xl leading-relaxed max-w-lg group-hover:text-black/80 transition-colors duration-700 font-light">{step.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="lux-stat-hero mt-48 bg-[#0a0a0a] text-white py-24 px-12 md:px-24 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-16 border border-white/10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(249,115,22,0.2),transparent_70%)] pointer-events-none group-hover:scale-110 group-hover:translate-x-10 transition-transform duration-[1.5s]"></div>
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h4 className="text-3xl md:text-5xl font-light text-white/90 leading-tight tracking-tight max-w-2xl">Increase in community-led conversions within the first 30 days.</h4>
                        </div>
                        <div className="flex-shrink-0 text-center relative z-10">
                            <div className="lux-stat-h-val text-8xl md:text-[12rem] font-heading font-normal leading-none bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-700 inline-block drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]">3x</div>
                            <span className="block mt-6 text-white/50 tracking-[0.3em] uppercase text-sm font-semibold">Average Growth</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Value Prop (Full Width Cinematic Background Overlap) */}
            <section className="lux-section lux-value relative py-48 overflow-hidden min-h-screen flex items-center justify-center">
                <div className="lux-value-bg absolute inset-0 z-0">
                    <img src={futurasticAi} alt="AI Future" className="lux-parallax-img w-full h-[120%] object-cover absolute -top-[10%]" />
                    <div className="lux-bg-overlay absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>
                <div className="lux-container relative z-10 lux-value-content-anim text-center max-w-4xl">
                    <h2 className="lux-heading text-white text-6xl md:text-8xl leading-none">Not another AI tool.<br />A Growth <span className="lux-italic lux-gradient">Revolution.</span></h2>
                    <p className="lux-desc text-white/70 mx-auto text-xl md:text-2xl mt-12 leading-relaxed font-light">
                        YovoAI is a paradigm shift. We merge the raw authenticity of user-generated content with precision AI to create marketing that doesn't feel like marketing.
                    </p>
                    <Link to="/about" className="lux-btn-white mt-16 bg-white text-black px-10 py-5 rounded-full inline-flex items-center gap-3 font-medium hover:scale-105 transition-transform">Learn Our Story <ArrowRight size={18} /></Link>
                </div>
            </section>

            {/* 7. Feature Highlight (Cinematic Image Side) */}
            <section className="lux-section lux-highlight lux-light bg-white py-32">
                <div className="lux-container lux-split lux-split-rev items-center gap-16">
                    <div className="lux-split-left hl-left">
                        <span className="lux-label border-black/20 text-black/50">Next-Gen AI</span>
                        <h2 className="lux-heading mt-6 mb-12 leading-tight text-black">Content that converts.<br />Communities that last.</h2>
                        <div className="lux-mini-stats-grid grid grid-cols-2 gap-x-8 gap-y-12">
                            {[
                                { num: '95%', label: 'Brand Safety Score' },
                                { num: '2.4x', label: 'Avg. Engagement Rate' },
                                { num: '<5min', label: 'Content Creation Time' },
                                { num: '40+', label: 'Platform Integrations' },
                            ].map((s, i) => (
                                <div key={i} className="lux-ms-item border-l-2 border-orange-500/30 pl-6 group hover:border-orange-500 transition-colors">
                                    <div className="lux-ms-num text-5xl font-heading font-light text-black mb-2">{s.num}</div>
                                    <div className="lux-ms-lbl text-black/50 group-hover:text-black/80 transition-colors uppercase tracking-widest text-xs">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lux-split-right flex justify-end hl-right relative perspective-1000 w-full pl-0 md:pl-10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent blur-3xl transform -translate-x-10 translate-y-10 z-0 rounded-full"></div>
                        <div className="lux-cinematic-img w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10 border border-black/5">
                            <img src={techStyleDash} alt="Dashboard" className="w-full h-auto object-cover scale-[1.03] hover:scale-100 transition-transform duration-1000" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Testimonials (Elegant Quote Layout) */}
            <section className="lux-section lux-dark lux-testimonials bg-[#0a0a0a] py-32 overflow-hidden">
                <div className="lux-container text-center max-w-6xl">
                    <span className="lux-label border-white/20 text-white/50 inline-block test-hdr">What They Say</span>
                    <div className="lux-test-slider grid md:grid-cols-3 gap-8 mt-24">
                        {testimonials.map((t, i) => (
                            <div key={i} className="lux-test-quote-block bg-gradient-to-b from-[#151515] to-[#111] border border-white/5 p-12 rounded-3xl text-left flex flex-col justify-between hover:border-white/10 hover:-translate-y-3 transition-all duration-500 group relative">
                                <div className="absolute -top-6 -left-2 text-7xl font-serif text-white/5 opacity-50 group-hover:opacity-100 transition-opacity select-none">"</div>
                                <h3 className="lux-test-text text-xl font-light text-white/80 leading-relaxed mb-10 z-10 relative">"{t.text}"</h3>
                                <div className="lux-test-author flex items-center gap-4 z-10 relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-sm font-semibold border border-white/10">{t.avatar}</div>
                                    <div>
                                        <span className="lux-test-name block text-white font-medium">{t.author}</span>
                                        <span className="lux-test-pos block text-white/50 text-sm mt-1">{t.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Top Brands Marquee */}
            <section className="lux-section lux-light py-24 top-brands-section bg-zinc-50 border-t border-black/5">
                <div className="lux-container text-center">
                    <span className="lux-label border-black/20 text-black/50">Trusted By Global Leaders</span>
                </div>
                <div className="marquee-container mt-16 flex overflow-hidden group">
                    <div className="marquee-content flex gap-16 md:gap-32 items-center px-8 md:px-16 animate-marquee-fast">
                        {marqueeBrands.map((brand, i) => (
                            <div key={`brand1-${brand.id}-${i}`} className={`marquee-item marquee-item-${brand.id} text-3xl md:text-4xl opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer`}>
                                {brand.node}
                            </div>
                        ))}
                    </div>
                    <div className="marquee-content flex gap-16 md:gap-32 items-center px-8 md:px-16 animate-marquee-fast" aria-hidden="true">
                        {marqueeBrands.map((brand, i) => (
                            <div key={`brand2-${brand.id}-${i}`} className={`marquee-item marquee-item-${brand.id} text-3xl md:text-4xl opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer`}>
                                {brand.node}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
