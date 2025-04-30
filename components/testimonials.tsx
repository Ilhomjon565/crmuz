"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialsProps {
  testimonials: Array<{
    content: string
    author: string
    role: string
  }>
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mijozlarimiz fikrlari
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                <CardHeader>
                  <Quote className="w-8 h-8 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

