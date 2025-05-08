"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { motion } from "framer-motion"

export default function DashboardPreview() {
  const data = [
    { name: "Jan", payments: 1.5, debts: 1.2 },
    { name: "Feb", payments: 1.7, debts: 1.3 },
    { name: "Mar", payments: 1.6, debts: 1.4 },
    { name: "Apr", payments: 1.8, debts: 1.5 },
    { name: "May", payments: 2.2, debts: 1.7 },
    { name: "Jun", payments: 2.0, debts: 1.8 },
    { name: "Jul", payments: 2.3, debts: 1.9 },
  ]

  const students = [
    { name: "Anmita Khatri", status: "Enrolled", avatar: "/avatar-1.png" },
    { name: "Otabek Shukurov", status: "Graduated", avatar: "/avatar-2.png" },
    { name: "Kamilo Ahmedova", status: "Withdrawn", avatar: "/avatar-3.png" },
    { name: "Sherzod Rasulov", status: "Anrolled", avatar: "/avatar-4.png" },
    { name: "Madina Juraeva", status: "Liecole", avatar: "/avatar-5.png" },
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
          CRM PLATFORM FOR EDUCATIONAL CENTERS
        </h2>
        <p className="text-white/90 text-sm md:text-base">
          An all-in-one solution to streamline operations and enhance management
        </p>
        <button className="mt-3 md:mt-4 bg-white text-indigo-600 px-4 md:px-6 py-1.5 md:py-2 rounded-md font-medium text-sm md:text-base shadow-lg">
          Get Started
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
            <h3 className="font-medium text-sm md:text-base">Features</h3>
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
            <h3 className="font-medium text-sm md:text-base">Performance</h3>
          </div>
          <div className="text-xl md:text-3xl font-bold">+61%</div>
          <div className="text-xs md:text-sm text-white/70">vs last month</div>
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
            <h3 className="font-medium text-sm md:text-base">Students</h3>
          </div>
          <div className="text-xl md:text-3xl font-bold">1,259</div>
          <div className="h-1 bg-white/20 rounded-full w-2/3 mt-2"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <motion.div
          variants={item}
          className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 shadow-lg"
        >
          <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4">Manage Students</h3>
          <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4">
            Easily organize student information and track academic progress
          </p>

          <div className="space-y-2 md:space-y-3">
            {students.map((student, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-white/20 rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm">{student.name}</span>
                </div>
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">{student.status}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 shadow-lg"
        >
          <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4">Payment Analytics</h3>
          <div className="h-32 md:h-40 mb-3 md:mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" tick={{ fontSize: 10 }} />
                <YAxis stroke="rgba(255,255,255,0.5)" tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="payments"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "#3b82f6", strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#3b82f6", stroke: "white", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="debts"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "#6366f1", strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#6366f1", stroke: "white", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-4 text-xs md:text-sm">
            <div className="flex items-center">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-500 rounded-full mr-1"></div>
              <span>Payments</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-indigo-500 rounded-full mr-1"></div>
              <span>Debts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
