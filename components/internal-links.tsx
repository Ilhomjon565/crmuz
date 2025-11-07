"use client"

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ChevronRight, 
  ExternalLink, 
  Home, 
  Star, 
  Users, 
  CreditCard, 
  MessageCircle, 
  BookOpen, 
  HelpCircle,
  Sparkles,
  Zap,
  Heart,
  Globe,
  ArrowRight,
  Shield,
  Award,
  Gift,
  Video
} from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href: string
  icon: any
}

interface RelatedLinkItem {
  name: string
  href: string
  description: string
  icon: any
  color: string
  bgColor: string
}

interface InternalLinksProps {
  currentPage?: string
  showBreadcrumbs?: boolean
  showRelatedLinks?: boolean
}

export default function InternalLinks({ 
  currentPage = 'home',
  showBreadcrumbs = true,
  showRelatedLinks = true 
}: InternalLinksProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Enhanced breadcrumb navigation with icons
  const breadcrumbs: Record<string, BreadcrumbItem[]> = {
    home: [],
    features: [
      { name: 'Bosh sahifa', href: '/', icon: Home },
      { name: 'Xususiyatlar', href: '/features', icon: Star }
    ],
    pricing: [
      { name: 'Bosh sahifa', href: '/', icon: Home },
      { name: 'Narxlar', href: '/pricing', icon: CreditCard }
    ],
    about: [
      { name: 'Bosh sahifa', href: '/', icon: Home },
      { name: 'Haqida', href: '/about', icon: Users }
    ],
    contact: [
      { name: 'Bosh sahifa', href: '/', icon: Home },
      { name: 'Aloqa', href: '/contact', icon: MessageCircle }
    ],
    blog: [
      { name: 'Bosh sahifa', href: '/', icon: Home },
      { name: 'Blog', href: '/blog', icon: BookOpen }
    ],
    faq: [
      { name: 'Bosh sahifa', href: '/', icon: Home },
      { name: 'Ko\'p so\'raladigan savollar', href: '/faq', icon: HelpCircle }
    ]
  }

  // Enhanced related links with icons and colors
  const relatedLinks: Record<string, RelatedLinkItem[]> = {
    home: [
      { 
        name: 'Xususiyatlar', 
        href: '/features', 
        description: 'EduCRM tizimi xususiyatlari',
        icon: Star,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      },
      { 
        name: 'Bepul Sinov', 
        href: '/bepul-sinov', 
        description: 'Tizimni bepul sinab ko\'ring',
        icon: Gift,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30'
      },
      { 
        name: 'O\'quvchilar Boshqaruvi', 
        href: '/oquvchilar-boshqaruvi', 
        description: 'O\'quvchilarni samarali boshqaring',
        icon: Users,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
      },
      { 
        name: 'Qanday Ishlaydi', 
        href: '/qanday-ishlaydi', 
        description: 'Tizimdan foydalanish ko\'rsatmasi',
        icon: BookOpen,
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30'
      },
      { 
        name: 'To\'lovlar Boshqaruvi', 
        href: '/tolovlar-boshqaruvi', 
        description: 'To\'lovlarni avtomatik boshqarish',
        icon: CreditCard,
        color: 'from-indigo-500 to-blue-500',
        bgColor: 'from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30'
      },
      { 
        name: 'Online Darslar', 
        href: '/online-darslar', 
        description: 'Online darslar o\'tkazish',
        icon: Video,
        color: 'from-cyan-500 to-teal-500',
        bgColor: 'from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30'
      }
    ],
    features: [
      { 
        name: 'Narxlar', 
        href: '/pricing', 
        description: 'Barcha funksiyalar bepul',
        icon: CreditCard,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30'
      },
      { 
        name: 'Aloqa', 
        href: '/contact', 
        description: 'Savollaringiz bormi?',
        icon: MessageCircle,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
      },
      { 
        name: 'FAQ', 
        href: '/faq', 
        description: 'Ko\'p so\'raladigan savollar',
        icon: HelpCircle,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Ta\'lim texnologiyalari',
        icon: BookOpen,
        color: 'from-indigo-500 to-blue-500',
        bgColor: 'from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-indigo-950/30'
      }
    ],
    pricing: [
      { 
        name: 'Xususiyatlar', 
        href: '/features', 
        description: 'Barcha imkoniyatlar',
        icon: Star,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      },
      { 
        name: 'Aloqa', 
        href: '/contact', 
        description: 'Qo\'shimcha ma\'lumot',
        icon: MessageCircle,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
      },
      { 
        name: 'FAQ', 
        href: '/faq', 
        description: 'Narxlar haqida savollar',
        icon: HelpCircle,
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30'
      },
      { 
        name: 'Haqida', 
        href: '/about', 
        description: 'Kompaniya haqida',
        icon: Users,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30'
      }
    ],
    about: [
      { 
        name: 'Xususiyatlar', 
        href: '/features', 
        description: 'Bizning Xizmatlar',
        icon: Star,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      },
      { 
        name: 'Aloqa', 
        href: '/contact', 
        description: 'Biz bilan bog\'laning',
        icon: MessageCircle,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Yangiliklar va maqolalar',
        icon: BookOpen,
        color: 'from-indigo-500 to-blue-500',
        bgColor: 'from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-indigo-950/30'
      },
      { 
        name: 'FAQ', 
        href: '/faq', 
        description: 'Savollaringizga javoblar',
        icon: HelpCircle,
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30'
      }
    ],
    contact: [
      { 
        name: 'Xususiyatlar', 
        href: '/features', 
        description: 'Tizim xususiyatlari',
        icon: Star,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      },
      { 
        name: 'FAQ', 
        href: '/faq', 
        description: 'Ko\'p so\'raladigan savollar',
        icon: HelpCircle,
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30'
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Foydali maqolalar',
        icon: BookOpen,
        color: 'from-indigo-500 to-blue-500',
        bgColor: 'from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-indigo-950/30'
      },
      { 
        name: 'Haqida', 
        href: '/about', 
        description: 'Kompaniya haqida',
        icon: Users,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30'
      }
    ],
    blog: [
      { 
        name: 'Xususiyatlar', 
        href: '/features', 
        description: 'Tizim imkoniyatlari',
        icon: Star,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      },
      { 
        name: 'FAQ', 
        href: '/faq', 
        description: 'Savollaringizga javoblar',
        icon: HelpCircle,
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30'
      },
      { 
        name: 'Aloqa', 
        href: '/contact', 
        description: 'Biz bilan bog\'laning',
        icon: MessageCircle,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
      },
      { 
        name: 'Haqida', 
        href: '/about', 
        description: 'Kompaniya haqida',
        icon: Users,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30'
      }
    ],
    faq: [
      { 
        name: 'Xususiyatlar', 
        href: '/features', 
        description: 'Tizim xususiyatlari',
        icon: Star,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      },
      { 
        name: 'Aloqa', 
        href: '/contact', 
        description: 'Qo\'shimcha yordam',
        icon: MessageCircle,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Foydali maqolalar',
        icon: BookOpen,
        color: 'from-indigo-500 to-blue-500',
        bgColor: 'from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-indigo-950/30'
      },
      { 
        name: 'Haqida', 
        href: '/about', 
        description: 'Kompaniya haqida',
        icon: Users,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30'
      }
    ]
  }

  // SEO-optimized anchor text variations
  const anchorTextVariations = {
    features: [
      "o'quv markaz xususiyatlari",
      "crm tizimi imkoniyatlari", 
      "ta'lim dasturi funksiyalari",
      "o'quv markaz avtomatlashtirish"
    ],
    pricing: [
      "o'quv markaz crm narxi",
      "ta'lim dasturi bahosi",
      "bepul o'quv markaz tizimi",
      "crm tizimi narxlari"
    ],
    contact: [
      "educrm bilan bog'lanish",
      "o'quv markaz crm yordam",
      "ta'lim dasturi qo'llab-quvvatlash",
      "educrm aloqa"
    ],
    about: [
      "educrm haqida",
      "o'quv markaz crm kompaniyasi",
      "ta'lim dasturi ishlab chiqaruvchi",
      "educrm jamoasi"
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div ref={ref} className="w-full relative py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-500/5 dark:to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 dark:from-indigo-500/20 dark:to-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Related Links Section */}
        {showRelatedLinks && relatedLinks[currentPage] && (
          <motion.section 
            className="mt-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 via-blue-100 to-purple-100 dark:from-indigo-900/50 dark:via-blue-900/50 dark:to-purple-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-4 shadow-lg"
              >
                <Globe className="h-4 w-4" />
                <span>Bog'liq sahifalar</span>
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-400 mb-4">
                Foydali havolalar
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                EduCRM tizimi haqida qo'shimcha ma'lumot olish uchun foydalaning
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {relatedLinks[currentPage]?.map((link: RelatedLinkItem, index: number) => (
                <motion.div
                  key={link.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`group block bg-gradient-to-br ${link.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/20 backdrop-blur-sm`}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <link.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                          {link.description}
                        </p>
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-medium">Ko'rish</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

      </div>

      {/* SEO-optimized internal links with anchor text variations */}
      <div className="hidden">
        {Object.entries(anchorTextVariations).map(([page, variations]) => (
          <div key={page}>
            {variations.map((text, index) => (
              <Link key={index} href={`/${page}`} aria-label={text}>
                {text}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
} 