# 🚀 YovoAI — AI-Powered UGC Platform

**YovoAI** is a premium, AI-powered UGC (User Generated Content) platform that connects **brands** with **creators** to produce authentic, high-performing content at scale.

> _Where voices rise, brands grow, and content goes viral._

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat-square&logo=greensock)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer)

---

## ✨ Features

- 🎨 **Premium UI Design** — Warm, minimal SaaS aesthetic with glassmorphism, smooth gradients, and micro-animations
- 🎬 **AI-Powered Content Tools** — Smart editing, auto-captions, trend-aware styling, and multi-language subtitles
- 📊 **Brand Dashboard** — Real-time analytics, campaign tracking, and ROI measurement
- 🤝 **Creator-Brand Matching** — AI-driven matching for authentic partnerships
- 💰 **Creator Earnings Engine** — Transparent, tiered earnings from Rising Star to Celebrity
- 🌐 **Multi-Platform Distribution** — Optimized content delivery across 40+ platforms
- 📱 **Fully Responsive** — Pixel-perfect on desktop, tablet, and mobile
- ⚡ **Smooth Animations** — GSAP scroll-triggered animations and Framer Motion page transitions
- 🧭 **Smooth Scrolling** — Lenis-powered buttery smooth scroll experience

---

## 🗂️ Project Structure

```
yovoAiReact/
├── public/
│   └── Yovoai-logo.jpg
├── src/
│   ├── assets/
│   │   └── images/           # Hero backgrounds, section images
│   ├── components/
│   │   ├── Navbar.jsx         # Responsive navbar with magnetic CTA
│   │   ├── Navbar.css
│   │   ├── Footer.jsx         # Footer with CTA strip & social links
│   │   ├── Footer.css
│   │   ├── FloatingParticles.jsx  # Ambient floating particles
│   │   └── SectionReveal.jsx  # Scroll-triggered reveal wrapper
│   ├── pages/
│   │   ├── Home.jsx / .css    # Landing page with hero video, features, integrations
│   │   ├── About.jsx / .css   # Company story, vision, values, roadmap
│   │   ├── Features.jsx / .css # AI features showcase with comparison table
│   │   ├── ForBrands.jsx / .css # Brand-focused page with case studies
│   │   ├── ForCreators.jsx / .css # Creator-focused page with earning tiers
│   │   └── Contact.jsx / .css # Contact form, map, FAQ accordion
│   ├── App.jsx               # Router, smooth scroll, animated routes
│   └── index.css             # Global design tokens & utility classes
├── package.json
└── vite.config.js
```

---

## 🎨 Design System

The project uses a **warm, minimal SaaS aesthetic** with a custom design token system defined in `index.css`:

| Token | Purpose |
|-------|---------|
| `--c-bg` | Base background (`#FAFAF9`) |
| `--c-text` | Primary text color |
| `--f-heading` | Heading font family |
| `--f-body` | Body font family |
| `--ease-smooth` | Custom easing curve |

### Key Design Patterns
- **`.gradient-text`** — Animated multi-color gradient text
- **`.gradient-brand`** — Warm amber/orange gradient backgrounds
- **`.glass-card`** — Glassmorphism card with backdrop blur
- **`.hover-depth`** — Depth-on-hover card effect
- **`.section-label`** — Pill-shaped section labels
- **`.magnetic-btn`** — Buttons with magnetic hover interaction
- **`.btn-primary` / `.btn-outline`** — CTA button styles

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home** | Hero with video background, feature grid, integrations section, AI showcase |
| `/about` | **About** | Company story, founder's perspective, AI philosophy, values, roadmap timeline |
| `/features` | **Features** | Core AI features, UGC creation engine, performance optimization, comparison table |
| `/for-brands` | **For Brands** | Brand problems & solutions, dashboard preview, case studies, CTA |
| `/for-creators` | **For Creators** | Creator benefits, AI tools, earning tiers, community features, success stories |
| `/contact` | **Contact** | Contact form, office location map, FAQ accordion, quick links |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2 | UI framework |
| **Vite** | 7.3 | Build tool & dev server |
| **React Router** | 7.13 | Client-side routing |
| **Framer Motion** | 12.34 | Page transitions & animations |
| **GSAP** + ScrollTrigger | 3.14 | Scroll-triggered animations |
| **Lenis** | 1.0 | Smooth scrolling |
| **Lucide React** | 0.575 | Premium SVG icons |
| **Vanilla CSS** | — | Custom styling (no Tailwind) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/yovoai-react.git
cd yovoai-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 Download the App

<a href="https://play.google.com/store/apps/details?id=com.diin.yovoai" target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" width="180" />
</a>

---

## 📬 Contact

- **Email**: [contact@yovoai.com](mailto:contact@yovoai.com)
- **Phone**: [+91 8147540362](tel:+918147540362)
- **Address**: Ground floor, C-116, C Block, Sector 2, Noida, Uttar Pradesh 201301
- **YouTube**: [@YovoAIofficial](https://www.youtube.com/@YovoAIofficial)

---

## 📝 License

© 2025 YovoAI by [Diin Technologies](https://diintechnologies.com). All rights reserved.

---

<p align="center">
  Built with ♥ for the creator economy
</p>
