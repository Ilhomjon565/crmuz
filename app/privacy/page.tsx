import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Maxfiylik siyosati - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM maxfiylik siyosati. Ma'lumotlaringizning xavfsizligi va maxfiyligi haqida batafsil ma'lumot.",
  keywords: [
    "educrm maxfiylik",
    "o'quv markaz crm maxfiylik",
    "education crm privacy",
    "ta'lim crm maxfiylik",
    "uzbekistan education crm privacy policy",
    "educrm.uz maxfiylik",
    "o'quv markazlarni avtomatlashtiruvchi tizim maxfiylik"
  ].join(", "),
  openGraph: {
    title: "Maxfiylik siyosati - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "EduCRM maxfiylik siyosati va ma'lumotlar himoyasi",
    url: "https://educrm.uz/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Maxfiylik siyosati
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              EduCRM maxfiylik siyosati va ma'lumotlar himoyasi
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Umumiy ma'lumot</h2>
                <p>
                  EduCRM ("biz", "bizning", "kompaniya") sizning maxfiyligingizni hurmat qiladi va ma'lumotlaringizni himoya qilish uchun barcha zarur choralarni ko'radi. Bu maxfiylik siyosati sizning ma'lumotlaringiz qanday to'planishi, ishlatilishi va himoya qilinishi haqida ma'lumot beradi.
                </p>
                
                <h2>2. To'planadigan ma'lumotlar</h2>
                <p>Biz quyidagi ma'lumotlarni to'playmiz:</p>
                <ul>
                  <li>Shaxsiy ma'lumotlar (ism, familiya, email, telefon raqami)</li>
                  <li>O'quv markaz ma'lumotlari</li>
                  <li>O'quvchilar va o'qituvchilar ma'lumotlari</li>
                  <li>To'lov ma'lumotlari</li>
                  <li>Texnik ma'lumotlar (IP manzil, brauzer turi)</li>
                </ul>
                
                <h2>3. Ma'lumotlardan foydalanish</h2>
                <p>To'plangan ma'lumotlar quyidagi maqsadlarda ishlatiladi:</p>
                <ul>
                  <li>Xizmatlarni taqdim etish</li>
                  <li>Mijozlarni qo'llab-quvvatlash</li>
                  <li>Xizmatlarni yaxshilash</li>
                  <li>Xavfsizlikni ta'minlash</li>
                  <li>Qonuniy talablarni bajarish</li>
                </ul>
                
                <h2>4. Ma'lumotlarni himoya qilish</h2>
                <p>Biz ma'lumotlaringizni himoya qilish uchun quyidagi choralarni ko'ramiz:</p>
                <ul>
                  <li>SSL shifrlash</li>
                  <li>Xavfsiz serverlar</li>
                  <li>Muntazam xavfsizlik tekshiruvlari</li>
                  <li>Ma'lumotlar zaxiralash</li>
                  <li>Xodimlar o'qitish</li>
                </ul>
                
                <h2>5. Ma'lumotlarni baham ko'rish</h2>
                <p>Biz sizning ma'lumotlaringizni uchinchi tomonlarga faqat quyidagi hollarda baham ko'ramiz:</p>
                <ul>
                  <li>Sizning ruxsatingiz bilan</li>
                  <li>Qonuniy talablar asosida</li>
                  <li>Xizmatlarni taqdim etish uchun zarur bo'lganda</li>
                </ul>
                
                <h2>6. Sizning huquqlaringiz</h2>
                <p>Sizda quyidagi huquqlar mavjud:</p>
                <ul>
                  <li>Ma'lumotlaringizni ko'rish</li>
                  <li>Ma'lumotlarni tahrirlash</li>
                  <li>Ma'lumotlarni o'chirish</li>
                  <li>Ma'lumotlarni ko'chirish</li>
                  <li>Ma'lumotlarni to'plashni to'xtatish</li>
                </ul>
                
                <h2>7. Cookie fayllari</h2>
                <p>Biz cookie fayllaridan foydalanamiz:</p>
                <ul>
                  <li>Foydalanuvchi tajribasini yaxshilash uchun</li>
                  <li>Xizmatlarni taqdim etish uchun</li>
                  <li>Tahlil va statistikalar uchun</li>
                </ul>
                
                <h2>8. O'zgarishlar</h2>
                <p>Bu maxfiylik siyosati vaqt o'tishi bilan o'zgarishi mumkin. O'zgarishlar haqida sizni xabardor qilamiz.</p>
                
                <h2>9. Bog'lanish</h2>
                <p>Maxfiylik siyosati haqida savollaringiz bo'lsa, biz bilan bog'laning:</p>
                <ul>
                  <li>Email: privacy@educrm.uz</li>
                  <li>Telefon: +998-XX-XXX-XXXX</li>
                  <li>Manzil: Toshkent, O'zbekiston</li>
                </ul>
                
                <p className="text-sm text-slate-500 mt-8">
                  Oxirgi yangilanish: 2024-yil 19-dekabr
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