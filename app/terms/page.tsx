import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Foydalanish shartlari - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM foydalanish shartlari. Xizmatlardan foydalanish shartlari va qoidalari haqida batafsil ma'lumot.",
  keywords: [
    "educrm shartlar",
    "o'quv markaz crm shartlar",
    "education crm terms",
    "ta'lim crm shartlar",
    "uzbekistan education crm terms of service",
    "educrm.uz shartlar",
    "o'quv markazlarni avtomatlashtiruvchi tizim shartlar"
  ].join(", "),
  openGraph: {
    title: "Foydalanish shartlari - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "EduCRM foydalanish shartlari va Xizmatlar qoidalari",
    url: "https://educrm.uz/terms",
  },
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Foydalanish shartlari
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              EduCRM foydalanish shartlari va Xizmatlar qoidalari
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Umumiy qoidalar</h2>
                <p>
                  EduCRM Xizmatlaridan foydalanish orqali siz bu foydalanish shartlarini qabul qilasiz. Agar siz bu shartlar bilan rozi bo'lmasangiz, Xizmatlardan foydalanmang.
                </p>
                
                <h2>2. Xizmatlar tavsifi</h2>
                <p>EduCRM quyidagi Xizmatlarni taqdim etadi:</p>
                <ul>
                  <li>O'quvchilar boshqaruvi</li>
                  <li>O'qituvchilar nazorati</li>
                  <li>To'lovlar boshqaruvi</li>
                  <li>Hisobotlar va tahlillar</li>
                  <li>Mobil qo'llab-quvvatlash</li>
                  <li>Texnik yordam</li>
                </ul>
                
                <h2>3. Foydalanuvchi majburiyatlari</h2>
                <p>Foydalanuvchi quyidagi majburiyatlarga ega:</p>
                <ul>
                  <li>To'g'ri va aniq ma'lumotlar kiritish</li>
                  <li>Xizmatlarni qonuniy maqsadlarda foydalanish</li>
                  <li>Boshqa foydalanuvchilar huquqlarini hurmat qilish</li>
                  <li>Xavfsizlik choralarini saqlash</li>
                  <li>Xizmatlarni buzishga urinmaslik</li>
                </ul>
                
                <h2>4. Kompaniya majburiyatlari</h2>
                <p>EduCRM quyidagi majburiyatlarga ega:</p>
                <ul>
                  <li>Xizmatlarni sifatli taqdim etish</li>
                  <li>Ma'lumotlarni himoya qilish</li>
                  <li>Texnik yordam ko'rsatish</li>
                  <li>Xizmatlarni yaxshilash</li>
                  <li>Maxfiylikni saqlash</li>
                </ul>
                
                <h2>5. To'lovlar</h2>
                <p>To'lovlar haqida:</p>
                <ul>
                  <li>Narxlar veb-saytda ko'rsatilgan</li>
                  <li>To'lovlar oldindan amalga oshiriladi</li>
                  <li>Qaytarish siyosati mavjud</li>
                  <li>Soliklar qo'shimcha hisoblanadi</li>
                </ul>
                
                <h2>6. Intellektual mulk</h2>
                <p>EduCRM va uning barcha tarkibiy qismlari kompaniyaning intellektual mulki hisoblanadi va himoyalangan.</p>
                
                <h2>7. Mas'uliyat cheklovlari</h2>
                <p>EduCRM quyidagi hollarda mas'uliyatni cheklaydi:</p>
                <ul>
                  <li>Kutilmagan texnik muammolar</li>
                  <li>Internet uzilishlari</li>
                  <li>Foydalanuvchi xatolari</li>
                  <li>Uchinchi tomon Xizmatlari uzilishi</li>
                </ul>
                
                <h2>8. Xizmatlarni to'xtatish</h2>
                <p>Kompaniya quyidagi hollarda Xizmatlarni to'xtatishi mumkin:</p>
                <ul>
                  <li>Foydalanuvchi shartlarni buzganida</li>
                  <li>To'lov amalga oshirilmaganida</li>
                  <li>Texnik muammolar tufayli</li>
                  <li>Qonuniy talablar asosida</li>
                </ul>
                
                <h2>9. O'zgarishlar</h2>
                <p>Bu shartlar vaqt o'tishi bilan o'zgarishi mumkin. O'zgarishlar haqida foydalanuvchilarni xabardor qilamiz.</p>
                
                <h2>10. Bog'lanish</h2>
                <p>Foydalanish shartlari haqida savollaringiz bo'lsa, biz bilan bog'laning:</p>
                <ul>
                  <li>Email: legal@educrm.uz</li>
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