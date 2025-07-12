// Global type declarations for EduCRM

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'timing_complete' | 'exception',
      targetId: string,
      config?: {
        page_title?: string
        page_location?: string
        custom_map?: Record<string, string>
        event_category?: string
        event_label?: string
        value?: number
        name?: string
        description?: string
        fatal?: boolean
      }
    ) => void
    dataLayer: any[]
    ym: (id: string, action: string, config?: any) => void
    fbq: (command: string, targetId: string, config?: any) => void
  }

  interface PerformanceNavigationTiming extends PerformanceEntry {
    loadEventStart: number
    loadEventEnd: number
    domContentLoadedEventStart: number
    domContentLoadedEventEnd: number
  }

  interface Performance {
    memory?: {
      usedJSHeapSize: number
      totalJSHeapSize: number
      jsHeapSizeLimit: number
    }
  }
}

// SEO related types
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

// Structured data types
export interface StructuredDataProps {
  type: 'website' | 'organization' | 'software' | 'localBusiness' | 'breadcrumb' | 'faq' | 'article'
  data: any
}

// Performance monitoring types
export interface PerformanceMetrics {
  lcp: number
  fid: number
  cls: number
  pageLoadTime: number
  domContentLoaded: number
  timeOnPage: number
  scrollDepth: number
  interactionCount: number
}

// Analytics types
export interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
}

// Meta tags types
export interface MetaTagsProps {
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

// FAQ types
export interface FAQItem {
  question: string
  answer: string
}

// Contact types
export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  subject?: string
}

// Pricing types
export interface PricingPlan {
  name: string
  price: number
  currency: string
  period: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonLink: string
}

// Feature types
export interface Feature {
  title: string
  description: string
  icon: string
  category: string
}

// Testimonial types
export interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  avatar?: string
  rating: number
}

// Blog post types
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  image?: string
  readTime: number
}

// Navigation types
export interface NavigationItem {
  label: string
  href: string
  external?: boolean
  children?: NavigationItem[]
}

// Theme types
export interface Theme {
  name: string
  value: 'light' | 'dark' | 'system'
}

// API response types
export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Health check types
export interface HealthCheck {
  status: string
  timestamp: string
  uptime: number
  environment: string
  version: string
  service: string
  checks: {
    database: string
    cache: string
    external_services: string
  }
}

export {} 