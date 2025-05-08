"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, User, Calendar, Clock, Home, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("barchasi")
  const [modalTab, setModalTab] = useState<string>("info")
  const [activeDay, setActiveDay] = useState<number>(2) // Default to Wednesday (index 2)

  // Toggle modal visibility
  const toggleModal = (modalName: string) => {
    setActiveModal(modalName)
    setModalTab("info") // Reset to info tab when opening modal
  }

  // Days of the week
  const days = [
    { name: "Dushanba", date: "5.05" },
    { name: "Seshanba", date: "6.05" },
    { name: "Chorshanba", date: "7.05", highlight: true },
    { name: "Payshanba", date: "8.05" },
    { name: "Juma", date: "9.05" },
  ]

  // Class data
  const classes = [
    {
      id: "ingliz1",
      name: "Ingliz tili 1-guruh",
      time: "08:00 - 09:30",
      teacher: "Temur Maxmudov",
      room: "101-xona",
      students: 11,
      color: "orange",
      days: [0, 2, 4], // Monday, Wednesday, Friday
      startDate: "05.01.2024",
    },
    {
      id: "matematika",
      name: "Matematika C-4",
      time: "09:00 - 10:30",
      teacher: "Rasulov Muxtor",
      room: "102-xona",
      students: 7,
      color: "red",
      days: [1, 3], // Tuesday, Thursday
      startDate: "10.01.2024",
    },
    {
      id: "kompyuter",
      name: "Kompyuter savodxonligi N1",
      time: "10:00 - 12:00",
      teacher: "Otabek Ochilov",
      room: "102-xona",
      students: 16,
      color: "green",
      days: [0, 2, 4], // Monday, Wednesday, Friday
      startDate: "10.12.2024",
    },
    {
      id: "nemis",
      name: "Nemis tili",
      time: "11:00 - 13:30",
      teacher: "Abdullayeva Malohat",
      room: "312-xona",
      students: 11,
      color: "orange",
      days: [1, 3], // Tuesday, Thursday
      startDate: "15.01.2024",
    },
    {
      id: "rus",
      name: "Rus tili",
      time: "12:00 - 13:00",
      teacher: "Temur Maxmudov",
      room: "203-xona",
      students: 6,
      color: "red",
      days: [0, 3], // Monday, Thursday
      startDate: "20.01.2024",
    },
  ]

  // Time slots
  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"]

  // Generate student list
  const generateStudents = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Admin ${Math.floor(Math.random() * 100) + 1}`,
    }))
  }

  // Get classes for a specific day and time
  const getClassesForDayAndTime = (dayIndex: number, time: string) => {
    return classes.filter((cls) => cls.days.includes(dayIndex) && cls.time.startsWith(time))
  }

  // Class card component
  const ClassCard = ({ classData, onClick }: { classData: (typeof classes)[0]; onClick: () => void }) => {
    const colorMap = {
      red: "border-l-4 border-red-400 bg-red-50",
      orange: "border-l-4 border-orange-400 bg-orange-50",
      green: "border-l-4 border-green-400 bg-green-50",
    }

    const textColorMap = {
      red: "text-red-500",
      orange: "text-orange-500",
      green: "text-green-500",
    }

    return (
      <div
        className={`${colorMap[classData.color as keyof typeof colorMap]} p-2 rounded-r cursor-pointer hover:shadow-sm transition-shadow mb-2`}
        onClick={onClick}
      >
        <div className="font-medium text-sm">{classData.name}</div>
        <div className="text-gray-500 text-xs">{classData.time}</div>
        <div className="text-gray-500 text-xs">{classData.teacher}</div>
        <div className="text-gray-500 text-xs">Xona: {classData.room}</div>
        <div className={`${textColorMap[classData.color as keyof typeof textColorMap]} text-xs font-medium`}>
          {classData.students} ta talaba
        </div>
      </div>
    )
  }

  return (
    <section className="w-full py-8 md:py-24 lg:py-32 overflow-hidden bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 xl:grid-cols-[0.6fr_1.4fr]">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl xl:text-6xl/none">
                Ta'lim markazingizni raqamlashtiring
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl">
                Zamonaviy CRM tizimi orqali o'quv markazingizni samarali boshqaring
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="#boglanish">Boshlash</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Link href="/form/demo">Batafsil ma'lumot</Link>
              </Button>
            </div>
          </div>

          {/* Computer Mockup - Mobile First */}
          <div className="w-full flex items-center justify-center">
            <div className="relative w-full max-w-[800px]">
              {/* Monitor frame */}
              <div className="relative bg-gray-800 rounded-t-xl pt-6 pb-10 px-4 md:px-6 shadow-2xl">
                {/* Screen bezel */}
                <div className="absolute top-2.5 left-0 right-0 flex justify-center">
                  <div className="w-28 h-2 bg-gray-700 rounded-full"></div>
                </div>

                {/* Screen content */}
                <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                  {/* App interface */}
                  <div className="relative h-[500px] overflow-hidden">
                    {/* App header - Mobile optimized */}
                    <div className="flex items-center justify-between p-2 border-b bg-gray-50">
                      <div className="flex items-center">
                        <Home size={16} className="text-gray-600 mr-2" />
                        <span className="text-sm font-medium">EduCRM</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-gray-600">5.05-10.05</span>
                      </div>
                    </div>

                    {/* Navigation tabs */}
                    <div className="flex border-b overflow-x-auto scrollbar-hide">
                      <div className="flex space-x-2 p-2">
                        <button
                          className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${activeTab === "barchasi" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                          onClick={() => setActiveTab("barchasi")}
                        >
                          Barchasi
                        </button>
                        <button
                          className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${activeTab === "toq" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                          onClick={() => setActiveTab("toq")}
                        >
                          Toq kunlar
                        </button>
                        <button
                          className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${activeTab === "juft" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                          onClick={() => setActiveTab("juft")}
                        >
                          Juft kunlar
                        </button>
                      </div>
                    </div>

                    {/* Age group indicators */}
                    <div className="flex justify-center space-x-3 py-1 bg-gray-50 text-xs overflow-x-auto scrollbar-hide">
                      <div className="flex items-center whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                        <span>0-8 talaba</span>
                      </div>
                      <div className="flex items-center whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-orange-500 mr-1"></span>
                        <span>9-12 talaba</span>
                      </div>
                      <div className="flex items-center whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                        <span>13+ talaba</span>
                      </div>
                    </div>

                    {/* Day selector for mobile */}
                    <div className="flex items-center justify-between p-2 border-b md:hidden">
                      <button
                        className="p-1 rounded-full bg-gray-100"
                        onClick={() => setActiveDay((prev) => (prev > 0 ? prev - 1 : prev))}
                        disabled={activeDay === 0}
                      >
                        <ChevronDown size={16} className="text-gray-600 rotate-90" />
                      </button>
                      <div className="text-sm font-medium">
                        {days[activeDay].name}, {days[activeDay].date}
                      </div>
                      <button
                        className="p-1 rounded-full bg-gray-100"
                        onClick={() => setActiveDay((prev) => (prev < days.length - 1 ? prev + 1 : prev))}
                        disabled={activeDay === days.length - 1}
                      >
                        <ChevronDown size={16} className="text-gray-600 -rotate-90" />
                      </button>
                    </div>

                    {/* Desktop timetable - Hidden on mobile */}
                    <div className="hidden md:block">
                      {/* Timetable header */}
                      <div className="grid grid-cols-6 text-xs border-b">
                        <div className="p-1.5 text-center border-r">Vaqt</div>
                        {days.map((day, index) => (
                          <div
                            key={index}
                            className={`p-1.5 text-center ${index < days.length - 1 ? "border-r" : ""} ${day.highlight ? "bg-blue-50" : ""}`}
                          >
                            {day.name}, {day.date}
                          </div>
                        ))}
                      </div>

                      {/* Timetable content */}
                      <div className="overflow-y-auto h-[380px] scrollbar-hide">
                        {timeSlots.map((time, timeIndex) => (
                          <div key={timeIndex} className="grid grid-cols-6 text-xs border-b">
                            <div className="p-2 text-center border-r">{time}</div>
                            {days.map((day, dayIndex) => (
                              <div
                                key={dayIndex}
                                className={`p-1 ${dayIndex < days.length - 1 ? "border-r" : ""} ${day.highlight ? "bg-blue-50" : ""}`}
                              >
                                {getClassesForDayAndTime(dayIndex, time).map((cls) => (
                                  <ClassCard key={cls.id} classData={cls} onClick={() => toggleModal(cls.id)} />
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile timetable - Single day view */}
                    <div className="md:hidden overflow-y-auto h-[400px] scrollbar-hide">
                      {timeSlots.map((time, timeIndex) => {
                        const classesForTimeAndDay = getClassesForDayAndTime(activeDay, time)
                        if (classesForTimeAndDay.length === 0) return null

                        return (
                          <div key={timeIndex} className="border-b last:border-b-0">
                            <div className="p-2 bg-gray-50 font-medium text-xs">{time}</div>
                            <div className="p-2">
                              {classesForTimeAndDay.map((cls) => (
                                <ClassCard key={cls.id} classData={cls} onClick={() => toggleModal(cls.id)} />
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Modal for class details */}
                    {activeModal && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                        <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-[400px] max-h-[350px] overflow-hidden">
                          {/* Modal header */}
                          <div className="flex justify-between items-center p-3 border-b">
                            <h3 className="font-medium text-sm">{classes.find((c) => c.id === activeModal)?.name}</h3>
                            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setActiveModal(null)}>
                              <X size={16} />
                            </button>
                          </div>

                          {/* Modal tabs */}
                          <div className="flex border-b">
                            <button
                              className={`px-4 py-2 text-xs font-medium ${modalTab === "info" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
                              onClick={() => setModalTab("info")}
                            >
                              Ma'lumotlar
                            </button>
                            <button
                              className={`px-4 py-2 text-xs font-medium relative ${modalTab === "students" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
                              onClick={() => setModalTab("students")}
                            >
                              Talabalar
                              <span className="absolute top-1 right-1 bg-green-500 text-white text-[10px] rounded-full px-1">
                                {classes.find((c) => c.id === activeModal)?.students}
                              </span>
                            </button>
                          </div>

                          {/* Modal content with scrollable area */}
                          <div className="overflow-y-auto max-h-[250px] scrollbar-hide">
                            {/* Info tab content */}
                            {modalTab === "info" && (
                              <div className="p-4 space-y-4">
                                <div className="flex items-start space-x-3">
                                  <Home size={16} className="text-gray-500 mt-0.5" />
                                  <div>
                                    <div className="text-xs text-gray-500">Xona</div>
                                    <div className="text-sm font-medium">
                                      {classes.find((c) => c.id === activeModal)?.room}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                  <User size={16} className="text-gray-500 mt-0.5" />
                                  <div>
                                    <div className="text-xs text-gray-500">O'qituvchi</div>
                                    <div className="text-sm font-medium">
                                      {classes.find((c) => c.id === activeModal)?.teacher}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                  <Calendar size={16} className="text-gray-500 mt-0.5" />
                                  <div>
                                    <div className="text-xs text-gray-500">Boshlangan sana</div>
                                    <div className="text-sm font-medium">
                                      {classes.find((c) => c.id === activeModal)?.startDate}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                  <Clock size={16} className="text-gray-500 mt-0.5" />
                                  <div>
                                    <div className="text-xs text-gray-500">Dars davomiyligi</div>
                                    <div className="text-sm font-medium">
                                      {classes.find((c) => c.id === activeModal)?.time}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                  <Calendar size={16} className="text-gray-500 mt-0.5" />
                                  <div>
                                    <div className="text-xs text-gray-500">Kunlar</div>
                                    <div className="text-sm font-medium">
                                      {classes
                                        .find((c) => c.id === activeModal)
                                        ?.days.map((dayIndex) => days[dayIndex].name)
                                        .join(", ")}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Students tab content */}
                            {modalTab === "students" && (
                              <div className="p-4">
                                <div className="text-xs font-medium mb-3">Talabalar ro'yxati:</div>
                                <div className="space-y-2">
                                  {generateStudents(classes.find((c) => c.id === activeModal)?.students || 0).map(
                                    (student) => (
                                      <div key={student.id} className="flex items-center p-2 bg-gray-50 rounded-md">
                                        <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs text-blue-600 mr-2">
                                          {student.id}
                                        </div>
                                        <div className="text-sm">{student.name}</div>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Monitor base with logo */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-700 rounded-b-xl flex items-center justify-center">
                  <div className="w-16 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="mx-auto w-48 h-8 bg-gray-700 rounded-b-lg"></div>
              <div className="mx-auto w-72 h-2 bg-gray-800 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
