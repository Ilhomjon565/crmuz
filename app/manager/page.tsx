"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, BarChart3, Calendar, BookOpen, MessageSquare, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export default function ManagerPanel() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "students", label: "O'quvchilar", icon: Users },
    { id: "schedule", label: "Dars jadvali", icon: Calendar },
    { id: "courses", label: "Kurslar", icon: BookOpen },
    { id: "messages", label: "Xabarlar", icon: MessageSquare },
    { id: "settings", label: "Sozlamalar", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              EduCRM
            </Link>
            <span className="text-sm text-muted-foreground">/ Manager Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">Farrux Karimov</p>
              <p className="text-xs text-muted-foreground">Manager</p>
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
                    ? "bg-primary text-primary-foreground"
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
            {activeTab === "dashboard" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: "Jami o'quvchilar", value: "248", change: "+12%", color: "from-blue-500 to-cyan-500" },
                    { label: "Faol kurslar", value: "12", change: "+3", color: "from-green-500 to-emerald-500" },
                    { label: "Darslar (bugun)", value: "8", change: "4 qolgan", color: "from-purple-500 to-pink-500" },
                    { label: "Yangi xabarlar", value: "15", change: "3 muhim", color: "from-orange-500 to-red-500" },
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
                      <p className="text-3xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-card border rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">So'nggi faoliyat</h2>
                  <div className="space-y-4">
                    {[
                      { action: "Yangi o'quvchi qo'shildi", name: "Dilshod Rahimov", time: "5 daqiqa oldin" },
                      { action: "Dars yakunlandi", name: "React asoslari - 3-guruh", time: "1 soat oldin" },
                      { action: "Xabar yuborildi", name: "Ota-onalarga bildirishnoma", time: "2 soat oldin" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.name}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "students" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">O'quvchilar</h1>
                <p className="text-muted-foreground">O'quvchilar ro'yxati bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "schedule" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Dars Jadvali</h1>
                <p className="text-muted-foreground">Dars jadvali bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "courses" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Kurslar</h1>
                <p className="text-muted-foreground">Kurslar ro'yxati bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "messages" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Xabarlar</h1>
                <p className="text-muted-foreground">Xabarlar bu yerda ko'rsatiladi...</p>
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

