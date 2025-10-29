"use client"

import { useState, useEffect } from 'react'
import { X, Gift, Calendar, Star, Sparkles, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FREE_ANNOUNCEMENT_TEXTS } from '@/lib/text-constants'

export default function FreeAnnouncement() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Show announcement for everyone every time they visit (no cookies saved)
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsExpanded(true)
    }, 1500)
    
    // ESC tugmasi bosilganda modalni yopish
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded) {
        handleClose()
      }
    }
    
    document.addEventListener('keydown', handleEscKey)
    
    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isExpanded])

  const handleClose = () => {
    setIsVisible(false)
    setIsExpanded(false)
  }

  const handleMinimize = () => {
    setIsExpanded(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Full-screen overlay for expanded view */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-300">
          <Card className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-2 sm:border-4 border-green-300 shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            <CardContent className="p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>
              
              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 hover:bg-red-100 z-10"
              >
                <X className="h-4 w-4 sm:h-6 sm:w-6" />
              </Button>

              {/* Header */}
              <div className="text-center mb-4 sm:mb-6 lg:mb-8 relative z-10">
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-500 animate-bounce" />
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {FREE_ANNOUNCEMENT_TEXTS.title}
                  </h2>
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-500 animate-bounce" />
                </div>
                <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-1 sm:mb-2">
                  {FREE_ANNOUNCEMENT_TEXTS.subtitle} <span className="font-bold text-green-600 text-base sm:text-xl lg:text-2xl">{FREE_ANNOUNCEMENT_TEXTS.period}</span>
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-2 sm:mb-4">
                  <span className="bg-green-100 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base lg:text-lg">{FREE_ANNOUNCEMENT_TEXTS.free}</span> va <span className="bg-blue-100 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base lg:text-lg">{FREE_ANNOUNCEMENT_TEXTS.open}</span>!
                </p>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full inline-block">
                  <span className="font-bold text-sm sm:text-base">{FREE_ANNOUNCEMENT_TEXTS.allFeatures}</span>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8 relative z-10">
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="bg-green-500 p-2 sm:p-3 rounded-full mr-2 sm:mr-4">
                      <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">Barcha funksiyalar bepul</h3>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">O'quvchilar, o'qituvchilar, to'lovlar va barcha boshqa imkoniyatlar cheklovsiz</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="bg-blue-500 p-2 sm:p-3 rounded-full mr-2 sm:mr-4">
                      <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">2025 yil oxirigacha</h3>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Hozirdan 2025 yil 31 dekabrigacha cheklovsiz foydalaning</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="bg-purple-500 p-2 sm:p-3 rounded-full mr-2 sm:mr-4">
                      <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">Darhol boshlang</h3>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Ro'yxatdan o'ting va darhol CRM tizimidan foydalanishni boshlang</p>
                </div>
              </div>
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 relative z-10">
                <Button 
                  onClick={handleClose}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  🚀 Tushundim, boshlaylik!
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleMinimize}
                  className="flex-1 border-2 border-gray-300 hover:border-gray-400 font-semibold py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg"
                >
                  {FREE_ANNOUNCEMENT_TEXTS.minimizeButton}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Minimized floating banner */}
      {!isExpanded && isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9998] animate-in slide-in-from-bottom-4 duration-300">
          <Card className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white shadow-2xl border-0 max-w-[280px] sm:max-w-sm hover:scale-105 transition-transform cursor-pointer" onClick={() => setIsExpanded(true)}>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-full">
                    <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">🎉 CRM TEKIN!</p>
                    <p className="text-xs opacity-90">2025 oxirigacha</p>
                    <p className="text-xs font-semibold">Barcha funksiyalar bepul!</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsExpanded(true)
                    }}
                    className="text-white hover:bg-white/20 h-6 w-6 sm:h-8 sm:w-8 p-0"
                  >
                    <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClose()
                    }}
                    className="text-white hover:bg-white/20 h-6 w-6 sm:h-8 sm:w-8 p-0"
                  >
                    <X className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
} 