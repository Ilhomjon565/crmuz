'use client'

import { useState, useEffect } from 'react'
import { useOfflinePage } from '@/hooks/use-offline-page'
import OfflinePage from './offline-page'

interface OfflinePageManagerProps {
  children: React.ReactNode
}

export default function OfflinePageManager({ children }: OfflinePageManagerProps) {
  const { showOfflinePage, hideOfflinePage, isOnline } = useOfflinePage()

  const handleRetry = () => {
    // Hide offline page and let the app handle reconnection
    hideOfflinePage()
  }

  // Only show full offline page if user is offline for more than 5 seconds
  // This allows the banner to show first
  const [showFullOfflinePage, setShowFullOfflinePage] = useState(false)

  useEffect(() => {
    if (showOfflinePage && !isOnline) {
      const timer = setTimeout(() => {
        setShowFullOfflinePage(true)
      }, 5000) // Show full offline page after 5 seconds

      return () => clearTimeout(timer)
    } else {
      setShowFullOfflinePage(false)
    }
  }, [showOfflinePage, isOnline])

  return (
    <>
      {children}
      {showFullOfflinePage && (
        <OfflinePage onRetry={handleRetry} />
      )}
    </>
  )
}
