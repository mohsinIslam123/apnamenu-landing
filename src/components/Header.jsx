import { waLink } from '../constants.js'
export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <img src="/zipla-logo.webp" alt="Zipla POS" className="brand-logo" />
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="btn-cta" href={waLink('Hi, Zipla POS ka 14 din free demo chahiye')} target="_blank" rel="noopener noreferrer">
        WhatsApp Karo
      </a>
    </header>
  )
}
