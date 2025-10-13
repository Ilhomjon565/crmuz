'use client'

import { useEffect, useState } from 'react'
import { useOffline } from '@/hooks/use-offline'
import { Button } from '@/components/ui/button'
import { 
  WifiOff, 
  RefreshCw, 
  X,
  Wifi
} from 'lucide-react'

interface OfflineBannerProps {
  onRetry?: () => void
}

export default function OfflineBanner({ onRetry }: OfflineBannerProps) {
  const { isOnline, isOffline, wasOffline } = useOffline()
  const [showBanner, setShowBanner] = useState(false)
  const [isRetrying, setIsRetrying] = useState(false)

  useEffect(() => {
    if (isOffline) {
      setShowBanner(true)
    } else if (isOnline && wasOffline) {
      // Show briefly that connection is restored
      setShowBanner(true)
      setTimeout(() => setShowBanner(false), 3000)
    }
  }, [isOnline, isOffline, wasOffline])

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      const response = await fetch('/api/health', { 
        method: 'GET',
        cache: 'no-cache'
      })
      
      if (response.ok) {
        setShowBanner(false)
        onRetry?.()
      }
    } catch (error) {
      console.error('Connection test failed:', error)
    } finally {
      setIsRetrying(false)
    }
  }

  const handleClose = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#111827',
        color: 'white',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Left side - Icon and message */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        {isOffline ? (
          <WifiOff 
            style={{ 
              width: '1.25rem', 
              height: '1.25rem', 
              color: '#ef4444' 
            }} 
          />
        ) : (
          <Wifi 
            style={{ 
              width: '1.25rem', 
              height: '1.25rem', 
              color: '#10b981' 
            }} 
          />
        )}
        <span>
          {isOffline 
            ? 'Offline holatdasiz. Internetga bog\'laning.' 
            : 'Internetga bog\'landingiz!'
          }
        </span>
      </div>

      {/* Right side - Actions */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        {isOffline && (
          <Button
            onClick={handleRetry}
            disabled={isRetrying}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid #374151',
              borderRadius: '0.25rem',
              padding: '0.25rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: '500',
              cursor: isRetrying ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              opacity: isRetrying ? 0.6 : 1
            }}
          >
            {isRetrying ? (
              <>
                <RefreshCw 
                  style={{ 
                    width: '0.875rem', 
                    height: '0.875rem',
                    animation: 'spin 1s linear infinite'
                  }} 
                />
                Sinash...
              </>
            ) : (
              <>
                <RefreshCw style={{ width: '0.875rem', height: '0.875rem' }} />
                Qayta urinish
              </>
            )}
          </Button>
        )}
        
        <Button
          onClick={handleClose}
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            padding: '0.25rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '1.5rem',
            height: '1.5rem'
          }}
        >
          <X style={{ width: '1rem', height: '1rem' }} />
        </Button>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
