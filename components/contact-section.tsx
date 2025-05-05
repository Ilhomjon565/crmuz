"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Mail, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }),
  email: z.string().email({ message: "Noto'g'ri email format" }),
  phone: z.string().min(9, { message: "Telefon raqam kamida 9 ta raqamdan iborat bo'lishi kerak" }),
  message: z.string().min(10, { message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak" }),
})

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Xabaringiz yuborildi",
        description: "Tez orada siz bilan bog'lanamiz",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Xatolik yuz berdi",
        description: "Iltimos, keyinroq qayta urinib ko'ring",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="boglanish">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Bog'lanish
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Biz bilan bog'laning</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Savollaringiz bo'lsa, bizga murojaat qiling
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Manzil</h3>
                <p className="text-muted-foreground">Toshkent sh., Shayxontohur tumani, Navoiy ko'chasi, 36-uy</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-muted-foreground">info@educrm.uz</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Telefon</h3>
                <p className="text-muted-foreground">+998 90 123 45 67</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ism</FormLabel>
                      <FormControl>
                        <Input placeholder="Ismingizni kiriting" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email manzilingizni kiriting" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefon raqamingizni kiriting" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Xabar</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Xabaringizni kiriting" className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    "Yuborish"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
