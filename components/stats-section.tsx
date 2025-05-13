"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, School, BookOpen, Award } from 'lucide-react'
import CountUp from "react-countup"

export default function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const stats = [
    {
      icon: Users,
      value: 600,
      label: "Foydalanuvchilar",
      color: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
      shadowColor: "shadow-blue-600/20 dark:shadow-blue-900/20",
    },
    {
      icon: School,
      value: 20,
      label: "O'quv markazlar",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white",
      shadowColor: "shadow-indigo-600/20 dark:shadow-indigo-900/20",
    },
    {
      icon: BookOpen,
      value: 200,
      label: "Kurslar",
      color: "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
      shadowColor: "shadow-purple-600/20 dark:shadow-purple-900/20",
    },
    {
      icon: Award,
      value: 82,
      suffix: "%",
      label: "Mijozlar mamnuniyati",
      color: "bg-gradient-to-r from-green-500 to-green-600 text-white",
      shadowColor: "shadow-green-600/20 dark:shadow-green-900/20",
    },
  ]

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30"
      ref={sectionRef}
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className={`p-4 rounded-xl ${stat.color} ${stat.shadowColor} shadow-xl`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white"
              >
                {isInView ? <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || "+"} separator="," /> : "0"}
              </motion.div>
              <div className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
