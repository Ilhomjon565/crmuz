import { useState, useEffect } from 'react'
import { useOffline } from './use-offline'

export interface OfflinePageState {
  showOfflinePage: boolean
  isOnline: boolean
  isOffline: boolean
  wasOffline: boolean
  hideOfflinePage: () => void
  showOfflinePageManually: () => void
}

export function useOfflinePage(): OfflinePageState {
  const { isOnline, isOffline, wasOffline } = useOffline()
  const [showOfflinePage, setShowOfflinePage] = useState(false)
  const [hasShownOfflinePage, setHasShownOfflinePage] = useState(false)

  useEffect(() => {
    // Show offline page when going offline
    if (isOffline && !hasShownOfflinePage) {
      setShowOfflinePage(true)
      setHasShownOfflinePage(true)
    }
    
    // Hide offline page when coming back online
    if (isOnline && wasOffline) {
      setShowOfflinePage(false)
      setHasShownOfflinePage(false)
    }
  }, [isOnline, isOffline, wasOffline, hasShownOfflinePage])

  // Hide offline page when user manually dismisses it
  const hideOfflinePage = () => {
    setShowOfflinePage(false)
  }

  // Show offline page manually (for testing)
  const showOfflinePageManually = () => {
    setShowOfflinePage(true)
    setHasShownOfflinePage(true)
  }

  return {
    showOfflinePage,
    isOnline,
    isOffline,
    wasOffline,
    hideOfflinePage,
    showOfflinePageManually
  }
}
