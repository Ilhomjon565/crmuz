"use client"

import { Phone, Users, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function EnhancedFeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Phone,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Tizimdan foydalanish bo'yicha doimiy yordam",
    },
    {
      icon: Users,
      title: "VIP Menejer yaratish",
      description: "Cheksiz menejerlar qo'shish imkoniyati",
    },
    {
      icon: LineChart,
      title: "O'quv jarayoni nazorati",
      description: "To'liq monitoring va hisobotlar",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative" id="xizmatlar" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="inline-block rounded-lg bg-primary/10 dark:bg-primary/20 px-3 py-1 text-sm text-primary dark:text-primary-foreground"
            >
              Xizmatlar
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300"
            >
              Bizning xizmatlarimiz
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              EduCRM tizimi orqali o'quv markazingizni samarali boshqaring
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="flex flex-col items-center space-y-4 rounded-lg p-6 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg dark:shadow-indigo-500/10"
            >
              <div className="rounded-full bg-primary/10 dark:bg-primary/20 p-4 shadow-inner">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
              <p className="text-center text-muted-foreground dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
