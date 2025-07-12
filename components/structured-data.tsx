"use client"

import Script from 'next/script'

interface StructuredDataProps {
  type: 'website' | 'organization' | 'software' | 'localBusiness' | 'breadcrumb' | 'faq' | 'article'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'website' ? 'WebSite' : 
               type === 'organization' ? 'Organization' :
               type === 'software' ? 'SoftwareApplication' :
               type === 'localBusiness' ? 'LocalBusiness' :
               type === 'breadcrumb' ? 'BreadcrumbList' :
               type === 'faq' ? 'FAQPage' :
               type === 'article' ? 'Article' : 'WebSite',
      ...data
    }

    return baseData
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}

// Predefined structured data for common pages
export const WebsiteStructuredData = () => (
  <StructuredData
    type="website"
    data={{
      name: "EduCRM",
      url: "https://educrm.uz",
      description: "O'quv markazlarni avtomatlashtiruvchi tizim",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://educrm.uz/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }}
  />
)

export const OrganizationStructuredData = () => (
  <StructuredData
    type="organization"
    data={{
      name: "EduCRM",
      url: "https://educrm.uz",
      logo: "https://educrm.uz/logo.png",
      description: "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi",
      address: {
        "@type": "PostalAddress",
        addressCountry: "UZ",
        addressLocality: "Tashkent",
        addressRegion: "Tashkent"
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Uzbek", "English"],
        telephone: "+998-XX-XXX-XXXX"
      },
      sameAs: [
        "https://t.me/educrm_uz",
        "https://facebook.com/educrm.uz",
        "https://instagram.com/educrm.uz"
      ]
    }}
  />
)

export const SoftwareStructuredData = () => (
  <StructuredData
    type="software"
    data={{
      name: "EduCRM",
      description: "O'quv markazlarni avtomatlashtiruvchi tizim",
      url: "https://educrm.uz",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "UZS"
      },
      provider: {
        "@type": "Organization",
        name: "EduCRM",
        url: "https://educrm.uz"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "150"
      },
      featureList: [
        "O'quvchilar boshqaruvi",
        "O'qituvchilar nazorati", 
        "To'lovlar boshqaruvi",
        "Hisobotlar va tahlillar",
        "Mobil qo'llab-quvvatlash"
      ]
    }}
  />
)

export const LocalBusinessStructuredData = () => (
  <StructuredData
    type="localBusiness"
    data={{
      name: "EduCRM",
      description: "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi",
      url: "https://educrm.uz",
      telephone: "+998-XX-XXX-XXXX",
      address: {
        "@type": "PostalAddress",
        addressCountry: "UZ",
        addressLocality: "Tashkent",
        addressRegion: "Tashkent"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.2995,
        longitude: 69.2401
      },
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "$$",
      serviceArea: {
        "@type": "Country",
        name: "Uzbekistan"
      }
    }}
  />
) 