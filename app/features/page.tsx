import { Metadata } from "next"
import FeaturesGrid from "@/components/features-grid"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Xususiyatlar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM ning barcha xususiyatlari: o'quvchilar boshqaruvi, o'qituvchilar nazorati, to'lovlar boshqaruvi va boshqa professional funksiyalar.",
  keywords: [
    "o'quv markazlarni avtomatlashtiruvchi tizim xususiyatlari",
    "o'quv markazni nazorat qiluvchi tizim funksiyalari",
    "educrm xususiyatlari",
    "education crm features",
    "o'quvchilar boshqaruvi",
    "o'qituvchilar nazorati",
    "to'lovlar boshqaruvi",
    "ta'lim crm funksiyalari"
  ].join(", "),
  openGraph: {
    title: "Xususiyatlar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "EduCRM ning barcha xususiyatlari va funksiyalari",
    url: "https://educrm.uz/features",
  },
  alternates: {
    canonical: "/features",
  },
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              EDUCRM QULAYLIKLARI
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quv markazingizni to'liq avtomatlashtirish uchun barcha kerakli funksiyalar
            </p>
          </div>
          <FeaturesGrid />
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 