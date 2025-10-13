'use client'

import { useEffect, useState } from 'react'
import { useOffline } from '@/hooks/use-offline'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  WifiOff, 
  RefreshCw, 
  Home, 
  Smartphone, 
  Wifi,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import Image from 'next/image'

interface OfflinePageProps {
  onRetry?: () => void
}

export default function OfflinePage({ onRetry }: OfflinePageProps) {
  const { isOnline, isOffline } = useOffline()
  const [isRetrying, setIsRetrying] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  const handleRetry = async () => {
    setIsRetrying(true)
    setRetryCount(prev => prev + 1)
    
    try {
      // Test connection
      const response = await fetch('/api/health', { 
        method: 'GET',
        cache: 'no-cache'
      })
      
      if (response.ok) {
        onRetry?.()
      }
    } catch (error) {
      console.error('Connection test failed:', error)
    } finally {
      setIsRetrying(false)
    }
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  if (isOnline) {
    return null // Don't show offline page when online
  }

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div 
        className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
        style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
          minHeight: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999
        }}
      >
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Logo/Brand */}
          <div 
            className="text-center mb-8"
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '4rem',
                height: '4rem',
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                marginBottom: '1rem'
              }}
            >
              <WifiOff 
                className="h-8 w-8 text-blue-600 dark:text-blue-400" 
                style={{ width: '2rem', height: '2rem', color: '#2563eb' }}
              />
            </div>
            <h1 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '0.5rem'
              }}
            >
              Internetga Bog'lanmagansiz
            </h1>
            <p 
              className="text-gray-600 dark:text-gray-300"
              style={{ color: '#6b7280' }}
            >
              Internet aloqasi yo'q. Iltimos, tarmoq sozlamalarini tekshiring.
            </p>
          </div>

          {/* Main Card */}
          <Card 
            className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '0.5rem',
              padding: '1.5rem'
            }}
          >
            <CardHeader 
              className="text-center pb-4"
              style={{ textAlign: 'center', paddingBottom: '1rem' }}
            >
              <CardTitle 
                className="flex items-center justify-center gap-2 text-lg"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '600'
                }}
              >
                <AlertTriangle 
                  className="h-5 w-5 text-amber-500" 
                  style={{ width: '1.25rem', height: '1.25rem', color: '#f59e0b' }}
                />
                Offline Rejim
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status Alert */}
              <Alert 
                className="border-amber-200 bg-amber-50 dark:bg-amber-900/20"
                style={{
                  border: '1px solid #fde68a',
                  backgroundColor: '#fef3c7',
                  borderRadius: '0.375rem',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <WifiOff 
                  className="h-4 w-4 text-amber-600" 
                  style={{ width: '1rem', height: '1rem', color: '#d97706', marginTop: '0.125rem' }}
                />
                <AlertDescription 
                  className="text-amber-800 dark:text-amber-200"
                  style={{ color: '#92400e', fontSize: '0.875rem' }}
                >
                  Internet aloqasi yo'q. Ba'zi funksiyalar cheklangan.
                </AlertDescription>
              </Alert>

              {/* Connection Tips */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Qadamlar:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">1</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Wi-Fi yoki mobil ma'lumotlar yoqilganligini tekshiring
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">2</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Router yoki modem qayta ishga tushirilganini tekshiring
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">3</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Internet provayder bilan bog'laning
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div 
                className="space-y-3"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <Button 
                  onClick={handleRetry} 
                  disabled={isRetrying}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  style={{
                    width: '100%',
                    backgroundColor: isRetrying ? '#9ca3af' : '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: isRetrying ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isRetrying ? (
                    <>
                      <RefreshCw 
                        className="h-4 w-4 mr-2 animate-spin" 
                        style={{ 
                          width: '1rem', 
                          height: '1rem', 
                          marginRight: '0.5rem',
                          animation: 'spin 1s linear infinite'
                        }} 
                      />
                      Sinash...
                    </>
                  ) : (
                    <>
                      <Wifi 
                        className="h-4 w-4 mr-2" 
                        style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}
                      />
                      Qayta urinish
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={handleRefresh}
                  variant="outline"
                  className="w-full"
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <RefreshCw 
                    className="h-4 w-4 mr-2" 
                    style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}
                  />
                  Sahifani yangilash
                </Button>
              </div>

              {/* Retry Counter */}
              {retryCount > 0 && (
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Urinishlar soni: {retryCount}
                  </p>
                </div>
              )}

              {/* Offline Features Info */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Offline rejimda mavjud:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    Sahifa ko'rinishi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    Ma'lumotlarni ko'rish
                  </li>
                  <li className="flex items-center gap-2 text-amber-600">
                    <AlertTriangle className="h-3 w-3" />
                    Yangi ma'lumot yuborish (cheklangan)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              EduCRM - O'quv Markazlarni Avtomatlashtiruvchi Tizim
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
