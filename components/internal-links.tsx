"use client"

import Link from 'next/link'
import { ChevronRight, ExternalLink } from 'lucide-react'

interface InternalLinksProps {
  currentPage?: string
  showBreadcrumbs?: boolean
  showRelatedLinks?: boolean
}

export default function InternalLinks({ 
  currentPage = 'home',
  showBreadcrumbs = true,
  showRelatedLinks = true 
}: InternalLinksProps) {
  
  // Breadcrumb navigation
  const breadcrumbs = {
    home: [],
    features: [
      { name: 'Bosh sahifa', href: '/' },
      { name: 'Xususiyatlar', href: '/features' }
    ],
    pricing: [
      { name: 'Bosh sahifa', href: '/' },
      { name: 'Narxlar', href: '/pricing' }
    ],
    about: [
      { name: 'Bosh sahifa', href: '/' },
      { name: 'Haqida', href: '/about' }
    ],
    contact: [
      { name: 'Bosh sahifa', href: '/' },
      { name: 'Aloqa', href: '/contact' }
    ],
    blog: [
      { name: 'Bosh sahifa', href: '/' },
      { name: 'Blog', href: '/blog' }
    ],
    faq: [
      { name: 'Bosh sahifa', href: '/' },
      { name: 'Ko\'p so\'raladigan savollar', href: '/faq' }
    ]
  }

  // Related links for each page
  const relatedLinks = {
    home: [
      { name: 'Xususiyatlar', href: '/features', description: 'EduCRM tizimi xususiyatlari' },
      { name: 'Narxlar', href: '/pricing', description: 'Bepul va ochiq manba' },
      { name: 'Aloqa', href: '/contact', description: 'Biz bilan bog\'laning' },
      { name: 'Haqida', href: '/about', description: 'EduCRM haqida ma\'lumot' }
    ],
    features: [
      { name: 'Narxlar', href: '/pricing', description: 'Barcha funksiyalar bepul' },
      { name: 'Aloqa', href: '/contact', description: 'Savollaringiz bormi?' },
      { name: 'FAQ', href: '/faq', description: 'Ko\'p so\'raladigan savollar' },
      { name: 'Blog', href: '/blog', description: 'Ta\'lim texnologiyalari' }
    ],
    pricing: [
      { name: 'Xususiyatlar', href: '/features', description: 'Barcha imkoniyatlar' },
      { name: 'Aloqa', href: '/contact', description: 'Qo\'shimcha ma\'lumot' },
      { name: 'FAQ', href: '/faq', description: 'Narxlar haqida savollar' },
      { name: 'Haqida', href: '/about', description: 'Kompaniya haqida' }
    ],
    about: [
      { name: 'Xususiyatlar', href: '/features', description: 'Bizning xizmatlar' },
      { name: 'Aloqa', href: '/contact', description: 'Biz bilan bog\'laning' },
      { name: 'Blog', href: '/blog', description: 'Yangiliklar va maqolalar' },
      { name: 'FAQ', href: '/faq', description: 'Savollaringizga javoblar' }
    ],
    contact: [
      { name: 'Xususiyatlar', href: '/features', description: 'Tizim xususiyatlari' },
      { name: 'FAQ', href: '/faq', description: 'Ko\'p so\'raladigan savollar' },
      { name: 'Blog', href: '/blog', description: 'Foydali maqolalar' },
      { name: 'Haqida', href: '/about', description: 'Kompaniya haqida' }
    ],
    blog: [
      { name: 'Xususiyatlar', href: '/features', description: 'Tizim imkoniyatlari' },
      { name: 'FAQ', href: '/faq', description: 'Savollaringizga javoblar' },
      { name: 'Aloqa', href: '/contact', description: 'Biz bilan bog\'laning' },
      { name: 'Haqida', href: '/about', description: 'Kompaniya haqida' }
    ],
    faq: [
      { name: 'Xususiyatlar', href: '/features', description: 'Tizim xususiyatlari' },
      { name: 'Aloqa', href: '/contact', description: 'Qo\'shimcha yordam' },
      { name: 'Blog', href: '/blog', description: 'Foydali maqolalar' },
      { name: 'Haqida', href: '/about', description: 'Kompaniya haqida' }
    ]
  }

  // SEO-optimized anchor text variations
  const anchorTextVariations = {
    features: [
      "o'quv markaz xususiyatlari",
      "crm tizimi imkoniyatlari", 
      "ta'lim dasturi funksiyalari",
      "o'quv markaz avtomatlashtirish"
    ],
    pricing: [
      "o'quv markaz crm narxi",
      "ta'lim dasturi bahosi",
      "bepul o'quv markaz tizimi",
      "crm tizimi narxlari"
    ],
    contact: [
      "educrm bilan bog'lanish",
      "o'quv markaz crm yordam",
      "ta'lim dasturi qo'llab-quvvatlash",
      "educrm aloqa"
    ],
    about: [
      "educrm haqida",
      "o'quv markaz crm kompaniyasi",
      "ta'lim dasturi ishlab chiqaruvchi",
      "educrm jamoasi"
    ]
  }

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      {showBreadcrumbs && breadcrumbs[currentPage] && (
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            {breadcrumbs[currentPage].map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                <Link 
                  href={crumb.href}
                  className="hover:text-blue-600 transition-colors"
                  aria-label={`Navigate to ${crumb.name}`}
                >
                  {crumb.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Related Links Section */}
      {showRelatedLinks && relatedLinks[currentPage] && (
        <section className="mt-12 bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Bog'liq sahifalar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedLinks[currentPage].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300"
                aria-label={`Navigate to ${link.name}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SEO-optimized internal links with anchor text variations */}
      <div className="hidden">
        {Object.entries(anchorTextVariations).map(([page, variations]) => (
          <div key={page}>
            {variations.map((text, index) => (
              <Link key={index} href={`/${page}`} aria-label={text}>
                {text}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
} 