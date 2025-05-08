import BlogSection from "@/components/blog-section"
import TestimonialSection from "@/components/testimonial-section"
import FreeTrialSection from "@/components/free-trial-section"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"
import FeaturesGrid from "@/components/features-grid"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import VideoSection from "@/components/video-section"

export default function Home() {
  return (
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

      {/* Footer */}
      <Footer />
    </main>
  )
}
