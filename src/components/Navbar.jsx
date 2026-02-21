import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import './Navbar.css'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'For Brands', path: '/for-brands' },
    { label: 'For Creators', path: '/for-creators' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const ctaRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => setMobileOpen(false), [location])

    /* ── Magnetic CTA ── */
    useEffect(() => {
        const btn = ctaRef.current
        if (!btn) return
        const onMove = (e) => {
            const rect = btn.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2
            btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
        }
        const onLeave = () => { btn.style.transform = 'translate(0,0)' }
        btn.addEventListener('mousemove', onMove)
        btn.addEventListener('mouseleave', onLeave)
        return () => { btn.removeEventListener('mousemove', onMove); btn.removeEventListener('mouseleave', onLeave) }
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
            >
                <div className="navbar-container">

                    {/* ── Logo ── */}
                    <Link to="/" className="navbar-logo-link">
                        <div className="navbar-logo-img-container">
                            <img
                                src="/Yovoai-logo.jpg"
                                alt="YovoAI"
                                className="navbar-logo-img"
                            />
                        </div>
                        <span className="navbar-logo-text">
                            <span className="gradient-text">Yovo</span>
                            <span style={{ color: 'var(--c-text)' }}>AI</span>
                        </span>
                    </Link>

                    {/* ── Desktop Links (centered via flex-1) ── */}
                    <div className="navbar-desktop-menu">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`navbar-desktop-link ${isActive ? 'navbar-desktop-link-active' : ''}`}
                                >
                                    {link.label}
                                    {/* Active underline */}
                                    <span
                                        className={`navbar-desktop-indicator ${isActive ? 'active' : ''}`}
                                    />
                                    {/* Active dot */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="navbar-desktop-dot"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* ── CTA + Toggle ── */}
                    <div className="navbar-actions">
                        <a
                            ref={ctaRef}
                            href="https://play.google.com/store/apps/details?id=com.diin.yovoai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-cta"
                        >
                            Get Started
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </a>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="navbar-toggle-btn"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="navbar-mobile-menu"
                    >
                        <div className="navbar-mobile-container">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path
                                return (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`navbar-mobile-link ${isActive ? 'navbar-mobile-link-active' : ''}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                            <div className="navbar-mobile-cta-container">
                                <a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank" rel="noopener noreferrer" className="navbar-mobile-cta">
                                    Get Started <ArrowRight size={14} strokeWidth={2.5} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

