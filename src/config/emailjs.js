// Paste your EmailJS Service ID here.
// Example: service_xxxxxxx
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'

// Paste your EmailJS Template ID here.
// Example: template_xxxxxxx
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'

// Paste your EmailJS Public Key here.
// Example: abcdefghijklmnop
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export const isEmailJsConfigured =
  !EMAILJS_SERVICE_ID.startsWith('YOUR_') &&
  !EMAILJS_TEMPLATE_ID.startsWith('YOUR_') &&
  !EMAILJS_PUBLIC_KEY.startsWith('YOUR_')
