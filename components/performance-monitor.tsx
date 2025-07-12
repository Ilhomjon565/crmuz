"use client"

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Largest Contentful Paint (LCP)
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime
            console.log('LCP:', lcp)
            
            // Send to analytics
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(lcp)
              })
            }
          }
          
          // First Input Delay (FID)
          if (entry.entryType === 'first-input') {
            const fid = entry.processingStart - entry.startTime
            console.log('FID:', fid)
            
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(fid)
              })
            }
          }
          
          // Cumulative Layout Shift (CLS)
          if (entry.entryType === 'layout-shift') {
            const cls = entry.value
            console.log('CLS:', cls)
            
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(cls * 1000)
              })
            }
          }
        }
      })

      observer.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      })
    }

    // Navigation timing
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const pageLoadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        const domContentLoaded = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart
        
        console.log('Page Load Time:', pageLoadTime)
        console.log('DOM Content Loaded:', domContentLoaded)
        
        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'page_load',
            value: Math.round(pageLoadTime)
          })
          
          window.gtag('event', 'timing_complete', {
            name: 'dom_content_loaded',
            value: Math.round(domContentLoaded)
          })
        }
      }
    }

    // User interaction monitoring
    let interactionCount = 0
    const handleUserInteraction = () => {
      interactionCount++
      
      if (interactionCount === 1) {
        console.log('First user interaction')
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'user_interaction', {
            event_category: 'engagement',
            event_label: 'first_interaction'
          })
        }
      }
    }

    // Scroll depth monitoring
    let maxScrollDepth = 0
    const handleScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        
        // Track scroll milestones
        if (scrollDepth >= 25 && scrollDepth < 50) {
          console.log('25% scroll depth reached')
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          console.log('50% scroll depth reached')
        } else if (scrollDepth >= 75) {
          console.log('75% scroll depth reached')
        }
      }
    }

    // Time on page monitoring
    const startTime = Date.now()
    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTime
      console.log('Time on page:', timeOnPage)
      
      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'time_on_page',
          value: Math.round(timeOnPage / 1000)
        })
      }
    }

    // Error monitoring
    const handleError = (event: ErrorEvent) => {
      console.error('JavaScript Error:', event.error)
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: event.error?.message || 'Unknown error',
          fatal: false
        })
      }
    }

    // Add event listeners
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('scroll', handleScroll)
    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('error', handleError)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('error', handleError)
    }
  }, [])

  return null
}

// Performance metrics hook
export function usePerformanceMetrics() {
  useEffect(() => {
    // Monitor resource loading
    const resourceEntries = performance.getEntriesByType('resource')
    const slowResources = resourceEntries.filter(entry => entry.duration > 3000)
    
    if (slowResources.length > 0) {
      console.warn('Slow resources detected:', slowResources)
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
      })
    }
  }, [])
} 