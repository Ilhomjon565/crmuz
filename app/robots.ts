import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/_next/', '/404', '/error', '/sw.js'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/_next/', '/sw.js'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/_next/', '/sw.js'],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/_next/', '/sw.js'],
      },
    ],
    sitemap: 'https://educrm.uz/sitemap.xml',
    host: 'https://educrm.uz',
  }
} 