import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    function handleMenuKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleMenuKeyDown)
    return () => document.removeEventListener('keydown', handleMenuKeyDown)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <a className="zp-skip" href="#zp-content">Skip to content</a>
      <header className="site-header zp-hdr">
        <div className="zp-wrap zp-hdr-in">
          <a className="zp-logo" href="/">
            <img
              src="/zipla-logo.webp"
              alt="Zipla POS"
              width="112"
              height="32"
              loading="eager"
              decoding="async"
            />
          </a>
          <nav
            className={`zp-nav${menuOpen ? ' zp-nav--open' : ''}`}
            id="primary-navigation"
            aria-label="Primary navigation"
          >
            <a className="zp-nav-a" href="/#features" onClick={closeMenu}>Features</a>
            <a className="zp-nav-a" href="/pricing/" onClick={closeMenu}>Pricing</a>
            <a className="zp-nav-a" href="/faq/" onClick={closeMenu}>FAQ</a>
            <a className="zp-nav-a zp-nav-demo" href="/#demo" onClick={closeMenu}>Get a Free WhatsApp Demo</a>
          </nav>
          <div className="zp-hdr-act">
            <button
              className="zp-menu-btn"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
              ref={menuButtonRef}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>
            <a className="zp-btn zp-btn-gold zp-hdr-cta" href="/#demo">Get a Free WhatsApp Demo</a>
          </div>
        </div>
      </header>
      {/* Target of the skip link. The pages' own <main> elements have no id and a stage may not edit them. */}
      <div id="zp-content" tabIndex={-1} />
    </>
  )
}
