"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const blogPosts = [
    {
      title: "Tahlil vositalari",
      description:
        "Samaradorlik ko'rsatkichlarini uzluksiz kuzating. Ma'lumotlarni vizualizatsiya bilan trendlarni tahlil qiling.",
      image: "https://www.shutterstock.com/image-vector/competitor-analysis-tools-followers-sales-600nw-2467621963.jpg",
      cta: "Batafsil",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Mijozlar haqida ma'lumotlar",
      description: "Mijozlar ehtiyojlarini chuqurroq tushunish. Batafsil mijoz profillariga kirish imkoniyati.",
      image: "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8013.jpg?semt=ais_hybrid&w=740",
      cta: "Ko'proq ma'lumot",
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Ish jarayoni avtomatizatsiyasi",
      description:
        "Takroriy vazifalarni samarali avtomatlashtirish. Aqlli ish jarayonlari bilan samaradorlikni oshiring.",
      image: "https://media.istockphoto.com/id/525799810/photo/presentation-about-automation-to-improve-reliability-and-productivity.jpg?s=612x612&w=0&k=20&c=Cowbyx2keomiF_Su7uTbvfnYEiZ_RkuoztbkgyZpiEg=",
      cta: "Hozir o'rganing",
      color: "from-purple-600 to-pink-600",
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
      className="py-12 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-900"
      id="blog"
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2 space-y-4"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium shadow-lg shadow-blue-600/10 dark:shadow-blue-500/20">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
            Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 drop-shadow-sm">
            Bizning blogdan
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto font-medium">
            Eng so'nggi yangiliklar va foydali ma'lumotlar
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${post.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${post.color} opacity-10`}></div>
                  <Image
                    src={post.image || "/placeholder.svg?height=200&width=400&query=abstract"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{post.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">{post.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-auto self-start text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 group/btn"
                  >
                    <span>{post.cta}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
