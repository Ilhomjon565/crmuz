import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ApiError extends Error {
  isOffline?: boolean
  isNetworkError?: boolean
}

class ApiClient {
  private client: AxiosInstance
  private isOnline: boolean = true

  constructor() {
    this.client = axios.create({
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Listen for online/offline events
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.isOnline = true
      })
      
      window.addEventListener('offline', () => {
        this.isOnline = false
      })
      
      this.isOnline = navigator.onLine
    }

    // Add request interceptor to check connectivity
    this.client.interceptors.request.use(
      (config) => {
        if (!this.isOnline) {
          const error: ApiError = new Error('Internetga bog\'lanmagansiz')
          error.isOffline = true
          return Promise.reject(error)
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Add response interceptor to handle network errors
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (!navigator.onLine || error.code === 'NETWORK_ERROR' || error.message.includes('Network Error')) {
          const networkError: ApiError = new Error('Internetga bog\'lanmagansiz')
          networkError.isOffline = true
          networkError.isNetworkError = true
          return Promise.reject(networkError)
        }
        return Promise.reject(error)
      }
    )
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config)
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config)
  }

  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config)
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config)
  }

  getOnlineStatus(): boolean {
    return this.isOnline
  }
}

// Create singleton instance
export const apiClient = new ApiClient()

// Helper function to handle API errors with offline detection
export function handleApiError(error: any): string {
  if (error.isOffline || error.isNetworkError) {
    return 'Internetga bog\'lanmagansiz. Internetga bog\'laning va qayta urinib ko\'ring.'
  }
  
  if (error.response?.data?.message) {
    return error.response.data.message
  }
  
  if (error.message) {
    return error.message
  }
  
  return 'Noma\'lum xatolik yuz berdi'
}
