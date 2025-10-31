import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Lock, Key, Database, AlertTriangle, CheckCircle, Mail, Phone, Server } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Xavfsizlik Siyosati - EduCRM.uz | Ma'lumotlar Himoyasi va Xavfsizlik",
  description: "EduCRM.uz platformasida ma'lumotlarni himoya qilish, xavfsizlik choralari, SSL shifrlash, ma'lumotlar zaxiralari va favqulodda holatlarda ma'lumotlarni tiklash haqida batafsil ma'lumot.",
  keywords: [
    "educrm xavfsizlik",
    "o'quv markaz crm xavfsizlik",
    "education crm security",
    "ta'lim crm xavfsizlik siyosati",
    "uzbekistan education crm security",
    "educrm.uz xavfsizlik",
    "ma'lumotlar himoyasi",
    "ssl shifrlash",
    "ma'lumotlar zaxiralash",
    "crm tizim xavfsizlik"
  ].join(", "),
  openGraph: {
    title: "Xavfsizlik Siyosati - EduCRM.uz",
    description: "EduCRM.uz platformasida ma'lumotlar xavfsizligi va himoya choralari",
    url: "https://educrm.uz/security",
    type: "website",
  },
  alternates: {
    canonical: "/security",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
              <Shield className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400">
              Xavfsizlik Siyosati
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ma'lumotlaringiz xavfsizligi — bizning birinchi o'rindagi vazifamiz
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Shield className="w-5 h-5" />
                <span>Maxfiylik Siyosati</span>
              </Link>
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Lock className="w-5 h-5" />
                <span>Foydalanish Shartlari</span>
              </Link>
              <Link href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Key className="w-5 h-5" />
                <span>Cookie Siyosati</span>
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
            <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-12 border border-red-100 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Bizning Xavfsizlik Majburiyatimiz
                  </h2>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>EduCRM.uz</strong> ma'lumotlarni himoya qilish uchun texnik va tashkiliy choralar ko'radi. 
                    Serverlarda SSL/TLS shifrlash, ma'lumotlar bazasi zaxiralari, foydalanuvchi rollari bilan cheklangan 
                    kirish imkoniyatlari mavjud. Favqulodda holatlarda ma'lumotlar tiklanadi va foydalanuvchilarga xabar beriladi.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-12">
              
              {/* Section 1 - Encryption */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Shifrlash va Ma'lumotlar Uzatish Xavfsizligi
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Barcha ma'lumotlar uzatilayotganda yuqori darajada shifrlangan:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">🔒</span>
                      <span><strong>SSL/TLS Shifrlash:</strong> 256-bit AES shifrlash standartidan foydalanish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">🔒</span>
                      <span><strong>HTTPS Protokoli:</strong> Barcha sahifalar xavfsiz HTTPS ulanish orqali yuklangan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">🔒</span>
                      <span><strong>Ma'lumotlar bazasi shifrlash:</strong> Saqlanadigan ma'lumotlar ham shifrlangan holda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">🔒</span>
                      <span><strong>Parol xeshlash:</strong> Parollar bcrypt algoritmi bilan xavfsiz xeshlanadi</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>✓ Sertifikat:</strong> Let's Encrypt va boshqa tan olingan sertifikat provayderlaridan foydalanish
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 - Access Control */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Key className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Kirish Nazorati va Autentifikatsiya
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Faqat ruxsat etilgan shaxslar ma'lumotlarni ko'ra oladi:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Rol asosida kirish (RBAC):</strong> Direktor, menejer, o'qituvchi, o'quvchi rollari</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Ikki faktorli autentifikatsiya (2FA):</strong> Qo'shimcha xavfsizlik qatlami (ixtiyoriy)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Sessiya boshqaruvi:</strong> Avtomatik chiqish va sessiya vaqti cheklovi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>IP bloklash:</strong> Shubhali kirish urinishlarini avtomatik bloklash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span><strong>Login urinishlar cheklovi:</strong> Noto'g'ri parollar uchun vaqtinchalik bloklash</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 - Data Backup */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Ma'lumotlar Zaxiralash va Tiklash
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Muntazam zaxira nusxalar va tiklash rejasi:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                      <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">
                        📦 Avtomatik Zaxiralash
                      </h3>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300 mt-3">
                        <li className="flex items-start gap-2">
                          <span>→</span>
                          <span>Kunlik to'liq ma'lumotlar bazasi zaxiralari</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>→</span>
                          <span>Har 6 soatda incremential backup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>→</span>
                          <span>Zaxiralar 30 kun davomida saqlanadi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>→</span>
                          <span>Geografik jihatdan turli joylarda nusxalar saqlash</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                        🔄 Tiklash Tezligi
                      </h3>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300 mt-3">
                        <li className="flex items-start gap-2">
                          <span>→</span>
                          <span>RTO (Recovery Time Objective): 4 soat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>→</span>
                          <span>RPO (Recovery Point Objective): 6 soat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>→</span>
                          <span>Favqulodda holatlarda tezkor tiklash rejasi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 - Monitoring */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      24/7 Monitoring va Xavfsizlik Nazorati
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Tizim xavfsizligini doimiy kuzatish:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">👁️</span>
                      <span><strong>Real-time monitoring:</strong> Barcha tizim faoliyati jonli kuzatiladi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">👁️</span>
                      <span><strong>Intrusion Detection System (IDS):</strong> Kirish urinishlarini aniqlash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">👁️</span>
                      <span><strong>Firewall himoyasi:</strong> Zarar yetkazuvchi trafikni filtrlash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">👁️</span>
                      <span><strong>DDoS himoyasi:</strong> Xizmat rad etish hujumlaridan himoya</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">👁️</span>
                      <span><strong>Log yozib olish:</strong> Barcha muhim faoliyatlar qayd etiladi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 - Security Audits */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Xavfsizlik Auditi va Testlar
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Muntazam xavfsizlik tekshiruvlari:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">✓</span>
                      <span><strong>Penetration testing:</strong> Har chorakda professional xavfsizlik testi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">✓</span>
                      <span><strong>Vulnerability scanning:</strong> Haftasiga avtomatik zaiflik skanerlash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">✓</span>
                      <span><strong>Code review:</strong> Kod xavfsizligi tekshiruvi har yangilanishda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">✓</span>
                      <span><strong>Security updates:</strong> Tizim va kutubxonalarni doimiy yangilash</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 6 - Incident Response */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Favqulodda Holatlar Rejasi
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Xavfsizlik hodisalariga javob berish tartibi:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                        🚨 Hodisa Aniqlanganda:
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        <li>Darhol xavfsizlik jamoasini xabardor qilish</li>
                        <li>Muammoni izolyatsiya qilish va zararni cheklash</li>
                        <li>Hodisani tahlil qilish va yechim topish</li>
                        <li>Ta'sirlangan foydalanuvchilarni xabardor qilish</li>
                        <li>Tizimni tiklash va kuchaytirilgan xavfsizlik choralari</li>
                        <li>To'liq hisobot tayyorlash va oldini olish choralari</li>
                      </ol>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-blue-800 dark:text-blue-300">
                        <strong>📞 Xavfsizlik hodisasi haqida xabar berish:</strong> security@educrm.uz yoki +998 95 899 55 00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7 - User Responsibilities */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Foydalanuvchi Mas'uliyati
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none pl-16">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Foydalanuvchi quyidagi xavfsizlik choralarini bajarishi shart:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span><strong>Login ma'lumotlarini sir saqlash:</strong> Parol va login boshqalar bilan baham ko'rilmasligi kerak</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span><strong>Kuchli parol tanlash:</strong> Kamida 8 belgi, harflar, raqamlar va maxsus belgilar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span><strong>Shubhali faoliyat haqida xabar berish:</strong> G'ayritabiiy kirish yoki o'zgarishlarni bildirish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span><strong>Umumiy qurilmalarda ehtiyot bo'lish:</strong> Hisobdan chiqishni unutmaslik</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                      <span><strong>Yangilanishlarni kuzatish:</strong> Xavfsizlik xabarnomalariga e'tibor berish</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Xavfsizlik Bo'yicha Bog'lanish</h2>
              <p className="text-lg text-center mb-8 text-red-50">
                Xavfsizlik muammosi yoki savol bo'lsa, darhol bizga xabar bering:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <a href="tel:+998958995500" className="text-red-100 hover:text-white transition-colors">
                    +998 95 899 55 00
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:security@educrm.uz" className="text-red-100 hover:text-white transition-colors">
                    security@educrm.uz
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <Shield className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Veb-sayt</h3>
                  <a href="https://educrm.uz" className="text-red-100 hover:text-white transition-colors">
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

