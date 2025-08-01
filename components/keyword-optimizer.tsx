"use client"

import { useEffect } from 'react'

interface KeywordOptimizerProps {
  pageType?: 'home' | 'features' | 'pricing' | 'about' | 'contact' | 'blog' | 'faq'
}

export default function KeywordOptimizer({ pageType = 'home' }: KeywordOptimizerProps) {
  
  // Comprehensive keyword analysis for Uzbek education market
  const keywordAnalysis = {
    primary: [
      "o'quv markazlarni avtomatlashtiruvchi tizim",
      "o'quv markazni nazorat qiluvchi tizim",
      "o'zbekcha o'quv markaz nazorat qiluvchi tizim",
      "educrm.uz",
      "education crm",
      "crm edu",
      "edu uz",
      "o'quv markaz crm",
      "ta'lim crm",
      "maktab boshqaruvi"
    ],
    secondary: [
      "o'quvchilar bazasi",
      "o'qituvchilar nazorati", 
      "to'lovlar boshqaruvi",
      "o'quv markaz dasturi",
      "ta'lim tizimi",
      "uzbekistan education",
      "school management system",
      "student management",
      "teacher management",
      "payment tracking",
      "educational software"
    ],
    longTail: [
      "o'zbekistonda o'quv markaz uchun crm tizimi",
      "o'quv markazni avtomatlashtirish dasturi",
      "o'quvchilar va o'qituvchilar nazorat qilish tizimi",
      "to'lovlarni kuzatish dasturi",
      "ta'lim markazi boshqaruvi",
      "o'quv markaz hisobotlari",
      "online o'quv markaz tizimi",
      "o'quv markaz uchun bepul crm",
      "o'zbekcha ta'lim dasturi",
      "o'quv markaz avtomatlashtirish"
    ],
    local: [
      "toshkent o'quv markazlari",
      "o'zbekiston ta'lim tizimi",
      "toshkentda o'quv markaz",
      "o'zbekistonda ta'lim dasturi",
      "toshkent o'quv markaz crm",
      "o'zbekcha ta'lim dasturi",
      "toshkent ta'lim markazi",
      "o'zbekiston o'quv markazlari"
    ]
  }

  // Page-specific keyword optimization
  const getPageKeywords = () => {
    switch (pageType) {
      case 'home':
        return [
          ...keywordAnalysis.primary,
          ...keywordAnalysis.secondary.slice(0, 5)
        ]
      case 'features':
        return [
          "o'quv markaz xususiyatlari",
          "crm tizimi imkoniyatlari",
          "o'quv markaz funksiyalari",
          "ta'lim dasturi xususiyatlari",
          ...keywordAnalysis.secondary
        ]
      case 'pricing':
        return [
          "o'quv markaz crm narxi",
          "ta'lim dasturi narxi",
          "crm tizimi bahosi",
          "o'quv markaz dasturi narxi",
          "bepul o'quv markaz crm",
          "o'zbekcha crm narxi"
        ]
      case 'about':
        return [
          "educrm haqida",
          "o'quv markaz crm kompaniyasi",
          "ta'lim dasturi ishlab chiqaruvchi",
          "o'zbekcha crm dasturchilari",
          "educrm jamoasi"
        ]
      case 'contact':
        return [
          "educrm bilan bog'lanish",
          "o'quv markaz crm yordam",
          "ta'lim dasturi qo'llab-quvvatlash",
          "crm tizimi yordam",
          "educrm aloqa"
        ]
      case 'blog':
        return [
          "o'quv markaz maqolalari",
          "ta'lim dasturi yangiliklari",
          "crm tizimi ma'lumotlari",
          "o'quv markaz maslahatlari",
          "ta'lim texnologiyalari"
        ]
      case 'faq':
        return [
          "o'quv markaz crm savollari",
          "ta'lim dasturi savollari",
          "crm tizimi ko'p so'raladigan savollar",
          "educrm yordam",
          "o'quv markaz dasturi savollari"
        ]
      default:
        return keywordAnalysis.primary
    }
  }

  // Generate meta keywords for the page
  const generateMetaKeywords = () => {
    const pageKeywords = getPageKeywords()
    return pageKeywords.join(', ')
  }

  // Generate page-specific content suggestions
  const generateContentSuggestions = () => {
    const suggestions = {
      home: {
        h1: "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim",
        h2: [
          "O'quv Markazlaringizni Avtomatlashtiring",
          "Professional CRM Tizimi",
          "Barcha Funksiyalar Bepul"
        ],
        content: [
          "O'quvchilar boshqaruvi",
          "O'qituvchilar nazorati",
          "To'lovlar kuzatuvi",
          "Hisobotlar va tahlillar"
        ]
      },
      features: {
        h1: "EduCRM Xususiyatlari",
        h2: [
          "O'quvchilar Boshqaruvi",
          "O'qituvchilar Nazorati",
          "To'lovlar Kuzatuvi",
          "Hisobotlar va Tahlillar"
        ]
      },
      pricing: {
        h1: "EduCRM Narxlari",
        h2: [
          "2025 Yil Oxirigacha Bepul",
          "Barcha Funksiyalar Ochiq",
          "Hech Qanday Cheklov Yo'q"
        ]
      }
    }
    
    return suggestions[pageType] || suggestions.home
  }

  useEffect(() => {
    // Update meta keywords dynamically
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', generateMetaKeywords())
    }

    // Add structured data for keywords
    const keywordStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `EduCRM ${pageType.charAt(0).toUpperCase() + pageType.slice(1)}`,
      "keywords": generateMetaKeywords(),
      "about": {
        "@type": "Thing",
        "name": "Educational CRM System"
      }
    }

    // Inject structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(keywordStructuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [pageType])

  return null // This component doesn't render anything visible
} 