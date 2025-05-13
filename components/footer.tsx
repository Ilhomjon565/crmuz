"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-slate-50 dark:from-indigo-950/30 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
                <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-xl -z-10"></div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
                EduCRM
              </span>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-md">
              EduCRM - o'quv markazlari uchun maxsus ishlab chiqilgan CRM tizimi. O'quv jarayonini samarali boshqarish
              uchun barcha kerakli funksiyalar.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800 dark:text-white">Mahsulot</h4>
            <ul className="space-y-3">
              {[
                { name: "Xususiyatlar", href: "#features" },
                { name: "Narxlar", href: "#pricing" },
                { name: "Demo", href: "#demo" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800 dark:text-white">Resurslar</h4>
            <ul className="space-y-3">
              {[
                { name: "Blog", href: "#blog" },
                { name: "Qo'llanma", href: "#" },
                { name: "Webinarlar", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800 dark:text-white">Kompaniya</h4>
            <ul className="space-y-3">
              {[
                { name: "Biz haqimizda", href: "#" },
                { name: "Bog'lanish", href: "#" },
                { name: "Hamkorlar", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4 text-slate-800 dark:text-white">
              Yangiliklardan xabardor bo'ling
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Eng so'nggi yangiliklar va maxsus takliflarni olish uchun obuna bo'ling
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email manzilingiz"
                className="rounded-r-none border-r-0 focus-visible:ring-indigo-600 dark:focus-visible:ring-indigo-400 dark:bg-slate-800 dark:border-slate-700"
              />
              <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 group">
                <span>Obuna bo'lish</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EduCRM. Barcha huquqlar himoyalangan.
          </div>

          <div className="flex space-x-6">
            {[
              { name: "Maxfiylik siyosati", href: "#" },
              { name: "Foydalanish shartlari", href: "#" },
              { name: "Yordam", href: "#support" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
