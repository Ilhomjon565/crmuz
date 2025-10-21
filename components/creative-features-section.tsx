"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Users, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  MessageSquare, 
  Shield, 
  Smartphone, 
  Zap,
  Star,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react"

export default function CreativeFeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Users,
      title: "O'quvchilar boshqaruvi",
      description: "Barcha o'quvchilar ma'lumotlarini bir joyda saqlang va nazorat qiling",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      delay: 0,
      features: ["Ro'yxatdan o'tkazish", "Guruh tashkil etish", "Davomat nazorati"]
    },
    {
      icon: Calendar,
      title: "Dars jadvali",
      description: "Avtomatik dars jadvali tuzish va o'qituvchilar ish yukini taqsimlash",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      delay: 0.1,
      features: ["Avtomatik jadval", "Xonalar taqsimlash", "Vaqt nazorati"]
    },
    {
      icon: CreditCard,
      title: "To'lovlar boshqaruvi",
      description: "O'quvchilar to'lovlarini kuzatish va hisobotlar tayyorlash",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
      delay: 0.2,
      features: ["To'lov kuzatuvi", "Qarz hisoboti", "Avtomatik eslatma"]
    },
    {
      icon: BarChart3,
      title: "Hisobotlar va tahlil",
      description: "Batafsil hisobotlar va statistika orqali biznesingizni tahlil qiling",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
      delay: 0.3,
      features: ["Daromad hisoboti", "O'quvchi statistikasi", "O'qituvchi faoliyati"]
    },
    {
      icon: MessageSquare,
      title: "Xabarnoma tizimi",
      description: "O'quvchilar va o'qituvchilar bilan avtomatik aloqa o'rnatish",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30",
      delay: 0.4,
      features: ["SMS xabarnoma", "Email yuborish", "Push bildirishnoma"]
    },
    {
      icon: Shield,
      title: "Xavfsizlik",
      description: "Ma'lumotlaringizni himoya qilish va maxfiylikni ta'minlash",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30",
      delay: 0.5,
      features: ["Ma'lumot shifrlash", "Foydalanuvchi huquqlari", "Faollik jurnali"]
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-blue-400/10 to-cyan-400/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl"></div>
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
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-4"
          >
            Kuchli imkoniyatlar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            O'quv markazingizni raqamlashtirish uchun barcha kerakli vositalar
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-slate-800/20 backdrop-blur-sm group`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>

              {/* Floating background icon */}
              <motion.div 
                className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <feature.icon className="h-20 w-20 text-slate-400" />
              </motion.div>

              {/* Main content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: feature.delay + 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: feature.delay + 0.5, duration: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    {feature.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: feature.delay + 0.7 + itemIndex * 0.1, duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Animated progress bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: feature.delay + 0.9, duration: 1 }}
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6`}
                />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full opacity-30`}
                    style={{
                      left: `${15 + i * 25}%`,
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold">Barcha imkoniyatlarni sinab ko'ring</span>
            <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
