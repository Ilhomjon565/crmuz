'use client'

import { useEffect, useState } from 'react'
import { useOffline } from '@/hooks/use-offline'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Wifi, WifiOff, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OfflineNotificationProps {
  onRetry?: () => void
}

export default function OfflineNotification({ onRetry }: OfflineNotificationProps) {
  const { isOnline, isOffline, wasOffline } = useOffline()
  const [showNotification, setShowNotification] = useState(false)
  const [isRetrying, setIsRetrying] = useState(false)

  useEffect(() => {
    if (isOffline) {
      setShowNotification(true)
    } else if (isOnline && wasOffline) {
      // Show briefly that connection is restored
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }, [isOnline, isOffline, wasOffline])

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      // Test connection by making a simple request
      const response = await fetch('/api/health', { 
        method: 'GET',
        cache: 'no-cache'
      })
      
      if (response.ok) {
        setShowNotification(false)
        onRetry?.()
      }
    } catch (error) {
      console.error('Connection test failed:', error)
    } finally {
      setIsRetrying(false)
    }
  }

  const handleClose = () => {
    setShowNotification(false)
  }

  if (!showNotification) return null

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <Alert className={`border-l-4 ${
        isOffline 
          ? 'border-red-500 bg-red-50 text-red-800' 
          : 'border-green-500 bg-green-50 text-green-800'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isOffline ? (
              <WifiOff className="h-4 w-4" />
            ) : (
              <Wifi className="h-4 w-4" />
            )}
            <AlertDescription className="font-medium">
              {isOffline 
                ? 'Internetga bog\'lanmagansiz' 
                : 'Internetga bog\'landingiz'
              }
            </AlertDescription>
          </div>
          <div className="flex items-center space-x-2">
            {isOffline && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleRetry}
                disabled={isRetrying}
                className="h-6 px-2 text-xs"
              >
                {isRetrying ? 'Sinash...' : 'Qayta urinish'}
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={handleClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
        {isOffline && (
          <AlertDescription className="mt-2 text-sm">
            Internetga bog'lanish uchun tarmoq sozlamalarini tekshiring
          </AlertDescription>
        )}
      </Alert>
    </div>
  )
}
