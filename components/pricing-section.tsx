import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="narxlar">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Tariflar</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Narxlar</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Har qanday o'quv markazi uchun mos tarif rejasi
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-8">
          <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Boshlang'ich</h3>
              <p className="text-sm text-muted-foreground">Kichik o'quv markazlari uchun</p>
            </div>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              150,000
              <span className="ml-1 text-base font-medium text-muted-foreground">so'm / oyiga</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>50 tagacha o'quvchi</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>3 ta administrator</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Asosiy hisobotlar</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Email qo'llab-quvvatlash</span>
              </li>
            </ul>
            <Button className="mt-8" variant="outline" asChild>
              <Link href="/form/demo">Tanlash</Link>
            </Button>
          </div>
          <div className="relative flex flex-col rounded-lg border bg-card p-6 shadow-sm">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Ommabop
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Professional</h3>
              <p className="text-sm text-muted-foreground">O'rta hajmdagi markazlar uchun</p>
            </div>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              400,000
              <span className="ml-1 text-base font-medium text-muted-foreground">so'm / 3 oyga</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>200 tagacha o'quvchi</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>10 ta administrator</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Kengaytirilgan hisobotlar</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>24/7 qo'llab-quvvatlash</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>SMS xabarnomalar</span>
              </li>
            </ul>
            <Button className="mt-8" asChild>
              <Link href="/form/demo">Tanlash</Link>
            </Button>
          </div>
          <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-sm text-muted-foreground">Yirik ta'lim markazlari uchun</p>
            </div>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              800,000
              <span className="ml-1 text-base font-medium text-muted-foreground">so'm / 6 oyga</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Cheksiz o'quvchilar</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Cheksiz administratorlar</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Maxsus hisobotlar</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Shaxsiy menejer</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>API integratsiya</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>SMS va Telegram bot</span>
              </li>
            </ul>
            <Button className="mt-8" variant="outline" asChild>
              <Link href="/form/demo">Tanlash</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
