'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400 mb-4">
              Katta xatolik yuz berdi
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
              Kechirasiz, ilovada katta muammo yuz berdi. Iltimos, sahifani yangilang yoki keyinroq urinib ko'ring.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Sahifani yangilash
            </button>
          </div>
        </div>
      </body>
    </html>
  )
} 