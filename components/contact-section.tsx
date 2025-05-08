"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Send } from "lucide-react"

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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+998 90 123 45 67",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@educrm.uz",
    },
    {
      icon: MapPin,
      title: "Manzil",
      content: "Toshkent sh., Shayxontohur tumani, Navoiy ko'chasi, 36-uy",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50" id="boglanish" ref={sectionRef}>
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
              Bog'lanish
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300"
            >
              Biz bilan bog'laning
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Savollaringiz bo'lsa, biz bilan bog'laning
            </motion.p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-full bg-primary/10 dark:bg-primary/20 p-3">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold dark:text-white">{info.title}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-xl overflow-hidden h-[300px] shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0451069433876!2d69.2392!3d41.3123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQ0LjMiTiA2OcKwMTQnMjEuMSJF!5e0!3m2!1sen!2s!4v1620120000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EduCRM location"
              ></iframe>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl dark:shadow-indigo-500/30"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium dark:text-gray-300">
                  Ismingiz
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ismingizni kiriting"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium dark:text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email manzilingizni kiriting"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium dark:text-gray-300">
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Telefon raqamingizni kiriting"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium dark:text-gray-300">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Xabaringizni kiriting"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Send className="h-4 w-4" />
                Yuborish
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
