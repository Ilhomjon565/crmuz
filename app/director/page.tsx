"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, TrendingUp, Users, DollarSign, FileText, PieChart, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export default function DirectorPanel() {
  const [activeTab, setActiveTab] = useState("overview")

  const menuItems = [
    { id: "overview", label: "Umumiy ko'rinish", icon: PieChart },
    { id: "analytics", label: "Analitika", icon: TrendingUp },
    { id: "staff", label: "Xodimlar", icon: Users },
    { id: "finance", label: "Moliya", icon: DollarSign },
    { id: "reports", label: "Hisobotlar", icon: FileText },
    { id: "settings", label: "Sozlamalar", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              EduCRM
            </Link>
            <span className="text-sm text-muted-foreground">/ Director Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">Aziza Toshmatova</p>
              <p className="text-xs text-muted-foreground">Director</p>
            </div>
            <Link href="/" className="p-2 hover:bg-accent rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-card min-h-[calc(100vh-73px)] p-4">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "hover:bg-accent"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview" && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-purple-500" />
                  <h1 className="text-3xl font-bold">Umumiy ko'rinish</h1>
                </div>
                
                {/* Main Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Jami daromad (oy)", value: "45,000,000", currency: "UZS", change: "+18.2%", color: "from-green-500 to-emerald-500" },
                    { label: "Jami o'quvchilar", value: "1,248", change: "+12.5%", color: "from-blue-500 to-cyan-500" },
                    { label: "Jami xodimlar", value: "42", change: "+3", color: "from-purple-500 to-pink-500" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
                    >
                      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white text-xs font-medium mb-3`}>
                        {stat.change}
                      </div>
                      <p className="text-3xl font-bold mb-1">
                        {stat.value} {stat.currency && <span className="text-lg text-muted-foreground">{stat.currency}</span>}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Filiallar bo'yicha</h2>
                    <div className="space-y-4">
                      {[
                        { name: "Chilonzor filiali", students: 420, percentage: 85 },
                        { name: "Yunusobod filiali", students: 380, percentage: 76 },
                        { name: "Sergeli filiali", students: 448, percentage: 90 },
                      ].map((branch, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{branch.name}</span>
                            <span className="text-muted-foreground">{branch.students} o'quvchi</span>
                          </div>
                          <div className="h-2 bg-accent rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${branch.percentage}%` }}
                              transition={{ delay: index * 0.2, duration: 0.8 }}
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card border rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Muhim xabarlar</h2>
                    <div className="space-y-4">
                      {[
                        { title: "Yangi filial ochilishi", desc: "Qo'qon shahrida yangi filial", priority: "high" },
                        { title: "Xodimlar yig'ini", desc: "Ertaga soat 14:00 da", priority: "medium" },
                        { title: "Moliyaviy hisobot tayyor", desc: "May oyi uchun yakuniy hisobot", priority: "low" },
                      ].map((message, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            message.priority === "high" ? "bg-red-500" :
                            message.priority === "medium" ? "bg-yellow-500" : "bg-green-500"
                          }`} />
                          <div>
                            <p className="font-medium">{message.title}</p>
                            <p className="text-sm text-muted-foreground">{message.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Analitika</h1>
                <p className="text-muted-foreground">Tafsiliy analitik ma'lumotlar bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "staff" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Xodimlar</h1>
                <p className="text-muted-foreground">Xodimlar ma'lumotlari bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "finance" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Moliya</h1>
                <p className="text-muted-foreground">Moliyaviy ma'lumotlar bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "reports" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Hisobotlar</h1>
                <p className="text-muted-foreground">Hisobotlar bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Sozlamalar</h1>
                <p className="text-muted-foreground">Tizim sozlamalari bu yerda ko'rsatiladi...</p>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

