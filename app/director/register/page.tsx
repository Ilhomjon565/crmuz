"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, ArrowLeft, Mail, Lock, User, Building2, Phone, MapPin, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DirectorRegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    organizationName: "",
    organizationAddress: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Success - redirect to director panel
    router.push('/director')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                EduCRM
              </h1>
              <p className="text-xs text-muted-foreground">Director Panel</p>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Asosiy sahifaga
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
              <Shield className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium">Director Panel</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ro'yxatdan O'tish
            </h1>
            <p className="text-muted-foreground text-lg">
              O'quv markazingizni professional tarzda boshqaring
            </p>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-500" />
                  Shaxsiy Ma'lumotlar
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    To'liq Ism-Familiya *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="Aziza Toshmatova"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Manzil *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="aziza@educrm.uz"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Telefon Raqam *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="+998 90 123 45 67"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Organization Information */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-500" />
                  Tashkilot Ma'lumotlari
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    O'quv Markaz Nomi *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="Ziyoli Ta'lim Markazi"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Manzil *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="organizationAddress"
                      value={formData.organizationAddress}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="Toshkent sh., Chilonzor t."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Lock className="w-5 h-5 text-purple-500" />
                  Xavfsizlik
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parol *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Kamida 8 ta belgi
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parolni Tasdiqlang *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="pt-4 border-t">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="peer sr-only"
                      required
                    />
                    <div className="w-5 h-5 border-2 rounded border-gray-300 peer-checked:bg-purple-500 peer-checked:border-purple-500 transition-all flex items-center justify-center">
                      <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Men{" "}
                    <Link href="/terms" className="text-purple-600 hover:underline">
                      Foydalanish shartlari
                    </Link>{" "}
                    va{" "}
                    <Link href="/privacy" className="text-purple-600 hover:underline">
                      Maxfiylik siyosati
                    </Link>{" "}
                    bilan tanishdim va roziman
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreeToTerms}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Ro'yxatdan o'tkazilmoqda...
                  </span>
                ) : (
                  "Ro'yxatdan O'tish"
                )}
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-muted-foreground">
                Allaqachon akkauntingiz bormi?{" "}
                <Link href="/director" className="text-purple-600 hover:underline font-medium">
                  Kirish
                </Link>
              </p>
            </form>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold mb-1">Xavfsiz</h4>
              <p className="text-xs text-muted-foreground">SSL shifrlash va 2FA</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-1">2025 Bepul</h4>
              <p className="text-xs text-muted-foreground">Yil oxirigacha tekin</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold mb-1">Professional</h4>
              <p className="text-xs text-muted-foreground">To'liq funksiyalar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

