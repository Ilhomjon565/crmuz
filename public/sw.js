// EduCRM Service Worker
// PWA functionality and offline caching

const CACHE_NAME = 'educrm-v1.1.0'
const STATIC_CACHE = 'educrm-static-v1.1.0'
const DYNAMIC_CACHE = 'educrm-dynamic-v1.1.0'

const urlsToCache = [
  '/',
  '/features',
  '/pricing',
  '/contact',
  '/about',
  '/blog',
  '/faq',
  '/privacy',
  '/terms',
  '/offline-test',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icon-192x192.png',
  '/icon-512x512.png'
]

// API endpoints that should be cached
const API_CACHE_PATTERNS = [
  /\/api\/health/,
  /\/api\/get-lid-users/
]

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Opened static cache')
        return cache.addAll(urlsToCache)
      }),
      caches.open(DYNAMIC_CACHE).then((cache) => {
        console.log('Opened dynamic cache')
        return cache
      })
    ])
  )
  // Skip waiting to activate immediately
  self.skipWaiting()
})

// Fetch event with offline support
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request))
    return
  }

  // Handle CSS, JS and other assets
  if (url.pathname.includes('/_next/static/') || 
      url.pathname.endsWith('.css') || 
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.woff2') ||
      url.pathname.endsWith('.woff') ||
      url.pathname.endsWith('.ttf')) {
    event.respondWith(handleAssetRequest(request))
    return
  }

  // Handle static assets and pages
  event.respondWith(handleStaticRequest(request))
})

// Handle API requests with offline support
async function handleApiRequest(request) {
  const url = new URL(request.url)
  
  // Check if this API should be cached
  const shouldCache = API_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))
  
  if (shouldCache) {
    try {
      // Try network first
      const networkResponse = await fetch(request)
      if (networkResponse.ok) {
        // Cache successful responses
        const cache = await caches.open(DYNAMIC_CACHE)
        cache.put(request, networkResponse.clone())
        return networkResponse
      }
    } catch (error) {
      // Network failed, try cache
      const cachedResponse = await caches.match(request)
      if (cachedResponse) {
        return cachedResponse
      }
      
      // Return offline response for API calls
      return new Response(
        JSON.stringify({ 
          error: 'Internetga bog\'lanmagansiz',
          offline: true 
        }),
        { 
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }
  }
  
  // For non-cacheable APIs, try network or return error
  try {
    return await fetch(request)
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: 'Internetga bog\'lanmagansiz',
        offline: true 
      }),
      { 
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Handle static requests with cache-first strategy
async function handleStaticRequest(request) {
  const url = new URL(request.url)
  
  // Skip caching for external requests
  if (url.origin !== location.origin) {
    return fetch(request)
  }
  
  try {
    // Try cache first
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // If not in cache, fetch from network
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    // If both cache and network fail, return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlinePage = await caches.match('/')
      if (offlinePage) {
        return offlinePage
      }
    }
    
    throw error
  }
}

// Enhanced cache strategy for CSS and JS files
async function handleAssetRequest(request) {
  const url = new URL(request.url)
  
  // Handle CSS and JS files with aggressive caching
  if (url.pathname.includes('/_next/static/') || 
      url.pathname.endsWith('.css') || 
      url.pathname.endsWith('.js')) {
    
    try {
      // Try cache first
      const cachedResponse = await caches.match(request)
      if (cachedResponse) {
        return cachedResponse
      }
      
      // Fetch from network
      const networkResponse = await fetch(request)
      
      if (networkResponse.ok) {
        // Cache for longer period
        const cache = await caches.open(STATIC_CACHE)
        cache.put(request, networkResponse.clone())
      }
      
      return networkResponse
    } catch (error) {
      // Return cached version if available
      const cachedResponse = await caches.match(request)
      if (cachedResponse) {
        return cachedResponse
      }
      throw error
    }
  }
  
  // For other requests, use default strategy
  return handleStaticRequest(request)
}

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  // Take control of all clients immediately
  self.clients.claim()
})

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

// Push notification
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'EduCRM yangiliklar',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ko\'rish',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Yopish',
        icon: '/icon-192x192.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('EduCRM', options)
  )
})

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Background sync function
function doBackgroundSync() {
  // Implement background sync logic here
  console.log('Background sync completed')
} 