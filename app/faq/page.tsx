import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Ko'p so'raladigan savollar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM haqida ko'p so'raladigan savollar va javoblar. O'quv markazingiz uchun professional CRM tizimi haqida barcha ma'lumotlar.",
  keywords: [
    "educrm savollar",
    "o'quv markaz crm savollar",
    "education crm faq",
    "ta'lim crm savollar",
    "uzbekistan education crm questions",
    "educrm.uz faq",
    "o'quv markazlarni avtomatlashtiruvchi tizim savollar"
  ].join(", "),
  openGraph: {
    title: "Ko'p so'raladigan savollar - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "EduCRM haqida ko'p so'raladigan savollar va javoblar",
    url: "https://educrm.uz/faq",
  },
  alternates: {
    canonical: "/faq",
  },
}

const faqData = [
  {
    question: "EduCRM nima?",
    answer: "EduCRM - O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. Bu tizim o'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish uchun yaratilgan."
  },
  {
    question: "EduCRM qanday ishlaydi?",
    answer: "EduCRM o'quv markazingizning barcha jarayonlarini avtomatlashtiradi: o'quvchilar ro'yxatini boshqarish, o'qituvchilar ishlarini kuzatish, to'lovlarni hisobga olish va hisobotlar tayyorlash."
  },
  {
    question: "EduCRM narxi qancha?",
    answer: "EduCRM ning turli xil narx rejalari mavjud. Bepul sinab ko'rish imkoniyati ham bor. Batafsil ma'lumot uchun narxlar sahifasiga tashrif buyuring."
  },
  {
    question: "EduCRM ni qanday o'rnatish mumkin?",
    answer: "EduCRM - bu bulutli xizmat bo'lib, o'rnatish talab qilinmaydi. Siz faqat ro'yxatdan o'tasiz va darhol foydalanishni boshlaysiz."
  },
  {
    question: "EduCRM da qanday xususiyatlar mavjud?",
    answer: "EduCRM da o'quvchilar boshqaruvi, o'qituvchilar nazorati, to'lovlar boshqaruvi, hisobotlar va tahlillar, mobil qo'llab-quvvatlash va boshqa ko'plab xususiyatlar mavjud."
  },
  {
    question: "EduCRM ni qanday sinab ko'rish mumkin?",
    answer: "EduCRM ni bepul sinab ko'rish uchun bizning veb-saytimizda ro'yxatdan o'ting yoki biz bilan bog'laning. Demo versiyasini ko'rsatamiz."
  },
  {
    question: "EduCRM da texnik yordam mavjudmi?",
    answer: "Ha, EduCRM da 24/7 texnik yordam xizmati mavjud. Biz sizga telefon, email yoki chat orqali yordam beramiz."
  },
  {
    question: "EduCRM da ma'lumotlar xavfsizmi?",
    answer: "Ha, EduCRM da barcha ma'lumotlar yuqori darajada himoyalangan. Biz zamonaviy xavfsizlik texnologiyalaridan foydalanamiz."
  },
  {
    question: "EduCRM ni qanday o'qitish mumkin?",
    answer: "EduCRM ni o'qitish juda oson. Biz sizga bepul o'qitish xizmatini taqdim etamiz va video darsliklar ham mavjud."
  },
  {
    question: "EduCRM da qanday hisobotlar mavjud?",
    answer: "EduCRM da o'quvchilar statistikasi, to'lovlar hisoboti, o'qituvchilar ishlari va boshqa ko'plab hisobotlar mavjud."
  }
]

export default function FAQPage() {
  return (
    <>
      <StructuredData
        type="faq"
        data={{
          mainEntity: faqData.map((faq, index) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />
      
      <main className="min-h-screen">
        <Header />
        
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Ko'p so'raladigan savollar
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                EduCRM haqida ko'p so'raladigan savollar va javoblar
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Savolingizga javob topa olmadingizmi?
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  Biz bilan bog'laning
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  )
} 