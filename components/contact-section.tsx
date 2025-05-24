"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Send } from "lucide-react"
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
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const contactItems = [
    {
      icon: FaPhone,
      text: "+998 95 899 55 00",
      link: "tel:+998958995500",
      color: "text-blue-600",
      hoverColor: "hover:text-blue-600"
    },
    {
      icon: FaTelegram,
      text: "@Educrm_pro",
      link: "https://t.me/Educrm_pro",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-500"
    },
    {
      icon: FaInstagram,
      text: "@educrm_pro",
      link: "https://www.instagram.com/educrm_pro",
      color: "text-pink-600",
      hoverColor: "hover:text-pink-600"
    }
  ]

  const targetAudience = [
    { icon: FaGraduationCap, text: "O'quv markazlar" },
    { icon: FaSchool, text: "Xususiy maktablar" },
    { icon: FaChild, text: "Xususiy bog'chalar" },
    { icon: FaUniversity, text: "Xususiy OTM" }
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-20" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Biz bilan bog'laning
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-800 mb-6"
              variants={itemVariants}
            >
              EduCRM | Platform pro
            </motion.h3>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-4"
                  variants={itemVariants}
                >
                  <item.icon className={`${item.color} text-2xl`} />
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl text-gray-700 ${item.hoverColor} transition-colors duration-300`}
                  >
                    {item.text}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-blue-50 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h4 
              className="text-xl font-semibold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Kimlar uchun foydali?
            </motion.h4>
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {targetAudience.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3 group"
                  variants={itemVariants}
                >
                  <item.icon className="text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
