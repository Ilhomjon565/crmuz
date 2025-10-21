"use client"

import { useEffect } from 'react'
import Script from 'next/script'

interface SEOOptimizerProps {
  pageType?: 'home' | 'features' | 'pricing' | 'about' | 'contact' | 'blog' | 'faq'
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export default function SEOOptimizer({
  pageType = 'home',
  title,
  description,
  keywords,
  image,
  url
}: SEOOptimizerProps) {
  
  // Generate structured data based on page type
  const generateStructuredData = () => {
    const baseUrl = 'https://educrm.uz'
    const currentUrl = url || baseUrl
    
    switch (pageType) {
      case 'home':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim",
          "url": baseUrl,
          "description": "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "EduCRM",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          }
        }
      
      case 'features':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "EduCRM Features",
          "description": "O'quv markazlarni avtomatlashtiruvchi tizim xususiyatlari",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "UZS"
          },
          "featureList": [
            "O'quvchilar boshqaruvi",
            "O'qituvchilar nazorati", 
            "To'lovlar kuzatuvi",
            "Hisobotlar va tahlillar",
            "Online darslar",
            "SMS xabarnomalar"
          ]
        }
      
      case 'pricing':
        return {
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "name": "EduCRM Pricing",
          "description": "EduCRM tizimi narxlari va rejalari",
          "price": "0",
          "priceCurrency": "UZS",
          "validFrom": "2024-01-01",
          "validThrough": "2025-12-31",
          "eligibleRegion": {
            "@type": "Country",
            "name": "Uzbekistan"
          }
        }
      
      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "EduCRM Aloqa",
          "description": "EduCRM bilan bog'lanish",
          "mainEntity": {
            "@type": "Organization",
            "name": "EduCRM",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@educrm.uz",
              "availableLanguage": ["Uzbek", "English"]
            }
          }
        }
      
      default:
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title || "EduCRM",
          "description": description || "O'quv markazlarni avtomatlashtiruvchi tizim",
          "url": currentUrl
        }
    }
  }

  // Breadcrumb structured data
  const generateBreadcrumbData = () => {
    const baseUrl = 'https://educrm.uz'
    
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Bosh sahifa",
        "item": baseUrl
      }
    ]

    if (pageType !== 'home') {
      const pageNames = {
        'features': 'Xususiyatlar',
        'pricing': 'Narxlar',
        'about': 'Haqida',
        'contact': 'Aloqa',
        'blog': 'Blog',
        'faq': 'Ko\'p so\'raladigan savollar'
      }
      
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageNames[pageType] || pageType,
        "item": `${baseUrl}/${pageType}`
      })
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  }

  // FAQ structured data for FAQ page
  const generateFAQData = () => {
    if (pageType !== 'faq') return null
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "EduCRM tizimi qanday ishlaydi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EduCRM - bu o'quv markazlarni avtomatlashtiruvchi tizim bo'lib, o'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish imkonini beradi."
          }
        },
        {
          "@type": "Question", 
          "name": "EduCRM narxi qancha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EduCRM 2025 yil oxirigacha bepul va ochiq manba sifatida taqdim etiladi."
          }
        },
        {
          "@type": "Question",
          "name": "Qanday ro'yxatdan o'tish mumkin?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Veb-saytimizda ro'yxatdan o'tish formasini to'ldirib, darhol foydalanishni boshlashingiz mumkin."
          }
        }
      ]
    }
  }

  useEffect(() => {
    // Add page view tracking
    if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: title || 'EduCRM',
        page_location: url || window.location.href,
        custom_map: {
          'custom_dimension1': 'page_type',
          'custom_dimension2': pageType
        }
      })
    }
  }, [pageType, title, url])

  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="structured-data-main"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      
      <Script
        id="structured-data-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbData())
        }}
      />
      
      {pageType === 'faq' && (
        <Script
          id="structured-data-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQData())
          }}
        />
      )}

      {/* Organization Schema */}
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EduCRM",
            "url": "https://educrm.uz",
            "logo": "https://educrm.uz/logo.png",
            "description": "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UZ",
              "addressLocality": "Tashkent"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@educrm.uz",
              "availableLanguage": ["Uzbek", "English"]
            },
            "sameAs": [
              "https://t.me/educrm_uz",
              "https://instagram.com/educrm_uz"
            ]
          })
        }}
      />
    </>
  )
} 