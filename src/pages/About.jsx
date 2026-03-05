import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowRight, Eye, Lightbulb, Rocket, Heart, Globe2, Zap,
    CheckCircle, Target, Brain, Sparkles, UserCog,
    Activity, ShieldCheck, Crown, BadgeCheck, HeartHandshake,
    LineChart
} from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import './About.css'
import './HomeLux.css'
import aboutBg from '../assets/images/fpkdl.com_960_1771655178_coworking-space-office-sharing-desk-corporate-workplace-diversity-efficiency-modern-work_926199-2735151.jpg'
import contentReading from '../assets/images/contentReading.jpg'
import stillLife from '../assets/images/stillLife.png'

gsap.registerPlugin(ScrollTrigger)

const aiPhilosophy = [
    { icon: <Brain size={24} />, title: 'Contextual Intelligence', desc: 'Our AI understands cultural context, brand nuance, and audience psychology — not just keywords.', accent: '#f94b6e' },
    { icon: <UserCog size={24} />, title: 'Human-in-the-Loop', desc: 'Every AI suggestion is a starting point. Creators always have the final say on their content.', accent: '#e01111' },
    { icon: <Activity size={24} />, title: 'Real-Time Adaptation', desc: 'Our models learn continuously from engagement patterns to make each piece of content better.', accent: '#ff8902' },
    { icon: <ShieldCheck size={24} />, title: 'Ethical AI', desc: 'Transparent algorithms, fair creator compensation, and zero exploitation. Our AI has principles.', accent: '#f97316' },
    { icon: <Globe2 size={24} />, title: 'Cultural Sensitivity', desc: 'Built-in understanding of regional nuances, languages, and cultural contexts for global reach.', accent: '#fbbf24' },
    { icon: <Crown size={24} />, title: 'Creator Empowerment', desc: 'AI tools designed to make creators better — not dependencies, but superpowers.', accent: '#ea580c' },
]

const values = [
    { icon: <BadgeCheck size={24} />, title: 'Authenticity First', desc: 'We believe in the power of real voices. Every piece of content should feel genuine, not manufactured.', accent: '#f94b6e' },
    { icon: <Lightbulb size={24} />, title: 'Innovation Always', desc: 'We push boundaries with AI that understands culture, context, and the nuances of human communication.', accent: '#ff8902' },
    { icon: <HeartHandshake size={24} />, title: 'Community Centered', desc: 'We build for communities, not just companies. When creators thrive, brands follow.', accent: '#fbbf24' },
    { icon: <Globe2 size={24} />, title: 'Global Vision', desc: "Every voice matters, everywhere. We're building a platform that transcends borders and languages.", accent: '#f97316' },
    { icon: <Zap size={24} />, title: 'Speed of Culture', desc: 'Content moves fast. Our AI moves faster — adapting in real time to trends and conversations.', accent: '#e01111' },
    { icon: <LineChart size={24} />, title: 'Results Driven', desc: 'Beautiful content means nothing without results. Every feature drives measurable impact.', accent: '#ea580c' },
]

const roadmap = [
    { phase: 'Phase 1', title: 'Foundation', status: 'completed', items: ['UGC platform launch', 'Creator onboarding', 'Brand campaign engine', 'Analytics dashboard'] },
    { phase: 'Phase 2', title: 'AI Integration', status: 'current', items: ['AI content enhancement', 'Smart creator matching', 'Automated distribution', 'Performance prediction'] },
    { phase: 'Phase 3', title: 'Scale', status: 'upcoming', items: ['Multi-language AI', 'Enterprise API', 'Global creator network', 'Advanced AI models'] },
    { phase: 'Phase 4', title: 'Next Frontier', status: 'upcoming', items: ['Voice-first creation', 'AR/VR content', 'AI brand agents', 'Decentralized UGC'] },
]

export default function About() {
    const mainRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ════════ 1. LUXURY HERO ANIMATIONS ════════
            // Cinematic background load
            gsap.fromTo('.hero-bg-zoom',
                { scale: 1.2, filter: 'blur(20px)', opacity: 0 },
                { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 2.5, ease: "power4.out" }
            );

            // Staggered premium text reveal
            gsap.fromTo('.hero-text-elem',
                { y: 60, opacity: 0, rotationX: -30, filter: 'blur(10px)' },
                { y: 0, opacity: 1, rotationX: 0, filter: 'blur(0px)', duration: 1.8, stagger: 0.2, ease: "power3.out", delay: 0.3 }
            );

            // Custom parallax for hero text on scroll
            gsap.to('.hero-parallax-group', {
                yPercent: 40,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // ════════ 2. VISION / MISSION (SPLIT BLOCK) ════════
            gsap.fromTo('.vision-block',
                { x: -100, opacity: 0, filter: 'blur(10px)' },
                { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: '.vision-mission-sec', start: "top 80%" } }
            );
            gsap.fromTo('.mission-block',
                { x: 100, opacity: 0, filter: 'blur(10px)' },
                { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: '.vision-mission-sec', start: "top 80%" } }
            );

            // ════════ 3. THE GAP / FOUNDER'S PERSPECTIVE ════════
            // Masked Image Reveal
            gsap.fromTo('.gap-mask-wrapper',
                { clipPath: 'inset(20% 15% 20% 15% round 40px)' },
                {
                    clipPath: 'inset(0% 0% 0% 0% round 0px)',
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: '.gap-sec',
                        start: "top bottom",
                        end: "center center",
                        scrub: 1
                    }
                }
            );

            // Cinematic text fade & scale
            gsap.fromTo('.gap-stagger',
                { y: 80, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: '.gap-stagger-trigger',
                        start: "top 80%"
                    }
                }
            );

            // Image internal parallax
            gsap.fromTo('.gap-image-parallax',
                { yPercent: -15, scale: 1.1 },
                { yPercent: 15, ease: "none", scrollTrigger: { trigger: '.gap-sec', start: "top bottom", end: "bottom top", scrub: true } }
            );

            // ════════ 4. AI PHILOSOPHY ════════
            // Sticky Left Side glowing text fade
            gsap.fromTo('.phil-left-elem',
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: '.phil-trigger', start: "top 70%" } }
            );

            // Scroll Rotating Cards
            const philItems = gsap.utils.toArray('.phil-item');
            philItems.forEach((item, i) => {
                gsap.fromTo(item,
                    { opacity: 0, x: 120, rotationY: 25, transformOrigin: 'left center' },
                    {
                        opacity: 1, x: 0, rotationY: 0, duration: 1.4, ease: "power4.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        }
                    }
                );
            });

            // ════════ 5. CORE DNA ════════
            gsap.fromTo('.core-title',
                { opacity: 0, y: 50, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.core-title', start: "top 85%" } }
            );

            const coreCards = gsap.utils.toArray('.core-card');
            gsap.fromTo(coreCards,
                { y: 150, opacity: 0, scale: 0.85, rotationX: 45 },
                {
                    y: 0, opacity: 1, scale: 1, rotationX: 0,
                    duration: 1.4, stagger: 0.12, ease: "back.out(1.1)",
                    scrollTrigger: { trigger: '.core-grid', start: "top 75%" }
                }
            );

            // ════════ 6. ROADMAP ════════
            gsap.fromTo('.roadmap-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: '.roadmap-title', start: "top 90%" } });

            // Draw central line
            gsap.fromTo('.roadmap-line',
                { scaleX: 0, transformOrigin: 'left center' },
                { scaleX: 1, ease: "none", scrollTrigger: { trigger: '.roadmap-grid', start: "top 80%", end: "right center", scrub: 1 } }
            );

            const roadmapCards = gsap.utils.toArray('.roadmap-card');
            gsap.fromTo(roadmapCards,
                { y: 80, opacity: 0, filter: 'blur(8px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: '.roadmap-grid', start: "top 75%" } }
            );

            // ════════ 7. THE FUTURE ════════
            // Advanced Shape Transformation
            gsap.fromTo('.future-img-box',
                { scale: 0.8, rotation: -3, borderRadius: '50% 10% 40% 10%' },
                { scale: 1, rotation: 0, borderRadius: '24px', duration: 1.8, ease: "elastic.out(1, 0.7)", scrollTrigger: { trigger: '.future-sec', start: "top 75%" } }
            );

            gsap.fromTo('.future-img-box img',
                { scale: 1.5 },
                { scale: 1, duration: 2.5, ease: "power4.out", scrollTrigger: { trigger: '.future-sec', start: "top 75%" } }
            );

            gsap.fromTo('.future-text-stagger',
                { opacity: 0, x: -60 },
                { opacity: 1, x: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: '.future-text-block', start: "top 80%" } }
            );

        }, mainRef);
        return () => ctx.revert()
    }, [])

    return (
        <main className="about-main" ref={mainRef}>

            {/* ════════════ LUXURY HERO ════════════ */}
            <section className="lux-section lux-dark relative flex items-center pt-48 pb-24 min-h-[90vh] hero-section overflow-hidden">
                <div className="lux-value-bg">
                    <img src={aboutBg} alt="Background" className="hero-bg-zoom filter brightness-50 saturate-50 object-cover w-full h-full absolute inset-0" />
                    <div className="lux-bg-overlay bg-gradient-to-b from-black/80 to-black/30 absolute inset-0" />
                </div>
                <div className="lux-container relative z-10 text-center max-w-5xl mx-auto hero-parallax-group">
                    <span className="lux-label text-white/60 mb-8 border-white/30 hero-text-elem inline-block">Our Story</span>
                    <h1 className="text-white font-heading font-light tracking-tighter leading-none text-6xl md:text-8xl lg:text-[10rem] mb-6 hero-text-elem block">
                        The Future of <br />
                        <span className="lux-gradient italic font-normal inline-block hero-text-elem">Voice.</span>
                    </h1>
                    <p className="lux-desc text-white/70 mx-auto mt-12 text-xl md:text-2xl max-w-3xl leading-relaxed hero-text-elem">
                        YovoAI was born from a simple truth: the most powerful marketing doesn't come from brands — it comes from people. We're on a mission to give every voice the technology to be heard, remembered, and amplified.
                    </p>
                </div>
            </section>

            {/* ════════════ LUXURY ABOUT DESIGN ════════════ */}

            {/* Vision / Mission Cinematic Wide Cards Style */}
            <section className="lux-section lux-dark vision-mission-sec">
                <div className="lux-container lux-split">
                    <div className="vision-block">
                        <span className="lux-label">Our Vision</span>
                        <h2 className="lux-heading leading-tight">Empowering <span className="lux-gradient">Every</span><br />Authentic Voice</h2>
                        <p className="lux-desc">A world where every authentic voice has the power to shape culture, drive commerce, and build communities — powered by AI that elevates human creativity. We envision a future where brands don't broadcast messages — they inspire movements.</p>
                    </div>

                    <div className="mission-block border-l border-white/10 pl-8 md:pl-16">
                        <span className="lux-label">Our Mission</span>
                        <h2 className="lux-heading leading-tight">Making the <span className="lux-gradient">Unstoppable</span></h2>
                        <p className="lux-desc">To democratize content creation by building the most powerful AI-powered UGC platform — one that makes every brand story irresistible and every creator unstoppable. We're creating an ecosystem where creators earn, brands grow, and communities flourish.</p>
                    </div>
                </div>
            </section>

            {/* The Gap (Cinematic Full Width Image Block) */}
            <section className="lux-section gap-sec relative h-auto md:min-h-screen py-32 flex items-center overflow-hidden">
                <div className="gap-mask-wrapper absolute inset-0 z-0 overflow-hidden">
                    <img src={contentReading} alt="Strategy" className="gap-image-parallax object-cover w-full h-[130%] absolute -top-[15%] left-0 filter brightness-50" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="lux-container relative z-10 text-center max-w-4xl mx-auto gap-stagger-trigger">
                    <span className="lux-label text-white/70 gap-stagger inline-block">Founder's Perspective</span>
                    <h2 className="lux-heading text-white gap-stagger mt-6 mb-8">"We saw the <span className="lux-italic lux-gradient">gap.</span><br />We built the <span className="lux-gradient">bridge."</span></h2>
                    <p className="lux-desc text-white/80 mx-auto mt-8 gap-stagger text-xl">
                        Brands were spending millions on polished ads that audiences scrolled past. Meanwhile, a creator with a smartphone was generating more trust and engagement organically. The disconnect was glaring.
                    </p>
                    <p className="lux-desc text-white/80 mx-auto mt-8 font-italic border-l-4 border-[#fbbf24] pl-6 text-left inline-block gap-stagger text-lg bg-black/20 p-6 rounded-r-xl backdrop-blur-sm">
                        "The best marketing doesn't look like marketing. It looks like a friend recommending something they love. That's what YovoAI enables — at scale."
                    </p>
                </div>
            </section>

            {/* ════════════ AI PHILOSOPHY ════════════ */}
            <section className="lux-section lux-dark relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                <div className="lux-container lux-philosophy-layout relative z-10 phil-trigger">
                    {/* Sticky Left Pillar */}
                    <div className="relative">
                        <div className="sticky top-40 lg:pr-12 pb-24">
                            <span className="lux-label border-white/20 text-white/50 tracking-[0.2em] mb-8 phil-left-elem block">AI Philosophy</span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light leading-[1.1] mb-8 tracking-tighter text-white phil-left-elem">
                                AI that amplifies,<br />not <span className="lux-gradient italic font-normal">replaces.</span>
                            </h2>
                            <p className="text-xl text-white/60 leading-relaxed font-light phil-left-elem">
                                We believe AI should make human creativity more powerful, not substitute it. Explore the tenets of our contextual engine.
                            </p>
                        </div>
                    </div>

                    {/* Scrolling Right Content */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingTop: '2rem' }}>
                        {aiPhilosophy.map((item, i) => (
                            <div key={i} className="phil-item relative group cursor-crosshair">
                                {/* Ambient Hover Glow */}
                                <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl rounded-[3rem] pointer-events-none" style={{ background: `radial-gradient(circle at center, ${item.accent}15 0%, transparent 70%)` }}></div>

                                <div className="relative z-10 border-t border-white/10 pt-10 pb-6 transition-all duration-700 group-hover:border-white/40 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="text-7xl md:text-8xl font-heading font-thin opacity-20 group-hover:opacity-60 transition-all duration-700 w-24 flex-shrink-0" style={{ color: item.accent }}>
                                        0{i + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl md:text-4xl font-heading font-light mb-4 text-white group-hover:translate-x-3 transition-transform duration-700">{item.title}</h3>
                                        <p className="text-lg text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-700 max-w-xl">{item.desc}</p>
                                    </div>
                                    {/* Minimal elegant icon representation */}
                                    <div className="hidden md:flex opacity-30 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-700 flex-shrink-0 w-16 h-16 items-center justify-center rounded-full border border-white/10" style={{ color: item.accent, backgroundColor: `${item.accent}10` }}>
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CORE DNA (Interactive Typography List) ════════════ */}
            <section className="lux-section lux-light relative bg-[#fafafa] overflow-hidden pt-32 pb-32">
                <div className="lux-container max-w-7xl mx-auto text-center md:text-left mb-20 md:mb-32 px-6 md:px-16 flex flex-col md:flex-row md:items-end justify-between gap-10 relative z-10 pt-16">
                    <div className="flex flex-col gap-6">
                        <span className="lux-label text-black/50 tracking-[0.2em] text-sm font-bold uppercase inline-block self-start border border-black/10 px-6 py-2 rounded-full">Our DNA</span>
                        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-light tracking-tight leading-[0.9] text-black m-0">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 font-normal italic pr-4">Principles</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-xl text-black/50 font-light hidden lg:block pb-4 leading-relaxed">
                        We don't fit into existing molds. These tenets guide every algorithm we write and every feature we launch.
                    </p>
                </div>

                <div className="w-full flex flex-col dna-list">
                    {values.map((v, i) => (
                        <div key={i} className="group relative w-full border-t border-black/10 last:border-b-0 overflow-hidden cursor-crosshair h-auto min-h-[160px] md:min-h-[220px] flex items-center transition-all duration-700">

                            {/* Hover Expansion Background Overlay - Slides in from bottom */}
                            <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 pointer-events-none"></div>

                            {/* Colorful glow burst on hover */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[120vw] group-hover:h-[120vw] opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-1000 ease-out rounded-full z-[1] pointer-events-none" style={{ backgroundColor: v.accent }}></div>

                            <div className="lux-container max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-12 gap-8 group-hover:text-white transition-colors duration-500">

                                {/* Left: Number & Title */}
                                <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                                    <span className="text-2xl md:text-3xl font-heading font-black text-black/20 group-hover:text-white/40 transition-colors duration-500">0{i + 1}</span>
                                    <h3 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-light tracking-tighter leading-none m-0 transform group-hover:-translate-y-2 group-hover:translate-x-4 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                                        {v.title}
                                    </h3>
                                </div>

                                {/* Right: Icon & Description (Revealed) */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full md:w-auto justify-end">
                                    <p className="text-lg md:text-xl font-light leading-relaxed max-w-sm opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[800ms] delay-100 ease-[cubic-bezier(0.76,0,0.24,1)] text-white/70">
                                        {v.desc}
                                    </p>
                                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-[800ms] delay-200 ease-[cubic-bezier(0.76,0,0.24,1)] flex-shrink-0" style={{ color: v.accent }}>
                                        <div className="scale-[1.5] md:scale-[2]">{v.icon}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════ THE JOURNEY (Asymmetrical Hollow Typography Layout) ════════════ */}
            <section className="lux-section lux-dark relative bg-[#050505] pt-32 pb-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.03),transparent_50%)] z-0"></div>

                <div className="lux-container max-w-7xl mx-auto text-left roadmap-title mb-32 relative z-10 px-6 md:px-16 pt-16">
                    <div className="flex flex-col gap-6">
                        <span className="lux-label text-white/40 tracking-[0.2em] text-sm uppercase inline-block font-sans font-medium border border-white/10 px-6 py-2 rounded-full self-start">Evolution & Roadmap</span>
                        <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-heading font-light tracking-tighter leading-[0.9] text-white m-0">
                            Where we're <br /><span className="lux-gradient italic font-normal tracking-tight">headed.</span>
                        </h2>
                    </div>
                </div>

                <div className="relative z-10 w-full flex flex-col roadmap-str pt-10">
                    {roadmap.map((phase, i) => (
                        <div key={i} className="group relative w-full border-t border-white/10 last:border-b py-24 md:py-32 flex flex-col md:flex-row items-center cursor-default hover:bg-white/[0.02] transition-colors duration-1000">

                            {/* Giant Hollow Number overlay strictly in background */}
                            <div className="absolute right-[5%] md:left-[5%] top-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-heading font-black leading-none text-transparent stroke-white opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-[60%] transition-all duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] select-none pointer-events-none z-0"
                                style={{ WebkitTextStroke: '2px rgba(255,255,255,1)' }}>
                                0{i + 1}
                            </div>

                            <div className="lux-container max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 px-6 md:px-16">

                                <div className="md:col-span-6 group-hover:-translate-x-4 transition-transform duration-700 ease-out flex flex-col justify-center">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className={`w-3 h-3 rounded-full transition-transform duration-500 group-hover:scale-[3] group-hover:animate-pulse ${phase.status === 'completed' ? 'bg-[#22c55e] shadow-[0_0_15px_#22c55e]' : phase.status === 'current' ? 'bg-[#f97316] shadow-[0_0_15px_#f97316]' : 'bg-white/20'}`}></div>
                                        <span className={`font-mono text-sm uppercase tracking-widest ${phase.status === 'completed' ? 'text-[#22c55e]' : phase.status === 'current' ? 'text-[#f97316]' : 'text-white/40'}`}>
                                            Phase {phase.phase}
                                        </span>
                                    </div>

                                    <h3 className="text-5xl md:text-7xl font-heading font-light tracking-tighter text-white m-0 leading-[1.1] pb-6 relative inline-block self-start">
                                        {phase.title}
                                        <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-1000 ease-out ${phase.status === 'completed' ? 'bg-[#22c55e]' : phase.status === 'current' ? 'bg-[#f97316]' : 'bg-white/20'}`}></div>
                                    </h3>
                                </div>

                                <div className="md:col-span-6 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                                    <ul className="flex flex-col gap-8 border-l border-white/10 pl-8 group-hover:border-white/30 transition-colors duration-700 relative before:absolute before:inset-y-0 before:-left-[1px] before:w-[2px] before:scale-y-0 group-hover:before:scale-y-100 before:transition-transform before:duration-1000 before:bg-gradient-to-b before:from-transparent before:via-white/50 before:to-transparent">
                                        {phase.items.map((item, j) => (
                                            <li key={j} className="text-xl md:text-2xl font-light text-white/50 group-hover:text-white/90 transition-all duration-500 transform group-hover:translate-x-3 mix-blend-screen leading-relaxed flex items-center gap-4" style={{ transitionDelay: `${j * 100}ms` }}>
                                                <span className="w-2 h-[1px] bg-white/30 block flex-shrink-0"></span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Future (Final Asymmetrical CTA Block) */}
            <section className="lux-section lux-light future-sec overflow-hidden bg-white">
                <div className="lux-container lux-split items-center">
                    <div className="future-text-block">
                        <span className="lux-label text-black/50 border-black/20 future-text-stagger block">The Future</span>
                        <h2 className="lux-heading leading-tight future-text-stagger">Tomorrow's <span className="lux-gradient">Content.</span><br />Today.</h2>
                        <p className="lux-desc mt-8 mb-12 future-text-stagger text-xl leading-relaxed text-black/70">
                            We're investing in voice-first AI, generative content engines, multilingual processing, and AR-enhanced UGC. The creator economy is worth $250B — and we're just getting started. YovoAI will be the operating system for the next generation of content.
                        </p>
                        <div className="flex gap-6 flex-wrap future-text-stagger">
                            <Link to="/features" className="lux-btn-primary px-10 py-5 text-lg rounded-full shadow-[0_15px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all">
                                Explore Features <ArrowRight size={18} />
                            </Link>
                            <Link to="/for-creators" className="lux-btn-white border border-black/10 px-10 py-5 text-lg rounded-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all bg-white text-black hover:bg-gray-50">
                                Join as Creator <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                    <div className="pl-0 lg:pl-16 mt-16 md:mt-0 w-full relative">
                        {/* Abstract background blobs for premium feel */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-400/10 blur-3xl rounded-full z-0 pointer-events-none"></div>
                        <div className="lux-cinematic-img future-img-box aspect-[4/5] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative z-10 w-full rounded-2xl">
                            <img src={stillLife} alt="Future Innovation" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
