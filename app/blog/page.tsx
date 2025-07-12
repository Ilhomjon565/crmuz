import { Metadata } from "next"
import BlogSection from "@/components/blog-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "EduCRM blog - o'quv markazlari boshqaruvi, ta'lim texnologiyalari va CRM tizimlari haqida foydali maqolalar.",
  keywords: [
    "educrm blog",
    "o'quv markaz crm maqolalar",
    "education crm blog",
    "ta'lim crm blog",
    "uzbekistan education crm articles",
    "educrm.uz blog",
    "o'quv markazlarni avtomatlashtiruvchi tizim maqolalar"
  ].join(", "),
  openGraph: {
    title: "Blog - EduCRM O'quv Markazlarni Avtomatlashtiruvchi Tizim",
    description: "O'quv markazlari boshqaruvi va ta'lim texnologiyalari haqida foydali maqolalar",
    url: "https://educrm.uz/blog",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              EduCRM Blog
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              O'quv markazlari boshqaruvi, ta'lim texnologiyalari va CRM tizimlari haqida foydali maqolalar
            </p>
          </div>
          
          <BlogSection />
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 