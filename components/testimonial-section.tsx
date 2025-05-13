"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TestimonialSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      content:
        "EduCRM tizimi o'quvchilar ma'lumotlarini boshqarish usulimni butunlay o'zgartirdi. Intuitiv interfeys va kuchli xususiyatlar har hafta soatlab vaqtimni tejaydi!",
      author: "Sarvinoz Toshmatova",
      role: "O'quv bo'limi boshlig'i",
      image: "https://femalefoundersfund.com/wp-content/uploads/2020/05/Headshots-132-2.jpg",
      rating: 5,
    },
    {
      content:
        "O'quv markazimiz uchun EduCRM tizimidan foydalanib, bizning samaradorligimiz 40% ga oshdi. Juda ajoyib platforma!",
      author: "Aziz Karimov",
      role: "Ta'lim markazi direktori",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      rating: 5,
    },
    {
      content:
        "To'lovlar nazorati va hisobotlar tizimi bizga ko'p vaqt tejashga yordam berdi. Endi barcha ma'lumotlarni bir joyda saqlash va boshqarish imkoniyatiga egamiz.",
      author: "Nilufar Ahmedova",
      role: "Moliya menejeri",
      image: "https://t3.ftcdn.net/jpg/02/81/81/86/360_F_281818663_XXRCNuGktKeZsnknqWkKI0rR4JPWui3H.jpg",
      rating: 4,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30"
      ref={sectionRef}
    >
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-sm font-medium shadow-lg shadow-purple-600/10 dark:shadow-purple-500/20">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400 mr-2"></span>
            Mijozlar fikri
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 drop-shadow-sm">
            Mijozlarimiz biz haqimizda
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto font-medium">
            EduCRM tizimidan foydalanayotgan o'quv markazlari fikrlari
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-30"></div>
                    <div className="relative rounded-2xl overflow-hidden aspect-square">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg?height=300&width=300&query=person"}
                        alt={testimonials[activeIndex].author}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[activeIndex].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 fill-gray-300"
                          }`}
                        />
                      ))}
                  </div>

                  <p className="text-lg md:text-xl mb-6 text-slate-700 dark:text-slate-300 italic">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div>
                    <h4 className="font-semibold text-lg text-slate-800 dark:text-white">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-indigo-600 dark:bg-indigo-400" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`${index + 1}-fikrga o'tish`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            >
              <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
 