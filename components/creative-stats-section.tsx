"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, TrendingUp, Shield, Star, Award, Zap, Heart, Target } from "lucide-react"

export default function CreativeStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "O'quv markazlari",
      description: "Ishonchli mijozlar",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      delay: 0
    },
    {
      icon: TrendingUp,
      value: "+61%",
      label: "Samaradorlik",
      description: "O'tgan oyga nisbatan",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      delay: 0.1
    },
    {
      icon: Shield,
      value: "100%",
      label: "Xavfsizlik",
      description: "Ma'lumotlar himoyasi",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
      delay: 0.2
    },
    {
      icon: Star,
      value: "5.0",
      label: "Reyting",
      description: "Mijozlar bahosi",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30",
      delay: 0.3
    },
    {
      icon: Award,
      value: "24/7",
      label: "Qo'llab-quvvatlash",
      description: "Doimiy yordam",
      color: "from-indigo-400 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30",
      delay: 0.4
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
      description: "Tizim ishonchliligi",
      color: "from-cyan-400 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30",
      delay: 0.5
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-500/5 dark:to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-400 mb-4"
          >
            Raqamlar bilan isbotlangan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            EduCRM tizimi orqali o'quv markazlaringizning samaradorligini oshiring
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ delay: stat.delay, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gradient-to-br ${stat.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-800/20 backdrop-blur-sm`}
            >
              {/* Floating background icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <stat.icon className="h-16 w-16 text-slate-400" />
              </div>

              {/* Main content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: stat.delay + 0.3, duration: 0.4 }}
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: stat.delay + 0.5, duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.description}
                  </div>
                </motion.div>

                {/* Animated progress bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: stat.delay + 0.7, duration: 1 }}
                  className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4`}
                />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full opacity-30`}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
