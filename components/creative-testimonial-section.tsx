"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Users, Award, TrendingUp } from "lucide-react"

export default function CreativeTestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Malika Karimova",
      role: "O'quv markaz direktori",
      company: "Smart Education Center",
      avatar: "MK",
      rating: 5,
      text: "EduCRM tizimi bizning o'quv markazimizni to'liq o'zgartirdi. Endi barcha jarayonlar avtomatik va biz vaqtni tejayapmiz. Mijozlar ham juda qoniqishli!",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30"
    },
    {
      name: "Temur Rasulov",
      role: "Bosh o'qituvchi",
      company: "Future Academy",
      avatar: "TR",
      rating: 5,
      text: "Dars jadvalini tuzish endi juda oson. O'quvchilar bilan aloqa ham yaxshilandi. EduCRM haqiqatan ham professional yechim!",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30"
    },
    {
      name: "Dilnoza Xakimova",
      role: "Moliya menejeri",
      company: "Elite Learning",
      avatar: "DX",
      rating: 5,
      text: "To'lovlarni kuzatish va hisobotlar tayyorlash endi bir necha daqiqada. EduCRM bizning ishimizni soddalashtirdi va samaradorlikni oshirdi.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30"
    },
    {
      name: "Javlonbek Toshmatov",
      role: "IT menejeri",
      company: "Tech Academy",
      avatar: "JT",
      rating: 5,
      text: "Texnik qo'llab-quvvatlash ajoyib! Har qanday muammoni tezda hal qilishadi. EduCRM tizimi ishonchli va barqaror ishlaydi.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const stats = [
    { icon: Users, value: "500+", label: "Mamnun mijozlar" },
    { icon: Star, value: "4.9", label: "O'rtacha reyting" },
    { icon: Award, value: "99%", label: "Mamnuniyat darajasi" },
    { icon: TrendingUp, value: "+61%", label: "Samaradorlik o'sishi" }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950/30 dark:to-pink-950/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
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
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 mb-4"
          >
            Mijozlarimiz nima deyadi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            O'quv markazlari rahbarlari EduCRM haqida nima deyishadi
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className="text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-slate-700/20">
            {/* Quote icon */}
            <div className="absolute top-6 left-6">
              <Quote className="h-8 w-8 text-purple-400/50" />
            </div>

            {/* Testimonial content */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating elements around testimonial */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
            <Star className="h-4 w-4 text-white" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
            <Play className="h-4 w-4 text-white" />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Users className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold">Siz ham mijozlarimiz qatoriga qo'shiling</span>
            <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
