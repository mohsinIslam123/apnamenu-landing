export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <a href="/"><img src="/zipla-logo.webp" alt="Zipla POS" className="brand-logo" /></a>
      </div>
      <nav className="nav-links">
        <a href="/#features">Features</a>
        <a href="/#pricing">Pricing</a>
        <a href="/faq/">FAQ</a>
      </nav>
      <a className="btn-cta" href="https://app.zipla.in/register">Start Free Trial</a>
    </header>
  )
}
