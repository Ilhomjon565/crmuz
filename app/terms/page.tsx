import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, Shield, UserCheck, AlertTriangle, CheckCircle, Mail, Phone, Scale } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Foydalanish Shartlari - EduCRM.uz | Xizmat Ko'rsatish Qoidalari",
  description: "EduCRM.uz platformasidan foydalanish shartlari va qoidalari. Foydalanuvchi huquqlari, majburiyatlari va xizmat ko'rsatish shartlari haqida batafsil ma'lumot.",
  keywords: [
    "educrm shartlar",
    "o'quv markaz crm shartlar",
    "education crm terms",
    "ta'lim crm foydalanish shartlari",
    "uzbekistan education crm terms of service",
    "educrm.uz shartlar",
    "o'quv markazlarni avtomatlashtiruvchi tizim shartlar",
    "xizmat ko'rsatish shartlari",
    "foydalanuvchi shartnomasi",
    "crm tizim qoidalari"
  ].join(", "),
  openGraph: {
    title: "Foydalanish Shartlari - EduCRM.uz",
    description: "EduCRM.uz platformasidan foydalanish shartlari va xizmat ko'rsatish qoidalari",
    url: "https://educrm.uz/terms",
    type: "website",
  },
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
              <Scale className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">
              Foydalanish Shartlari
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              EduCRM.uz platformasidan foydalanish qoidalari va shartlari
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Shield className="w-5 h-5" />
                <span>Maxfiylik Siyosati</span>
              </Link>
              <Link href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <FileText className="w-5 h-5" />
                <span>Cookie Siyosati</span>
              </Link>
              <Link href="/security" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Shield className="w-5 h-5" />
                <span>Xavfsizlik</span>
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
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-12 border border-emerald-100 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Shartnoma Qabuli
                  </h2>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>EduCRM.uz</strong> platformasidan foydalanish orqali foydalanuvchi ushbu shartlarni qabul qiladi. 
                    Platformaning funksiyalaridan faqat qonuniy va ruxsat etilgan maqsadlarda foydalanish mumkin. 
                    Hisob ochgan foydalanuvchi login va parolini maxfiy saqlashi shart.
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
                      Xizmat Ko'rsatish Tamoyillari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Platforma xizmatlari <strong>«hammasi yaxshi»</strong> (as-is) tamoyili asosida taqdim etiladi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                      <span>Xizmatlar aniq va ishonchli bo'lishi uchun maksimal harakat qilamiz</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                      <span>Texnik xatoliklar yoki vaqtinchalik uzilishlar uchun to'liq javobgar emasmiz</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                      <span>24/7 texnik yordam va tez muammo bartaraf etish xizmati mavjud</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                      <span>Platformani doimiy ravishda yangilash va yaxshilash</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Foydalanuvchi Majburiyatlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM.uz platformasidan foydalanuvchi quyidagi majburiyatlarga ega:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Login ma'lumotlari xavfsizligi:</strong> Parol va login ma'lumotlarini maxfiy saqlash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Qonuniy foydalanish:</strong> Faqat ruxsat etilgan va qonuniy maqsadlarda foydalanish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>To'g'ri ma'lumotlar:</strong> Aniq va haqiqiy ma'lumotlarni kiritish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Shubhali faoliyat haqida xabar berish:</strong> Xavfsizlik buzilishlarini darhol bildirish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Boshqalarning huquqlarini hurmat qilish:</strong> Har qanday qasddan zarar yetkazish harakatlaridan saqlanish</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Platformaning Majburiyatlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM.uz quyidagi xizmatlarni taqdim etishni o'z zimmasiga oladi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span>Sifatli va doimiy xizmat ko'rsatish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span>Ma'lumotlarni xavfsiz saqlash va himoya qilish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span>Texnik yordam va mijozlar bilan o'z vaqtida muloqot</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span>Tizimni doimiy yangilash va xavfsizlik choralarini kuchaytirish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span>Maxfiylik siyosatiga rioya qilish</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 - Intellectual Property */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Intellektual Mulk Huquqlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    <strong>Intellektual mulk huquqlari EduCRM.uz jamoasiga tegishli.</strong>
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">©</span>
                      <span>Platformaning dizayni, kod va funksiyalari himoyalangan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">©</span>
                      <span>Logo, savdo belgilari va brend materiallari mualliflik huquqi ostida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">©</span>
                      <span>Ruxsatsiz nusxa ko'chirish, tarqatish yoki o'zgartirish taqiqlanadi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">©</span>
                      <span>Foydalanuvchi o'z ma'lumotlariga egalik huquqini saqlab qoladi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 - Account Security */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Hisob Xavfsizligi
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Hisob xavfsizligi foydalanuvchining o'z mas'uliyatidir:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">🔐</span>
                      <span>Kuchli parol tanlang (kamida 8 belgi, harflar, raqamlar va maxsus belgilar)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">🔐</span>
                      <span>Login ma'lumotlarini boshqalar bilan baham ko'rmang</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">🔐</span>
                      <span>Shubhali faoliyatni darhol texnik yordamga xabar bering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">🔐</span>
                      <span>Umumiy kompyuterda hisobdan chiqishni unutmang</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 6 - Service Termination */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Xizmatni To'xtatish
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM.uz quyidagi hollarda xizmatni to'xtatish huquqiga ega:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">⚠</span>
                      <span>Foydalanish shartlarining buzilishi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">⚠</span>
                      <span>Noqonuniy yoki zararli faoliyat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">⚠</span>
                      <span>To'lovning amalga oshirilmasligi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">⚠</span>
                      <span>Qonuniy talablar yoki sud qarori asosida</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-800 dark:text-red-300">
                      <strong>Eslatma:</strong> Xizmat to'xtatilishidan oldin foydalanuvchi oldidan ogohlantirish beriladi (favqulodda hollardan tashqari).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 - Liability */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Mas'uliyat Cheklovlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM.uz quyidagi holatlarda cheklangan mas'uliyatga ega:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-1">→</span>
                      <span>Nazoratimizdan tashqaridagi texnik muammolar (internet provayder, server uzilishlari)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-1">→</span>
                      <span>Foydalanuvchi xatosi natijasida yuzaga kelgan muammolar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-1">→</span>
                      <span>Uchinchi tomon xizmatlari va integratsiyalarning uzilishi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-1">→</span>
                      <span>Tabiiy ofatlar, urushlar va boshqa fors-major holatlar</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 8 - Updates */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Shartlar O'zgarishi
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300">
                    Ushbu foydalanish shartlari vaqti-vaqti bilan yangilanishi mumkin. Muhim o'zgarishlar kiritilganda, 
                    foydalanuvchilar platformada bildirishnoma yoki email orqali xabardor qilinadi. Shartlarni muntazam 
                    ko'rib chiqishingizni tavsiya qilamiz. O'zgarishlardan keyin platformadan foydalanishni davom ettirish 
                    yangi shartlarni qabul qilishni bildiradi.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Savol yoki Takliflaringiz Bormi?</h2>
              <p className="text-lg text-center mb-8 text-emerald-50">
                Foydalanish shartlari bo'yicha qo'shimcha ma'lumot olish uchun biz bilan bog'laning:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <a href="tel:+998958995500" className="text-emerald-100 hover:text-white transition-colors">
                    +998 95 899 55 00
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:info@educrm.uz" className="text-emerald-100 hover:text-white transition-colors">
                    info@educrm.uz
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Shield className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Veb-sayt</h3>
                  <a href="https://educrm.uz" className="text-emerald-100 hover:text-white transition-colors">
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