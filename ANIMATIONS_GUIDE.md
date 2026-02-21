# 🎨 YovoAI Scroll Animations Guide

## ✨ Animation Variants Available

Tumhare project mein ab **14 unique scroll animation variants** hain:

### 1. **fadeUp** (Default)
- Element niche se fade hoke upar aata hai
- Smooth aur subtle

### 2. **fadeDown**
- Element upar se niche fade hoke aata hai

### 3. **fadeLeft**
- Element left se right fade hoke aata hai

### 4. **fadeRight**
- Element right se left fade hoke aata hai

### 5. **scaleUp**
- Element chhota se bada hota hai with fade
- Zoom-in effect

### 6. **scaleDown**
- Element bada se normal size hota hai
- Zoom-out effect

### 7. **rotateIn**
- Element rotate karte hue aata hai
- Slight rotation with scale

### 8. **flipX**
- Element X-axis pe flip hota hai
- 3D card flip effect

### 9. **flipY**
- Element Y-axis pe flip hota hai
- Vertical flip effect

### 10. **blur**
- Element blur se clear hota hai
- Modern glass effect

### 11. **slideRotate**
- Element slide + rotate combo
- Dynamic entry

### 12. **bounce**
- Element bounce effect ke saath aata hai
- Playful animation

### 13. **elastic**
- Element elastic spring effect ke saath
- Energetic feel

### 14. **glitch**
- Element glitch/skew effect ke saath
- Tech-style animation

---

## 📄 Page-wise Animation Breakdown

### 🏠 **Home Page**
- **Video Section**: `slideRotate` (left) + `scaleUp` (right)
- **Why YovoAI**: `blur` (header)
- **How It Works**: `flipY` (header) + `bounce` (steps) + `elastic` (stat)
- **Value Prop**: `fadeLeft` (image) + `fadeRight` (content)
- **Testimonials**: `scaleDown` (header) + `rotateIn` (cards)
- **Feature Highlight**: `glitch` (left) + `fadeRight` (right)

### 📖 **About Page**
- **Vision & Mission**: `flipX` (both cards)
- **Founder Section**: `scaleUp` (image) + `slideRotate` (content)
- **AI Philosophy**: `blur` (header)
- **Values**: `scaleDown` (header)
- **Roadmap**: `elastic` (header)
- **Future**: `fadeLeft` (content) + `fadeRight` (image)

### ⚡ **Features Page**
- **Core Features**: `rotateIn` (header)
- **UGC Engine**: `glitch` (header)
- **Performance**: `slideRotate` (left) + `scaleUp` (right)
- **Comparison**: `flipY` (header) + `blur` (table)
- **CTA**: `elastic` (final section)

### 🏢 **For Brands Page**
- **Problems**: `rotateIn` (header) + `glitch` (cards)
- **Solutions**: `flipX` (header)
- **Dashboard**: `slideRotate` (content) + `scaleUp` (image)
- **Case Studies**: `blur` (header)
- **CTA**: `elastic` (final card)

### 🎨 **For Creators Page**
- **Benefits**: `flipY` (header)
- **Tools**: `scaleDown` (header)
- **Earnings**: `rotateIn` (header)
- **Community**: `fadeLeft` (content) + `fadeRight` (image)
- **Success Stories**: `blur` (header)
- **CTA**: `elastic` (final card)

### 📞 **Contact Page**
- **Info Cards**: `bounce` (all cards)
- **Form Section**: `fadeLeft` (form) + `fadeRight` (map)
- **FAQ**: `scaleUp` (header) + `slideRotate` (items)

---

## 🎯 How to Use

### Basic Usage:
```jsx
import SectionReveal from '../components/SectionReveal'

<SectionReveal variant="fadeUp" duration={0.8} delay={0}>
  <YourContent />
</SectionReveal>
```

### Props:
- **variant**: Animation type (default: 'fadeUp')
- **duration**: Animation duration in seconds (default: 0.8)
- **delay**: Delay before animation starts (default: 0)
- **once**: Animate only once (default: true)
- **className**: Additional CSS classes

### Example with all props:
```jsx
<SectionReveal 
  variant="elastic" 
  duration={1.2} 
  delay={0.3}
  once={true}
  className="my-custom-class"
>
  <div>Amazing Content</div>
</SectionReveal>
```

---

## 🎨 Animation Combinations

### For Headers:
- `blur` - Modern feel
- `flipY` - Dramatic
- `scaleDown` - Attention-grabbing
- `rotateIn` - Dynamic

### For Cards:
- `bounce` - Playful
- `elastic` - Energetic
- `scaleUp` - Professional
- `glitch` - Tech-style

### For Images:
- `fadeLeft` / `fadeRight` - Directional
- `scaleUp` - Zoom effect
- `blur` - Smooth reveal

### For Split Sections:
- Left: `fadeLeft` / `slideRotate`
- Right: `fadeRight` / `scaleUp`

---

## 🚀 Performance Tips

1. **Stagger delays** for multiple items:
   ```jsx
   {items.map((item, i) => (
     <SectionReveal key={i} delay={i * 0.1}>
       {item}
     </SectionReveal>
   ))}
   ```

2. **Use appropriate durations**:
   - Fast: 0.6-0.8s (small elements)
   - Medium: 0.8-1.0s (cards, sections)
   - Slow: 1.0-1.3s (large sections, dramatic effects)

3. **Combine with existing card animations** for layered effects

---

## 🎭 Best Practices

✅ **DO:**
- Use different animations for different sections
- Match animation style with content type
- Keep duration consistent within a page
- Use subtle animations for text-heavy content

❌ **DON'T:**
- Use too many different animations on one page
- Make animations too long (>1.5s)
- Animate everything (some content should be static)
- Use aggressive animations for professional content

---

## 🔧 Customization

Want to add more animations? Edit `SectionReveal.jsx`:

```jsx
const variants = {
  yourCustomAnimation: {
    hidden: { /* initial state */ },
    visible: { /* final state */ }
  }
}
```

---

**Created with ❤️ for YovoAI**
