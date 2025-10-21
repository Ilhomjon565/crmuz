"use client"

import { motion } from "framer-motion"
import { Star, Zap, Heart, Sparkles, Shield, Users, TrendingUp, Award } from "lucide-react"

export default function FloatingElements() {
  const floatingIcons = [
    { Icon: Star, color: "from-yellow-400 to-orange-400", delay: 0 },
    { Icon: Zap, color: "from-blue-400 to-cyan-400", delay: 0.5 },
    { Icon: Heart, color: "from-pink-400 to-rose-400", delay: 1 },
    { Icon: Sparkles, color: "from-purple-400 to-indigo-400", delay: 1.5 },
    { Icon: Shield, color: "from-green-400 to-emerald-400", delay: 2 },
    { Icon: Users, color: "from-indigo-400 to-blue-400", delay: 2.5 },
    { Icon: TrendingUp, color: "from-cyan-400 to-teal-400", delay: 3 },
    { Icon: Award, color: "from-amber-400 to-yellow-400", delay: 3.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${20 + (index * 8)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon className="h-4 w-4 text-white" />
        </motion.div>
      ))}

      {/* Additional floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400/40 to-blue-400/40 dark:from-indigo-500/30 dark:to-blue-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute w-4 h-4 bg-gradient-to-r ${
            i % 3 === 0 ? 'from-purple-400/30 to-pink-400/30' :
            i % 3 === 1 ? 'from-blue-400/30 to-cyan-400/30' :
            'from-green-400/30 to-emerald-400/30'
          } rounded-full`}
          style={{
            left: `${15 + (i * 10)}%`,
            top: `${30 + (i * 5)}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}