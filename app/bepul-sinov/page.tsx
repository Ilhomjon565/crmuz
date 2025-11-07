import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { Gift, CheckCircle, ArrowRight, Home, Zap, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Bepul Sinov - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM tizimini bepul sinab ko'ring. Hech qanday karta talab qilinmaydi. Barcha funksiyalar mavjud.",
  keywords: [
    "educrm bepul sinov",
    "o'quv markaz crm bepul",
    "educrm trial",
    "ta'lim crm bepul sinov",
    "o'zbekistonda educrm bepul",
    "educrm demo"
  ].join(", "),
  openGraph: {
    title: "Bepul Sinov - EduCRM",
    description: "EduCRM tizimini bepul sinab ko'ring",
    url: "https://educrm.uz/bepul-sinov",
  },
  alternates: {
    canonical: "/bepul-sinov",
  },
}

export default function BepulSinovPage() {
  const features = [
    "Barcha funksiyalar mavjud",
    "Hech qanday karta talab qilinmaydi",
    "Cheksiz o'quvchilar",
    "Cheksiz o'qituvchilar",
    "Barcha hisobotlar",
    "Texnik yordam"
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-slate-100 dark:bg-slate-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400">
              <Home className="h-4 w-4" />
              <span>Bosh sahifa</span>
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-700 dark:text-slate-300">Bepul Sinov</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Gift className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Bepul Sinov
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              EduCRM tizimini bepul sinab ko'ring. Hech qanday karta talab qilinmaydi.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Bepul Sinov Davri</h2>
                <p className="text-2xl mb-2">30 kun</p>
                <p className="text-lg opacity-90">Barcha funksiyalar bilan</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
                >
                  <span>Bepul Sinovni Boshlash</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Tezkor Boshlash</h3>
                <p className="text-slate-600 dark:text-slate-300">Bir necha daqiqada tizimni ishga tushiring</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">24/7 Yordam</h3>
                <p className="text-slate-600 dark:text-slate-300">Har qanday vaqtda texnik yordam oling</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Xavfsiz</h3>
                <p className="text-slate-600 dark:text-slate-300">Ma'lumotlaringiz xavfsiz va himoyalangan</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="h-5 w-5" />
                <span>Bosh sahifaga qaytish</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks currentPage="bepul" />
      <Footer />
    </main>
  )
}

