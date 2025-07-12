/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://educrm.uz',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404', '/500', '/error', '/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
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
    additionalSitemaps: [
      'https://educrm.uz/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = config.priority
    let changefreq = config.changefreq

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path === '/features') {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path === '/pricing') {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path === '/contact') {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path === '/about') {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path === '/blog') {
      priority = 0.7
      changefreq = 'weekly'
    } else if (path === '/faq') {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path === '/privacy' || path === '/terms') {
      priority = 0.5
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
} 