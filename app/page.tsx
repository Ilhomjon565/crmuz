import BlogSection from "@/components/blog-section"
import TestimonialSection from "@/components/testimonial-section"
import FreeTrialSection from "@/components/free-trial-section"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"
import FeaturesGrid from "@/components/features-grid"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import VideoSection from "@/components/video-section"
import ContactSection from "@/components/contact-section"
import SEOHead from "@/components/seo-head"
import { Metadata } from "next"

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
    "educational software"
  ].join(", "),
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
    images: ["/twitter-image.jpg"],
    creator: "@educrm_uz",
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div>
      <SEOHead />
      <main className="min-h-screen">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Video Section */}
      <VideoSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Free Trial Section */}
      <FreeTrialSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
    </div>
  )
}
