"use client"

import Head from 'next/head'

export default function SEOHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim | Education CRM</title>
      <meta name="title" content="EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim | Education CRM" />
      <meta name="description" content="O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. O'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish. EduCRM.uz - ta'lim sohasida eng yaxshi yechim." />
      <meta name="keywords" content="o'quv markazlarni avtomatlashtiruvchi tizim, o'quv markazni nazorat qiluvchi tizim, o'zbekcha o'quv markaz nazorat qiluvchi tizim, educrm.uz, education crm, crm edu, edu uz, o'quv markaz crm, ta'lim crm, maktab boshqaruvi, o'quvchilar bazasi, o'qituvchilar nazorati, to'lovlar boshqaruvi, o'quv markaz dasturi, ta'lim tizimi, uzbekistan education, school management system, student management, teacher management, payment tracking, educational software" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Uzbek" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="EduCRM Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://educrm.uz/" />
      <meta property="og:title" content="EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim" />
      <meta property="og:description" content="O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. O'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish." />
      <meta property="og:image" content="https://educrm.uz/og-image.jpg" />
      <meta property="og:site_name" content="EduCRM.uz" />
      <meta property="og:locale" content="uz_UZ" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://educrm.uz/" />
      <meta property="twitter:title" content="EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim" />
      <meta property="twitter:description" content="O'zbekistondagi o'quv markazlar uchun professional CRM tizimi" />
      <meta property="twitter:image" content="https://educrm.uz/twitter-image.jpg" />
      <meta property="twitter:creator" content="@educrm_uz" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="UZ" />
      <meta name="geo.placename" content="Tashkent" />
      <meta name="geo.position" content="41.2995;69.2401" />
      <meta name="ICBM" content="41.2995, 69.2401" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://educrm.uz/" />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="uz" href="https://educrm.uz/" />
      <link rel="alternate" hrefLang="en" href="https://educrm.uz/en" />
      <link rel="alternate" hrefLang="x-default" href="https://educrm.uz/" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "EduCRM",
            "url": "https://educrm.uz",
            "description": "O'quv markazlarni avtomatlashtiruvchi tizim",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://educrm.uz/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "EduCRM",
            "description": "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi",
            "url": "https://educrm.uz",
            "telephone": "+998-XX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UZ",
              "addressLocality": "Tashkent",
              "addressRegion": "Tashkent"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.2995,
              "longitude": 69.2401
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "Country",
              "name": "Uzbekistan"
            }
          })
        }}
      />
    </Head>
  )
} 