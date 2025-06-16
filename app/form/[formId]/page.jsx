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
import { Loader2, CheckCircle2, AlertCircle, Moon, Sun, MapPin, Phone, User, Home, BookOpen, ArrowRight, ArrowLeft, Sparkles } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useTheme } from "next-themes"
import Image from "next/image"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"

// Theme toggle button with enhanced design
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-4 right-4 z-50"
    >
      {/* <Button
        variant="outline"
        size="icon"
        className="rounded-full w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Mavzu o'zgartirish"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
          ) : (
            <Moon className="h-4 w-4 text-slate-600 group-hover:text-slate-800" />
          )}
        </motion.div>
      </Button> */}
    </motion.div>
  )
}

// Enhanced background with gradient animation
const PageBackground = ({ children }) => (
  <div className="min-h-screen relative overflow-hidden">
    {/* Animated background gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 transition-colors duration-500"></div>

    {/* Floating orbs for visual appeal */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"
      />
    </div>

    <ThemeToggle />
    <div className="relative z-10">{children}</div>
  </div>
)

// Define the form schema
const formSchema = z.object({
  fullname: z.string().min(3, {
    message: "Ism kamida 3 ta belgidan iborat bo'lishi kerak",
  }),
  phoneNumber: z.string().regex(/^\+998\d{9}$/, {
    message: "Telefon raqam to'liq kiritilishi kerak (+998901234567)",
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

// Phone Input Component with individual segment editing
const PhoneInput = ({ value, onChange, error }) => {
  const [segments, setSegments] = useState({
    prefix: "+998",
    part1: "",
    part2: "",
    part3: "",
    part4: ""
  })

  const refs = {
    part1: useRef(null),
    part2: useRef(null),
    part3: useRef(null),
    part4: useRef(null)
  }

  useEffect(() => {
    if (value && value.length > 4) {
      const cleanNumber = value.replace("+998", "")
      setSegments({
        prefix: "+998",
        part1: cleanNumber.slice(0, 2),
        part2: cleanNumber.slice(2, 5),
        part3: cleanNumber.slice(5, 7),
        part4: cleanNumber.slice(7, 9)
      })
    }
  }, [])

  const handleSegmentChange = (segment, newValue) => {
    const maxLengths = {
      part1: 2,
      part2: 3,
      part3: 2,
      part4: 2
    }

    if (newValue.length <= maxLengths[segment] && /^\d*$/.test(newValue)) {
      const newSegments = { ...segments, [segment]: newValue }
      setSegments(newSegments)

      const fullNumber = `${newSegments.prefix}${newSegments.part1}${newSegments.part2}${newSegments.part3}${newSegments.part4}`
      onChange(fullNumber)

      // Auto-focus next input
      if (newValue.length === maxLengths[segment]) {
        const nextSegments = ['part1', 'part2', 'part3', 'part4']
        const currentIndex = nextSegments.indexOf(segment)
        if (currentIndex < nextSegments.length - 1) {
          const nextSegment = nextSegments[currentIndex + 1]
          refs[nextSegment]?.current?.focus()
        }
      }
    }
  }

  const handleKeyDown = (segment, e) => {
    if (e.key === 'Backspace' && segments[segment] === '') {
      const prevSegments = ['part1', 'part2', 'part3', 'part4']
      const currentIndex = prevSegments.indexOf(segment)
      if (currentIndex > 0) {
        const prevSegment = prevSegments[currentIndex - 1]
        refs[prevSegment]?.current?.focus()
      }
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-1 sm:space-x-1">
        <div className="flex items-center bg-slate-100 dark:bg-slate-700 px-2 py-2 rounded-lg border">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">+998</span>
        </div>
        <span className="text-slate-400">-</span>
        <Input
          ref={refs.part1}
          value={segments.part1}
          onChange={(e) => handleSegmentChange('part1', e.target.value)}
          onKeyDown={(e) => handleKeyDown('part1', e)}
          placeholder="90"
          className="w-12 sm:w-14 text-center bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600"
          maxLength={2}
        />
        <span>-</span>
        <Input
          ref={refs.part2}
          value={segments.part2}
          onChange={(e) => handleSegmentChange('part2', e.target.value)}
          onKeyDown={(e) => handleKeyDown('part2', e)}
          placeholder="123"
          className="w-13 sm:w-16 text-center bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600"
          maxLength={3}
        />
        <span>-</span>
        <Input
          ref={refs.part3}
          value={segments.part3}
          onChange={(e) => handleSegmentChange('part3', e.target.value)}
          onKeyDown={(e) => handleKeyDown('part3', e)}
          placeholder="45"
          className="w-12 sm:w-14 text-center bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600"
          maxLength={2}
        />
        <span>-</span>
        <Input
          ref={refs.part4}
          value={segments.part4}
          onChange={(e) => handleSegmentChange('part4', e.target.value)}
          onKeyDown={(e) => handleKeyDown('part4', e)}
          placeholder="67"
          className="w-12 sm:w-9 text-center bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600"
          maxLength={2}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

function FormPage() {
  const [formData, setFormData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [locationError, setLocationError] = useState(null)
  const [locationPermission, setLocationPermission] = useState("prompt")
  const [currentStep, setCurrentStep] = useState(1)
  const [validationErrors, setValidationErrors] = useState({})
  const { formId } = useParams()
  const router = useRouter()

  const totalSteps = 4

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

  const { watch, setValue, formState: { errors } } = form

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

  const handleCourseChange = (courseId) => {
    const currentCourses = watch("courses")
    const isSelected = currentCourses.includes(courseId)

    if (isSelected) {
      setValue("courses", currentCourses.filter(id => id !== courseId))
    } else if (currentCourses.length < 2) {
      setValue("courses", [...currentCourses, courseId])
    }
  }

  const validateCurrentStep = () => {
    const values = form.getValues()
    const stepErrors = {}

    if (currentStep === 1) {
      if (!values.fullname || values.fullname.length < 3) {
        stepErrors.fullname = "Ism kamida 3 ta belgidan iborat bo'lishi kerak"
      }
      if (!values.phoneNumber || !values.phoneNumber.match(/^\+998\d{9}$/)) {
        stepErrors.phoneNumber = "Telefon raqam to'liq kiritilishi kerak"
      }
    } else if (currentStep === 2) {
      if (!values.gender) {
        stepErrors.gender = "Jinsni tanlang"
      }
      if (!values.address || values.address.length < 1) {
        stepErrors.address = "Manzil kiritilishi shart"
      }
    } else if (currentStep === 3) {
      if (!values.courses || values.courses.length === 0) {
        stepErrors.courses = "Kamida 1 ta kurs tanlang"
      }
    }

    setValidationErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const onSubmit = form.handleSubmit(async (data) => {
    if (!location) {
      setLocationError("Joylashuv ma'lumotlari talab qilinadi")
      requestLocationPermission()
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const payload = {
        lidName: formData?.educationName,
        fullName: data.fullname,
        gender: parseInt(data.gender),
        address: data.address,
        phoneNumber: data.phoneNumber,
        longitude: location.longitude,
        latitude: location.latitude,
        courses: data.courses,
      }

      console.log('Sending payload:', payload)

      const response = await axios.post(`https://backend-edu.uz/lids/${formId}`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.data) {
        console.log("Form submitted successfully:", response.data)
        form.reset()
        setIsSubmitted(true)
      } else {
        throw new Error('Server response was empty')
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(
        err.response?.data?.message ||
        err.message ||
        "Formani yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
      )
    } finally {
      setIsSubmitting(false)
    }
  })

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  // Enhanced step indicator with icons - mobile optimized
  const renderStepIndicator = () => {
    const stepIcons = [User, Phone, BookOpen, CheckCircle2]
    const stepTitles = ["Shaxsiy", "Ma'lumot", "Kurslar", "Tasdiqlash"]

    return (
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <div className="flex items-center space-x-1 sm:space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg border border-white/20 dark:border-slate-700/50">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const StepIcon = stepIcons[index]
            const isActive = currentStep === index + 1
            const isCompleted = currentStep > index + 1

            return (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <motion.div
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ${isCompleted
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                        : isActive
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg ring-2 sm:ring-4 ring-blue-100 dark:ring-blue-900/50"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </motion.div>
                </div>
                <motion.span
                  className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : isCompleted
                        ? "text-green-600 dark:text-green-400"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {stepTitles[index]}
                </motion.span>
                {index < totalSteps - 1 && (
                  <motion.div
                    className={`hidden sm:block w-8 sm:w-12 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-500 ${isCompleted
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-slate-200 dark:bg-slate-700"
                      }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isCompleted ? 1 : 0.3 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderStepContent = () => {
    const stepVariants = {
      enter: {
        opacity: 0,
        x: 30,
        scale: 0.95,
      },
      center: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        x: -30,
        scale: 0.95,
      },
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="space-y-4 sm:space-y-6"
        >
          {currentStep === 1 && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-3 sm:mb-4 shadow-lg"
                >
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  Shaxsiy ma'lumotlar
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300"
                >
                  O'zingiz haqingizda ma'lumotlarni kiriting
                </motion.p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">To'liq ism</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                          <Input
                            {...field}
                            placeholder="Ism Familiya"
                            className="pl-8 sm:pl-10 h-10 sm:h-12 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-600/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 rounded-lg sm:rounded-xl transition-all duration-300"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                      {validationErrors.fullname && (
                        <p className="text-sm text-red-500 dark:text-red-400">{validationErrors.fullname}</p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">Telefon raqam</FormLabel>
                      <FormControl>
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                          error={validationErrors.phoneNumber || errors.phoneNumber?.message}
                        />
                      </FormControl>
                      <FormDescription className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Masalan: +998-90-123-45-67</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-3 sm:mb-4 shadow-lg"
                >
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  Jins va manzil
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300"
                >
                  Qo'shimcha ma'lumotlarni kiriting
                </motion.p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3 sm:space-y-4">
                      <FormLabel className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">Jins</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                        >
                          <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative"
                          >
                            <FormItem className={`flex items-center space-x-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md
                              ${field.value === "1"
                                ? "border-blue-600 bg-blue-100/80 dark:bg-blue-900/40 ring-2 sm:ring-4 ring-blue-400/20 dark:ring-blue-400/30"
                                : "border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-800/70 hover:border-blue-300 dark:hover:border-blue-400"}
                            `}>
                              <FormControl>
                                <RadioGroupItem value="1" className={`w-5 h-5 border-2 ${field.value === "1" ? "border-blue-600 bg-blue-500 dark:bg-blue-400 text-white" : "border-slate-300 dark:border-slate-500 bg-white dark:bg-slate-700 text-slate-400"}`} />
                              </FormControl>
                              <FormLabel className={`font-medium cursor-pointer text-slate-700 dark:text-slate-200 text-sm sm:text-base ${field.value === "1" ? "text-blue-700 dark:text-blue-300" : ""}`}>
                                👨 Erkak
                              </FormLabel>
                            </FormItem>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative"
                          >
                            <FormItem className={`flex items-center space-x-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md
                              ${field.value === "2"
                                ? "border-pink-600 bg-pink-100/80 dark:bg-pink-900/40 ring-2 sm:ring-4 ring-pink-400/20 dark:ring-pink-400/30"
                                : "border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-800/70 hover:border-pink-300 dark:hover:border-pink-400"}
                            `}>
                              <FormControl>
                                <RadioGroupItem value="2" className={`w-5 h-5 border-2 ${field.value === "2" ? "border-pink-600 bg-pink-500 dark:bg-pink-400 text-white" : "border-slate-300 dark:border-slate-500 bg-white dark:bg-slate-700 text-slate-400"}`} />
                              </FormControl>
                              <FormLabel className={`font-medium cursor-pointer text-slate-700 dark:text-slate-200 text-sm sm:text-base ${field.value === "2" ? "text-pink-700 dark:text-pink-300" : ""}`}>
                                👩 Ayol
                              </FormLabel>
                            </FormItem>
                          </motion.div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                      {validationErrors.gender && (
                        <p className="text-sm text-red-500 dark:text-red-400">{validationErrors.gender}</p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">Manzil</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                          <Input
                            {...field}
                            placeholder="Toshkent shahar, Chilonzor tumani..."
                            className="pl-8 sm:pl-10 h-10 sm:h-12 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-600/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 rounded-lg sm:rounded-xl transition-all duration-300"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                      {validationErrors.address && (
                        <p className="text-sm text-red-500 dark:text-red-400">{validationErrors.address}</p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-3 sm:mb-4 shadow-lg"
                >
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  Kurs tanlash
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300"
                >
                  O'zingizga mos kurslarni tanlang (ko'pi bilan 2 ta)
                </motion.p>
              </div>
              {formData?.courses?.length > 0 && (
                <FormField
                  control={form.control}
                  name="courses"
                  render={() => (
                    <FormItem>
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {formData.courses.map((course, index) => {
                          const isSelected = watch("courses").includes(course.id)
                          return (
                            <motion.div
                              key={course.id}
                              initial={{ opacity: 0, y: 20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleCourseChange(course.id)}
                              className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm shadow-sm hover:shadow-lg group ${isSelected
                                  ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-900/20 ring-2 sm:ring-4 ring-emerald-500/10'
                                  : 'border-slate-200 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-600'
                                }`}
                            >
                              <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className={`relative w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isSelected
                                    ? 'border-emerald-500 bg-emerald-500 dark:border-emerald-400 dark:bg-emerald-400'
                                    : 'border-slate-300 dark:border-slate-500 group-hover:border-emerald-400'
                                  }`}>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white dark:bg-slate-900"
                                    />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <span className={`font-medium transition-colors duration-300 text-sm sm:text-base ${isSelected
                                      ? 'text-emerald-700 dark:text-emerald-300'
                                      : 'text-slate-700 dark:text-slate-300'
                                    }`}>
                                    {course.courseName}
                                  </span>
                                </div>
                              </div>

                              {/* Selection animation */}
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                                >
                                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </motion.div>
                              )}
                            </motion.div>
                          )
                        })}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg sm:rounded-xl border border-blue-200/50 dark:border-blue-800/50"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <FormDescription className="text-blue-700 dark:text-blue-300 font-medium text-xs sm:text-sm">
                            Tanlangan: {watch("courses").length}/2 ta kurs
                          </FormDescription>
                        </div>
                      </motion.div>
                      <FormMessage />
                      {validationErrors.courses && (
                        <p className="text-sm text-red-500 dark:text-red-400">{validationErrors.courses}</p>
                      )}
                    </FormItem>
                  )}
                />
              )}
            </>
          )}

          {currentStep === 4 && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-3 sm:mb-4 shadow-lg"
                >
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  Tasdiqlash
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300"
                >
                  Ma'lumotlarni tekshiring va tasdiqlang
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 dark:from-slate-800/50 dark:to-blue-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-1 sm:space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">To'liq ism</p>
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{form.getValues("fullname")}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-1 sm:space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Telefon raqam</p>
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{form.getValues("phoneNumber")}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-1 sm:space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500">
                          {form.getValues("gender") === "1" ? "👨" : "👩"}
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Jins</p>
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                        {form.getValues("gender") === "1" ? "Erkak" : "Ayol"}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-1 sm:space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <Home className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Manzil</p>
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{form.getValues("address")}</p>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-200/50 dark:border-emerald-800/50"
                >
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                    <p className="font-medium text-emerald-700 dark:text-emerald-300 text-sm sm:text-base">Tanlangan kurslar</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {watch("courses").map((courseId, index) => {
                      const course = formData?.courses?.find((c) => c.id === courseId)
                      return (
                        <motion.span
                          key={courseId}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300 text-xs sm:text-sm"
                        >
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/70 rounded-full mr-1.5 sm:mr-2"></span>
                          {course?.courseName}
                        </motion.span>
                      )
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    )
  }

  // Loading screen
  if (isLoading) {
    return (
      <PageBackground>
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full mx-auto mb-4"
            />
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">Yuklanmoqda...</p>
          </motion.div>
        </div>
      </PageBackground>
    )
  }

  // Success screen
  if (isSubmitted) {
    return (
      <PageBackground>
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="text-center max-w-sm sm:max-w-md mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
            >
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4"
            >
              Muvaffaqiyatli yuborildi!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-4 sm:mb-6"
            >
              Sizning arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r p-4 from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Boshqa ariza yuborish
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </PageBackground>
    )
  }

  return (
    <PageBackground>
      <div className="py-4 sm:py-8 px-3 sm:px-4 lg:px-8">
        <div className="max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
          {/* Header - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-8"
          >
            {formData?.educationLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 sm:mb-6"
              >
                <Image
                  src={
                    formData.educationLogo.startsWith("http")
                      ? formData.educationLogo
                      : `https://backend-edu.uz${formData.educationLogo}`
                  }
                  alt="Education Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto shadow-lg border-2 sm:border-4 border-white dark:border-slate-700"
                  unoptimized
                />
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight"
              style={{ letterSpacing: '0.01em' }}
            >
              <span className="inline-block animate-gradient-x bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{formData?.educationName || "Ariza topshirish"}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mb-1"
            >
              <span className="inline-block px-3 py-1 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 shadow-sm animate-fade-in">
                {formData?.description || "Formani to'ldiring va imkoniyatlaringizni kengaytiring!"}
              </span>
            </motion.p>
          </motion.div>

          {/* Location Error Alert */}
          {locationError && locationPermission !== "granted" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 sm:mb-6"
            >
              <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 border-2 border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl shadow-sm">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400" />
                <AlertTitle className="text-red-800 dark:text-red-300 font-semibold text-sm sm:text-base">Joylashuv xatoligi</AlertTitle>
                <AlertDescription className="text-red-700 dark:text-red-200 mt-2 text-xs sm:text-sm">
                  {locationError}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={requestLocationPermission}
                    className="mt-2 sm:mt-3 w-full border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-lg sm:rounded-xl text-xs sm:text-sm"
                  >
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Joylashuvga ruxsat berish
                  </Button>
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {/* Main Form Card - Responsive and beautiful dark mode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card
              className="w-full max-w-2xl md:max-w-3xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-slate-900/80 shadow-xl dark:shadow-2xl border border-slate-200/60 dark:border-slate-700/60 rounded-2xl md:rounded-3xl overflow-hidden transition-colors duration-500"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
            >
              <CardHeader className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 dark:from-slate-900/70 dark:to-blue-900/40 border-b border-slate-200/50 dark:border-slate-700/50 p-4 sm:p-6 lg:p-8">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-white">
                  Ariza topshirish
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  Formani to'ldiring
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Form {...form}>
                  <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
                    {renderStepIndicator()}
                    {renderStepContent()}
                    {error && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/40 dark:to-orange-900/30 border-2 border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl">
                          <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400" />
                          <AlertTitle className="text-red-800 dark:text-red-300 font-semibold text-sm sm:text-base">Xatolik</AlertTitle>
                          <AlertDescription className="text-red-700 dark:text-red-200 text-xs sm:text-sm">{error}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                    {/* Navigation Buttons - Mobile optimized */}
                    <div className="flex justify-between items-center pt-4 sm:pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                      {currentStep > 1 ? (
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="bg-white/80 dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:shadow-md text-sm sm:text-base"
                          >
                            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Orqaga
                          </Button>
                        </motion.div>
                      ) : (
                        <div></div>
                      )}
                      {currentStep < totalSteps ? (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                          >
                            Keyingi qadam
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg sm:rounded-xl px-6 py-2 sm:px-8 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                                Yuborilmoqda...
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                                Yuborish
                              </>
                            )}
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 dark:from-slate-900/70 dark:to-blue-900/40 border-t border-slate-200/50 dark:border-slate-700/50 p-4 sm:p-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center w-full flex items-center justify-center space-x-2"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Barcha ma'lumotlar maxfiy saqlanadi</span>
                </motion.p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageBackground>
  )
}

export default FormPage