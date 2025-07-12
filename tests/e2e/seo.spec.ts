import { test, expect } from '@playwright/test'

test.describe('SEO Tests', () => {
  test('should have proper meta tags on all pages', async ({ page }) => {
    const pages = [
      { url: '/', title: /EduCRM/ },
      { url: '/features', title: /Xususiyatlar/ },
      { url: '/pricing', title: /Narxlar/ },
      { url: '/contact', title: /Bog'lanish/ },
      { url: '/about', title: /Haqida/ },
      { url: '/blog', title: /Blog/ },
      { url: '/faq', title: /Ko'p so'raladigan savollar/ },
      { url: '/privacy', title: /Maxfiylik siyosati/ },
      { url: '/terms', title: /Foydalanish shartlari/ },
    ]

    for (const pageInfo of pages) {
      await page.goto(pageInfo.url)
      
      // Check title
      await expect(page).toHaveTitle(pageInfo.title)
      
      // Check meta description
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toBeVisible()
      const description = await metaDescription.getAttribute('content')
      expect(description).toBeTruthy()
      expect(description!.length).toBeGreaterThan(50)
      expect(description!.length).toBeLessThan(160)
      
      // Check canonical URL
      const canonical = page.locator('link[rel="canonical"]')
      await expect(canonical).toBeVisible()
      await expect(canonical).toHaveAttribute('href', `https://educrm.uz${pageInfo.url}`)
    }
  })

  test('should have proper Open Graph tags', async ({ page }) => {
    await page.goto('/')
    
    const ogTags = [
      'og:title',
      'og:description',
      'og:url',
      'og:type',
      'og:site_name',
      'og:locale',
    ]
    
    for (const tag of ogTags) {
      const ogTag = page.locator(`meta[property="${tag}"]`)
      await expect(ogTag).toBeVisible()
      const content = await ogTag.getAttribute('content')
      expect(content).toBeTruthy()
    }
    
    // Check OG image
    const ogImage = page.locator('meta[property="og:image"]')
    await expect(ogImage).toBeVisible()
    const imageUrl = await ogImage.getAttribute('content')
    expect(imageUrl).toContain('https://educrm.uz')
  })

  test('should have proper Twitter Card tags', async ({ page }) => {
    await page.goto('/')
    
    const twitterTags = [
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'twitter:creator',
      'twitter:site',
    ]
    
    for (const tag of twitterTags) {
      const twitterTag = page.locator(`meta[name="${tag}"]`)
      await expect(twitterTag).toBeVisible()
      const content = await twitterTag.getAttribute('content')
      expect(content).toBeTruthy()
    }
  })

  test('should have structured data on all pages', async ({ page }) => {
    const pages = ['/', '/features', '/pricing', '/contact', '/about', '/blog', '/faq']
    
    for (const url of pages) {
      await page.goto(url)
      
      // Check for structured data scripts
      const structuredDataScripts = page.locator('script[type="application/ld+json"]')
      await expect(structuredDataScripts).toHaveCount(1)
      
      // Verify structured data is valid JSON
      const scriptContent = await structuredDataScripts.first().innerHTML()
      expect(() => JSON.parse(scriptContent)).not.toThrow()
    }
  })

  test('should have proper robots meta tag', async ({ page }) => {
    await page.goto('/')
    
    const robotsMeta = page.locator('meta[name="robots"]')
    await expect(robotsMeta).toBeVisible()
    const content = await robotsMeta.getAttribute('content')
    expect(content).toContain('index')
    expect(content).toContain('follow')
  })

  test('should have proper language and hreflang attributes', async ({ page }) => {
    await page.goto('/')
    
    // Check HTML lang attribute
    await expect(page.locator('html')).toHaveAttribute('lang', 'uz')
    
    // Check hreflang attributes
    const hreflangTags = [
      { lang: 'uz', href: 'https://educrm.uz/' },
      { lang: 'en', href: 'https://educrm.uz/en' },
      { lang: 'x-default', href: 'https://educrm.uz/' },
    ]
    
    for (const tag of hreflangTags) {
      const hreflang = page.locator(`link[hreflang="${tag.lang}"]`)
      await expect(hreflang).toBeVisible()
      await expect(hreflang).toHaveAttribute('href', tag.href)
    }
  })

  test('should have proper favicon and app icons', async ({ page }) => {
    await page.goto('/')
    
    const iconSelectors = [
      'link[rel="icon"]',
      'link[rel="apple-touch-icon"]',
      'link[rel="manifest"]',
    ]
    
    for (const selector of iconSelectors) {
      const icon = page.locator(selector)
      await expect(icon).toBeVisible()
      const href = await icon.getAttribute('href')
      expect(href).toBeTruthy()
    }
  })

  test('should have proper schema.org markup', async ({ page }) => {
    await page.goto('/')
    
    // Check for Organization schema
    const organizationSchema = page.locator('script[type="application/ld+json"]:has-text("Organization")')
    await expect(organizationSchema).toBeVisible()
    
    // Check for WebSite schema
    const websiteSchema = page.locator('script[type="application/ld+json"]:has-text("WebSite")')
    await expect(websiteSchema).toBeVisible()
    
    // Check for SoftwareApplication schema
    const softwareSchema = page.locator('script[type="application/ld+json"]:has-text("SoftwareApplication")')
    await expect(softwareSchema).toBeVisible()
  })

  test('should have proper breadcrumb structure', async ({ page }) => {
    await page.goto('/features')
    
    // Check for breadcrumb schema
    const breadcrumbSchema = page.locator('script[type="application/ld+json"]:has-text("BreadcrumbList")')
    await expect(breadcrumbSchema).toBeVisible()
  })

  test('should have proper FAQ schema on FAQ page', async ({ page }) => {
    await page.goto('/faq')
    
    // Check for FAQ schema
    const faqSchema = page.locator('script[type="application/ld+json"]:has-text("FAQPage")')
    await expect(faqSchema).toBeVisible()
  })

  test('should have proper performance optimizations', async ({ page }) => {
    await page.goto('/')
    
    // Check for preconnect links
    const preconnectLinks = page.locator('link[rel="preconnect"]')
    await expect(preconnectLinks).toHaveCount(2) // Google Fonts
    
    // Check for DNS prefetch
    const dnsPrefetch = page.locator('link[rel="dns-prefetch"]')
    await expect(dnsPrefetch).toHaveCount(4) // Analytics services
    
    // Check for preload
    const preload = page.locator('link[rel="preload"]')
    await expect(preload).toHaveCount(2) // Critical resources
  })

  test('should have proper security headers', async ({ page }) => {
    const response = await page.goto('/')
    
    // Check for security headers
    const headers = response!.headers()
    
    // These headers should be set by the server
    expect(headers['x-frame-options']).toBeTruthy()
    expect(headers['x-content-type-options']).toBeTruthy()
    expect(headers['referrer-policy']).toBeTruthy()
  })

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/')
    
    // Check for proper alt attributes on images
    const images = page.locator('img')
    for (let i = 0; i < await images.count(); i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt).toBeTruthy()
    }
    
    // Check for proper ARIA labels
    const buttons = page.locator('button')
    for (let i = 0; i < await buttons.count(); i++) {
      const ariaLabel = await buttons.nth(i).getAttribute('aria-label')
      const text = await buttons.nth(i).textContent()
      expect(ariaLabel || text).toBeTruthy()
    }
    
    // Check for proper heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6')
    let previousLevel = 0
    for (let i = 0; i < await headings.count(); i++) {
      const tagName = await headings.nth(i).evaluate(el => el.tagName.toLowerCase())
      const level = parseInt(tagName.charAt(1))
      expect(level - previousLevel).toBeLessThanOrEqual(1)
      previousLevel = level
    }
  })

  test('should have proper internal linking structure', async ({ page }) => {
    await page.goto('/')
    
    // Check for internal links
    const internalLinks = page.locator('a[href^="/"]')
    await expect(internalLinks).toHaveCount(10) // Expected number of internal links
    
    // Check that important pages are linked
    const importantPages = ['/features', '/pricing', '/contact', '/about', '/blog']
    for (const importantPage of importantPages) {
      const link = page.locator(`a[href="${importantPage}"]`)
      await expect(link).toBeVisible()
    }
  })
}) 