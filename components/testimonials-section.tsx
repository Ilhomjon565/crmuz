import { QuoteIcon } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Mijozlarimiz fikrlari
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mijozlarimiz fikrlari</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              EduCRM tizimidan foydalanuvchilar fikrlari
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
              <QuoteIcon className="h-8 w-8 text-primary" />
              <p className="text-muted-foreground">
                Bu tizim bizning o'quv markazimiz samaradorligini sezilarli darajada oshirdi.
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <div>
                <p className="text-sm font-medium">Aziz Rahimov</p>
                <p className="text-sm text-muted-foreground">IT Academy direktori</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
              <QuoteIcon className="h-8 w-8 text-primary" />
              <p className="text-muted-foreground">Juda qulay va tushunarli interfeys. Hamma hisobotlar bir joyda.</p>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <div>
                <p className="text-sm font-medium">Malika Karimova</p>
                <p className="text-sm text-muted-foreground">English Pro markaz menejeri</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
              <QuoteIcon className="h-8 w-8 text-primary" />
              <p className="text-muted-foreground">O'quvchilar va ota-onalar bilan muloqot juda osonlashdi.</p>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <div>
                <p className="text-sm font-medium">Jamshid Toshmatov</p>
                <p className="text-sm text-muted-foreground">Math Expert markaz rahbari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
