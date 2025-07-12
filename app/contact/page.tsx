import { Metadata } from "next"
import ContactSection from "@/components/contact-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Bog'lanish - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM bilan bog'laning. O'quv markazingiz uchun professional CRM tizimi haqida savollaringiz bormi? Biz sizga yordam beramiz!",
  keywords: [
    "educrm bog'lanish",
    "o'quv markaz crm aloqa",
    "education crm contact",
    "ta'lim crm bog'lanish",
    "uzbekistan education crm support",
    "educrm.uz aloqa",
    "o'quv markazlarni avtomatlashtiruvchi tizim yordam"
  ].join(", "),
  openGraph: {
    title: "Bog'lanish - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "EduCRM bilan bog'laning va savollaringizga javob oling",
    url: "https://educrm.uz/contact",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Biz bilan bog'laning
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quv markazingiz uchun professional CRM tizimi haqida savollaringiz bormi? Biz sizga yordam beramiz!
            </p>
          </div>
          
          <ContactSection />
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 