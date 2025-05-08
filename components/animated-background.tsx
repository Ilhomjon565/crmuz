"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
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
      radius: number
      color: string
      speedX: number
      speedY: number
      opacity: number
      growing: boolean
    }> = []

    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 80)
    const isDark = theme === "dark"

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: isDark ? `hsl(${220 + Math.random() * 40}, 70%, 60%)` : `hsl(${220 + Math.random() * 40}, 70%, 60%)`,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        growing: Math.random() > 0.5,
      })
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

      if (isDark) {
        gradient.addColorStop(0, "rgba(10, 10, 30, 1)")
        gradient.addColorStop(1, "rgba(30, 30, 60, 1)")
      } else {
        gradient.addColorStop(0, "rgba(240, 240, 255, 1)")
        gradient.addColorStop(1, "rgba(250, 250, 255, 1)")
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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

        // Pulse effect - grow and shrink
        if (particle.growing) {
          particle.radius += 0.02
          if (particle.radius > 4) {
            particle.growing = false
          }
        } else {
          particle.radius -= 0.02
          if (particle.radius < 1) {
            particle.growing = true
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 150) * 0.2 * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
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
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
    </div>
  )
}
