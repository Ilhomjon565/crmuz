"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"
import axios from "axios"

// Define the form schema
const formSchema = z.object({
  fullname: z.string().min(3, {
    message: "Ism kamida 3 ta belgidan iborat bo'lishi kerak",
  }),
  phoneNumber: z.string().regex(/^\+998[0-9]{9}$/, {
    message: "Telefon raqam noto'g'ri formatda (+998901234567)",
  }),
  gender: z.enum(["1", "2"], {
    required_error: "Jinsni tanlang",
  }),
  address: z.string().min(1, {
    message: "Manzil kiritilishi shart",
  }),
  courses: z.array(z.string()).min(1, {
    message: "Kamida 1 ta kurs tanlang",
  }),
})

export default function FormPage() {
  const [formData, setFormData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [locationError, setLocationError] = useState(null)
  const [locationPermission, setLocationPermission] = useState("prompt") // "granted", "denied", "prompt"
  const { formId } = useParams()
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phoneNumber: "+998",
      gender: undefined,
      address: "",
      courses: [],
    },
  })

  const getLocation = () => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          setLocationError(null)
          setLocationPermission("granted")
        },
        (error) => {
          console.error("Joylashuv olishda xatolik:", error)
          setLocationError(
            "Joylashuv ma'lumotlarini olishda xatolik yuz berdi. Iltimos, joylashuv xizmatlarini yoqing.",
          )
          setLocationPermission("denied")
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      )
    } else {
      setLocationError("Joylashuv xizmati mavjud emas")
      setLocationPermission("denied")
    }
  }

  const requestLocationPermission = () => {
    getLocation()
  }

  useEffect(() => {
    const fetchFormData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await axios.get(`https://backend-edu.uz/lids/form/${formId}`)
        setFormData(response.data)
      } catch (err) {
        console.error("Error fetching form data:", err)
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi")
      } finally {
        setIsLoading(false)
      }
    }

    if (formId) {
      fetchFormData()
      getLocation() // Initial location check
    }
  }, [formId])

  async function onSubmit(values) {
    if (!location) {
      setLocationError("Joylashuv ma'lumotlari talab qilinadi")
      requestLocationPermission()
      return
    }

    setIsSubmitting(true)
    try {
      // Prepare the exact payload as required
      const payload = {
        lidName: formData?.educationName,
        fullName: values.fullname,
        gender: Number.parseInt(values.gender),
        address: values.address,
        phoneNumber: values.phoneNumber,
        longitude: location.longitude,
        latitude: location.latitude,
        courses: values.courses,
      }

      const response = await axios.post(`https://backend-edu.uz/lids/${formId}`, payload)
      console.log("Form submitted successfully:", response.data)
      setIsSubmitted(true)
      form.reset()
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Formani yuborishda xatolik yuz berdi")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <p className="text-lg text-center text-muted-foreground">Ma'lumotlar yuklanmoqda...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error && !formData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-destructive mb-4" />
            <h2 className="text-xl font-semibold mb-2">Xatolik yuz berdi</h2>
            <p className="text-center text-muted-foreground mb-6">{error}</p>
            <Button onClick={() => router.back()}>Orqaga qaytish</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardContent className="flex flex-col items-center justify-center pt-12 pb-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Muvaffaqiyatli yuborildi!</h2>
              <p className="text-center text-muted-foreground mb-6">
                Sizning arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
              </p>
              <Button onClick={() => router.push("/")} className="w-full">
                Bosh sahifaga qaytish
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  if (!location && locationPermission !== "granted") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Joylashuv ruxsati kerak</CardTitle>
              <CardDescription className="text-center">
                Formani to'ldirish uchun joylashuv ma'lumotlaringizni ulashishingiz kerak
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center pt-6 pb-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-center text-muted-foreground mb-6">
                Sizning joylashuvingiz faqat ariza maqsadida ishlatiladi va maxfiy saqlanadi.
              </p>
              <Button onClick={requestLocationPermission} className="w-full bg-blue-600 hover:bg-blue-700">
                Joylashuvga ruxsat berish
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          {formData?.educationLogo && (
            <Image
              src={
                formData.educationLogo.startsWith("http")
                  ? formData.educationLogo
                  : `https://backend-edu.uz${formData.educationLogo}`
              }
              alt="Education Logo"
              width={100}
              height={80}
              className="max-w-[150px] rounded-full mr-4 sm:max-w-[200px]"
              unoptimized
            />
          )}
          <h1 className="text-4xl sm:text-6xl font-bold text-blue-800 text-center sm:text-left">
            {formData?.educationName || "Ariza formasi"}
          </h1>
        </div>

        <br />

        {locationError && locationPermission !== "granted" && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Joylashuv xatoligi</AlertTitle>
            <AlertDescription>
              {locationError}
              <Button variant="outline" size="sm" onClick={requestLocationPermission} className="mt-2 w-full">
                Joylashuvga ruxsat berish
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <Card className="backdrop-blur-sm bg-white/90 shadow-lg">
          <CardHeader>
            <CardTitle>{formData?.title || "Ariza topshirish"}</CardTitle>
            <CardDescription>{formData?.description || "Formani to'ldiring"}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To'liq ism</FormLabel>
                      <FormControl>
                        <Input placeholder="Ism Familiya" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon raqam</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+998901234567"
                          {...field}
                          onChange={(e) => {
                            let value = e.target.value
                            value = value.replace(/[^\d+]/g, "")
                            if (!value.startsWith("+998")) {
                              value = "+998"
                            }
                            value = value.slice(0, 13)
                            field.onChange(value)
                          }}
                        />
                      </FormControl>
                      <FormDescription>Masalan: +998901234567</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jins</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="1" />
                            </FormControl>
                            <FormLabel className="font-normal">Erkak</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="2" />
                            </FormControl>
                            <FormLabel className="font-normal">Ayol</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Manzil</FormLabel>
                      <FormControl>
                        <Input placeholder="Manzil" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {formData?.courses?.length > 0 && (
                  <FormField
                    control={form.control}
                    name="courses"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kurslar (max 3)</FormLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {formData.courses.map((course) => (
                            <FormItem key={course.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(course.id)}
                                  onCheckedChange={(checked) => {
                                    const updatedValue = checked
                                      ? [...(field.value || []), course.id]
                                      : (field.value || []).filter((id) => id !== course.id)

                                    if (updatedValue.length <= 3) {
                                      field.onChange(updatedValue)
                                    }
                                  }}
                                  disabled={!field.value?.includes(course.id) && (field.value?.length || 0) >= 3}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{course.courseName}</FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormDescription>Ko'pi bilan 3 ta kurs tanlash mumkin</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Xatolik</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  disabled={isSubmitting}
                >
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
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-muted-foreground text-center">
              {formData?.footerText || "Barcha ma'lumotlar maxfiy saqlanadi"}
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
