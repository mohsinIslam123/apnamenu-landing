export const WHATSAPP_NUMBER = '917817851009'
export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Zipla Billing Machine offer (OFFER.md 3.2, 3.7). One Buy now address for the whole site.
export const BUY_NOW_URL = 'https://rzp.io/rzp/ygTqBnl'
export const ASK_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
