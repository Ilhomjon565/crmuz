import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Lock, FileText, UserCheck, AlertCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Maxfiylik Siyosati - EduCRM.uz | Ma'lumotlar Xavfsizligi va Himoyasi",
  description: "EduCRM.uz platformasi foydalanuvchilarining shaxsiy ma'lumotlarini to'plash, saqlash va himoya qilish tartibini batafsil o'rganing. SSL shifrlash, ma'lumotlar zaxiralash va GDPR standartlariga mos.",
  keywords: [
    "educrm maxfiylik",
    "o'quv markaz crm maxfiylik",
    "education crm privacy",
    "ta'lim crm maxfiylik siyosati",
    "uzbekistan education crm privacy policy",
    "educrm.uz maxfiylik",
    "o'quv markazlarni avtomatlashtiruvchi tizim maxfiylik",
    "ma'lumotlar xavfsizligi",
    "shaxsiy ma'lumotlar himoyasi",
    "gdpr uzbekistan",
    "crm tizim maxfiylik"
  ].join(", "),
  openGraph: {
    title: "Maxfiylik Siyosati - EduCRM.uz",
    description: "EduCRM.uz platformasida ma'lumotlaringiz qanday to'planishi, saqlanishi va himoya qilinishi haqida batafsil ma'lumot",
    url: "https://educrm.uz/privacy",
    type: "website",
  },
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Maxfiylik Siyosati
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ma'lumotlaringizning xavfsizligi bizning ustuvor vazifamiz
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <FileText className="w-5 h-5" />
                <span>Foydalanish Shartlari</span>
              </Link>
              <Link href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Lock className="w-5 h-5" />
                <span>Cookie Siyosati</span>
              </Link>
              <Link href="/security" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Shield className="w-5 h-5" />
                <span>Xavfsizlik Siyosati</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-12 border border-blue-100 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Umumiy Ma'lumot
                  </h2>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Ushbu siyosat <strong>EduCRM.uz</strong> platformasi foydalanuvchilarining shaxsiy ma'lumotlarini to'plash, 
                    saqlash va himoya qilish tartibini belgilaydi. Ma'lumotlar foydalanuvchi roziligi bilan yig'iladi va 
                    faqat tizim faoliyatini ta'minlash maqsadida ishlatiladi.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-12">
              
              {/* Section 1 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Yig'iladigan Ma'lumotlar
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM.uz platformasi quyidagi ma'lumotlarni to'playdi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                      <span><strong>Shaxsiy ma'lumotlar:</strong> Ism, familiya, telefon raqami, email manzili</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                      <span><strong>O'quv ma'lumotlari:</strong> Kurs ma'lumotlari, dars jadvali, o'qituvchi va o'quvchi roli</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                      <span><strong>Moliyaviy ma'lumotlar:</strong> To'lov ma'lumotlari, to'lov tarixi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                      <span><strong>Foydalanuvchi roli:</strong> Direktor, menejer, o'qituvchi yoki o'quvchi sifatida faoliyat</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Ma'lumotlardan Foydalanish
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    To'plangan ma'lumotlar quyidagi maqsadlarda ishlatiladi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                      <span>Tizim faoliyatini ta'minlash va xizmatlarni taqdim etish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                      <span>Foydalanuvchi tajribasini yaxshilash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                      <span>Xavfsizlikni ta'minlash va firibgarlikni oldini olish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                      <span>Texnik yordam va mijozlar bilan muloqot</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                      <span>Qonuniy talablarni bajarish</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Ma'lumotlar Xavfsizligi
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Ma'lumotlar xavfsiz serverlarda shifrlangan holda saqlanadi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">🔒</span>
                      <span><strong>SSL/TLS shifrlash:</strong> Barcha ma'lumotlar uzatilayotganda shifrlangan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">🔒</span>
                      <span><strong>Ma'lumotlar bazasi zaxiralari:</strong> Muntazam avtomatik zaxira nusxalar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">🔒</span>
                      <span><strong>Ruxsat tizimi:</strong> Faqat ruxsat etilgan shaxslar ma'lumotlarni ko'ra oladi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">🔒</span>
                      <span><strong>Xavfsizlik monitoringi:</strong> 24/7 tizim xavfsizligi nazorati</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Foydalanuvchi Huquqlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Foydalanuvchilar quyidagi huquqlarga ega:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                      <span><strong>Ko'rish huquqi:</strong> O'z shaxsiy ma'lumotlaringizni ko'rish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                      <span><strong>O'zgartirish huquqi:</strong> Noto'g'ri ma'lumotlarni tuzatish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                      <span><strong>O'chirish huquqi:</strong> Ma'lumotlarni o'chirish so'rovini yuborish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                      <span><strong>Eksport qilish:</strong> Ma'lumotlarni yuklab olish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                      <span><strong>Shikoyat qilish:</strong> Ma'lumotlar himoyasi buzilishi haqida xabar berish</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 - Cookie */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">🍪</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Cookie Fayllaridan Foydalanish
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Platforma cookie fayllaridan quyidagi maqsadlarda foydalanadi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">→</span>
                      <span>Tizimga avtomatik kirish va sessiyalarni boshqarish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">→</span>
                      <span>Foydalanuvchi sozlamalarini eslab qolish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">→</span>
                      <span>Analitika va statistika to'plash</span>
                    </li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-300 mt-4">
                    Foydalanuvchi brauzer sozlamalari orqali cookie'larni boshqarishi yoki o'chirish huquqiga ega.
                    Batafsil ma'lumot uchun <Link href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Siyosati</Link>ni ko'ring.
                  </p>
                </div>
              </div>

              {/* Section 6 - Data Sharing */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">6</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Ma'lumotlarni Baham Ko'rish
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    <strong>EduCRM.uz ma'lumotlarni uchinchi tomonlar bilan baham ko'rmaydi.</strong> Quyidagi hollarda bundan mustasno:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">!</span>
                      <span>Foydalanuvchining aniq roziligi bilan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">!</span>
                      <span>Qonun talablariga binoan (sud qarori, davlat organlari so'rovi)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">!</span>
                      <span>Xizmat ko'rsatuvchi hamkorlar (faqat xizmatni ta'minlash uchun zarur hajmda)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 7 - Updates */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Siyosat O'zgarishlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300">
                    Ushbu maxfiylik siyosati vaqti-vaqti bilan yangilanishi mumkin. Muhim o'zgarishlar kiritilganda, 
                    foydalanuvchilar email orqali yoki platformada bildirishnoma oladi. Siyosatni muntazam ravishda 
                    ko'rib chiqishingizni tavsiya qilamiz.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Biz Bilan Bog'laning</h2>
              <p className="text-lg text-center mb-8 text-blue-50">
                Agar sizda savol yoki takliflar bo'lsa, biz bilan bog'laning:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <a href="tel:+998958995500" className="text-blue-100 hover:text-white transition-colors">
                    +998 95 899 55 00
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:info@educrm.uz" className="text-blue-100 hover:text-white transition-colors">
                    info@educrm.uz
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Shield className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Veb-sayt</h3>
                  <a href="https://educrm.uz" className="text-blue-100 hover:text-white transition-colors">
                    educrm.uz
                  </a>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Oxirgi yangilanish: <strong>2025-yil 31-oktyabr</strong>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Versiya: 2.0 | EduCRM.uz © 2025
              </p>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 