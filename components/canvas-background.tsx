"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create particles
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      blur: number
      pulse: number
      pulseSpeed: number
    }> = []

    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100)
    const isDark = theme === "dark"

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        color: isDark ? `hsl(${220 + Math.random() * 40}, 80%, 65%)` : `hsl(${220 + Math.random() * 40}, 80%, 65%)`,
        opacity: Math.random() * 0.3 + 0.05,
        blur: Math.random() * 2 + 1,
        pulse: 0,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      })
    }

    // Create connection lines
    const createConnection = (p1: (typeof particles)[0], p2: (typeof particles)[0], distance: number) => {
      const opacity = 1 - distance / 150
      if (opacity > 0) {
        ctx.beginPath()
        ctx.strokeStyle = isDark ? `rgba(99, 102, 241, ${opacity * 0.08})` : `rgba(99, 102, 241, ${opacity * 0.05})`
        ctx.lineWidth = 0.5
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }

        // Pulse effect
        particle.pulse += particle.pulseSpeed
        const pulseFactor = Math.sin(particle.pulse) * 0.5 + 0.5
        const pulseSize = particle.size * (0.8 + pulseFactor * 0.4)
        const pulseOpacity = particle.opacity * (0.8 + pulseFactor * 0.4)

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? `${particle.color}${Math.floor(pulseOpacity * 255)
              .toString(16)
              .padStart(2, "0")}`
          : `${particle.color}${Math.floor(pulseOpacity * 255)
              .toString(16)
              .padStart(2, "0")}`

        // Add blur effect
        ctx.shadowColor = particle.color
        ctx.shadowBlur = particle.blur
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            createConnection(particle, otherParticle, distance)
          }
        })
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/60 backdrop-blur-[2px]"></div>
    </div>
  )
}
