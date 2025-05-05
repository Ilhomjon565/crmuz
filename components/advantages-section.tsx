import { BarChart3, BookOpen, MessageSquare } from "lucide-react"

export default function AdvantagesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50" id="ustunliklar">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Ustunliklar
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nima uchun EduCRM?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ta'lim markazingizni boshqarishning eng samarali usuli
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6">
            <div className="flex items-center space-x-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Grafiklar va statistika</h3>
            </div>
            <p className="text-muted-foreground">
              Barcha ma'lumotlarni vizual ko'rinishda taqdim etish, o'zlashtirish darajasi va boshqa muhim
              ko'rsatkichlar
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Avtomatik hisob-kitob</h3>
            </div>
            <p className="text-muted-foreground">
              O'qituvchilar maoshi, davomat va boshqa moliyaviy hisobotlarni avtomatik hisoblash tizimi
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6">
            <div className="flex items-center space-x-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">SMS xabarnomalar</h3>
            </div>
            <p className="text-muted-foreground">
              To'lovlar, qarzdorlik va muhim xabarlar haqida avtomatik SMS yuborish tizimi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
