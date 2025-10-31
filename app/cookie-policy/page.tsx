import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Cookie, Shield, Settings, Eye, Trash2, Mail, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Siyosati - EduCRM.uz | Cookie Fayllaridan Foydalanish",
  description: "EduCRM.uz platformasida cookie fayllaridan qanday foydalanilishi, qanday ma'lumotlar to'planishi va qanday boshqarish mumkinligi haqida batafsil ma'lumot.",
  keywords: [
    "educrm cookie",
    "o'quv markaz crm cookie",
    "education crm cookies",
    "ta'lim crm cookie siyosati",
    "uzbekistan education crm cookie policy",
    "educrm.uz cookie",
    "cookie boshqaruvi",
    "brauzer cookie",
    "crm tizim cookie"
  ].join(", "),
  openGraph: {
    title: "Cookie Siyosati - EduCRM.uz",
    description: "EduCRM.uz platformasida cookie fayllaridan foydalanish va boshqarish",
    url: "https://educrm.uz/cookie-policy",
    type: "website",
  },
  alternates: {
    canonical: "/cookie-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
              <Cookie className="w-10 h-10 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">
              Cookie Siyosati
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Cookie fayllaridan qanday foydalanishimiz va ularni qanday boshqarish mumkinligi
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Shield className="w-5 h-5" />
                <span>Maxfiylik Siyosati</span>
              </Link>
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Settings className="w-5 h-5" />
                <span>Foydalanish Shartlari</span>
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
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-12 border border-orange-100 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Cookie className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Cookie Nima?
                  </h2>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Cookie</strong> — bu brauzerda saqlanadigan kichik fayl bo'lib, foydalanuvchi faoliyatini eslab qolish 
                    uchun ishlatiladi. EduCRM cookie'lardan foydalanuvchi tajribasini yaxshilash, tizimga avtomatik kirish va 
                    statistik maqsadlarda foydalanadi.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-12">
              
              {/* Section 1 - Cookie Types */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Cookie Turlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM.uz quyidagi turdagi cookie'lardan foydalanadi:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                        🔐 Zaruriy Cookie'lar (Essential Cookies)
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Platformaning asosiy funksiyalarini ta'minlash uchun zarur. Tizimga kirish, sessiyalarni boshqarish va xavfsizlikni ta'minlaydi. Bu cookie'larni o'chirish mumkin emas.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                      <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">
                        ⚙️ Funksional Cookie'lar (Functional Cookies)
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Foydalanuvchi sozlamalari, til tanlovi, tema (qorong'i/yorug') kabi afzalliklarni eslab qoladi. Tajribani shaxsiylashtirishga yordam beradi.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                      <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">
                        📊 Analitik Cookie'lar (Analytics Cookies)
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Platformadan qanday foydalanilishini tushunish uchun statistik ma'lumotlar to'playdi. Xizmatni yaxshilashga yordam beradi. Shaxsni aniqlash uchun ishlatilmaydi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 - Cookie Usage */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Cookie'lardan Foydalanish Maqsadlari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM cookie'lardan quyidagi maqsadlarda foydalanadi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Tizimga kirish va sessiyalarni boshqarish:</strong> Har safar parol kiritmasdan platformada ishlash imkoniyati</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Xavfsizlikni ta'minlash:</strong> Noqonuniy kirish urinishlarini aniqlash va bloklash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Foydalanuvchi sozlamalarini saqlash:</strong> Til, tema va boshqa shaxsiy sozlamalar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Analitika va statistika:</strong> Platformani yaxshilash uchun foydalanish ma'lumotlarini to'plash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Xizmat sifatini oshirish:</strong> Foydalanuvchi ehtiyojlariga mos xususiyatlarni rivojlantirish</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 - Cookie Management */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Cookie'larni Boshqarish
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Foydalanuvchi brauzer sozlamalari orqali cookie'larni boshqarishi yoki o'chirish huquqiga ega:
                  </p>
                  <div className="space-y-6 mt-6">
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="text-2xl">🌐</span> Google Chrome
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        <li>Sozlamalar → Maxfiylik va xavfsizlik → Cookie'lar va boshqa sayt ma'lumotlari</li>
                        <li>Barcha cookie'larni ko'rish va o'chirish imkoniyati</li>
                      </ol>
                    </div>
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="text-2xl">🦊</span> Mozilla Firefox
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        <li>Sozlamalar → Maxfiylik va xavfsizlik → Cookie'lar va sayt ma'lumotlari</li>
                        <li>Ma'lumotlarni boshqarish va tozalash</li>
                      </ol>
                    </div>
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="text-2xl">🧭</span> Safari
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        <li>Preferences → Privacy → Manage Website Data</li>
                        <li>Sayt ma'lumotlarini ko'rish va o'chirish</li>
                      </ol>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      <strong>⚠️ Ogohlantirish:</strong> Cookie'larni o'chirish ba'zi platformaning funksiyalarini cheklashi mumkin. Zaruriy cookie'larni o'chirish tizimga kirishda muammolarga olib keladi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 - Cookie Duration */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">⏰</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Cookie'lar Amal Qilish Muddati
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Cookie'lar turli davrlarda amal qiladi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">→</span>
                      <span><strong>Sessiya cookie'lari:</strong> Brauzer yopilganda avtomatik o'chiriladi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">→</span>
                      <span><strong>Doimiy cookie'lar:</strong> 30 kun davomida saqlanadi (sozlamalar uchun)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">→</span>
                      <span><strong>Analitik cookie'lar:</strong> 2 yil davomida statistika uchun saqlanadi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 - Third-party Cookies */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Uchinchi Tomon Cookie'lari
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    EduCRM.uz minimal miqdorda uchinchi tomon cookie'laridan foydalanadi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">→</span>
                      <span><strong>Analitika:</strong> Platformadan foydalanish statistikasi (anonim)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">→</span>
                      <span><strong>Xizmat integratsiyalari:</strong> To'lov tizimlari va boshqa zaruriy xizmatlar</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <strong>✓ Biz reklama yoki marketing cookie'laridan foydalanmaymiz!</strong> Sizning ma'lumotlaringizni uchinchi tomon reklama kompaniyalariga sotmaymiz.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 - User Rights */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Sizning Huquqlaringiz
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Cookie'lar bilan bog'liq sizning huquqlaringiz:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span>Cookie'larni rad etish yoki qabul qilish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span>Mavjud cookie'larni istalgan vaqtda o'chirish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span>Brauzer sozlamalarida cookie'larni bloklash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span>Cookie'lar haqida to'liq ma'lumot olish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span>Savollaringiz bo'lsa, biz bilan bog'lanish</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Cookie'lar Haqida Savollaringiz Bormi?</h2>
              <p className="text-lg text-center mb-8 text-orange-50">
                Cookie siyosati bo'yicha qo'shimcha ma'lumot olish uchun biz bilan bog'laning:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <a href="tel:+998958995500" className="text-orange-100 hover:text-white transition-colors">
                    +998 95 899 55 00
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:info@educrm.uz" className="text-orange-100 hover:text-white transition-colors">
                    info@educrm.uz
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Shield className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Veb-sayt</h3>
                  <a href="https://educrm.uz" className="text-orange-100 hover:text-white transition-colors">
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
                Versiya: 1.0 | EduCRM.uz © 2025
              </p>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

