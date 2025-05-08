"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute top-[10%] right-[5%] w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-[40%] left-[30%] w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
      />

      {/* Floating shapes */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: [0, 20, 0],
          opacity: 0.7,
          rotate: [0, 5, 0],
        }}
        transition={{
          y: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          opacity: { duration: 1 },
        }}
        className="absolute top-[15%] left-[15%] w-16 h-16 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-lg backdrop-blur-md border border-indigo-500/20 dark:border-indigo-500/30"
      />

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: [0, -30, 0],
          opacity: 0.7,
          rotate: [0, -8, 0],
        }}
        transition={{
          y: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          opacity: { duration: 1 },
        }}
        className="absolute bottom-[20%] right-[20%] w-20 h-20 bg-blue-500/10 dark:bg-blue-500/20 rounded-full backdrop-blur-md border border-blue-500/20 dark:border-blue-500/30"
      />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: [0, 15, 0],
          opacity: 0.7,
          rotate: [0, 10, 0],
        }}
        transition={{
          y: { duration: 7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          rotate: { duration: 9, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          opacity: { duration: 1 },
        }}
        className="absolute top-[35%] right-[25%] w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-md backdrop-blur-md border border-purple-500/20 dark:border-purple-500/30"
      />
    </div>
  )
}
