import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { UserCheck, Clock, BarChart3, Calendar, Award, ArrowRight, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "O'qituvchilar Nazorati - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "O'qituvchilarni samarali nazorat qiling. Darslar, ish vaqti, natijalar va boshqa barcha ma'lumotlar bir joyda.",
  keywords: [
    "o'qituvchilar nazorati",
    "o'qituvchilar boshqaruvi",
    "o'quv markaz o'qituvchilar",
    "educrm o'qituvchilar",
    "ta'lim o'qituvchilar tizimi",
    "o'qituvchilar ish vaqti",
    "o'zbekistonda o'qituvchilar boshqaruvi"
  ].join(", "),
  openGraph: {
    title: "O'qituvchilar Nazorati - EduCRM",
    description: "O'qituvchilarni samarali nazorat qilish uchun professional tizim",
    url: "https://educrm.uz/oqituvchilar-nazorati",
  },
  alternates: {
    canonical: "/oqituvchilar-nazorati",
  },
}

export default function OqituvchilarNazoratiPage() {
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
            <span className="text-slate-700 dark:text-slate-300">O'qituvchilar Nazorati</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              O'qituvchilar Nazorati
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'qituvchilarni samarali nazorat qilish va ularning ish faolligini kuzatish uchun professional tizim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <UserCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">O'qituvchilar Ro'yxati</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Barcha o'qituvchilar ma'lumotlarini bir joyda to'plang va boshqaring
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Ish Vaqti</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'qituvchilarning ish vaqtini kuzatish va hisoblash
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Dars Jadvali</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'qituvchilar uchun dars jadvalini yaratish va boshqarish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <BarChart3 className="h-12 w-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Hisobotlar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'qituvchilar ish faolligi bo'yicha batafsil hisobotlar
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Baholash</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'qituvchilarni baholash va reyting tizimi
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <UserCheck className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Vazifalar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'qituvchilarga vazifalar berish va kuzatish
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

      <InternalLinks currentPage="oqituvchilar" />
      <Footer />
    </main>
  )
}

