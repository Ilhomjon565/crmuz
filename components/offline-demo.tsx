'use client'

import { useState } from 'react'
import { useOfflinePage } from '@/hooks/use-offline-page'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Wifi, 
  WifiOff, 
  Eye, 
  RefreshCw,
  CheckCircle,
  XCircle
} from 'lucide-react'

export default function OfflineDemo() {
  const { 
    showOfflinePage, 
    isOnline, 
    isOffline, 
    wasOffline,
    showOfflinePageManually,
    hideOfflinePage 
  } = useOfflinePage()
  
  const [isSimulating, setIsSimulating] = useState(false)

  const simulateOffline = () => {
    setIsSimulating(true)
    showOfflinePageManually()
    setTimeout(() => setIsSimulating(false), 1000)
  }

  const simulateOnline = () => {
    hideOfflinePage()
  }

  return (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className={isOnline ? 'border-green-200 bg-green-50' : 'border-gray-200'}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Wifi className={`h-4 w-4 ${isOnline ? 'text-green-600' : 'text-gray-400'}`} />
              <span className="text-sm font-medium">Internet Holati</span>
            </div>
            <Badge variant={isOnline ? 'default' : 'secondary'} className="mt-2">
              {isOnline ? 'Bog\'langan' : 'Bog\'lanmagan'}
            </Badge>
          </CardContent>
        </Card>

        <Card className={showOfflinePage ? 'border-amber-200 bg-amber-50' : 'border-gray-200'}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className={`h-4 w-4 ${showOfflinePage ? 'text-amber-600' : 'text-gray-400'}`} />
              <span className="text-sm font-medium">Offline Sahifa</span>
            </div>
            <Badge variant={showOfflinePage ? 'default' : 'secondary'} className="mt-2">
              {showOfflinePage ? 'Ko\'rinmoqda' : 'Yashirin'}
            </Badge>
          </CardContent>
        </Card>

        <Card className={wasOffline ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <RefreshCw className={`h-4 w-4 ${wasOffline ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className="text-sm font-medium">Holat O'zgarishi</span>
            </div>
            <Badge variant={wasOffline ? 'default' : 'secondary'} className="mt-2">
              {wasOffline ? 'O\'zgargan' : 'O\'zgarmagan'}
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Demo Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <WifiOff className="h-5 w-5" />
            Offline Sahifa Demo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Offline sahifani ko'rish va sinash uchun quyidagi tugmalardan foydalaning:
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={simulateOffline}
              disabled={isSimulating || showOfflinePage}
              variant="outline"
              className="flex items-center gap-2"
            >
              <WifiOff className="h-4 w-4" />
              {isSimulating ? 'Simulyatsiya...' : 'Offline Sahifani Ko\'rsatish'}
            </Button>
            
            <Button 
              onClick={simulateOnline}
              disabled={!showOfflinePage}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Wifi className="h-4 w-4" />
              Online Simulyatsiya
            </Button>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium mb-2">Qo'llanma:</h4>
            <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-decimal list-inside">
              <li>"Offline Sahifani Ko'rsatish" tugmasini bosing</li>
              <li>Offline sahifa to'liq ekranni qoplaydi</li>
              <li>Boshqa sahifalarga o'tish mumkin emas</li>
              <li>"Online Simulyatsiya" tugmasini bosing</li>
              <li>Offline sahifa yashirinadi va normal sahifa ko'rinadi</li>
            </ol>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Offline Sahifa Xususiyatlari:
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• To'liq ekran qoplamasi</li>
                <li>• Chiroyli dizayn</li>
                <li>• Qayta urinish tugmasi</li>
                <li>• Sahifani yangilash</li>
                <li>• Offline rejim ma'lumotlari</li>
                <li>• Boshqa sahifalarga o'tish bloklangan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" />
                Cheklangan Funksiyalar:
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• API so'rovlari</li>
                <li>• Yangi ma'lumot yuborish</li>
                <li>• Real-time yangilanishlar</li>
                <li>• Boshqa sahifalarga navigatsiya</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}