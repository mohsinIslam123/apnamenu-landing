import { waLink } from '../constants.js'
export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="#1a1408" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="7" x2="19" y2="7"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="17" x2="14" y2="17"/>
          </svg>
        </div>
        <span className="brand-name">Apna<em>Menu</em></span>
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="btn-cta" href={waLink('Hi, ApnaMenu ka 14 din free demo chahiye')} target="_blank" rel="noopener noreferrer">
        WhatsApp Karo
      </a>
    </header>
  )
}
