// Core Layout Components
import Header from "@/components/header"
import Footer from "@/components/footer"

// Main Page Sections
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"

// Statistics and Metrics
import StatsSection from "@/components/stats-section"
import CreativeStatsSection from "@/components/creative-stats-section"

// Features and Capabilities
import FeaturesGrid from "@/components/features-grid"
import CreativeFeaturesSection from "@/components/creative-features-section"

// Promotional Components
import FreeAnnouncement from "@/components/free-announcement"
import FreeBanner from "@/components/free-banner"

// SEO and Optimization
import SEOHead from "@/components/seo-head"
import SEOOptimizer from "@/components/seo-optimizer"
import KeywordOptimizer from "@/components/keyword-optimizer"
import InternalLinks from "@/components/internal-links"

// Background and Animation Effects
import AnimatedBackground from "@/components/animated-background"
import FloatingElements from "@/components/floating-elements"

// TypeScript and Constants
import { Metadata } from "next"
import { SEO_TEXTS } from "@/lib/text-constants"

export const metadata: Metadata = {
  // Basic SEO Information
  title: SEO_TEXTS.title,
  description: SEO_TEXTS.description,
  keywords: SEO_TEXTS.keywords.join(", "),
  
  // Open Graph Meta Tags for Social Media
  openGraph: {
    title: SEO_TEXTS.title,
    description: SEO_TEXTS.description,
    url: "https://educrm.uz",
    siteName: "EduCRM.uz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SEO_TEXTS.title,
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  
  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: SEO_TEXTS.title,
    description: SEO_TEXTS.description,
    images: ["/twitter-image.jpg"],
    creator: "@educrm_uz",
  },
  
  // Canonical URL
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* SEO and Optimization Components */}
      <SEOHead />
      <SEOOptimizer pageType="home" />
      <KeywordOptimizer pageType="home" />
      
      {/* Free Announcement Modal */}
      <FreeAnnouncement />
      
      {/* Global Background Effects */}
      <AnimatedBackground />
      <FloatingElements />
      
      <main className="min-h-screen relative w-full overflow-x-hidden">
        {/* Navigation Header */}
        <Header />

        {/* Promotional Banner */}
        <FreeBanner />

        {/* Main Hero Section with Enhanced Animations */}
        <HeroSection />

        {/* Statistics and Performance Metrics */}
        <CreativeStatsSection />
        <StatsSection />

        {/* Features and Capabilities Showcase */}
        <CreativeFeaturesSection />
        <FeaturesGrid />

        {/* Contact and Support */}
        <ContactSection />

        {/* Internal Navigation Links */}
        <InternalLinks currentPage="home" />

        {/* Footer with Links and Information */}
        <Footer />
      </main>
    </div>
  )
}
