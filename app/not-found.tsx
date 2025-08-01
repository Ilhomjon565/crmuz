import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sahifa topilmadi
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Kechirasiz, qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
          </p>
        </div>

        {/* Search Suggestions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            Sahifani topishga yordam
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Asosiy sahifalar:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <Link href="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link></li>
                <li>• <Link href="/features" className="hover:text-blue-600 transition-colors">Xususiyatlar</Link></li>
                <li>• <Link href="/pricing" className="hover:text-blue-600 transition-colors">Narxlar</Link></li>
                <li>• <Link href="/contact" className="hover:text-blue-600 transition-colors">Aloqa</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Yordam sahifalari:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <Link href="/about" className="hover:text-blue-600 transition-colors">Haqida</Link></li>
                <li>• <Link href="/faq" className="hover:text-blue-600 transition-colors">Ko'p so'raladigan savollar</Link></li>
                <li>• <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                <li>• <Link href="/privacy" className="hover:text-blue-600 transition-colors">Maxfiylik siyosati</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Bosh sahifaga qaytish
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="border-2 border-gray-300 hover:border-gray-400 font-semibold py-3 px-6">
            <Link href="/contact" className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Yordam so'rash
            </Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Agar muammo davom etsa, biz bilan bog'laning:{' '}
            <a href="mailto:support@educrm.uz" className="text-blue-600 hover:underline">
              support@educrm.uz
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 