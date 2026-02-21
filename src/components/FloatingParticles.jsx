import { useEffect, useRef } from 'react'

export default function FloatingParticles() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animationId
        let particles = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        class Particle {
            constructor() {
                this.reset()
            }
            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2.5 + 0.5
                this.speedX = (Math.random() - 0.5) * 0.3
                this.speedY = (Math.random() - 0.5) * 0.3
                this.opacity = Math.random() * 0.12 + 0.03
                this.hue = Math.random() * 40 + 20 // warm amber range
            }
            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
            }
            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`
                ctx.fill()
            }
        }

        for (let i = 0; i < 40; i++) {
            particles.push(new Particle())
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((p) => {
                p.update()
                p.draw()
            })
            animationId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                opacity: 0.6,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    )
}
