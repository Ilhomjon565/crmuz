"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, CreditCard, Users, BarChart3, MessageSquare, Bell, BookOpen, Smartphone, Clock } from "lucide-react"

export default function FeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Calendar,
      title: "Dars jadvali",
      description: "Qulay va tushunarli dars jadvali orqali o'quv jarayonini samarali boshqaring",
    },
    {
      icon: CreditCard,
      title: "To'lovlar nazorati",
      description: "Barcha to'lovlarni kuzatib boring va hisobotlarni avtomatik ravishda oling",
    },
    {
      icon: Users,
      title: "O'quvchilar boshqaruvi",
      description: "O'quvchilar ma'lumotlarini saqlang va ularning o'zlashtirish darajasini kuzating",
    },
    {
      icon: BarChart3,
      title: "Statistika va hisobotlar",
      description: "Batafsil statistika va hisobotlar orqali biznesingizni tahlil qiling",
    },
    {
      icon: MessageSquare,
      title: "Ichki chat",
      description: "O'qituvchilar va o'quvchilar bilan ichki chat orqali muloqot qiling",
    },
    {
      icon: Bell,
      title: "Eslatmalar",
      description: "Muhim voqealar va to'lovlar haqida avtomatik eslatmalar oling",
    },
    {
      icon: BookOpen,
      title: "O'quv materiallari",
      description: "O'quv materiallarini saqlang va o'quvchilar bilan ulashing",
    },
    {
      icon: Smartphone,
      title: "Mobil ilova",
      description: "Mobil ilova orqali istalgan joyda va vaqtda tizimdan foydalaning",
    },
    {
      icon: Clock,
      title: "Davomat nazorati",
      description: "O'quvchilar davomatini avtomatik ravishda kuzatib boring",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50" id="Xizmatlar" ref={sectionRef}>
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
              Bizning Xizmatlarimiz
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
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="flex flex-col items-center space-y-4 rounded-lg p-6 transition-all duration-300 bg-white dark:bg-gray-800 shadow-xl dark:shadow-indigo-500/30"
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
