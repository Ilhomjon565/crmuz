"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2, AlertCircle, Phone, User, Home, BookOpen, ArrowRight, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"
import { apiClient, handleApiError } from "@/lib/api-client"
import OfflineNotification from "@/components/offline-notification"

// Simple background component
const PageBackground = ({ children }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    {children}
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
  address: z.string().min(1, {
    message: "Manzil kiritilishi shart",
  }),
  courses: z.array(z.string()).min(1, {
    message: "Kamida 1 ta kurs tanlang",
  }).max(2, {
    message: "Ko'pi bilan 2 ta kurs tanlash mumkin",
  }),
})

// Simple Phone Input Component
const PhoneInput = ({ value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md border">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">+998</span>
        </div>
        <Input
          value={value?.replace("+998", "") || ""}
          onChange={(e) => {
            const cleanValue = e.target.value.replace(/\D/g, "")
            if (cleanValue.length <= 9) {
              onChange("+998" + cleanValue)
            }
          }}
          placeholder="901234567"
          className="flex-1"
          maxLength={9}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
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
  const [currentStep, setCurrentStep] = useState(1)
  const [isRetrying, setIsRetrying] = useState(false)
  const { formId } = useParams()

  const totalSteps = 3

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phoneNumber: "+998",
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
        },
        (error) => {
          console.error("Location error:", error)
          setLocationError("Joylashuv ma'lumotlarini olishda xatolik yuz berdi.")
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      )
    } else {
      setLocationError("Joylashuv xizmati mavjud emas")
    }
  }

  useEffect(() => {
    const fetchFormData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Only get courses using lidId from localhost:5000
        const coursesResponse = await apiClient.get(`https://backend-edu.uz/get-lid-courses/${formId}`)
        setFormData({
          courses: coursesResponse.data.data || coursesResponse.data.data, // Handle both response formats
          educationName: "Ta'lim markazi", // Default name since we're not fetching form data
          description: "Kurslarni tanlang va ariza topshiring"
        })
      } catch (err) {
        console.error("Error fetching courses:", err)
        const errorMessage = handleApiError(err)
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    if (formId) {
      fetchFormData()
      // Location is now optional, so we don't automatically request it
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

    if (currentStep === 1) {
      return values.fullname && values.fullname.length >= 3 && 
             values.phoneNumber && values.phoneNumber.match(/^\+998\d{9}$/)
    } else if (currentStep === 2) {
      return values.address && values.address.length > 0
    } else if (currentStep === 3) {
      return values.courses && values.courses.length > 0
      }
    return true
  }

  const onSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Get full course objects instead of just IDs
      const selectedCourses = formData?.courses?.filter(course => 
        data.courses.includes(course._id)
      ) || []

      const payload = {
        fullname: data.fullname,
        phoneNumber: data.phoneNumber,
        longitude: location?.longitude || null,
        latitude: location?.latitude || null,
        courses: selectedCourses,
      }

      const response = await apiClient.post(`https://backend-edu.uz/connect-lid/${formId}`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.data) {
        form.reset()
        setIsSubmitted(true)
      } else {
        throw new Error('Server response was empty')
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      const errorMessage = handleApiError(err)
      setError(errorMessage)
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

  const handleRetry = async () => {
    setIsRetrying(true)
    setError(null)
    try {
      const coursesResponse = await apiClient.get(`https://backend-edu.uz/get-lid-courses/${formId}`)
      setFormData({
        courses: coursesResponse.data.data || coursesResponse.data.data,
        educationName: "Ta'lim markazi",
        description: "Kurslarni tanlang va ariza topshiring"
      })
    } catch (err) {
      const errorMessage = handleApiError(err)
      setError(errorMessage)
    } finally {
      setIsRetrying(false)
    }
  }

  // Very simple step indicator
  const renderStepIndicator = () => {
    return (
      <div className="mb-6 text-center">
        <div className="flex justify-center space-x-2 mb-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
                key={index}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep === index + 1
                  ? "bg-blue-500 text-white"
                  : currentStep > index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {currentStep > index + 1 ? "✓" : index + 1}
                </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          Qadam {currentStep} / {totalSteps}
        </p>
      </div>
    )
  }

  const renderStepContent = () => {
    return (
      <div className="space-y-6">
          {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">To'liq ism</label>
                          <Input
                {...form.register("fullname")}
                            placeholder="Ism Familiya"
                className="w-full"
                          />
              {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
                        </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Telefon raqam</label>
                        <PhoneInput
                value={watch("phoneNumber")}
                onChange={(value) => form.setValue("phoneNumber", value)}
                error={errors.phoneNumber?.message}
                />
              </div>
          </div>
          )}

                  {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Manzil</label>
              <Input
                {...form.register("address")}
                placeholder="Toshkent shahar, Chilonzor tumani..."
                className="w-full"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>
            
            {/* Optional location button */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-800 font-medium">Joylashuv (ixtiyoriy)</p>
                  <p className="text-xs text-blue-600">
                    {location ? "Joylashuv olingan" : "Joylashuv olinmagan"}
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={getLocation}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-300 hover:bg-blue-100"
                >
                  {location ? "Qayta olish" : "Joylashuv olish"}
                </Button>
              </div>
              {locationError && (
                <p className="text-red-600 text-xs mt-2">{locationError}</p>
              )}
            </div>
          </div>
        )}

          {currentStep === 3 && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Kurslarni tanlang (ko'pi bilan 2 ta)</p>
            
            {formData?.courses?.length > 0 ? (
              <div className="space-y-3">
                {formData.courses.map((course) => {
                  const isSelected = watch("courses").includes(course._id)
                          return (
                    <div
                      key={course._id}
                      className={`p-3 border rounded-lg cursor-pointer ${
                        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                      }`}
                      onClick={() => handleCourseChange(course._id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">{course.courseName}</span>
                          <p className="text-sm text-gray-600">{course.price.toLocaleString()} so'm</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleCourseChange(course._id)}
                          className="w-4 h-4"
                        />
                                </div>
                              </div>
                          )
                        })}
                      </div>
            ) : (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  Kurslar yuklanmoqda yoki mavjud emas...
                </p>
              </div>
            )}
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                            Tanlangan: {watch("courses").length}/2 ta kurs
              </p>
            </div>
            {errors.courses && <p className="text-red-500 text-sm">{errors.courses.message}</p>}
                        </div>
          )}

      </div>
    )
  }

  // Loading screen
  if (isLoading) {
    return (
      <PageBackground>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>
          </div>
        </div>
      </PageBackground>
    )
  }

  // Success screen
  if (isSubmitted) {
    return (
      <PageBackground>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Muvaffaqiyatli yuborildi!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sizning arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
            </p>
              <Button
                onClick={() => window.location.reload()}
              className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Boshqa ariza yuborish
              </Button>
          </div>
        </div>
      </PageBackground>
    )
  }

  return (
    <PageBackground>
      <OfflineNotification onRetry={handleRetry} />
      <div className="py-6 px-4">
        <div className="max-w-lg mx-auto">
          {/* Simple Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              {formData?.educationName || "Ta'lim markazi"}
            </h1>
            <p className="text-gray-600 text-sm">
              {formData?.description || "Kurslarni tanlang va ariza topshiring"}
            </p>
          </div>


          {/* Simple Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Ariza topshirish</h2>
            
            <form onSubmit={onSubmit} className="space-y-4">
                    {renderStepIndicator()}
                    {renderStepContent()}
              
                    {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                    <span className="text-red-800 font-medium">Xatolik</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              )}
              
              {/* Simple Navigation Buttons */}
              <div className="flex justify-between pt-4 border-t">
                      {currentStep > 1 ? (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                    className="px-4 py-2"
                          >
                    ← Orqaga
                          </Button>
                      ) : (
                        <div></div>
                      )}
                
                      {currentStep < totalSteps ? (
                          <Button
                            type="button"
                            onClick={nextStep}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
                          >
                    Keyingi →
                          </Button>
                      ) : (
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2"
                  >
                    {isSubmitting ? "Yuborilmoqda..." : "✓ Yuborish"}
                          </Button>
                      )}
                    </div>
                  </form>
          </div>
        </div>
      </div>
    </PageBackground>
  )
}

export default FormPage