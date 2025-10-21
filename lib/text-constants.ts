// Centralized text constants for EduCRM platform
// This file contains all text content in Uzbek for better organization and consistency

export const NAVIGATION_TEXTS = {
  services: "Xizmatlar",
  pricing: "Narxlar", 
  blog: "Blog",
  support: "Yordam",
  demo: "Demo versiya",
  menu: "Menyuni ochish",
  themeToggle: "Mavzuni o'zgartirish"
} as const;

export const HERO_TEXTS = {
  badge: "Ta'lim markazlari uchun #1 CRM platforma",
  title: "O'quv Markazlarni Avtomatlashtiruvchi Tizim",
  description: "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. O'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish. EduCRM.uz - ta'lim sohasida eng yaxshi yechim.",
  startButton: "Hozir boshlash",
  demoButton: "Demo ko'rish",
  trustText: "500+ o'quv markazlari ishonch bildirgan"
} as const;

export const SEO_TEXTS = {
  title: "EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim | Education CRM",
  description: "O'zbekistondagi o'quv markazlar uchun professional CRM tizimi. O'quvchilar, o'qituvchilar va to'lovlarni nazorat qilish. EduCRM.uz - ta'lim sohasida eng yaxshi yechim.",
  keywords: [
    "o'quv markazlarni avtomatlashtiruvchi tizim",
    "o'quv markazni nazorat qiluvchi tizim", 
    "o'zbekcha o'quv markaz nazorat qiluvchi tizim",
    "educrm.uz",
    "education crm",
    "crm edu",
    "edu uz",
    "o'quv markaz crm",
    "ta'lim crm",
    "maktab boshqaruvi",
    "o'quvchilar bazasi",
    "o'qituvchilar nazorati",
    "to'lovlar boshqaruvi",
    "o'quv markaz dasturi",
    "ta'lim tizimi",
    "uzbekistan education",
    "school management system",
    "student management",
    "teacher management",
    "payment tracking",
    "educational software"
  ]
} as const;

export const FEATURE_TEXTS = {
  title: "Xususiyatlar",
  efficiency: "Samaradorlik", 
  students: "O'quvchilar",
  efficiencyIncrease: "+61% o'tgan oyga nisbatan"
} as const;

export const PLATFORM_TEXTS = {
  title: "TA'LIM MARKAZLARI UCHUN CRM PLATFORMA",
  subtitle: "Operatsiyalarni soddalashtirish va boshqaruvni yaxshilash uchun yagona yechim",
  startButton: "Boshlash"
} as const;

export const SOCIAL_PROOF = {
  users: ["A", "B", "C", "+"],
  trustMessage: "500+ o'quv markazlari ishonch bildirgan"
} as const;

// Navigation items with consistent structure
export const NAVIGATION_ITEMS = [
  { name: NAVIGATION_TEXTS.services, href: "#features" },
  { name: NAVIGATION_TEXTS.pricing, href: "#pricing" },
  { name: NAVIGATION_TEXTS.blog, href: "#blog" },
  { name: NAVIGATION_TEXTS.support, href: "#support" },
] as const;

// Feature cards data
export const FEATURE_CARDS = [
  {
    icon: "⚙️",
    title: FEATURE_TEXTS.title,
    description: "Xususiyatlar ro'yxati",
    lines: 3
  },
  {
    icon: "📊", 
    title: FEATURE_TEXTS.efficiency,
    description: FEATURE_TEXTS.efficiencyIncrease,
    lines: 1
  },
  {
    icon: "👤",
    title: FEATURE_TEXTS.students,
    description: "1,259",
    lines: 1
  }
] as const;

// Free announcement texts
export const FREE_ANNOUNCEMENT_TEXTS = {
  title: "🎉 KATTA YANGILIK! 🎉",
  subtitle: "EduCRM tizimi",
  period: "2025 yil oxirigacha",
  free: "TEKIN",
  open: "OCHIQ",
  allFeatures: "🎁 Barcha funksiyalar bepul!",
  closeButton: "Yopish",
  minimizeButton: "Kichraytirish"
} as const;

// Free trial section texts
export const FREE_TRIAL_TEXTS = {
  title: "Bepul sinov muddatini boshlang",
  description: "EduCRM tizimining to'liq imkoniyatlaridan foydalaning va biznesingizni yangi bosqichga olib chiqing. Bugun ro'yxatdan o'ting!",
  features: [
    "14 kunlik bepul sinov muddati",
    "Hech qanday kredit karta ma'lumotlari talab qilinmaydi",
    "Cheklanmagan o'quvchilar soni",
    "To'liq funksionallik",
    "24/7 qo'llab-quvvatlash"
  ],
  startButton: "Hozir boshlash",
  learnMoreButton: "Batafsil ma'lumot"
} as const;

// Enhanced hero section texts
export const ENHANCED_HERO_TEXTS = {
  title: "Ta'lim markazingizni raqamlashtiring",
  description: "Zamonaviy CRM tizimi orqali o'quv markazingizni samarali boshqaring"
} as const;

// Internal links texts
export const INTERNAL_LINKS_TEXTS = {
  home: "Bosh sahifa",
  features: "Xususiyatlar",
  pricing: "Narxlar",
  blog: "Blog",
  contact: "Aloqa",
  about: "Haqida",
  faq: "FAQ",
  support: "Yordam"
} as const;
