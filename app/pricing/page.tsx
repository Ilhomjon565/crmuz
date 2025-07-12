import { Metadata } from "next"
import PricingSection from "@/components/pricing-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Narxlar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM ning narxlar rejalari. O'quv markazingiz uchun eng yaxshi narxda professional CRM tizimi. Bepul sinab ko'ring!",
  keywords: [
    "educrm narxlari",
    "o'quv markaz crm narxi",
    "education crm pricing",
    "ta'lim crm narxlari",
    "o'quv markazlarni avtomatlashtiruvchi tizim narxi",
    "crm edu pricing",
    "uzbekistan education crm cost"
  ].join(", "),
  openGraph: {
    title: "Narxlar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "EduCRM ning narxlar rejalari va to'lov shartlari",
    url: "https://educrm.uz/pricing",
  },
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              EduCRM Narxlari
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quv markazingiz uchun eng yaxshi narxda professional CRM tizimi
            </p>
          </div>
          
          <PricingSection />
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 