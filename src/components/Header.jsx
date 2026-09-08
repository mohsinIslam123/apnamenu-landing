import { useEffect, useRef, useState } from 'react'

const THEME_STORAGE_KEY = 'zipla-theme'

function ThemeIcon({ isLight }) {
  if (isLight) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: 'block', flexShrink: 0 }}
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    )
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

export default function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
    }
    return 'dark'
  })

  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const isLight = theme === 'light'

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
    setTheme(currentTheme)
  }, [])

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

  function toggleTheme() {
    const nextTheme = isLight ? 'dark' : 'light'

    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    setTheme(nextTheme)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    } catch {
      /* Storage unavailable fallback */
    }
  }

  return (
    <header className="site-header">
      <div className="brand">
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img
            src="/zipla-logo.webp"
            alt="Zipla POS"
            className="brand-logo"
            width="112"
            height="32"
            loading="eager"
            decoding="async"
            style={{ display: 'block', height: 'auto', maxHeight: '34px', width: 'auto' }}
          />
        </a>
      </div>
      <nav
        className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <a href="/#features" onClick={closeMenu}>Features</a>
        <a href="/#pricing" onClick={closeMenu}>Pricing</a>
        <a href="/faq/" onClick={closeMenu}>FAQ</a>
        <a className="mobile-nav-demo" href="/#demo" onClick={closeMenu}>Get a Free WhatsApp Demo</a>
      </nav>
      <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          className="mobile-menu-toggle"
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
        <button
          className="theme-toggle"
          type="button"
          aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          aria-pressed={isLight}
          title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          onClick={toggleTheme}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            minWidth: '38px',
            minHeight: '38px',
            padding: 0,
            borderRadius: '50%',
            border: '1.5px solid rgba(127, 127, 127, 0.35)',
            backgroundColor: 'rgba(127, 127, 127, 0.08)',
            color: 'inherit',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'border-color 0.2s ease, background-color 0.2s ease'
          }}
        >
          <ThemeIcon isLight={isLight} />
        </button>
        <a className="btn-cta" href="/#demo">Get a Free WhatsApp Demo</a>
      </div>
    </header>
  )
}
