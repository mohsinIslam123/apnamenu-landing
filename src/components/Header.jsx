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
      <a className="btn-cta" href={waLink('Hi, I would like a 14-day free demo of Zipla POS')} target="_blank" rel="noopener noreferrer">
        WhatsApp Us
      </a>
    </header>
  )
}
