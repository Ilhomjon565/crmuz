"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 dark:from-cyan-500/5 dark:to-emerald-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mouse-following elements */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-500/5 dark:to-blue-500/5 rounded-full blur-2xl"
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating geometric shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-6 h-6 bg-gradient-to-r ${
            i % 4 === 0 ? 'from-indigo-400/20 to-blue-400/20' :
            i % 4 === 1 ? 'from-purple-400/20 to-pink-400/20' :
            i % 4 === 2 ? 'from-cyan-400/20 to-teal-400/20' :
            'from-emerald-400/20 to-green-400/20'
          } rounded-full blur-sm`}
          style={{
            left: `${10 + (i * 8)}%`,
            top: `${15 + (i * 6)}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wave animations */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-500/10 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}