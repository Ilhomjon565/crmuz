"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  Users, 
  Star, 
  Zap, 
  Shield, 
  Award,
  Sparkles,
  Heart,
  Globe
} from "lucide-react"
import { FaPhone, FaTelegram, FaInstagram, FaGraduationCap, FaSchool, FaChild, FaUniversity } from 'react-icons/fa'

export default function ContactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Xabaringiz yuborildi",
      description: "Tez orada siz bilan bog'lanamiz",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  }

  const contactItems = [
    {
      icon: FaPhone,
      text: "+998 95 899 55 00",
      link: "tel:+998958995500",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      iconColor: "text-blue-600"
    },
    {
      icon: FaTelegram,
      text: "@Educrm_pro",
      link: "https://t.me/Educrm_pro",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30",
      iconColor: "text-indigo-600"
    },
    {
      icon: FaInstagram,
      text: "@educrm_pro",
      link: "https://www.instagram.com/educrm_pro",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
      iconColor: "text-pink-600"
    }
  ]

  const targetAudience = [
    { 
      icon: FaGraduationCap, 
      text: "O'quv markazlar",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30"
    },
    { 
      icon: FaSchool, 
      text: "Xususiy maktablar",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30"
    },
    { 
      icon: FaChild, 
      text: "Xususiy bog'chalar",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30"
    },
    { 
      icon: FaUniversity, 
      text: "Xususiy OTM",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30"
    }
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Mamnun mijozlar", color: "from-green-500 to-emerald-500" },
    { icon: Star, value: "4.9", label: "O'rtacha reyting", color: "from-yellow-500 to-orange-500" },
    { icon: Shield, value: "100%", label: "Xavfsizlik", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "24/7", label: "Qo'llab-quvvatlash", color: "from-purple-500 to-pink-500" }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 dark:from-indigo-500/20 dark:to-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 via-blue-100 to-purple-100 dark:from-indigo-900/50 dark:via-blue-900/50 dark:to-purple-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Biz bilan bog'laning</span>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Biz bilan bog'laning
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            EduCRM tizimi orqali o'quv markazingizni raqamlashtiring va biznesingizni yangi bosqichga olib chiqing
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div 
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <Globe className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 mb-2">
                  EduCRM | Platform pro
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Professional CRM tizimi
                </p>
              </div>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block bg-gradient-to-r ${item.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`${item.iconColor} text-xl`} />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                          {item.text}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {index === 0 ? "Telefon raqam" : index === 1 ? "Telegram" : "Instagram"}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Target Audience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div 
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <Users className="h-10 w-10 text-white" />
                </motion.div>
                <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-2">
                  Kimlar uchun foydali?
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  EduCRM barcha ta'lim tashkilotlari uchun
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targetAudience.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-r ${item.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                          {item.text}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {index === 0 ? "Professional o'quv markazlari" :
                           index === 1 ? "Xususiy ta'lim muassasalari" :
                           index === 2 ? "Bolalar ta'lim markazlari" :
                           "Oliy ta'lim muassasalari"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
