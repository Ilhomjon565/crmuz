"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, CreditCard, Users, BarChart3, MessageSquare, Bell, BookOpen, Smartphone, Clock } from "lucide-react"

export default function FeaturesGrid() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const features = [
    {
      icon: Calendar,
      title: "Dars jadvali",
      description: "Qulay va tushunarli dars jadvali orqali o'quv jarayonini samarali boshqaring",
      color: "from-blue-600 to-indigo-600",
      shadowColor: "shadow-blue-600/20 dark:shadow-blue-900/20",
    },
    {
      icon: CreditCard,
      title: "To'lovlar nazorati",
      description: "Barcha to'lovlarni kuzatib boring va hisobotlarni avtomatik ravishda oling",
      color: "from-indigo-600 to-purple-600",
      shadowColor: "shadow-indigo-600/20 dark:shadow-indigo-900/20",
    },
    {
      icon: Users,
      title: "O'quvchilar boshqaruvi",
      description: "O'quvchilar ma'lumotlarini saqlang va ularning o'zlashtirish darajasini kuzating",
      color: "from-purple-600 to-pink-600",
      shadowColor: "shadow-purple-600/20 dark:shadow-purple-900/20",
    },
    {
      icon: BarChart3,
      title: "Statistika va hisobotlar",
      description: "Batafsil statistika va hisobotlar orqali biznesingizni tahlil qiling",
      color: "from-pink-600 to-rose-600",
      shadowColor: "shadow-pink-600/20 dark:shadow-pink-900/20",
    },
    {
      icon: MessageSquare,
      title: "Ichki chat",
      description: "O'qituvchilar va o'quvchilar bilan ichki chat orqali muloqot qiling",
      color: "from-rose-600 to-red-600",
      shadowColor: "shadow-rose-600/20 dark:shadow-rose-900/20",
    },
    {
      icon: Bell,
      title: "Eslatmalar",
      description: "Muhim voqealar va to'lovlar haqida avtomatik eslatmalar oling",
      color: "from-red-600 to-orange-600",
      shadowColor: "shadow-red-600/20 dark:shadow-red-900/20",
    },
    {
      icon: BookOpen,
      title: "O'quv materiallari",
      description: "O'quv materiallarini saqlang va o'quvchilar bilan ulashing",
      color: "from-orange-600 to-amber-600",
      shadowColor: "shadow-orange-600/20 dark:shadow-orange-900/20",
    },
    {
      icon: Smartphone,
      title: "Mobil ilova",
      description: "Mobil ilova orqali istalgan joyda va vaqtda tizimdan foydalaning",
      color: "from-amber-600 to-yellow-600",
      shadowColor: "shadow-amber-600/20 dark:shadow-amber-900/20",
    },
    {
      icon: Clock,
      title: "Davomat nazorati",
      description: "O'quvchilar davomatini avtomatik ravishda kuzatib boring",
      color: "from-yellow-600 to-lime-600",
      shadowColor: "shadow-yellow-600/20 dark:shadow-yellow-900/20",
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
    <section
      className="py-20 md:py-32 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-900"
      id="features"
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium shadow-lg shadow-indigo-600/10 dark:shadow-indigo-500/20">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
            Xizmatlar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 drop-shadow-sm">
            Bizning xizmatlarimiz
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto font-medium">
            EduCRM tizimi orqali o'quv markazingizni samarali boshqaring
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div
                className={`relative flex flex-col p-8 h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl ${feature.shadowColor} border border-slate-100 dark:border-slate-700 overflow-hidden z-10`}
              >
                <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 self-start shadow-lg ${feature.shadowColor}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
