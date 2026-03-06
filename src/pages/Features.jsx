import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Video, Eye, Clock, TrendingUp, CheckCircle,
    Sliders, AudioWaveform, LayoutTemplate, BrainCircuit,
    Wand2, ShieldCheck, Settings2, HardDrive, Puzzle,
    Sparkles, Compass, Gauge
} from 'lucide-react'
import './HomeLux.css'
import './Features.css'
import visualDashbord from '../assets/images/visualDashbord.jpg'
import usingTech from '../assets/images/usingTech.jpg'
import techStyleDash from '../assets/images/techStyleDash.jpg'
import teachingTech from '../assets/images/teachingTech.jpg'

gsap.registerPlugin(ScrollTrigger)

const comparisonData = [
    { feature: 'Creation Speed', yovo: '< 5 Mins', traditional: '2-5 Days' },
    { feature: 'AI Enhancement', yovo: 'Advanced', traditional: 'Manual' },
    { feature: 'Brand Safety', yovo: 'Real-time AI', traditional: 'Post-review' },
    { feature: 'UGC Integration', yovo: 'Native', traditional: 'Fragmented' },
]

const ugcFeatures = [
    { title: 'Campaign Templates', desc: 'Launch beautifully designed, brand-aligned UGC campaigns in minutes without starting from scratch.' },
    { title: 'Semantic Enhancement', desc: 'Automatically elevate raw creator content with dynamic subtitles, brand effects, and optimized pacing.' },
    { title: 'Safety & Moderation', desc: 'Enterprise-grade real-time moderation ensures strict alignment with your brand\'s safety guidelines.' },
    { title: 'Automated Workflows', desc: 'Seamlessly approve, reward, and publish top-performing content across platforms with zero friction.' },
    { title: 'Dynamic Library', desc: 'An intelligent repository powered by AI tagging, comprehensive search, and simple rights management.' },
]

const performanceMetrics = [
    { label: 'Quality Score', value: 94 },
    { label: 'Brand Safety', value: 98 },
    { label: 'Audience Match', value: 92 },
]

export default function Features() {
    const mainRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ══════════════════════════════════════════════
            // 1. HERO — Cinematic Split-Text + 3D Perspective
            // ══════════════════════════════════════════════

            // Background: Ken Burns zoom with dramatic unblur
            const heroTl = gsap.timeline({ defaults: { ease: "expo.out" } });
            heroTl
                .fromTo('.feat-bg-zoom',
                    { scale: 1.3, filter: 'blur(30px) brightness(0)', opacity: 0 },
                    { scale: 1, filter: 'blur(0px) brightness(0.4)', opacity: 1, duration: 3 }
                )
                // Label stagger: perspective rotation in
                .fromTo('.feat-text-elem',
                    { y: 120, opacity: 0, rotateX: 15, filter: 'blur(12px)', transformOrigin: 'center bottom' },
                    { y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)', duration: 1.8, stagger: 0.15 },
                    0.4
                );

            // Parallax depth fade on scroll
            gsap.to('.feat-parallax-group', {
                yPercent: 50,
                opacity: 0,
                scale: 0.95,
                filter: 'blur(8px)',
                ease: "none",
                scrollTrigger: {
                    trigger: '.feat-hero-section',
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.8
                }
            });

            // Background counter-parallax (moves slower = depth)
            gsap.to('.feat-bg-zoom', {
                yPercent: 25,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: '.feat-hero-section',
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.5
                }
            });


            // ══════════════════════════════════════════════
            // 2. PARADIGM SHIFT — KEEP EXISTING (User Request)
            // ══════════════════════════════════════════════

            gsap.fromTo('.feat-mask-wrapper',
                { clipPath: 'inset(20% 15% 20% 15% round 40px)' },
                {
                    clipPath: 'inset(0% 0% 0% 0% round 0px)',
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: '.feat-mask-sec',
                        start: "top bottom",
                        end: "center center",
                        scrub: 1
                    }
                }
            );

            gsap.fromTo('.feat-mask-stagger',
                { y: 80, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.15, ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: '.feat-mask-trigger',
                        start: "top 70%"
                    }
                }
            );

            gsap.fromTo('.feat-image-parallax',
                { yPercent: -15, scale: 1.1 },
                { yPercent: 15, ease: "none", scrollTrigger: { trigger: '.feat-mask-sec', start: "top bottom", end: "bottom top", scrub: true } }
            );


            // ══════════════════════════════════════════════
            // 3. AI ARSENAL — Multi-Style Premium Reveals
            // ══════════════════════════════════════════════

            const arsenalItems = gsap.utils.toArray('.arsenal-anim');

            // --- 3a. Section Header: Horizontal clip-path wipe reveal ---
            if (arsenalItems[0]) {
                const headerEl = arsenalItems[0];
                gsap.fromTo(headerEl,
                    {
                        clipPath: 'inset(0 100% 0 0)',
                        opacity: 0,
                    },
                    {
                        clipPath: 'inset(0 0% 0 0)',
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut",
                        scrollTrigger: {
                            trigger: headerEl,
                            start: "top 80%",
                            end: "top 40%",
                            scrub: 1,
                        }
                    }
                );
            }

            // --- 3b. Feature 1 (AI Video Engine): Split parallax entrance ---
            if (arsenalItems[1]) {
                const feat1 = arsenalItems[1];
                const feat1Img = feat1.querySelector('.feat-card-img-1');
                const feat1Content = feat1.children[1] || feat1.lastElementChild;

                // Image slides in from right with rotation
                if (feat1Img) {
                    gsap.fromTo(feat1Img,
                        { x: 150, opacity: 0, rotateY: -8, scale: 0.9, transformOrigin: 'left center' },
                        {
                            x: 0, opacity: 1, rotateY: 0, scale: 1,
                            duration: 1.8, ease: "power3.out",
                            scrollTrigger: { trigger: feat1, start: "top 75%" }
                        }
                    );
                }

                // Content slides in from left with staggered children
                if (feat1Content) {
                    gsap.fromTo(feat1Content,
                        { x: -100, opacity: 0, filter: 'blur(10px)' },
                        {
                            x: 0, opacity: 1, filter: 'blur(0px)',
                            duration: 1.5, ease: "power3.out",
                            scrollTrigger: { trigger: feat1, start: "top 75%" },
                            delay: 0.2,
                        }
                    );
                }

                // Continuous subtle parallax between image and content
                if (feat1Img) {
                    gsap.to(feat1Img, {
                        yPercent: -8,
                        ease: "none",
                        scrollTrigger: { trigger: feat1, start: "top bottom", end: "bottom top", scrub: 1 }
                    });
                }
            }

            // --- 3c. Feature 2 (Voice Intelligence): Scale-from-center expansion ---
            if (arsenalItems[2]) {
                const feat2 = arsenalItems[2];
                const feat2BgContainer = feat2.querySelector('.feat-voice-bg');

                gsap.fromTo(feat2,
                    {
                        scale: 0.85,
                        opacity: 0,
                        borderRadius: '4rem',
                        filter: 'blur(15px) brightness(0.5)',
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        borderRadius: '0rem',
                        filter: 'blur(0px) brightness(1)',
                        duration: 2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: feat2,
                            start: "top 85%",
                            end: "top 35%",
                            scrub: 1,
                        }
                    }
                );

                // Parallax on the background image inside
                if (feat2BgContainer) {
                    const feat2Img = feat2BgContainer.querySelector('img');
                    if (feat2Img) {
                        gsap.to(feat2Img, {
                            yPercent: 10,
                            scale: 1.15,
                            ease: "none",
                            scrollTrigger: { trigger: feat2, start: "top bottom", end: "bottom top", scrub: 1 }
                        });
                    }
                }

                // Stagger the stat badges in from the right
                const statBadges = feat2.querySelectorAll('.feat-voice-stats > div');
                if (statBadges.length) {
                    gsap.fromTo(statBadges,
                        { x: 60, opacity: 0, scale: 0.8 },
                        {
                            x: 0, opacity: 1, scale: 1,
                            duration: 1, stagger: 0.2, ease: "back.out(1.7)",
                            scrollTrigger: { trigger: feat2, start: "top 50%" }
                        }
                    );
                }
            }

            // --- 3d. Feature 3 (Neural Backbone): Stagger depth emergence ---
            if (arsenalItems[3]) {
                const feat3 = arsenalItems[3];
                const feat3Header = feat3.children[0];
                const feat3Image = feat3.children[1] || feat3.lastElementChild;

                // Header content fades up with 3D tilt
                if (feat3Header) {
                    gsap.fromTo(feat3Header,
                        { y: 80, opacity: 0, rotateX: 10, transformOrigin: 'center bottom' },
                        {
                            y: 0, opacity: 1, rotateX: 0,
                            duration: 1.5, ease: "power3.out",
                            scrollTrigger: { trigger: feat3, start: "top 80%" }
                        }
                    );
                }

                // Cinematic image: clip-path reveal from center outward
                if (feat3Image) {
                    gsap.fromTo(feat3Image,
                        {
                            clipPath: 'inset(15% 30% 15% 30% round 2rem)',
                            opacity: 0.3,
                            scale: 1.1,
                        },
                        {
                            clipPath: 'inset(0% 0% 0% 0% round 2rem)',
                            opacity: 1,
                            scale: 1,
                            duration: 2,
                            ease: "power2.inOut",
                            scrollTrigger: {
                                trigger: feat3Image,
                                start: "top 85%",
                                end: "top 30%",
                                scrub: 1,
                            }
                        }
                    );

                    // Parallax on image
                    gsap.to(feat3Image.querySelector('img'), {
                        yPercent: 12,
                        ease: "none",
                        scrollTrigger: { trigger: feat3Image, start: "top bottom", end: "bottom top", scrub: 1 }
                    });
                }
            }

            // Ambient orb float on scroll
            gsap.utils.toArray('.feat-arsenal-sec > div:not([style*="maxWidth"])').forEach((orb, i) => {
                if (orb.style.pointerEvents === 'none') {
                    gsap.to(orb, {
                        yPercent: i % 2 === 0 ? -30 : 30,
                        xPercent: i % 2 === 0 ? 10 : -10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: '.feat-arsenal-sec',
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5
                        }
                    });
                }
            });


            // ══════════════════════════════════════════════
            // 4. UGC ENGINE — Curtain Wipe + Typewriter Stagger
            // ══════════════════════════════════════════════

            // Section header: vertical split reveal
            const ugcSec = document.querySelector('.ugc-list');
            if (ugcSec) {
                const ugcParent = ugcSec.closest('section');
                const ugcHeader = ugcParent?.querySelector('.mb-24');

                if (ugcHeader) {
                    gsap.fromTo(ugcHeader,
                        { y: 100, opacity: 0, filter: 'blur(15px)' },
                        {
                            y: 0, opacity: 1, filter: 'blur(0px)',
                            duration: 1.5, ease: "power3.out",
                            scrollTrigger: { trigger: ugcHeader, start: "top 85%" }
                        }
                    );
                }
            }

            // Each UGC row: horizontal curtain wipe with stagger
            const ugcRows = gsap.utils.toArray('.ugc-row');
            ugcRows.forEach((row, i) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 88%",
                    }
                });

                // Clip-path curtain reveal from left
                tl.fromTo(row,
                    {
                        clipPath: 'inset(0 100% 0 0)',
                        opacity: 0,
                    },
                    {
                        clipPath: 'inset(0 0% 0 0)',
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.inOut",
                    }
                );

                // Then slide the content slightly
                const number = row.querySelector('span');
                const title = row.querySelector('h3');
                const desc = row.querySelector('p');

                if (number) {
                    tl.fromTo(number, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" }, "-=0.6");
                }
                if (title) {
                    tl.fromTo(title, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");
                }
                if (desc) {
                    tl.fromTo(desc, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
                }
            });


            // ══════════════════════════════════════════════
            // 5. COMPARISON & METRICS — Perspective Fold + Bar Fill
            // ══════════════════════════════════════════════

            // Comparison table header
            const compWrap = document.querySelector('.comp-table-wrap');
            if (compWrap) {
                const compLabel = compWrap.querySelector('.lux-label');
                const compH2 = compWrap.querySelector('h2');

                if (compLabel) {
                    gsap.fromTo(compLabel,
                        { x: -40, opacity: 0 },
                        { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: compWrap, start: "top 85%" } }
                    );
                }
                if (compH2) {
                    gsap.fromTo(compH2,
                        { y: 60, opacity: 0, filter: 'blur(8px)' },
                        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: compWrap, start: "top 80%" } }
                    );
                }
            }

            // Each comparison row: 3D fold-down reveal
            const compRows = gsap.utils.toArray('.comp-row');
            compRows.forEach((row, i) => {
                gsap.fromTo(row,
                    {
                        rotateX: -60,
                        opacity: 0,
                        transformOrigin: 'top center',
                        filter: 'blur(4px)',
                    },
                    {
                        rotateX: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 92%",
                        },
                        delay: i * 0.08,
                    }
                );
            });

            // Performance card: scale + glow entrance
            const perfCard = document.querySelector('.features-main .comp-table-wrap')?.closest('div')?.querySelector('.flex-1.w-full');
            if (perfCard) {
                gsap.fromTo(perfCard,
                    { scale: 0.85, opacity: 0, y: 60, filter: 'blur(10px)' },
                    {
                        scale: 1, opacity: 1, y: 0, filter: 'blur(0px)',
                        duration: 1.5, ease: "power3.out",
                        scrollTrigger: { trigger: perfCard, start: "top 85%" }
                    }
                );

                // Animate progress bars filling on scroll
                const bars = perfCard.querySelectorAll('[style*="width"]');
                bars.forEach(bar => {
                    const targetWidth = bar.style.width;
                    gsap.fromTo(bar,
                        { width: '0%' },
                        {
                            width: targetWidth,
                            duration: 2,
                            ease: "power2.out",
                            scrollTrigger: { trigger: bar, start: "top 90%" }
                        }
                    );
                });
            }

        }, mainRef);
        return () => ctx.revert()
    }, [])

    return (
        <main className="features-main bg-[#050505] text-white" ref={mainRef}>

            {/* ═════════ 1. LUXURY HERO ═════════ */}
            <section className="lux-section lux-dark relative flex items-center justify-center pt-48 pb-24 min-h-[95vh] feat-hero-section overflow-hidden bg-black w-full">
                <div className="absolute inset-0 z-0">
                    <img
                        src={teachingTech}
                        alt="YovoAI Environment"
                        className="feat-bg-zoom object-cover w-full h-full absolute inset-0 filter brightness-[0.4] saturate-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000]/50 via-transparent to-[#050505]" />
                </div>

                <div className="lux-container relative z-10 text-center max-w-6xl w-full mx-auto feat-parallax-group px-6 flex flex-col items-center">
                    <div className="feat-text-elem text-center w-full">
                        <span className="lux-label text-white/50 mb-10 border-white/20 inline-block font-medium tracking-[0.2em] relative z-10">
                            Platform Features
                        </span>
                    </div>

                    <div className="feat-text-elem w-full flex justify-center text-center">
                        <h1 className="text-white font-heading font-light tracking-tighter leading-[1.0] text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] mb-8 w-full block">
                            Every tool. <br />
                            <span className="feat-gradient-text feat-gradient-text--amber italic font-normal pr-6 pb-2">One platform.</span>
                        </h1>
                    </div>

                    <div className="feat-text-elem text-center w-full flex justify-center">
                        <p className="text-white/70 mx-auto mt-8 text-xl md:text-2xl lg:text-3xl max-w-4xl leading-relaxed font-light inline-block">
                            Deep dive into the AI-powered features that make YovoAI the most comprehensive, elegant, and powerful UGC content engine in the world.
                        </p>
                    </div>

                    <div className="flex gap-6 justify-center mt-20 feat-text-elem flex-wrap w-full z-20 relative text-center">
                        <Link to="/for-brands" className="lux-btn-primary bg-white text-black hover:bg-gray-200 shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all font-medium px-12 py-5 text-lg">
                            Get Started
                        </Link>
                        <Link to="/for-creators" className="lux-btn-white bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all font-medium px-12 py-5 text-lg">
                            Join as Creator
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═════════ 2. THE PARADIGM SHIFT ═════════ */}
            <section className="lux-section feat-mask-sec relative h-auto md:min-h-screen py-32 flex items-center overflow-hidden bg-[#050505]">
                <div className="feat-mask-wrapper absolute inset-0 z-0 overflow-hidden">
                    <img src={visualDashbord} alt="Dashboard Detail" className="feat-image-parallax object-cover w-full h-[130%] absolute -top-[15%] left-0 filter brightness-[0.25] saturate-50" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="lux-container relative z-10 text-center max-w-5xl mx-auto feat-mask-trigger px-6">
                    <span className="lux-label text-white/50 feat-mask-stagger inline-block border-white/20 tracking-[0.2em] mb-6">The Paradigm Shift</span>
                    <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-heading font-light text-white feat-mask-stagger mt-6 mb-10 tracking-tighter leading-none">
                        Creation <br /><span className="feat-gradient-text feat-gradient-text--pink italic font-normal">reimagined.</span>
                    </h2>
                    <p className="lux-desc text-white/80 mx-auto mt-12 feat-mask-stagger text-2xl lg:text-4xl font-light leading-[1.5]">
                        We eliminated the bottlenecks of traditional video production. YovoAI turns raw authenticity into viral impact at the speed of thought.
                    </p>
                    <div className="feat-mask-stagger mt-20 inline-block text-left w-full max-w-3xl">
                        <p className="text-white mx-auto font-light border-l-4 border-orange-500 pl-8 text-xl lg:text-2xl bg-black/40 p-10 rounded-r-[2rem] backdrop-blur-md shadow-2xl leading-relaxed">
                            "The fastest engine from voice to viral impact. No compromises on quality, no sacrifice of authenticity. This is the future of storytelling."
                        </p>
                    </div>
                </div>
            </section>

            {/* ═════════ 3. THE AI ARSENAL — Premium Redesign ═════════ */}
            <section className="feat-arsenal-sec" style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#070707',
                padding: '10rem 1.5rem',
            }}>
                {/* Ambient glowing orbs */}
                <div style={{ position: 'absolute', top: '5%', left: '-15%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(244,63,94,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
                <div style={{ position: 'absolute', bottom: '10%', right: '-15%', width: '55vw', height: '55vw', background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
                <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)', pointerEvents: 'none', zIndex: 0 }} />

                <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10, padding: '0 1.5rem' }}>

                    {/* ── SECTION HEADER ── */}
                    <div className="arsenal-anim" style={{ textAlign: 'center', marginBottom: '12rem' }}>
                        {/* Decorative line */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ width: '4rem', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5))' }} />
                            <span style={{
                                display: 'inline-block',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.4)',
                                borderBottom: '1px solid rgba(255,255,255,0.15)',
                                paddingBottom: '0.25rem',
                                fontFamily: 'var(--f-body)',
                            }}>The AI Arsenal</span>
                            <div style={{ width: '4rem', height: '1px', background: 'linear-gradient(90deg, rgba(244,63,94,0.5), transparent)' }} />
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                            fontFamily: 'var(--f-heading)',
                            fontWeight: 300,
                            color: '#ffffff',
                            letterSpacing: '-0.04em',
                            lineHeight: 0.9,
                            marginTop: '1.5rem',
                        }}>
                            Intelligent by <br />
                            <span className="feat-gradient-text feat-gradient-text--rose" style={{ fontStyle: 'italic', fontWeight: 400 }}>design.</span>
                        </h2>
                        <p style={{
                            color: 'rgba(255,255,255,0.35)',
                            fontSize: '1.25rem',
                            fontWeight: 300,
                            maxWidth: '36rem',
                            margin: '3rem auto 0',
                            lineHeight: 1.7,
                            fontFamily: 'var(--f-body)',
                        }}>
                            Three core intelligences powering every pixel, every frame, every campaign.
                        </p>
                    </div>

                    {/* ── FEATURE CARDS CONTAINER ── */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem', width: '100%' }}>

                        {/* ════════ FEATURE 1: AI Video Engine ════════ */}
                        <div className="arsenal-anim" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
                            {/* Image Side */}
                            <div className="feat-card-img-1" style={{ position: 'relative', order: 1 }}>
                                <div style={{ position: 'absolute', inset: '-20%', background: 'radial-gradient(circle at center, rgba(96,165,250,0.12) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
                                <div style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    borderRadius: '2rem',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 60px rgba(96,165,250,0.08)',
                                }}>
                                    <img src={visualDashbord} alt="AI Video Engine" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block', transition: 'transform 1.5s cubic-bezier(0.16,1,0.3,1)', transform: 'scale(1.05)' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    />
                                    {/* Badge overlay */}
                                    <div style={{
                                        position: 'absolute', top: '2rem', left: '2rem',
                                        background: 'rgba(0,0,0,0.6)',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '9999px',
                                        padding: '0.5rem 1.25rem',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: 500,
                                        letterSpacing: '0.1em', textTransform: 'uppercase',
                                        fontFamily: 'var(--f-body)',
                                    }}>
                                        <Video size={14} style={{ color: '#60a5fa' }} /> AI-Powered
                                    </div>
                                </div>
                            </div>
                            {/* Content Side */}
                            <div style={{ order: 2 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-blue-400/30 bg-blue-400/10 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa] animate-pulse-soft"></div>
                                    </div>
                                    <div style={{ width: '3rem', height: '1px', background: 'rgba(96,165,250,0.4)' }} />
                                </div>
                                <h3 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                    fontFamily: 'var(--f-heading)',
                                    fontWeight: 300,
                                    color: '#fff',
                                    letterSpacing: '-0.03em',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.1,
                                }}>
                                    AI Video{' '}
                                    <span className="feat-gradient-text feat-gradient-text--cyan" style={{ fontStyle: 'italic' }}>Engine</span>
                                </h3>
                                <p style={{
                                    fontSize: '1.25rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    fontWeight: 300,
                                    lineHeight: 1.7,
                                    marginBottom: '3rem',
                                    maxWidth: '38rem',
                                    fontFamily: 'var(--f-body)',
                                }}>
                                    Transform raw footage into polished, brand-aligned content. Our AI understands composition, pacing, and storytelling natively.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                    {['Auto-editing & transitions', 'Brand overlay injection', 'Multi-format export', 'Trend-aware styling'].map((cap, j) => (
                                        <div key={j} style={{
                                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                                            color: 'rgba(255,255,255,0.7)',
                                            fontWeight: 300,
                                            fontSize: '1rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            padding: '1rem 1.25rem',
                                            borderRadius: '1rem',
                                            fontFamily: 'var(--f-body)',
                                            transition: 'all 0.4s ease',
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(96,165,250,0.08)'; e.currentTarget.style.borderColor = 'rgba(96,165,250,0.2)' }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
                                        >
                                            <Sparkles size={14} style={{ color: '#60a5fa', flexShrink: 0 }} /> {cap}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ════════ FEATURE 2: Voice Intelligence ════════ */}
                        <div className="arsenal-anim" style={{ position: 'relative', width: '100%', minHeight: '32rem' }}>
                            {/* Background Image */}
                            <div className="feat-voice-bg" style={{
                                position: 'relative',
                                width: '100%',
                                borderRadius: '2.5rem',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.06)',
                            }}>
                                <img src={usingTech} alt="Voice AI" style={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'grayscale(0.7) brightness(0.35)',
                                    transition: 'filter 2s ease',
                                }}
                                    onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0) brightness(0.4)'}
                                    onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(0.7) brightness(0.35)'}
                                />
                                {/* Dark overlay gradient */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)',
                                }} />

                                {/* Content overlay */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    display: 'flex', flexDirection: 'column',
                                    padding: 'clamp(2rem, 5vw, 4rem)',
                                    justifyContent: 'center',
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '36rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                                            <div className="flex items-center justify-center w-12 h-12 border border-orange-500/30 bg-orange-500/10 rotate-45 shrink-0">
                                                <div className="w-2 h-2 bg-orange-500 shadow-[0_0_15px_#f97316] animate-pulse-soft"></div>
                                            </div>
                                            <div style={{ width: '3rem', height: '1px', background: 'rgba(249,115,22,0.4)' }} />
                                        </div>
                                        <AudioWaveform size={40} style={{ color: '#f97316', marginBottom: '1.5rem' }} strokeWidth={1} />
                                        <h3 style={{
                                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                            fontFamily: 'var(--f-heading)',
                                            fontWeight: 300,
                                            color: '#fff',
                                            letterSpacing: '-0.03em',
                                            marginBottom: '1.5rem',
                                            lineHeight: 1.1,
                                        }}>
                                            Voice <br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>Intelligence</span>
                                        </h3>
                                        <p style={{
                                            fontSize: '1.125rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            fontWeight: 300,
                                            lineHeight: 1.7,
                                            marginBottom: '2.5rem',
                                            fontFamily: 'var(--f-body)',
                                        }}>
                                            Advanced voice synthesis and analysis that identifies authentic creator voices and amplifies their impact dynamically.
                                        </p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0rem' }}>
                                            {['Nuance & tone analysis', 'Audience resonance scoring', 'Multi-language synthesis'].map((cap, j) => (
                                                <div key={j} style={{
                                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                                    color: 'rgba(255,255,255,0.75)',
                                                    fontWeight: 300,
                                                    fontSize: '1.1rem',
                                                    padding: '1.25rem 0',
                                                    borderBottom: j < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                                    fontFamily: 'var(--f-body)',
                                                }}>
                                                    <span style={{
                                                        width: '2rem', height: '2rem',
                                                        borderRadius: '50%',
                                                        border: '1px solid rgba(249,115,22,0.3)',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        color: '#f97316', fontSize: '0.75rem', flexShrink: 0,
                                                    }}>✓</span>
                                                    {cap}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right-side decorative stats */}
                                <div className="feat-voice-stats" style={{
                                    position: 'absolute', bottom: 'clamp(2rem, 5vw, 4rem)', right: 'clamp(2rem, 5vw, 4rem)',
                                    display: 'flex', flexDirection: 'column', gap: '1rem',
                                    alignItems: 'flex-end',
                                }}>
                                    {[
                                        { label: 'Voice Match', val: '99.2%' },
                                        { label: 'Languages', val: '40+' },
                                    ].map((s, i) => (
                                        <div key={i} style={{
                                            background: 'rgba(0,0,0,0.5)',
                                            backdropFilter: 'blur(20px)',
                                            WebkitBackdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '1rem',
                                            padding: '1rem 1.5rem',
                                            textAlign: 'right',
                                        }}>
                                            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem', fontFamily: 'var(--f-body)' }}>{s.label}</div>
                                            <div style={{ fontSize: '1.5rem', fontFamily: 'var(--f-heading)', fontWeight: 300, color: '#fff', letterSpacing: '-0.02em' }}>{s.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ════════ FEATURE 3: Neural Backbone ════════ */}
                        <div className="arsenal-anim" style={{ width: '100%' }}>
                            {/* Header */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 300px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg border border-rose-500/30 bg-rose-500/10 shrink-0">
                                            <div className="w-1 h-3 rounded-full bg-rose-500 shadow-[0_0_15px_#f43f5e] animate-pulse-soft"></div>
                                        </div>
                                        <div style={{ width: '3rem', height: '1px', background: 'rgba(244,63,94,0.4)' }} />
                                    </div>
                                    <BrainCircuit size={40} style={{ color: '#f43f5e', marginBottom: '1.5rem' }} strokeWidth={1} />
                                    <h3 style={{
                                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                        fontFamily: 'var(--f-heading)',
                                        fontWeight: 300,
                                        color: '#fff',
                                        letterSpacing: '-0.04em',
                                        lineHeight: 1,
                                        marginBottom: '1.5rem',
                                    }}>
                                        The Neural <br />
                                        <span className="feat-gradient-text feat-gradient-text--rose-orange" style={{ fontStyle: 'italic', fontWeight: 400 }}>Backbone.</span>
                                    </h3>
                                    <p style={{
                                        fontSize: '1.15rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        fontWeight: 300,
                                        lineHeight: 1.7,
                                        maxWidth: '30rem',
                                        fontFamily: 'var(--f-body)',
                                    }}>
                                        Proprietary models processing, optimizing, and enhancing raw human creativity in real-time.
                                    </p>
                                </div>
                                {/* Performance metrics cards */}
                                <div style={{ flex: '1 1 300px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                    {[
                                        { label: 'Processing Speed', value: '< 2s', icon: <Gauge size={18} style={{ color: '#f43f5e' }} strokeWidth={1.5} /> },
                                        { label: 'Model Accuracy', value: '99.4%', icon: <Eye size={18} style={{ color: '#fb923c' }} strokeWidth={1.5} /> },
                                        { label: 'Daily Ops', value: '10M+', icon: <TrendingUp size={18} style={{ color: '#fbbf24' }} strokeWidth={1.5} /> },
                                    ].map((m, i) => (
                                        <div key={i} style={{
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            borderRadius: '1.25rem',
                                            padding: '1.5rem 1.25rem',
                                            textAlign: 'center',
                                            transition: 'all 0.5s ease',
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}
                                        >
                                            <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{m.icon}</div>
                                            <div style={{
                                                fontFamily: 'var(--f-heading)',
                                                fontSize: '1.75rem',
                                                fontWeight: 300,
                                                color: '#fff',
                                                letterSpacing: '-0.03em',
                                                marginBottom: '0.5rem',
                                            }}>{m.value}</div>
                                            <div style={{
                                                fontSize: '0.65rem',
                                                color: 'rgba(255,255,255,0.3)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                fontWeight: 500,
                                                fontFamily: 'var(--f-body)',
                                            }}>{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Cinematic Image */}
                            <div style={{
                                width: '100%',
                                position: 'relative',
                                borderRadius: '2rem',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.06)',
                                boxShadow: '0 40px 100px -20px rgba(0,0,0,0.6)',
                            }}>
                                <img src={techStyleDash} alt="Neural Backbone" style={{
                                    width: '100%',
                                    aspectRatio: '21/9',
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'saturate(0.5)',
                                    transition: 'filter 2s ease, transform 2s ease',
                                    transform: 'scale(1.05)',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.filter = 'saturate(1.1)'; e.currentTarget.style.transform = 'scale(1)' }}
                                    onMouseLeave={e => { e.currentTarget.style.filter = 'saturate(0.5)'; e.currentTarget.style.transform = 'scale(1.05)' }}
                                />
                                {/* Bottom gradient overlay with tech labels */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                                    padding: 'clamp(2rem, 4vw, 4rem)',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                                    flexWrap: 'wrap', gap: '2rem',
                                }}>
                                    {['Deep Learning Models', 'Real-time Compute', 'Trend Prediction'].map((cap, j) => (
                                        <div key={j} style={{
                                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                                            color: '#fff', fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)', fontWeight: 300,
                                            fontFamily: 'var(--f-body)',
                                        }}>
                                            <Gauge style={{ color: '#f43f5e' }} strokeWidth={1} size={22} /> {cap}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═════════ 4. UGC ENGINE (Typography Timeline) ═════════ */}
            <section className="lux-section bg-[#050505] py-40 border-t border-white/5 relative text-white overflow-hidden">
                <div className="lux-container max-w-7xl mx-auto z-10 relative px-6">
                    <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
                        <div>
                            <span className="lux-label border-white/20 text-white/50 tracking-[0.2em]">Ecosystem</span>
                            <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-heading font-light tracking-tighter mt-6 leading-[0.9]">
                                Content <br /><span className="feat-gradient-text feat-gradient-text--orange-rose font-normal italic pr-2">Engine.</span>
                            </h2>
                        </div>
                        <p className="text-xl text-white/50 font-light max-w-md pb-4 leading-relaxed">
                            No fragmented tools. Everything required to source, enhance, and publish user generated content sits natively right here.
                        </p>
                    </div>

                    <div className="flex flex-col w-full border-t border-white/10 ugc-list">
                        {ugcFeatures.map((item, i) => (
                            <div key={i} className="ugc-row relative w-full py-12 lg:py-16 border-b border-white/10 group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                                <div className="flex items-center gap-10 lg:gap-16 relative z-10 w-full lg:w-auto mt-2">
                                    <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 relative text-white/10 group-hover:text-orange-500 transition-colors duration-700 shrink-0">
                                        <span className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t border-l border-current transition-all duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
                                        <span className="absolute top-0 right-0 w-2 h-2 md:w-3 md:h-3 border-t border-r border-current transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                                        <span className="absolute bottom-0 left-0 w-2 h-2 md:w-3 md:h-3 border-b border-l border-current transition-all duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></span>
                                        <span className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b border-r border-current transition-all duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                                        <div className="w-2 h-2 rounded-full bg-current opacity-30 group-hover:opacity-100 group-hover:shadow-[0_0_15px_current] transition-all duration-700"></div>
                                    </div>
                                    <h3 className="text-3xl lg:text-5xl font-heading font-light tracking-tight group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-700 origin-left">{item.title}</h3>
                                </div>
                                <p className="text-xl lg:text-2xl text-white/40 font-light leading-relaxed max-w-2xl lg:text-right group-hover:text-white/80 transition-colors duration-700 relative z-10">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═════════ 5. COMPARISON & METRICS Typography Grid ═════════ */}
            <section className="lux-section bg-[#050505] py-40 flex flex-col items-center">
                <div className="lux-container w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 px-6 relative z-10">

                    <div className="flex-[1.5] w-full comp-table-wrap">
                        <span className="lux-label border-white/20 text-white/50 tracking-[0.2em] mb-4">Advantage</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight mt-6 mb-16">How we stack up</h2>

                        <div className="flex flex-col w-full border-t border-white/10">
                            <div className="flex justify-between py-6 border-b border-white/10 text-white/30 uppercase tracking-[0.2em] text-sm font-medium">
                                <div className="flex-[1.5]">Capability</div>
                                <div className="flex-1 text-orange-500">YovoAI</div>
                                <div className="flex-1 hidden md:block">Traditional</div>
                            </div>

                            {comparisonData.map((row, i) => (
                                <div key={i} className="comp-row flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-12 border-b border-white/10 group hover:bg-white/[0.02] transition-colors rounded-xl px-4 -mx-4">
                                    <div className="flex-[1.5] text-3xl font-light text-white mb-4 md:mb-0 group-hover:translate-x-2 transition-transform duration-500">{row.feature}</div>
                                    <div className="flex-1 text-2xl font-light text-orange-400 flex items-center gap-4 mb-2 md:mb-0">
                                        <CheckCircle size={24} strokeWidth={1.5} /> {row.yovo}
                                    </div>
                                    <div className="flex-1 hidden md:block text-2xl font-light text-white/30">{row.traditional}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:mt-32">
                        <div className="bg-[#0a0a0a] rounded-[3rem] p-12 lg:p-16 text-white shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-96 h-96 bg-rose-500/10 blur-[80px] rounded-full group-hover:scale-150 group-hover:bg-orange-500/10 transition-all duration-[3s]"></div>
                            <Compass size={40} className="text-rose-500 mb-8 opacity-70" strokeWidth={1} />
                            <h3 className="text-4xl lg:text-5xl font-heading font-light tracking-tight mb-16 relative z-10">Peak <br /><span className="italic font-normal">Performance</span></h3>

                            <div className="flex flex-col gap-10 relative z-10">
                                {performanceMetrics.map((m, i) => (
                                    <div key={m.label} className="group/item">
                                        <div className="flex justify-between mb-5 text-sm uppercase tracking-widest font-medium text-white/50 group-hover/item:text-white/80 transition-colors">
                                            <span>{m.label}</span>
                                            <span className="text-white font-mono text-base">{m.value}%</span>
                                        </div>
                                        <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
                                            <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 to-rose-500 transition-all duration-[1.5s]" style={{ width: `${m.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}
