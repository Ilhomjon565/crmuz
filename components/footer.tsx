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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} EduCRM. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
