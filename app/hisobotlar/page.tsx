import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { BarChart3, TrendingUp, PieChart, FileText, Download, ArrowRight, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Hisobotlar va Tahlillar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "O'quv markazingiz faolligi bo'yicha batafsil hisobotlar va tahlillar. To'lovlar, o'quvchilar, o'qituvchilar statistikasi.",
  keywords: [
    "o'quv markaz hisobotlar",
    "educrm hisobotlar",
    "ta'lim tahlillar",
    "o'quv markaz statistikasi",
    "educrm tahlillar",
    "o'zbekistonda o'quv markaz hisobotlar"
  ].join(", "),
  openGraph: {
    title: "Hisobotlar va Tahlillar - EduCRM",
    description: "O'quv markazingiz bo'yicha batafsil hisobotlar va tahlillar",
    url: "https://educrm.uz/hisobotlar",
  },
  alternates: {
    canonical: "/hisobotlar",
  },
}

export default function HisobotlarPage() {
  const reportTypes = [
    {
      icon: BarChart3,
      title: "To'lovlar Hisoboti",
      description: "To'lovlar bo'yicha batafsil statistika va tahlillar",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "O'quvchilar Statistikasi",
      description: "O'quvchilar faolligi va natijalari bo'yicha tahlillar",
      color: "text-green-600"
    },
    {
      icon: PieChart,
      title: "O'qituvchilar Hisoboti",
      description: "O'qituvchilar ish faolligi bo'yicha hisobotlar",
      color: "text-purple-600"
    },
    {
      icon: FileText,
      title: "Darslar Hisoboti",
      description: "Darslar va guruhlar bo'yicha batafsil hisobotlar",
      color: "text-orange-600"
    }
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
            <span className="text-slate-700 dark:text-slate-300">Hisobotlar</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Hisobotlar va Tahlillar
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quv markazingiz faolligi bo'yicha batafsil hisobotlar va tahlillar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reportTypes.map((report, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                <report.icon className={`h-12 w-12 ${report.color} mb-4`} />
                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{report.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{report.description}</p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Download className="h-5 w-5" />
                  <span className="font-medium">Yuklab olish</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Avtomatik Hisobotlar</h2>
            <p className="text-lg text-center mb-6">
              Kunlik, haftalik va oylik hisobotlarni avtomatik oling
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Kunlik</div>
                <div className="text-lg opacity-90">Har kuni avtomatik</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Haftalik</div>
                <div className="text-lg opacity-90">Har hafta yakshanba</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Oylik</div>
                <div className="text-lg opacity-90">Har oy oxirida</div>
              </div>
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

      <InternalLinks currentPage="hisobotlar" />
      <Footer />
    </main>
  )
}

