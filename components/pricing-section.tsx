"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "Starter",
      price: "199,000",
      period: "oyiga",
      description: "Kichik o'quv markazlari uchun",
      features: [
        "200 tagacha o'quvchi",
        "15 tagacha o'qituvchi",
        "Dars jadvali",
        "To'lovlar nazorati",
        "Davomat nazorati",
      ],
      cta: "Boshlash",
      popular: false,
    },
    {
      name: "Professional",
      price: "399,000",
      period: "oyiga",
      description: "O'rta hajmdagi o'quv markazlari uchun",
      features: [
        "500 tagacha o'quvchi",
        "30 tagacha o'qituvchi",
        "Dars jadvali",
        "To'lovlar nazorati",
        "Davomat nazorati",
        "Hisobotlar",
        "SMS xabarnomalar",
        "Mobil ilova",
      ],
      cta: "Boshlash",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "699,000",
      period: "oyiga",
      description: "Katta o'quv markazlari uchun",
      features: [
        "1000 o'quvchilar",
        "50 o'qituvchilar",
        "Dars jadvali",
        "To'lovlar nazorati",
        "Davomat nazorati",
        "Hisobotlar",
        "SMS xabarnomalar",
        "Mobil ilova",
        "API integratsiya",
        "Maxsus funksiyalar",
        "24/7 qo'llab-quvvatlash",
      ],
      cta: "Boshlash",
      popular: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50" id="narxlar" ref={sectionRef}>
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
              Narxlar
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300"
            >
              Qulay narxlar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Har qanday hajmdagi o'quv markazi uchun mos tarif rejasi
            </motion.p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`flex flex-col rounded-xl p-6 ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/40 scale-105 z-10"
                  : "bg-white dark:bg-gray-800 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2">
                  <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white shadow-sm">
                    Eng mashhur
                  </div>
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-4 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span
                  className={`ml-1 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground" : "dark:text-gray-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
