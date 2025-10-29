"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Calendar, 
  ClipboardList, 
  Award,
  MessageSquare,
  Settings,
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"

export default function TeacherPanel() {
  const [activeTab, setActiveTab] = useState("overview")

  const menuItems = [
    { id: "overview", label: "Umumiy ko'rinish", icon: GraduationCap },
    { id: "lessons", label: "Darslar", icon: BookOpen },
    { id: "students", label: "O'quvchilar", icon: Users },
    { id: "schedule", label: "Jadval", icon: Calendar },
    { id: "assignments", label: "Topshiriqlar", icon: ClipboardList },
    { id: "grades", label: "Baholar", icon: Award },
    { id: "messages", label: "Xabarlar", icon: MessageSquare },
    { id: "settings", label: "Sozlamalar", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              EduCRM
            </Link>
            <span className="text-sm text-muted-foreground">/ Teacher Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">Nodira Aliyeva</p>
              <p className="text-xs text-muted-foreground">Matematika o'qituvchisi</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
              NA
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg"
                    : "hover:bg-accent"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gradient-to-br from-background to-accent/10">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Welcome Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                      Xush kelibsiz! 👋
                    </h1>
                    <p className="text-muted-foreground">Bugun sizda 5 ta dars va 12 ta topshiriq tekshirish bor</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Bugun</p>
                    <p className="text-2xl font-bold">29 Oktyabr, 2025</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { 
                      label: "Jami o'quvchilar", 
                      value: "124", 
                      change: "+8 yangi", 
                      icon: Users,
                      gradient: "from-blue-500 to-cyan-500" 
                    },
                    { 
                      label: "Bugungi darslar", 
                      value: "5", 
                      change: "2 tugallandi", 
                      icon: BookOpen,
                      gradient: "from-emerald-500 to-teal-500" 
                    },
                    { 
                      label: "Tekshirish kerak", 
                      value: "12", 
                      change: "3 muhim", 
                      icon: ClipboardList,
                      gradient: "from-orange-500 to-red-500" 
                    },
                    { 
                      label: "O'rtacha baho", 
                      value: "4.6", 
                      change: "+0.3", 
                      icon: Award,
                      gradient: "from-purple-500 to-pink-500" 
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative overflow-hidden p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg`}>
                            <stat.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${stat.gradient} text-white`}>
                            {stat.change}
                          </span>
                        </div>
                        <p className="text-3xl font-bold mb-1">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Today's Schedule */}
                  <div className="bg-card border rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-semibold">Bugungi darslar</h2>
                    </div>
                    <div className="space-y-4">
                      {[
                        { time: "09:00 - 10:30", subject: "Matematika - 7A sinf", room: "301 xona", status: "completed" },
                        { time: "11:00 - 12:30", subject: "Algebra - 9B sinf", room: "305 xona", status: "completed" },
                        { time: "14:00 - 15:30", subject: "Geometriya - 8A sinf", room: "303 xona", status: "ongoing" },
                        { time: "16:00 - 17:30", subject: "Matematika - 10A sinf", room: "301 xona", status: "upcoming" },
                        { time: "18:00 - 19:30", subject: "Qo'shimcha dars", room: "Online", status: "upcoming" },
                      ].map((lesson, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-4 rounded-xl border-l-4 ${
                            lesson.status === "completed" ? "border-green-500 bg-green-500/5" :
                            lesson.status === "ongoing" ? "border-blue-500 bg-blue-500/5 shadow-lg" :
                            "border-muted-foreground/20 bg-muted/30"
                          } hover:shadow-md transition-all`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium text-muted-foreground">{lesson.time}</span>
                                {lesson.status === "ongoing" && (
                                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-500 text-white rounded-full animate-pulse">
                                    Hozir
                                  </span>
                                )}
                              </div>
                              <p className="font-semibold mb-1">{lesson.subject}</p>
                              <p className="text-sm text-muted-foreground">{lesson.room}</p>
                            </div>
                            {lesson.status === "completed" && (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activities & Assignments */}
                  <div className="space-y-6">
                    {/* Pending Assignments */}
                    <div className="bg-card border rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                          <ClipboardList className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-semibold">Tekshirish kerak</h2>
                      </div>
                      <div className="space-y-3">
                        {[
                          { title: "Kvadrat tenglama - Uyga vazifa", count: 28, deadline: "Bugun", priority: "high" },
                          { title: "Trigonometriya test", count: 24, deadline: "Ertaga", priority: "medium" },
                          { title: "Funksiyalar - Mustaqil ish", count: 19, deadline: "3 kun", priority: "low" },
                        ].map((task, index) => (
                          <div key={index} className="p-4 rounded-xl bg-accent/50 hover:bg-accent transition-all cursor-pointer border">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-medium">{task.title}</p>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                task.priority === "high" ? "bg-red-500/20 text-red-600" :
                                task.priority === "medium" ? "bg-yellow-500/20 text-yellow-600" :
                                "bg-green-500/20 text-green-600"
                              }`}>
                                {task.deadline}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{task.count} ta topshiriq</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Overview */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-semibold">Bu oy natijalari</h2>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>O'quvchilar faolligi</span>
                            <span className="font-medium">92%</span>
                          </div>
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>O'rtacha davomad</span>
                            <span className="font-medium">88%</span>
                          </div>
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-[88%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Topshiriqlar bajarilishi</span>
                            <span className="font-medium">85%</span>
                          </div>
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "lessons" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Darslar</h1>
                <p className="text-muted-foreground">Darslar ro'yxati va rejalar bu yerda ko'rsatiladi...</p>
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
                <p className="text-muted-foreground">Haftalik dars jadvali bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "assignments" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Topshiriqlar</h1>
                <p className="text-muted-foreground">Topshiriqlar va vazifalar bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "grades" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Baholar</h1>
                <p className="text-muted-foreground">O'quvchilar baholari bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "messages" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Xabarlar</h1>
                <p className="text-muted-foreground">Xabarlar va bildirishnomalar bu yerda ko'rsatiladi...</p>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Sozlamalar</h1>
                <p className="text-muted-foreground">Shaxsiy sozlamalar bu yerda ko'rsatiladi...</p>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

