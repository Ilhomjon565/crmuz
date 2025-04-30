"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import * as THREE from "three"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, Menu, CheckCircle, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { Statistics } from "@/components/statistics"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { BlogPosts } from "@/components/blog-posts"
import img from './img.png'
import { isBrowser } from '@/utils/browserUtils'
import { useIsClient } from '@/hooks/useIsClient'

// Data
const features = [
  {
    title: "24/7 Qo'llab-quvvatlash",
    description: "Tizimdan foydalanish bo'yicha doimiy yordam",
    icon: Phone,
  },
  {
    title: "VIP Menejer yaratish",
    description: "Cheksiz menejerlar qo'shish imkoniyati",
    icon: CheckCircle,
  },
  {
    title: "O'quv jarayoni nazorati",
    description: "To'liq monitoring va hisobotlar",
    icon: CheckCircle,
  },
]

const advantages = [
  {
    title: "Grafiklar va statistika",
    description:
      "Barcha ma'lumotlarni vizual ko'rinishda taqdim etish, o'zlashtirish darajasi va boshqa muhim ko'rsatkichlar",
  },
  {
    title: "Avtomatik hisob-kitob",
    description: "O'qituvchilar maoshi, davomat va boshqa moliyaviy hisobotlarni avtomatik hisoblash tizimi",
  },
  {
    title: "SMS xabarnomalar",
    description: "To'lovlar, qarzdorlik va muhim xabarlar haqida avtomatik SMS yuborish tizimi",
  },
]

const pricing = [
  {
    name: "Boshlang'ich",
    price: "150,000",
    period: "oyiga",
    description: "Kichik o'quv markazlari uchun",
    features: ["50 tagacha o'quvchi", "3 ta administrator", "Asosiy hisobotlar", "Email qo'llab-quvvatlash"],
  },
  {
    name: "Professional",
    price: "400,000",
    period: "3 oyga",
    description: "O'rta hajmdagi markazlar uchun",
    features: [
      "200 tagacha o'quvchi",
      "10 ta administrator",
      "Kengaytirilgan hisobotlar",
      "24/7 qo'llab-quvvatlash",
      "SMS xabarnomalar",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "800,000",
    period: "6 oyga",
    description: "Yirik ta'lim markazlari uchun",
    features: [
      "Cheksiz o'quvchilar",
      "Cheksiz administratorlar",
      "Maxsus hisobotlar",
      "Shaxsiy menejer",
      "API integratsiya",
      "SMS va Telegram bot",
    ],
  },
]

const stats = [
  { label: "Faol foydalanuvchilar", value: "10,000+" },
  { label: "O'quv markazlar", value: "500+" },
  { label: "Muvaffaqiyatli bitiruvchilar", value: "25,000+" },
  { label: "O'rtacha o'zlashtirish", value: "87%" },
]

const testimonials = [
  {
    content: "Bu tizim bizning o'quv markazimiz samaradorligini sezilarli darajada oshirdi.",
    author: "Aziz Rahimov",
    role: "IT Academy direktori",
  },
  {
    content: "Juda qulay va tushunarli interfeys. Hamma hisobotlar bir joyda.",
    author: "Malika Karimova",
    role: "English Pro markaz menejeri",
  },
  {
    content: "O'quvchilar va ota-onalar bilan muloqot juda osonlashdi.",
    author: "Jamshid Toshmatov",
    role: "Math Expert markaz rahbari",
  },
]

const faqs = [
  {
    question: "Tizimdan foydalanish uchun qanday qurilmalar kerak?",
    answer:
      "Tizimdan istalgan qurilmada (kompyuter, planshet, telefon) foydalanish mumkin. Internetga ulanish yetarli.",
  },
  {
    question: "Ma'lumotlar xavfsizligi qanday ta'minlanadi?",
    answer:
      "Barcha ma'lumotlar shifrlangan holda saqlanadi va muntazam zahiralanadi. ISO/IEC 27001 xavfsizlik standarti talablariga to'liq javob beradi.",
  },
  {
    question: "Tizimni sinab ko'rish mumkinmi?",
    answer:
      "Ha, 14 kunlik bepul sinov muddati mavjud. Bu davrda tizimning barcha imkoniyatlaridan foydalanishingiz mumkin.",
  },
]

const blogPosts = [
  {
    title: "Ta'lim markazlarida CRM tizimining ahamiyati",
    excerpt: "Zamonaviy ta'lim markazlarida CRM tizimining o'rni va afzalliklari haqida.",
    date: "2024-02-10",
    image: "/blog/post-1.jpg",
  },
  {
    title: "O'quv jarayonini avtomatlashtirish",
    excerpt: "O'quv jarayonini avtomatlashtirish orqali samaradorlikni oshirish yo'llari.",
    date: "2024-02-08",
    image: "/blog/post-2.jpg",
  },
  {
    title: "Masofaviy ta'limni tashkil etish",
    excerpt: "Online darslarni tashkil etish va nazorat qilish bo'yicha tavsiyalar.",
    date: "2024-02-05",
    image: "/blog/post-3.jpg",
  },
]

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()
  const mousePosition = useMousePosition()
  const isClient = useIsClient();

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100])

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 5

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: isDarkMode ? "#ffffff" : "#000000",
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.001

      particlesMesh.rotation.y = time * 0.1
      particlesMesh.rotation.x = time * 0.15

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    if (isBrowser()) {
      window.addEventListener("resize", handleResize)
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [isDarkMode])

  useEffect(() => {
    if (isBrowser()) {
      document.documentElement.classList.toggle("dark", isDarkMode)
    }
  }, [isDarkMode])

  const calculateParallax = (depth = 1) => {
    const x = (mousePosition.x - window.innerWidth / 2) * 0.001 * depth
    const y = (mousePosition.y - window.innerHeight / 2) * 0.001 * depth
    return `translate3d(${x}px, ${y}px, 0)`
  }

  if (!isClient) {
    return <div>Loading...</div>; // or any fallback UI
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900",
        "font-sans antialiased relative overflow-hidden transition-colors duration-500",
      )}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] backdrop-blur-[100px]" />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: calculateParallax(2) }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: calculateParallax(1.5) }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: calculateParallax(1.8) }}
        />
      </div>

      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-60" />

      <nav className="fixed p-2 top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image src={img} alt="Logo" width={94} height={94} />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduCRM
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Xizmatlar
              </Link>
              <Link
                href="#advantages"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Ustunliklar
              </Link>
              <Link
                href="#pricing"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Narxlar
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Bog'lanish
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Link href="/form/1">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                  Demo versiya
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <motion.section style={{ opacity: headerOpacity, y: headerY }} className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center lg:text-left"
              style={{ transform: calculateParallax(1.2) }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ta'lim markazingizni raqamlashtiring
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Zamonaviy CRM tizimi orqali o'quv markazingizni samarali boshqaring
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                >
                  Boshlash
                </Button>
                <Button
                  size="lg"
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Batafsil ma'lumot
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
              style={{ transform: calculateParallax(1.4) }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 blur-lg opacity-30"></div>
                <Image
                  src={img}
                  alt="Dashboard Preview"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Statistics stats={stats} />

      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Xizmatlar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <feature.icon className="h-8 w-8 mb-4 text-blue-600" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ustunliklar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <section id="pricing" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tariflar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={cn(
                    "relative overflow-hidden transition-all duration-300 hover:shadow-xl",
                    plan.popular && "border-blue-500 shadow-lg scale-105",
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm">
                      Ommabop
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400"> so'm / {plan.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={cn(
                        "w-full",
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          : "bg-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200",
                      )}
                    >
                      Tanlash
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <FAQ faqs={faqs} /> */}

      <BlogPosts posts={blogPosts} />

      <section id="contact" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bog'lanish
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Biz bilan bog'laning</CardTitle>
                <CardDescription>Savollaringiz bo'lsa, biz bilan bog'laning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+998 90 123 45 67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>info@educrm.uz</span>
                </div>
                <div className="flex items-center gap-3">
                  <Send className="h-5 w-5 text-blue-600" />
                  <span>@educrm_support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                <span className="font-bold text-xl">EduCRM</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400">Ta'lim markazlari uchun zamonaviy CRM yechimi</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Xavfsizlik</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Barcha ma'lumotlar ISO/IEC 27001 xavfsizlik standarti asosida himoyalangan
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  Telegram
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 EduCRM. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

