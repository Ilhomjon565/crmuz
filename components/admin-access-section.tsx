"use client"

import { motion } from "framer-motion"
import { Shield, Users, GraduationCap, ArrowRight, Lock, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AdminAccessSection() {
  // Get URLs from environment variables or use default paths
  const isDev = process.env.NODE_ENV === 'development'
  
  const getUrl = (subdomain: string, path: string) => {
    if (isDev) {
      // Development: use subdomain with localhost or fallback to path
      const devUrl = process.env[`NEXT_PUBLIC_${subdomain.toUpperCase()}_URL_DEV`]
      return devUrl || path
    } else {
      // Production: use subdomain URL
      const prodUrl = process.env[`NEXT_PUBLIC_${subdomain.toUpperCase()}_URL`]
      return prodUrl || `https://${subdomain}.educrm.uz`
    }
  }

  const panels = [
    {
      title: "Teacher Panel",
      description: "O'qituvchilar uchun maxsus boshqaruv paneli",
      icon: GraduationCap,
      href: 'teacher.educrm.uz',
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
      features: ["Darslar", "Baholar", "Topshiriqlar"],
    },
    {
      title: "Manager Panel",
      description: "Menejerlar uchun kengaytirilgan boshqaruv paneli",
      icon: Users,
      href: 'manager.educrm.uz',
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-500/10 via-indigo-500/5 to-purple-500/10",
      features: ["O'quvchilar", "Jadval", "Kurslar"],
    },
    {
      title: "Director Panel",
      description: "Direktorlar uchun to'liq nazorat va analitika paneli",
      icon: Shield,
      href: 'director.educrm.uz',
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/10 via-pink-500/5 to-rose-500/10",
      features: ["Analitika", "Moliya", "Hisobotlar"],
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-accent/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Professional Dashboard Access
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
            Boshqaruv Panellari
          </h2>
        </motion.div>

        {/* Panel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link target="_blank" href={`https://${panel.href}`}>
                <div className={`group relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br ${panel.bgGradient} backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${panel.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${panel.gradient} p-[2px]`}>
                    <div className="w-full h-full bg-background rounded-3xl" />
                  </div>
                  
                  <div className="p-8 relative z-10">
                    {/* Icon with glow effect */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${panel.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${panel.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <panel.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {panel.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {panel.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {panel.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${panel.gradient}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${panel.gradient} text-white font-medium shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:gap-3`}>
                      <Lock className="w-4 h-4" />
                      <span>Kirish</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${panel.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr ${panel.gradient} opacity-10 rounded-full blur-xl`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

