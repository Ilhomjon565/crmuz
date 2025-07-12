import Link from "next/link"
import { Metadata } from "next"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Sahifa topilmadi - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "Axtarilayotgan sahifa topilmadi. EduCRM bosh sahifasiga qaytib, o'quv markazingiz uchun professional CRM tizimini toping.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      <StructuredData
        type="website"
        data={{
          name: "EduCRM - 404 Sahifa topilmadi",
          url: "https://educrm.uz/404",
          description: "Axtarilayotgan sahifa topilmadi"
        }}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Sahifa topilmadi
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
          Axtarilayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
    </>
  )
} 