import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { CreditCard, DollarSign, Receipt, TrendingUp, Calendar, AlertCircle, ArrowRight, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "To'lovlar Boshqaruvi - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "To'lovlarni avtomatik boshqaring. To'lovlar tarixi, qarzlar, to'lovlar statistikasi va boshqa barcha ma'lumotlar bir joyda.",
  keywords: [
    "to'lovlar boshqaruvi",
    "o'quv markaz to'lovlar",
    "to'lovlar tizimi",
    "educrm to'lovlar",
    "ta'lim to'lovlar boshqaruvi",
    "o'zbekistonda to'lovlar tizimi",
    "to'lovlar kuzatuvi"
  ].join(", "),
  openGraph: {
    title: "To'lovlar Boshqaruvi - EduCRM",
    description: "To'lovlarni samarali boshqarish uchun professional tizim",
    url: "https://educrm.uz/tolovlar-boshqaruvi",
  },
  alternates: {
    canonical: "/tolovlar-boshqaruvi",
  },
}

export default function TolovlarBoshqaruviPage() {
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
            <span className="text-slate-700 dark:text-slate-300">To'lovlar Boshqaruvi</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              To'lovlar Boshqaruvi
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              To'lovlarni avtomatik boshqarish va kuzatish uchun professional tizim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">To'lovlar Tarixi</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Barcha to'lovlar tarixini kuzatish va tahlil qilish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">To'lovlar Statistikasi</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                To'lovlar bo'yicha batafsil statistika va tahlillar
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Receipt className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Cheklar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                To'lovlar uchun avtomatik cheklar yaratish va saqlash
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <AlertCircle className="h-12 w-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Qarzlar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Qarzlar ro'yxatini kuzatish va eslatmalar yuborish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Hisobotlar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                To'lovlar bo'yicha batafsil hisobotlar va tahlillar
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">To'lov Rejalari</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                To'lovlar rejalarini yaratish va kuzatish
              </p>
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
      </section>

      <InternalLinks currentPage="tolovlar" />
      <Footer />
    </main>
  )
}

