"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import { FaPhone, FaTelegram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">EduCRM | Platform pro</h3>
            <p className="text-sm">
              LMS dasturlar o'quv tizimini avtomatlashtirish va tizimlashtirishga yordam beradi.
              Ta'lim tashkilotini raqamlarda boshqarishga yordam beradi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Imkoniyatlar
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Fikrlar
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Hujjatlar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Maxfiylik Siyosati
                </Link>
              </li>
              <li>
                <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Foydalanish Shartlari
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Cookie Siyosati
                </Link>
              </li>
              <li>
                <Link href="/security" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Xavfsizlik Siyosati
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Bog'lanish</h3>
            <div className="space-y-3">
              <a 
                href="tel:+998958995500" 
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <FaPhone className="text-blue-500" />
                <span>+998 95 899 55 00</span>
              </a>
              <a 
                href="https://t.me/Educrm_pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <FaTelegram className="text-blue-400" />
                <span>@Educrm_pro</span>
              </a>
              <a 
                href="mailto:info@educrm.uz" 
                className="text-sm hover:text-white transition-colors block"
              >
                info@educrm.uz
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} EduCRM.uz. Barcha huquqlar himoyalangan.</p>
            <div className="flex gap-4">
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Maxfiylik
              </Link>
              <span>•</span>
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Shartlar
              </Link>
              <span>•</span>
              <Link href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Cookie
              </Link>
              <span>•</span>
              <Link href="/security" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Xavfsizlik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
