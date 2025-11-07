import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Analytics from "@/components/analytics"
import PerformanceOptimizer from "@/components/performance-optimizer"
import PerformanceMonitor from "@/components/performance-monitor"
import OfflineNotification from "@/components/offline-notification"
import OfflineBanner from "@/components/offline-banner"
import ServiceWorkerRegistration from "@/components/service-worker-registration"
import OfflinePageManager from "@/components/offline-page-manager"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim | Education CRM",
  description: "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. O'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish. EduCRM.uz - ta'lim sohasida eng yaxshi yechim.",
  keywords: [
    "o'quv markazlarni avtomatlashtiruvchi tizim",
    "o'quv markazni nazorat qiluvchi tizim", 
    "o'zbekcha o'quv markaz nazorat qiluvchi tizim",
    "educrm.uz",
    "education crm",
    "crm edu",
    "edu uz",
    "o'quv markaz crm",
    "ta'lim crm",
    "maktab boshqaruvi",
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
    "educational software",
    "edu tizim"
  ].join(", "),
  authors: [{ name: "EduCRM Team" }],
  creator: "EduCRM",
  publisher: "EduCRM.uz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://educrm.uz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. O'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish.",
    url: "https://educrm.uz",
    siteName: "EduCRM.uz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi",
    images: ["https://cdn4.cdn-telegram.org/file/auSjew79KnNHmNahNdfQJLK45u2tFnNHmsDq0Zup_JvzYY4DeHt31dAiagW3Wyj6f2ccKWkUaeeKfVvHPbjau5RXvZrtqlgAl8hVZYPqOnEEfP8e1-BFn5RqZ3YJlNZkLIFWXaNOjWYwoEWLkFlLVjwh3UtN88dHAuEyV4h_k7OsqJY-a5w3ujQXduyOiStIvx2l54WhBk1hR2PqONb4UieKKKL33mrHWQBM66hsDKpDrnkwiIXcttnU_tzYaS2xbnUcIiqbqahukYHZ9ip2JdVuoP5upvRaHe2EQ7MRj3LhQxmbVNh0zL4e5DqBuo0w9g-YftG-GTJL4HbWYM8CXw.jpg"],
    creator: "@educrm_uz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "dfpSu7tIiE7RG1ayj4hvyvolTFICRF8nr3YCbXE2h8g",
    yandex: "6e7431ff7c09fb78",
  },
  category: "education",
  classification: "Educational Software",
  other: {
    "geo.region": "UZ",
    "geo.placename": "Tashkent",
    "geo.position": "41.2995;69.2401",
    "ICBM": "41.2995, 69.2401",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="UZ" />
        <meta name="geo.placename" content="Tashkent" />
        <meta name="geo.position" content="41.2995;69.2401" />
        <meta name="ICBM" content="41.2995, 69.2401" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//mc.yandex.ru" />
        
        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105186471', 'ym');

              ym(105186471, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/105186471" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W39D5GJ3');
            `
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://educrm.uz/" />
        
        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="uz" href="https://educrm.uz/" />
        <link rel="alternate" hrefLang="en" href="https://educrm.uz/en" />
        <link rel="alternate" hrefLang="x-default" href="https://educrm.uz/" />
        
        {/* Structured Data for Education CRM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "EduCRM",
              "description": "O'quv markazlarni avtomatlashtiruvchi tizim",
              "url": "https://educrm.uz",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "UZS"
              },
              "provider": {
                "@type": "Organization",
                "name": "EduCRM",
                "url": "https://educrm.uz"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
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
                "availableLanguage": ["Uzbek", "English"]
              }
            })
          }}
        />
        
        {/* WebSite Schema */}
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
        
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Bosh sahifa",
                  "item": "https://educrm.uz"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className} style={{ overflowX: 'hidden' }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W39D5GJ3"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ServiceWorkerRegistration />
          <OfflineBanner />
          <OfflinePageManager>
            <OfflineNotification />
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              {children}
            </div>
          </OfflinePageManager>
        </ThemeProvider>
        <Analytics />
        <PerformanceOptimizer />
        <PerformanceMonitor />
      </body>
    </html>
  )
}
