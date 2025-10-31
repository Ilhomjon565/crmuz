"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ChevronRight, Sparkles, Star, Zap, Users, TrendingUp, Shield } from 'lucide-react'
import DashboardPreview from "@/components/dashboard-preview"
import CanvasBackground from "@/components/canvas-background"
import { motion } from "framer-motion"
import { HERO_TEXTS, SOCIAL_PROOF } from "@/lib/text-constants"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <CanvasBackground />

      {/* Enhanced floating elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 dark:from-cyan-500/5 dark:to-emerald-500/5 rounded-full blur-3xl"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400/30 dark:bg-indigo-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 relative z-10"
          >
            {/* Enhanced badge with animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 via-blue-100 to-purple-100 dark:from-indigo-900/50 dark:via-blue-900/50 dark:to-purple-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium shadow-lg shadow-indigo-600/10 dark:shadow-indigo-500/20 border border-indigo-200/50 dark:border-indigo-700/50"
            >
              <motion.span 
                className="flex h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
              {HERO_TEXTS.badge}
            </motion.div>

            {/* Enhanced title with more creative styling */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-400 drop-shadow-sm">
                {HERO_TEXTS.title}
              </span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-block ml-4"
              >
                <Star className="h-8 w-8 md:h-12 md:w-12 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
              </motion.div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xl text-slate-700 dark:text-slate-200 max-w-xl font-medium drop-shadow-sm leading-relaxed"
            >
              {HERO_TEXTS.description}
            </motion.p>

            {/* Enhanced buttons with more creative styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-700 hover:via-blue-700 hover:to-purple-700 dark:from-indigo-500 dark:via-blue-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:via-blue-600 dark:hover:to-purple-600 text-white rounded-full h-16 px-8 shadow-2xl shadow-indigo-600/30 dark:shadow-indigo-900/40 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Link
                    href="https://director.educrm.uz/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center relative z-10"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    {HERO_TEXTS.startButton}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://director.educrm.uz/register" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:hover:from-indigo-900/30 dark:hover:to-blue-900/30 rounded-full h-16 px-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="#demo" className="flex items-center">
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    {HERO_TEXTS.demoButton}
                  </Link>
                </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Enhanced social proof with more visual elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex items-center gap-6 pt-6"
            >
              <div className="flex -space-x-2">
                {SOCIAL_PROOF.users.map((user, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium ring-4 ring-white dark:ring-slate-900 shadow-lg ${
                      index === 0 ? 'bg-gradient-to-r from-indigo-400 to-blue-400' :
                      index === 1 ? 'bg-gradient-to-r from-blue-400 to-purple-400' :
                      index === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                      'bg-gradient-to-r from-indigo-500 to-blue-500'
                    }`}
                  >
                    {user}
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {SOCIAL_PROOF.trustMessage}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-slate-600 dark:text-slate-400 ml-1">5.0 reyting</span>
                </div>
              </div>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">500+</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">O'quv markazlari</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">+61%</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Samaradorlik</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">100%</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Xavfsizlik</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            {/* Enhanced dashboard preview with more creative effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-3xl blur-lg opacity-50"></div>
            <motion.div 
              className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-indigo-100 dark:border-indigo-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <DashboardPreview />
            </motion.div>

            {/* Enhanced floating elements around dashboard */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Floating icons around dashboard */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="h-4 w-4 text-white" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Zap className="h-4 w-4 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
