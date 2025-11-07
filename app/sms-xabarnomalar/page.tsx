import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { MessageSquare, Bell, Send, Calendar, Users, ArrowRight, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "SMS Xabarnomalar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "O'quvchilar va ota-onalarga SMS xabarnomalar yuborish. Darslar, to'lovlar va muhim yangiliklar haqida xabar bering.",
  keywords: [
    "sms xabarnomalar",
    "o'quv markaz sms",
    "educrm sms",
    "ta'lim xabarnomalar",
    "o'zbekistonda sms tizimi",
    "xabar yuborish"
  ].join(", "),
  openGraph: {
    title: "SMS Xabarnomalar - EduCRM",
    description: "O'quvchilar va ota-onalarga SMS xabarnomalar yuborish",
    url: "https://educrm.uz/sms-xabarnomalar",
  },
  alternates: {
    canonical: "/sms-xabarnomalar",
  },
}

export default function SMSXabarnomalarPage() {
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
            <span className="text-slate-700 dark:text-slate-300">SMS Xabarnomalar</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MessageSquare className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              SMS Xabarnomalar
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quvchilar va ota-onalarga muhim xabarlarni SMS orqali yuboring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Bell className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Avtomatik Xabarnomalar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Darslar, to'lovlar va boshqa voqealar haqida avtomatik xabar
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Send className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Topshiriq Xabarlari</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                O'quvchilarga topshiriqlar haqida xabar yuborish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Dars Eslatmalari</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Darslar oldidan avtomatik eslatmalar yuborish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Guruh Xabarlari</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Butun guruhga bir vaqtda xabar yuborish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <MessageSquare className="h-12 w-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Shaxsiy Xabarlar</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Har bir o'quvchiga alohida xabar yuborish
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <Bell className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">To'lov Eslatmalari</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                To'lov muddatlari haqida eslatmalar
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

      <InternalLinks currentPage="sms" />
      <Footer />
    </main>
  )
}

