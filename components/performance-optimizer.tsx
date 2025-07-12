"use client"

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/api/health', as: 'fetch', crossorigin: 'anonymous' },
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' },
    ]

    preloadLinks.forEach(({ href, as, crossorigin }) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = as
      if (crossorigin) link.crossOrigin = crossorigin
      document.head.appendChild(link)
    })

    // Prefetch important pages
    const prefetchPages = [
      '/features',
      '/pricing',
      '/contact',
      '/about',
      '/blog',
      '/faq'
    ]

    prefetchPages.forEach(page => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = page
      document.head.appendChild(link)
    })

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Navigation timing
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        console.log('Page Load Time:', navigationEntry.loadEventEnd - navigationEntry.loadEventStart)
        console.log('DOM Content Loaded:', navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart)
      }
    }

    // Service Worker registration for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration)
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError)
          })
      })
    }

    // Image optimization
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy'
      }
      if (!img.decoding) {
        img.decoding = 'async'
      }
    })

    // Font optimization
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        console.log('Fonts loaded')
      })
    }

    // Cleanup function
    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor user interactions
    const handleUserInteraction = () => {
      // Track user engagement
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'user_interaction', {
          event_category: 'engagement',
          event_label: 'page_interaction'
        })
      }
    }

    // Monitor scroll depth
    const handleScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      
      if (scrollDepth > 25 && scrollDepth <= 50) {
        console.log('25% scroll depth reached')
      } else if (scrollDepth > 50 && scrollDepth <= 75) {
        console.log('50% scroll depth reached')
      } else if (scrollDepth > 75) {
        console.log('75% scroll depth reached')
      }
    }

    // Monitor time on page
    let startTime = Date.now()
    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTime
      console.log('Time on page:', timeOnPage)
    }

    // Add event listeners
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('scroll', handleScroll)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
}

// Resource hints for better performance
export function ResourceHints() {
  return (
    <>
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//mc.yandex.ru" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/api/health" as="fetch" crossOrigin="anonymous" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
    </>
  )
} 