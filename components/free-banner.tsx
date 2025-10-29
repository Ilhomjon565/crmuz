"use client"

import { useState, useEffect } from 'react'
import { Gift, Star, Zap, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FreeBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show banner immediately when page loads
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-3 sm:py-4 px-3 sm:px-6 shadow-lg announcement-glow">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-1 sm:top-2 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-0 sm:bottom-1 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left side - Main message */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1">
          <div className="bg-white/20 p-1.5 sm:p-2 rounded-full">
            <Gift className="h-4 w-4 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 lg:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 animate-pulse" />
              <span className="font-bold text-sm sm:text-base lg:text-lg">🎉 KATTA YANGILIK!</span>
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 animate-pulse" />
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-semibold text-xs sm:text-sm lg:text-base">EduCRM 2025 oxirigacha</span>
              <span className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">TEKIN</span>
            </div>
          </div>
        </div>

        {/* Right side - CTA and close */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Barcha funksiyalar bepul!</span>
          </div>
          <Link href="https://director.educrm.uz/register" target="_blank">
            <Button 
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
            >
              Boshlash
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-white/20 h-6 w-6 sm:h-8 sm:w-8 p-0"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 