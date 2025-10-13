'use client'

import OfflineTest from '@/components/offline-test'
import OfflineDemo from '@/components/offline-demo'
import OfflineBanner from '@/components/offline-banner'
import { useOfflinePage } from '@/hooks/use-offline-page'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { WifiOff } from 'lucide-react'

export default function OfflineTestPage() {
  const { showOfflinePageManually } = useOfflinePage()
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Offline Funksionallik Testi
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bu sahifa offline funksionallikni test qilish uchun yaratilgan. 
            Internetni o'chirib, qayta yoqib ko'ring.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <OfflineTest />
        </div>

        {/* Offline Banner Demo */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle>YouTube-style Offline Banner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Internetni o'chiring - yuqorida "Offline holatdasiz" banner ko'rinadi
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <WifiOff className="h-4 w-4 text-red-500" />
                  <span>Offline holatdasiz. Internetga bog'laning.</span>
                  <Button size="sm" variant="outline">Qayta urinish</Button>
                  <Button size="sm" variant="ghost">×</Button>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Bu banner avtomatik ko'rinadi va 5 soniyadan keyin to'liq offline sahifa ochiladi
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Offline Page Demo */}
        <div className="max-w-4xl mx-auto mb-8">
          <OfflineDemo />
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Offline Funksionallik Xususiyatlari</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">✅ Amalga oshirilgan:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Internet holatini aniqlash</li>
                  <li>Offline xabarnomalar</li>
                  <li>API so'rovlarini offline rejimda boshqarish</li>
                  <li>Service Worker bilan cache</li>
                  <li>Qayta urinish funksiyasi</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">🔧 Texnologiyalar:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>React Hooks (useOffline)</li>
                  <li>Service Worker</li>
                  <li>Cache API</li>
                  <li>Axios interceptors</li>
                  <li>Real-time notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
