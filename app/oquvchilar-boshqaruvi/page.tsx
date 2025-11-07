import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { Users, BookOpen, Calendar, Award, TrendingUp, ArrowRight, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "O'quvchilar Boshqaruvi - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM tizimi bilan o'quvchilarni samarali boshqaring. O'quvchilar ro'yxati, yozilishlar, natijalar va boshqa barcha ma'lumotlar bir joyda.",
  keywords: [
    "o'quvchilar boshqaruvi",
    "o'quvchilar bazasi",
    "o'quv markaz o'quvchilar",
    "talabalar boshqaruvi",
    "o'quvchilar ro'yxati",
    "educrm o'quvchilar",
    "ta'lim o'quvchilar boshqaruvi",
    "o'zbekistonda o'quvchilar tizimi"
  ].join(", "),
  openGraph: {
    title: "O'quvchilar Boshqaruvi - EduCRM",
    description: "O'quvchilarni samarali boshqarish uchun professional tizim",
    url: "https://educrm.uz/oquvchilar-boshqaruvi",
  },
  alternates: {
    canonical: "/oquvchilar-boshqaruvi",
  },
}

export default function OquvchilarBoshqaruviPage() {
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
            <span className="text-slate-700 dark:text-slate-300">O'quvchilar Boshqaruvi</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              O'quvchilar Boshqaruvi
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quvchilarni samarali boshqarish va ularning natijalarini kuzatish uchun professional tizim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">O'quvchilar Ro'yxati</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Barcha o'quvchilar ma'lumotlarini bir joyda to'plang va tizimli boshqaring
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Yozilishlar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Yangi o'quvchilarni qo'shing va ularning yozilish jarayonini kuzating
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Natijalar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'quvchilarning o'qish natijalarini kuzatish va tahlil qilish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Dars Jadvali</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'quvchilar uchun dars jadvalini yaratish va boshqarish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Statistika</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'quvchilar faolligi va natijalari bo'yicha batafsil statistika
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Guruhlar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'quvchilarni guruhlarga ajratish va boshqarish
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

      <InternalLinks currentPage="oquvchilar" />
      <Footer />
    </main>
  )
}

