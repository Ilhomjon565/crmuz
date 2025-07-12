"use client"

import Head from 'next/head'

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

export default function MetaTags({
  title = "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim | Education CRM",
  description = "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. O'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish. EduCRM.uz - ta'lim sohasida eng yaxshi yechim.",
  keywords = "o'quv markazlarni avtomatlashtiruvchi tizim, o'quv markazni nazorat qiluvchi tizim, o'zbekcha o'quv markaz nazorat qiluvchi tizim, educrm.uz, education crm, crm edu, edu uz, o'quv markaz crm, ta'lim crm, maktab boshqaruvi, o'quvchilar bazasi, o'qituvchilar nazorati, to'lovlar boshqaruvi, o'quv markaz dasturi, ta'lim tizimi, uzbekistan education, school management system, student management, teacher management, payment tracking, educational software",
  image = "https://educrm.uz/og-image.jpg",
  url = "https://educrm.uz",
  type = "website",
  author = "EduCRM Team",
  publishedTime,
  modifiedTime,
  section = "Education",
  tags = ["o'quv markaz", "crm", "ta'lim", "uzbekistan", "education"]
}: MetaTagsProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="Uzbek" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="EduCRM.uz" />
      <meta property="og:locale" content="uz_UZ" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@educrm_uz" />
      <meta property="twitter:site" content="@educrm_uz" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="UZ" />
      <meta name="geo.placename" content="Tashkent" />
      <meta name="geo.position" content="41.2995;69.2401" />
      <meta name="ICBM" content="41.2995, 69.2401" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="uz" href={url} />
      <link rel="alternate" hrefLang="en" href={`${url}/en`} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//mc.yandex.ru" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
    </Head>
  )
}

// Predefined meta tags for common pages
export const HomeMetaTags = () => (
  <MetaTags />
)

export const FeaturesMetaTags = () => (
  <MetaTags
    title="Xususiyatlar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim"
    description="EduCRM ning barcha xususiyatlari: o'quvchilar boshqaruvi, o'qituvchilar nazorati, to'lovlar boshqaruvi va boshqa professional funksiyalar."
    url="https://educrm.uz/features"
    keywords="o'quv markazlarni avtomatlashtiruvchi tizim xususiyatlari, o'quv markazni nazorat qiluvchi tizim funksiyalari, educrm xususiyatlari, education crm features, o'quvchilar boshqaruvi, o'qituvchilar nazorati, to'lovlar boshqaruvi, ta'lim crm funksiyalari"
  />
)

export const PricingMetaTags = () => (
  <MetaTags
    title="Narxlar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim"
    description="EduCRM ning narxlar rejalari. O'quv markazingiz uchun eng yaxshi narxda professional CRM tizimi. Bepul sinab ko'ring!"
    url="https://educrm.uz/pricing"
    keywords="educrm narxlari, o'quv markaz crm narxi, education crm pricing, ta'lim crm narxlari, o'quv markazlarni avtomatlashtiruvchi tizim narxi, crm edu pricing, uzbekistan education crm cost"
  />
)

export const ContactMetaTags = () => (
  <MetaTags
    title="Bog'lanish - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim"
    description="EduCRM bilan bog'laning. O'quv markazingiz uchun professional CRM tizimi haqida savollaringiz bormi? Biz sizga yordam beramiz!"
    url="https://educrm.uz/contact"
    keywords="educrm bog'lanish, o'quv markaz crm aloqa, education crm contact, ta'lim crm bog'lanish, uzbekistan education crm support, educrm.uz aloqa, o'quv markazlarni avtomatlashtiruvchi tizim yordam"
  />
)

export const AboutMetaTags = () => (
  <MetaTags
    title="Haqida - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim"
    description="EduCRM haqida batafsil ma'lumot. O'zbekistondagi o'quv markazlar uchun professional CRM tizimi yaratuvchilari haqida."
    url="https://educrm.uz/about"
    keywords="educrm haqida, o'quv markaz crm kompaniya, education crm about, ta'lim crm haqida, uzbekistan education crm company, educrm.uz haqida, o'quv markazlarni avtomatlashtiruvchi tizim kompaniya"
  />
)

export const BlogMetaTags = () => (
  <MetaTags
    title="Blog - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim"
    description="EduCRM blog - o'quv markazlari boshqaruvi, ta'lim texnologiyalari va CRM tizimlari haqida foydali maqolalar."
    url="https://educrm.uz/blog"
    keywords="educrm blog, o'quv markaz crm maqolalar, education crm blog, ta'lim crm blog, uzbekistan education crm articles, educrm.uz blog, o'quv markazlarni avtomatlashtiruvchi tizim maqolalar"
  />
) 