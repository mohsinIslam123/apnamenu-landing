import { waLink } from '../constants.js'
export default function FinalCTA() {
  return (
    <div className="final-cta">
      <h2>14 Din Free Demo — Koi Card Nahi</h2>
      <p>WhatsApp pe message karo, aaj hi shuru ho jaaye.</p>
      <a className="btn-cta" href={waLink('Hi, ApnaMenu ka 14 din free demo chahiye')} target="_blank" rel="noopener noreferrer">Aaj Hi WhatsApp Karo</a>
    </div>
  )
}
