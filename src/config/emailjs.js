const env = import.meta.env

export const SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID?.trim() ?? ''
export const TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? ''
export const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? ''

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
