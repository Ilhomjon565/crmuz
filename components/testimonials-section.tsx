"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Aziz Karimov",
      role: "Ingliz tili markazi direktori",
      content:
        "EduCRM tizimi bizning o'quv markazimiz uchun juda foydali bo'ldi. Endi barcha ma'lumotlarni bir joyda saqlash va boshqarish imkoniyatiga egamiz. To'lovlar nazorati va hisobotlar tizimi bizga ko'p vaqt tejashga yordam berdi.",
      rating: 5,
      image: "/diverse-group.png",
    },
    {
      name: "Nilufar Ahmedova",
      role: "Matematika o'quv markazi menejeri",
      content:
        "Dars jadvali va davomat nazorati tizimi juda qulay. O'quvchilar va o'qituvchilar ma'lumotlarini boshqarish oson. Texnik yordam xizmati ham juda yaxshi ishlaydi, har qanday muammoni tez hal qilishadi.",
      rating: 5,
      image: "/diverse-woman-portrait.png",
    },
    {
      name: "Bobur Saidov",
      role: "IT Academy direktori",
      content:
        "Biz EduCRM tizimidan 1 yildan beri foydalanib kelmoqdamiz. Tizim juda qulay va tushunarli. Mobil ilova orqali istalgan joyda va vaqtda tizimdan foydalanish imkoniyati bizga juda qo'l keldi.",
      rating: 4,
      image: "/thoughtful-man.png",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900" ref={sectionRef}>
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
              Mijozlar fikri
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300"
            >
              Mijozlarimiz biz haqimizda
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              EduCRM tizimidan foydalanayotgan o'quv markazlari fikrlari
            </motion.p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col rounded-xl p-6 bg-white dark:bg-gray-800 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`h-4 w-4 ${
                      starIndex < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
