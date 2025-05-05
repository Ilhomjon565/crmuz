import { Phone, Users, LineChart } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="xizmatlar">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Xizmatlar
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bizning xizmatlarimiz</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              EduCRM tizimi orqali o'quv markazingizni samarali boshqaring
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">24/7 Qo'llab-quvvatlash</h3>
            <p className="text-center text-muted-foreground">Tizimdan foydalanish bo'yicha doimiy yordam</p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">VIP Menejer yaratish</h3>
            <p className="text-center text-muted-foreground">Cheksiz menejerlar qo'shish imkoniyati</p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
            <div className="rounded-full bg-primary/10 p-4">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">O'quv jarayoni nazorati</h3>
            <p className="text-center text-muted-foreground">To'liq monitoring va hisobotlar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
