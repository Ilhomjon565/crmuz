"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import axios from "axios"
import { useParams } from "next/navigation"

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
  courses: z
    .array(z.string())
    .min(1, {
      message: "Kamida 1 ta kurs tanlang",
    })
    .max(3, {
      message: "Ko'pi bilan 3 ta kurs tanlash mumkin",
    }),
})

interface EducationData {
  educationLogo: string
  educationName: string
  courses: { id: string; courseName: string }[]
}

// Mock data for static generation
const mockData: Record<string, EducationData> = {
  "1": {
    educationLogo: "/abstract-geometric-logo.png",
    educationName: "IT Academy",
    courses: [
      { id: "101", courseName: "Web Development" },
      { id: "102", courseName: "Mobile Development" },
      { id: "103", courseName: "Data Science" },
      { id: "104", courseName: "UI/UX Design" },
    ],
  },
  "2": {
    educationLogo: "/abstract-geometric-logo.png",
    educationName: "Language Center",
    courses: [
      { id: "201", courseName: "English" },
      { id: "202", courseName: "Russian" },
      { id: "203", courseName: "Korean" },
    ],
  },
  "3": {
    educationLogo: "/abstract-geometric-logo.png",
    educationName: "Business School",
    courses: [
      { id: "301", courseName: "Marketing" },
      { id: "302", courseName: "Finance" },
      { id: "303", courseName: "Management" },
    ],
  },
}

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [data, setData] = useState<EducationData | null>(null)
  const [location, setLocation] = useState<{ longitude: number; latitude: number } | null>(null)
  const [locationError, setLocationError] = useState<string | null>(null)
  const { id } = useParams()

  useEffect(() => {
    // For static export, we'll use mock data first, then try to fetch real data
    if (typeof id === "string" && mockData[id]) {
      setData(mockData[id])
    }

    // Still try to fetch real data if we're in a browser environment
    if (typeof window !== "undefined") {
      axios
        .get(`http://localhost:5000/lids/form/${id}`)
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
          console.error(error)
          // If fetch fails, we'll keep using the mock data
        })
    }

    const getLocation = () => {
      if (typeof window !== "undefined" && "geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
            setLocationError(null)
          },
          (error) => {
            console.error("Joylashuv olishda xatolik:", error)
            setLocationError(
              "Joylashuv ma'lumotlarini olishda xatolik yuz berdi. Iltimos, joylashuv xizmatlarini yoqing.",
            )
          },
        )
      } else {
        // For static generation, provide default location
        setLocation({ latitude: 41.2995, longitude: 69.2401 }) // Tashkent coordinates
      }
    }

    getLocation()
    const locationInterval = setInterval(getLocation, 5000) // Har 5 soniyada so'rov yuborish

    return () => clearInterval(locationInterval)
  }, [id])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phoneNumber: "+998",
      gender: undefined,
      address: "",
      courses: [],
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!location) {
      alert("Joylashuv ma'lumotlari talab qilinadi")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await axios.post(`http://localhost:5000/lids/${id}`, {
        lidName: data?.educationName,
        fullName: values.fullname,
        gender: Number.parseInt(values.gender),
        address: values.address,
        phoneNumber: values.phoneNumber,
        longitude: location.longitude,
        latitude: location.latitude,
        courses: values.courses,
      })
      console.log(response.data)
      alert("Muvaffaqiyatli yuborildi!")
      form.reset()
    } catch (error) {
      console.error(error)
      alert("Xatolik yuz berdi")
    } finally {
      setIsSubmitting(false)
    }
  }

  // For static generation, ensure we always have data to render
  const displayData = data || (typeof id === "string" ? mockData[id as string] : null)

  if (locationError) {
    return <div className="text-center text-red-500">{locationError}</div>
  }

  if (!displayData) {
    return <div>Loading...</div>
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
          {/* Use next/image with unoptimized for static export */}
          <Image
            src={
              displayData.educationLogo.startsWith("http")
                ? displayData.educationLogo
                : displayData.educationLogo.startsWith("/")
                  ? displayData.educationLogo
                  : `http://localhost:5000${displayData.educationLogo}`
            }
            alt="Education Logo"
            width={100}
            height={80}
            className="max-w-[150px] mr-4 sm:max-w-[200px]"
            unoptimized
          />
          <h1 className="text-4xl sm:text-6xl font-bold text-blue-800">{displayData.educationName}</h1>
        </div>

        <Card className="backdrop-blur-sm bg-white/90">
          <CardHeader>
            <CardTitle>Ariza topshirish</CardTitle>
            <CardDescription>Kurslarimizga yozilish uchun formani to'ldiring</CardDescription>
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

                <FormField
                  control={form.control}
                  name="courses"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kurslar (max 3)</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {displayData.courses.map((course) => (
                          <FormItem key={course.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value.includes(course.id)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...field.value, course.id]
                                    : field.value.filter((id) => id !== course.id)

                                  if (updatedValue.length <= 3) {
                                    field.onChange(updatedValue)
                                  }
                                }}
                                disabled={!field.value.includes(course.id) && field.value.length >= 3}
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

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
