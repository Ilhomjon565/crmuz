import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SupportSection from "@/components/support-section"

export const metadata: Metadata = {
  title: "Yordam va Qo'llab-quvvatlash - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM tizimi bo'yicha yordam va qo'llab-quvvatlash. Texnik yordam, savollar va javoblar, aloqa ma'lumotlari. 24/7 qo'llab-quvvatlash xizmati.",
  keywords: [
    "educrm yordam",
    "o'quv markaz crm qo'llab-quvvatlash",
    "education crm support",
    "ta'lim crm yordam",
    "uzbekistan education crm help",
    "educrm.uz yordam",
    "o'quv markazlarni avtomatlashtiruvchi tizim yordam",
    "crm texnik yordam",
    "educrm qo'llab-quvvatlash",
    "ta'lim tizimi yordam"
  ].join(", "),
  openGraph: {
    title: "Yordam va Qo'llab-quvvatlash - EduCRM",
    description: "EduCRM tizimi bo'yicha yordam va qo'llab-quvvatlash xizmati",
    url: "https://educrm.uz/support",
  },
  alternates: {
    canonical: "/support",
  },
}

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Yordam va Qo'llab-quvvatlash
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              EduCRM tizimi bo'yicha savollaringiz bormi? Biz sizga 24/7 yordam beramiz!
            </p>
          </div>
          
          <SupportSection />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
