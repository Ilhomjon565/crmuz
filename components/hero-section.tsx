import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Ta'lim markazingizni raqamlashtiring
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Zamonaviy CRM tizimi orqali o'quv markazingizni samarali boshqaring
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#boglanish">Boshlash</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/form/demo">Batafsil ma'lumot</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <Image
              src="/educrm-logo.svg"
              alt="EduCRM"
              width={600}
              height={400}
              className="relative z-10 w-full h-auto max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
