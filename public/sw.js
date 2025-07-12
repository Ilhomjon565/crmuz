// EduCRM Service Worker
// PWA functionality and caching

const CACHE_NAME = 'educrm-v1.0.0'
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
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icon-192x192.png',
  '/icon-512x512.png'
]

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      }
    )
  )
})

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
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