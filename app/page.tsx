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
import FreeAnnouncement from "@/components/free-announcement"
import FreeBanner from "@/components/free-banner"
import SEOOptimizer from "@/components/seo-optimizer"
import KeywordOptimizer from "@/components/keyword-optimizer"
import InternalLinks from "@/components/internal-links"
import { Metadata } from "next"
import { SEO_TEXTS } from "@/lib/text-constants"

export const metadata: Metadata = {
  title: SEO_TEXTS.title,
  description: SEO_TEXTS.description,
  keywords: SEO_TEXTS.keywords.join(", "),
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
  twitter: {
    card: "summary_large_image",
    title: SEO_TEXTS.title,
    description: SEO_TEXTS.description,
    images: ["/twitter-image.jpg"],
    creator: "@educrm_uz",
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <SEOHead />
      <SEOOptimizer pageType="home" />
      <KeywordOptimizer pageType="home" />
      <FreeAnnouncement />
      <main className="min-h-screen" style={{ width: '100%', overflowX: 'hidden' }}>
        {/* Header */}
        <Header />

        {/* Free Banner */}
        <FreeBanner />

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

        {/* Internal Links */}
        <InternalLinks currentPage="home" />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
