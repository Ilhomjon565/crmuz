"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { 
  Phone, 
  Send, 
  MessageCircle, 
  Users, 
  Star, 
  Shield, 
  Award,
  Clock,
  Headphones,
  HelpCircle,
  BookOpen,
  Video,
  FileText
} from "lucide-react"
import { FaPhone, FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function SupportSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      subject: "",
      message: "",
    })
  }

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Telefon",
      contact: "+998 95 899 55 00",
      link: "tel:+998958995500",
      color: "bg-green-500"
    },
    {
      icon: FaTelegram,
      title: "Telegram",
      contact: "@Educrm_pro",
      link: "https://t.me/Educrm_pro",
      color: "bg-blue-500"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      contact: "+998 95 899 55 00",
      link: "https://wa.me/998958995500",
      color: "bg-green-500"
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      contact: "@educrm_pro",
      link: "https://www.instagram.com/educrm_pro",
      color: "bg-pink-500"
    }
  ]

  const supportFeatures = [
    {
      icon: Headphones,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Har qanday vaqtda yordam oling"
    },
    {
      icon: Clock,
      title: "Tezkor javob",
      description: "O'rtacha 5 daqiqada javob"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Tez-tez so'raladigan savollar"
    },
    {
      icon: BookOpen,
      title: "Hujjatlar",
      description: "To'liq qo'llanma va hujjatlar"
    },
    {
      icon: Video,
      title: "Video darslar",
      description: "Vizual qo'llanmalar"
    },
    {
      icon: FileText,
      title: "Texnik yordam",
      description: "Muammolarni hal qilish"
    }
  ]

  const faqItems = [
    {
      question: "EduCRM tizimini qanday o'rnatish mumkin?",
      answer: "EduCRM tizimi bulutli platformada ishlaydi. Sizga faqat internet va brauzer kerak. Ro'yxatdan o'ting va darhol ishlatishni boshlang."
    },
    {
      question: "Qancha o'quvchi qo'shish mumkin?",
      answer: "Cheklanmagan miqdorda o'quvchi qo'shishingiz mumkin. Tizimimiz katta hajmdagi ma'lumotlarni oson boshqaradi."
    },
    {
      question: "Ma'lumotlarim xavfsizmi?",
      answer: "Ha, barcha ma'lumotlar SSL shifrlash va zamonaviy xavfsizlik standartlari bilan himoyalangan."
    },
    {
      question: "Mobil ilovasi bormi?",
      answer: "Ha, EduCRM tizimi barcha qurilmalarda ishlaydi - telefon, planshet va kompyuter."
    }
  ]

  return (
    <section className="py-8" id="support">
      <div className="container mx-auto px-4">

        {/* Contact Methods */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {method.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {method.contact}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Support Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Qo'llab-quvvatlash xizmatlari
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Tez-tez so'raladigan savollar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-start">
                  <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  {item.question}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Xabar yuboring
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Savollaringizni yuboring, biz sizga tez orada javob beramiz
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Ism
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ismingizni kiriting"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email manzilingizni kiriting"
                  className="w-full"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Mavzu
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Xabar mavzusi"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Xabar
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabaringizni yozing..."
                className="w-full min-h-[120px]"
                required
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold"
              >
                <Send className="h-5 w-5 mr-2" />
                Xabarni yuborish
              </Button>
            </div>
          </form>
        </div> */}

      </div>
    </section>
  )
}