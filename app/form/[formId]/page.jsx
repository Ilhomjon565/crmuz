"use client"

import { useEffect, useState, memo, useCallback, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2, AlertCircle, Moon, Sun } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useTheme } from "next-themes"
import Image from "next/image"
import axios from "axios"
import { motion } from "framer-motion"

// Theme toggle button - moved outside main component to prevent re-renders
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 rounded-full w-10 h-10 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Mavzu o'zgartirish"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
    </Button>
  )
}

// Background component for consistent styling
const PageBackground = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
    <ThemeToggle />
    {children}
  </div>
)

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
  }).max(2, {
    message: "Ko'pi bilan 2 ta kurs tanlash mumkin",
  }),
})

function FormPage() {
  const [formData, setFormData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [locationError, setLocationError] = useState(null)
  const [locationPermission, setLocationPermission] = useState("prompt")
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

  const { watch, setValue } = form
  const courses = watch("courses")

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
      getLocation()
    }
  }, [formId])

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^\d+]/g, "")
    
    if (!value.startsWith("+998")) {
      value = "+998" + value.replace(/^\+/, "")
    }
    
    if (value.length > 13) {
      value = value.slice(0, 13)
    }
    
    setValue("phoneNumber", value)
  }

  const handleCourseChange = (courseId) => {
    const currentCourses = form.getValues("courses")
    const isSelected = currentCourses.includes(courseId)
    
    if (isSelected) {
      setValue("courses", currentCourses.filter(id => id !== courseId))
    } else {
      if (currentCourses.length < 2) {
        setValue("courses", [...currentCourses, courseId])
      }
    }
  }

  const onSubmit = form.handleSubmit(async (data) => {
    if (!location) {
      setLocationError("Joylashuv ma'lumotlari talab qilinadi")
      requestLocationPermission()
      return
    }

    setIsSubmitting(true)
    try {
      const payload = {
        lidName: formData?.educationName,
        fullName: data.fullname,
        gender: Number.parseInt(data.gender),
        address: data.address,
        phoneNumber: data.phoneNumber,
        longitude: location.longitude,
        latitude: location.latitude,
        courses: data.courses,
      }

      const response = await axios.post(`https://backend-edu.uz/lids/${formId}`, payload)
      console.log("Form submitted successfully:", response.data)
      
      form.reset()
      setIsSubmitted(true)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Formani yuborishda xatolik yuz berdi")
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <PageBackground>
      <div className="py-6 sm:py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-300 text-center sm:text-left">
              {formData?.educationName || "Ariza formasi"}
            </h1>
          </div>

          {locationError && locationPermission !== "granted" && (
            <Alert
              variant="destructive"
              className="mb-6 bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800"
            >
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-800 dark:text-red-300">Joylashuv xatoligi</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-200">
                {locationError}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={requestLocationPermission}
                  className="mt-2 w-full border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/50"
                >
                  Joylashuvga ruxsat berish
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <Card className="backdrop-blur-sm bg-white/95 dark:bg-slate-800/95 shadow-xl dark:shadow-slate-900/30 border-0 dark:border dark:border-slate-700 transition-all duration-300 w-full mx-auto hover:shadow-2xl dark:hover:shadow-slate-900/40">
            <CardHeader className="border-b border-slate-100 dark:border-slate-700">
              <CardTitle className="text-slate-800 dark:text-white">{formData?.title || "Ariza topshirish"}</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                {formData?.description || "Formani to'ldiring"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>To'liq ism</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Ism Familiya"
                            className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                          />
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
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              handlePhoneChange(e)
                            }}
                            placeholder="+998901234567"
                            className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
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
                      <FormItem className="space-y-3">
                        <FormLabel>Jins</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
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
                          <Input
                            {...field}
                            placeholder="Manzil"
                            className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {formData?.courses?.length > 0 && (
                    <FormField
                      control={form.control}
                      name="courses"
                      render={() => (
                        <FormItem>
                          <FormLabel>Kurslar (max 2)</FormLabel>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {formData.courses.map((course) => (
                              <div
                                key={course.id}
                                onClick={() => handleCourseChange(course.id)}
                                className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                  courses.includes(course.id)
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                                    : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                                }`}
                              >
                                <div className="flex items-center space-x-3 flex-1">
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                    courses.includes(course.id)
                                      ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400'
                                      : 'border-slate-400 dark:border-slate-500'
                                  }`}>
                                    {courses.includes(course.id) && (
                                      <div className="w-2 h-2 rounded-full bg-white dark:bg-slate-900" />
                                    )}
                                  </div>
                                  <span className={`text-sm font-medium ${
                                    courses.includes(course.id)
                                      ? 'text-blue-700 dark:text-blue-300'
                                      : 'text-slate-700 dark:text-slate-300'
                                  }`}>
                                    {course.courseName}
                                  </span>
                                </div>
                                {courses.includes(course.id) && (
                                  <div className="absolute top-2 right-2">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <FormDescription>Ko'pi bilan 2 ta kurs tanlash mumkin</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {error && (
                    <Alert
                      variant="destructive"
                      className="bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800"
                    >
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <AlertTitle className="text-red-800 dark:text-red-300">Xatolik</AlertTitle>
                      <AlertDescription className="text-red-700 dark:text-red-200">{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 shadow-lg hover:shadow-xl shadow-blue-500/20 dark:shadow-blue-700/30 transition-all duration-200"
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
            <CardFooter className="flex justify-center border-t border-slate-100 dark:border-slate-700 pt-6">
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                {formData?.footerText || "Barcha ma'lumotlar maxfiy saqlanadi"}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageBackground>
  )
}

export default FormPage