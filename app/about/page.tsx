import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Haqida - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM haqida batafsil ma'lumot. O'zbekistondagi o'quv markazlar uchun professional CRM tizimi yaratuvchilari haqida.",
  keywords: [
    "educrm haqida",
    "o'quv markaz crm kompaniya",
    "education crm about",
    "ta'lim crm haqida",
    "uzbekistan education crm company",
    "educrm.uz haqida",
    "o'quv markazlarni avtomatlashtiruvchi tizim kompaniya"
  ].join(", "),
  openGraph: {
    title: "Haqida - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "EduCRM kompaniyasi va uning maqsadi haqida",
    url: "https://educrm.uz/about",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              EduCRM Haqida
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'zbekistondagi o'quv markazlar uchun professional CRM tizimi yaratuvchilari
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Bizning Maqsadimiz
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  EduCRM - O'zbekistondagi o'quv markazlar uchun zamonaviy va samarali CRM tizimi yaratish maqsadida tashkil etilgan kompaniya. Biz ta'lim sohasida texnologiya orqali samaradorlikni oshirishni maqsad qilganmiz.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  2024-yilda tashkil etilgan EduCRM kompaniyasi hozirda 500+ o'quv markazida ishlatilmoqda va ularning samaradorligini sezilarli darajada oshirmoqda.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Bizning Raqamlar</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-indigo-100">O'quv markazlari</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10,000+</div>
                    <div className="text-indigo-100">O'quvchilar</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1,000+</div>
                    <div className="text-indigo-100">O'qituvchilar</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Maqsad</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ta'lim sohasida texnologiya orqali samaradorlikni oshirish
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Innovatsiya</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Zamonaviy texnologiyalar va yechimlar ishlatish
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Hamkorlik</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mijozlar bilan yaqin hamkorlik va qo'llab-quvvatlash
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 