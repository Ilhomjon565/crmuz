"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

export default function FreeTrialSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30"
      id="pricing"
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-indigo-900/50"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-16 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Bepul sinov muddatini boshlang</h2>
                  <p className="text-white/80 mb-8 text-lg">
                    EduCRM tizimining to'liq imkoniyatlaridan foydalaning va biznesingizni yangi bosqichga olib chiqing. Bugun ro'yxatdan o'ting!
                  </p>

                  <ul className="space-y-4 mb-8">
                    {[
                      "14 kunlik bepul sinov muddati",
                      "Hech qanday kredit karta ma'lumotlari talab qilinmaydi",
                      "Cheklanmagan o'quvchilar soni",
                      "To'liq funksionallik",
                      "24/7 qo'llab-quvvatlash",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-center"
                      >
                        <svg
                          className="h-5 w-5 text-blue-300 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-indigo-600 hover:bg-blue-50 rounded-full h-14 px-8 shadow-lg shadow-indigo-900/20 group"
                    >
                      <a
                        href="https://director.educrm.uz/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Bepul boshlash
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="h-full"
                >
                  <Image
                    src="/trial-image.png"
                    alt="EduCRM foydalanuvchilari"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl max-w-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        A
                      </div>
                      <div>
                        <div className="font-medium text-white">Anvar Karimov</div>
                        <div className="text-sm text-white/70">Direktor, Najot Ta'lim</div>
                        <div className="mt-2 text-sm text-white/90">
                          "EduCRM bizning o'quv markazimiz uchun eng yaxshi yechim bo'ldi!"
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
