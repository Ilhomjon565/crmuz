"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AdvantagesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const advantages = [
    "Vaqtni tejash va samaradorlikni oshirish",
    "Moliyaviy hisobotlarni avtomatlashtirish",
    "O'quvchilar va o'qituvchilar ma'lumotlarini markazlashtirilgan boshqaruv",
    "Dars jadvalini qulay boshqarish",
    "To'lovlar nazorati va eslatmalar",
    "Davomat nazorati va hisobotlar",
    "Mobil qurilmalardan foydalanish imkoniyati",
    "Ma'lumotlar xavfsizligi va zaxiralash",
    "24/7 texnik yordam",
    "Doimiy yangilanishlar va takomillashtirishlar",
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900" id="ustunliklar" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="inline-block rounded-lg bg-primary/10 dark:bg-primary/20 px-3 py-1 text-sm text-primary dark:text-primary-foreground"
              >
                Ustunliklar
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300"
              >
                Nima uchun EduCRM?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                EduCRM tizimi o'quv markazlari uchun maxsus ishlab chiqilgan bo'lib, u o'quv jarayonini samarali
                boshqarishga yordam beradi.
              </motion.p>
            </div>
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid gap-2 py-4"
            >
              {advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="dark:text-gray-300">{advantage}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-video rounded-2xl overflow-hidden shadow-2xl dark:shadow-indigo-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
