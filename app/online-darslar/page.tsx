import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { Video, Users, Calendar, MessageCircle, ArrowRight, Home, Monitor, Mic } from "lucide-react"

export const metadata: Metadata = {
  title: "Online Darslar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "Online darslar o'tkazish uchun professional tizim. Video konferensiya, darslar yozib olish va boshqa qulayliklar.",
  keywords: [
    "online darslar",
    "video darslar",
    "o'quv markaz online",
    "educrm online",
    "ta'lim online",
    "o'zbekistonda online darslar",
    "video konferensiya"
  ].join(", "),
  openGraph: {
    title: "Online Darslar - EduCRM",
    description: "Online darslar o'tkazish uchun professional tizim",
    url: "https://educrm.uz/online-darslar",
  },
  alternates: {
    canonical: "/online-darslar",
  },
}

export default function OnlineDarslarPage() {
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
            <span className="text-slate-700 dark:text-slate-300">Online Darslar</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Video className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Online Darslar
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Online darslar o'tkazish uchun professional va qulay tizim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Monitor className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Video Konferensiya</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Yuqori sifatli video konferensiya bilan darslar o'tkazing
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Video className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Darslar Yozib Olish</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Barcha darslarni avtomatik yozib oling va keyinroq ko'ring
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Guruh Darslari</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Bir vaqtning o'zida ko'p o'quvchilar bilan dars o'tkazing
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <MessageCircle className="h-12 w-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Chat</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Dars paytida chat orqali muloqot qiling
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Dars Jadvali</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Online darslar uchun jadval yaratish va boshqarish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Mic className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Audio Sifat</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Yuqori sifatli audio bilan aniq eshitiladigan darslar
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

      <InternalLinks currentPage="online" />
      <Footer />
    </main>
  )
}

