import { Users, School, GraduationCap, BarChart } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">10,000+</div>
            <div className="text-sm text-muted-foreground">Faol foydalanuvchilar</div>
            <Users className="h-6 w-6 text-primary/60" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">O'quv markazlar</div>
            <School className="h-6 w-6 text-primary/60" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">25,000+</div>
            <div className="text-sm text-muted-foreground">Muvaffaqiyatli bitiruvchilar</div>
            <GraduationCap className="h-6 w-6 text-primary/60" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">87%</div>
            <div className="text-sm text-muted-foreground">O'rtacha o'zlashtirish</div>
            <BarChart className="h-6 w-6 text-primary/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
