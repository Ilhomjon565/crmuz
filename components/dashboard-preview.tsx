"use client"
import { motion } from "framer-motion"

export default function DashboardPreview() {
  const data = [
    { name: "Yan", payments: 1.5, debts: 1.2 },
    { name: "Fev", payments: 1.7, debts: 1.3 },
    { name: "Mar", payments: 1.6, debts: 1.4 },
    { name: "Apr", payments: 1.8, debts: 1.5 },
    { name: "May", payments: 2.2, debts: 1.7 },
    { name: "Iyun", payments: 2.0, debts: 1.8 },
    { name: "Iyul", payments: 2.3, debts: 1.9 },
  ]

  const students = [
    { name: "Anmita Xatri", status: "O'qimoqda", avatar: "/avatar-1.png" },
    { name: "Otabek Shukurov", status: "Bitirgan", avatar: "/avatar-2.png" },
    { name: "Kamila Ahmedova", status: "Chetlashtirilgan", avatar: "/avatar-3.png" },
    { name: "Sherzod Rasulov", status: "O'qimoqda", avatar: "/avatar-4.png" },
    { name: "Madina Juraeva", status: "Ta'tilda", avatar: "/avatar-5.png" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-gradient-to-br from-blue-500 to-indigo-700 p-6 md:p-8 text-white overflow-hidden"
    >
      <motion.div variants={item} className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-3xl font-bold mb-2 text-white drop-shadow-md">
          TA'LIM MARKAZLARI UCHUN CRM PLATFORMA
        </h2>
        <p className="text-white/90 text-sm md:text-base">
          Operatsiyalarni soddalashtirish va boshqaruvni yaxshilash uchun yagona yechim
        </p>
        <button className="mt-3 md:mt-4 bg-white text-indigo-600 px-4 md:px-6 py-1.5 md:py-2 rounded-md font-medium text-sm md:text-base shadow-lg">
          Boshlash
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
        <motion.div
          variants={item}
          className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 shadow-lg"
        >
          <div className="flex items-center mb-2">
            <div className="w-6 md:w-8 h-6 md:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <svg
                className="w-3 md:w-4 h-3 md:h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-medium text-sm md:text-base">Xususiyatlar</h3>
          </div>
          <div className="h-1 bg-white/20 rounded-full mb-2"></div>
          <div className="h-1 bg-white/20 rounded-full w-3/4 mb-2"></div>
          <div className="h-1 bg-white/20 rounded-full w-1/2"></div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 shadow-lg"
        >
          <div className="flex items-center mb-2">
            <div className="w-6 md:w-8 h-6 md:h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
              <svg
                className="w-3 md:w-4 h-3 md:h-4 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <h3 className="font-medium text-sm md:text-base">Samaradorlik</h3>
          </div>
          <div className="text-xl md:text-3xl font-bold">+61%</div>
          <div className="text-xs md:text-sm text-white/70">o'tgan oyga nisbatan</div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 shadow-lg"
        >
          <div className="flex items-center mb-2">
            <div className="w-6 md:w-8 h-6 md:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <svg
                className="w-3 md:w-4 h-3 md:h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="font-medium text-sm md:text-base">O'quvchilar</h3>
          </div>
          <div className="text-xl md:text-3xl font-bold">1,259</div>
          <div className="h-1 bg-white/20 rounded-full w-2/3 mt-2"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}
