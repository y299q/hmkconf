import { toast } from "sonner"

/**
 * Notification types supported by the system
 */
export type NotificationType = "success" | "error" | "info"

/**
 * Basic notification options
 */
export interface NotificationOptions {
  duration?: number
  description?: string
}

/**
 * Display a success notification
 * @param message - The message to display
 * @param options - Optional configuration for the notification
 */
export const showSuccess = (message: string, options?: NotificationOptions) => {
  return toast.success(message, options)
}

/**
 * Display an error notification
 * @param message - The message to display
 * @param options - Optional configuration for the notification
 */
export const showError = (message: string, options?: NotificationOptions) => {
  return toast.error(message, options)
}

/**
 * Display an info notification
 * @param message - The message to display
 * @param options - Optional configuration for the notification
 */
export const showInfo = (message: string, options?: NotificationOptions) => {
  return toast(message, options)
}

/**
 * Notification service object with all notification methods
 * Provides a consistent API for displaying notifications
 */
export const notifications = {
  success: showSuccess,
  error: showError,
  info: showInfo,
} as const
