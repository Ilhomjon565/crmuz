import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InternalLinks from "@/components/internal-links"
import { PlayCircle, CheckCircle, ArrowRight, Home, Zap, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Qanday Ishlaydi - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM tizimi qanday ishlaydi? Qadam-baqadam ko'rsatma va tizimdan foydalanish bo'yicha batafsil ma'lumot.",
  keywords: [
    "educrm qanday ishlaydi",
    "o'quv markaz crm qo'llanma",
    "educrm foydalanish",
    "ta'lim crm qanday ishlaydi",
    "o'zbekistonda educrm",
    "educrm ko'rsatma"
  ].join(", "),
  openGraph: {
    title: "Qanday Ishlaydi - EduCRM",
    description: "EduCRM tizimidan foydalanish bo'yicha batafsil ko'rsatma",
    url: "https://educrm.uz/qanday-ishlaydi",
  },
  alternates: {
    canonical: "/qanday-ishlaydi",
  },
}

export default function QandayIshlaydiPage() {
  const steps = [
    {
      number: 1,
      title: "Ro'yxatdan o'ting",
      description: "EduCRM tizimiga ro'yxatdan o'ting va o'quv markazingizni qo'shing",
      icon: Users
    },
    {
      number: 2,
      title: "Ma'lumotlarni kiriting",
      description: "O'quvchilar, o'qituvchilar va guruhlar ma'lumotlarini kiriting",
      icon: CheckCircle
    },
    {
      number: 3,
      title: "Ishni boshlang",
      description: "Tizimdan foydalanishni boshlang va avtomatlashtirishdan foydalaning",
      icon: Zap
    },
    {
      number: 4,
      title: "Natijalarni kuzating",
      description: "Hisobotlar va statistikalar orqali natijalarni kuzating",
      icon: Shield
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
            <span className="text-slate-700 dark:text-slate-300">Qanday Ishlaydi</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              EduCRM Qanday Ishlaydi?
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quv markazingizni avtomatlashtirish uchun oddiy va qulay qadamlar
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-12">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-6 w-6 text-blue-600" />
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{step.title}</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg text-center mb-12">
              <PlayCircle className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Video Ko'rsatma</h2>
              <p className="text-lg mb-6">EduCRM tizimidan foydalanish bo'yicha batafsil video ko'rsatma</p>
              <Link 
                href="/video-darslar" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <span>Videoni ko'rish</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
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

      <InternalLinks currentPage="qanday" />
      <Footer />
    </main>
  )
}

