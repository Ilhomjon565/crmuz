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
      popular: true,
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
      popular: true,
    },
  ]

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900/50" id="narxlar" ref={sectionRef}>
     
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group flex flex-col rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/50 scale-105 z-10 hover:shadow-3xl hover:shadow-primary/60 hover:bg-primary/90 hover:scale-110"
                  : "bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-gray-600/50 hover:bg-primary hover:text-primary-foreground hover:shadow-primary/50 hover:scale-110"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground group-hover:text-primary-foreground/80"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-4 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span
                  className={`ml-1 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground group-hover:text-primary-foreground/80"}`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${plan.popular ? "text-primary-foreground" : "text-primary group-hover:text-primary-foreground"}`} />
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground" : "dark:text-gray-300 group-hover:text-primary-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto mb-4">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 group-hover:bg-white group-hover:text-primary"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  )
}
