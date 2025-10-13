'use client'

import { useState } from 'react'
import { useOffline } from '@/hooks/use-offline'
import { apiClient } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Wifi, WifiOff, TestTube } from 'lucide-react'

export default function OfflineTest() {
  const { isOnline, isOffline } = useOffline()
  const [testResult, setTestResult] = useState<string | null>(null)
  const [isTesting, setIsTesting] = useState(false)

  const testApiConnection = async () => {
    setIsTesting(true)
    setTestResult(null)
    
    try {
      const response = await apiClient.get('/api/health')
      setTestResult(`✅ API ga muvaffaqiyatli bog'landi: ${response.status}`)
    } catch (error: any) {
      if (error.isOffline) {
        setTestResult('❌ Internetga bog\'lanmagansiz')
      } else {
        setTestResult(`❌ Xatolik: ${error.message}`)
      }
    } finally {
      setIsTesting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TestTube className="h-5 w-5" />
          Offline Test
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className={isOnline ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
          <div className="flex items-center gap-2">
            {isOnline ? <Wifi className="h-4 w-4 text-green-600" /> : <WifiOff className="h-4 w-4 text-red-600" />}
            <AlertDescription className={isOnline ? 'text-green-800' : 'text-red-800'}>
              {isOnline ? 'Internetga bog\'langan' : 'Internetga bog\'lanmagan'}
            </AlertDescription>
          </div>
        </Alert>

        <Button 
          onClick={testApiConnection} 
          disabled={isTesting}
          className="w-full"
        >
          {isTesting ? 'Test qilinmoqda...' : 'API Test'}
        </Button>

        {testResult && (
          <Alert>
            <AlertDescription>{testResult}</AlertDescription>
          </Alert>
        )}

        <div className="text-sm text-gray-600">
          <p><strong>Qo'llanma:</strong></p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Internetni o'chiring</li>
            <li>"API Test" tugmasini bosing</li>
            <li>Offline xabar ko'rinishini tekshiring</li>
            <li>Internetni yoqing</li>
            <li>Qayta test qiling</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
