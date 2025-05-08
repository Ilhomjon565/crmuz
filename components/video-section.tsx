"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function VideoSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/30"
      id="demo"
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium shadow-lg shadow-blue-600/10 dark:shadow-blue-500/20">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
            Demo ko'rinishi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 drop-shadow-sm">
            EduCRM qanday ishlaydi?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto font-medium">
            O'quv markazingizni boshqarishning eng samarali usuli bilan tanishing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-xl opacity-70"></div>
          <div className="relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-2xl"
              >
                <Play className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
