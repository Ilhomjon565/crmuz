"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ChevronRight } from "lucide-react"
import DashboardPreview from "@/components/dashboard-preview"
import CanvasBackground from "@/components/canvas-background"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <CanvasBackground />

      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium shadow-lg shadow-indigo-600/10 dark:shadow-indigo-500/20">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
              Ta'lim markazlari uchun #1 CRM platforma
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 drop-shadow-sm">
              Transform Education
            </h1>

            <p className="text-xl text-slate-700 dark:text-slate-200 max-w-xl font-medium drop-shadow-sm">
              O'quv markazingizni zamonaviy CRM tizimi orqali boshqaring va samaradorlikni oshiring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600 text-white rounded-full h-14 px-8 shadow-xl shadow-indigo-600/20 dark:shadow-indigo-900/30 group"
              >
                <Link
                  href="https://director.educrm.uz/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Hozir boshlash
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full h-14 px-8 shadow-lg"
              >
                <Link href="#demo" className="flex items-center">
                  Demo ko'rish
                  <Play className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-400 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white dark:ring-slate-900">
                  A
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white dark:ring-slate-900">
                  B
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white dark:ring-slate-900">
                  C
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white dark:ring-slate-900">
                  +
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span className="font-semibold">500+</span> o'quv markazlari ishonch bildirgan
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-indigo-100 dark:border-indigo-900">
              <DashboardPreview />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
