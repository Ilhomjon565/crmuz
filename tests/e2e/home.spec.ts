import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load home page successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check page title
    await expect(page).toHaveTitle(/EduCRM/)
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /O'zbekistondagi o'quv markazlar/)
    
    // Check if main content is visible
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
  })

  test('should have proper SEO meta tags', async ({ page }) => {
    await page.goto('/')
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', /EduCRM/)
    
    const ogDescription = page.locator('meta[property="og:description"]')
    await expect(ogDescription).toHaveAttribute('content', /O'quv markazlarni avtomatlashtiruvchi/)
    
    const ogUrl = page.locator('meta[property="og:url"]')
    await expect(ogUrl).toHaveAttribute('content', 'https://educrm.uz')
    
    // Check Twitter Card tags
    const twitterCard = page.locator('meta[name="twitter:card"]')
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
  })

  test('should have structured data', async ({ page }) => {
    await page.goto('/')
    
    // Check for structured data scripts
    const structuredDataScripts = page.locator('script[type="application/ld+json"]')
    await expect(structuredDataScripts).toHaveCount(4) // Website, Organization, Software, Breadcrumb
  })

  test('should have working navigation', async ({ page }) => {
    await page.goto('/')
    
    // Check navigation links
    const navLinks = [
      { href: '/features', text: /Xususiyatlar/ },
      { href: '/pricing', text: /Narxlar/ },
      { href: '/contact', text: /Bog'lanish/ },
      { href: '/about', text: /Haqida/ },
      { href: '/blog', text: /Blog/ },
    ]
    
    for (const link of navLinks) {
      const navLink = page.locator(`a[href="${link.href}"]`)
      await expect(navLink).toBeVisible()
      await expect(navLink).toHaveText(link.text)
    }
  })

  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/')
    
    // Check for main heading
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    
    // Check for section headings
    const h2s = page.locator('h2')
    await expect(h2s).toHaveCount(5) // Expected number of h2 elements
  })

  test('should be accessible', async ({ page }) => {
    await page.goto('/')
    
    // Check for proper alt text on images
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
  })

  test('should have working call-to-action buttons', async ({ page }) => {
    await page.goto('/')
    
    // Check CTA buttons
    const ctaButtons = page.locator('a[href="/contact"], button:has-text("Boshlash"), a:has-text("Sinab ko'rish")')
    await expect(ctaButtons).toHaveCount(3)
    
    // Test one CTA button
    const startButton = page.locator('a:has-text("Boshlash")').first()
    await expect(startButton).toBeVisible()
    await expect(startButton).toHaveAttribute('href', '/contact')
  })

  test('should have proper performance metrics', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle')
    
    // Check if page loads within reasonable time
    const loadTime = await page.evaluate(() => {
      return performance.timing.loadEventEnd - performance.timing.navigationStart
    })
    
    expect(loadTime).toBeLessThan(5000) // Should load within 5 seconds
  })

  test('should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')
    await expect(page.locator('nav')).toBeVisible()
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await expect(page.locator('nav')).toBeVisible()
  })

  test('should have proper canonical URL', async ({ page }) => {
    await page.goto('/')
    
    const canonical = page.locator('link[rel="canonical"]')
    await expect(canonical).toHaveAttribute('href', 'https://educrm.uz/')
  })

  test('should have proper language attributes', async ({ page }) => {
    await page.goto('/')
    
    // Check HTML lang attribute
    await expect(page.locator('html')).toHaveAttribute('lang', 'uz')
    
    // Check hreflang attributes
    const hreflangUz = page.locator('link[hreflang="uz"]')
    await expect(hreflangUz).toHaveAttribute('href', 'https://educrm.uz/')
    
    const hreflangEn = page.locator('link[hreflang="en"]')
    await expect(hreflangEn).toHaveAttribute('href', 'https://educrm.uz/en')
  })
}) 