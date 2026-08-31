import { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'zipla-theme'

function ThemeIcon({ isLight }) {
  if (isLight) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.7 15.2A8.3 8.3 0 0 1 8.8 3.3 8.4 8.4 0 1 0 20.7 15.2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Header() {
  const [theme, setTheme] = useState('dark')
  const isLight = theme === 'light'

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  function toggleTheme() {
    const nextTheme = isLight ? 'dark' : 'light'

    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    setTheme(nextTheme)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    } catch {
      /* Theme switching still works when browser storage is unavailable. */
    }
  }

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
      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          aria-pressed={isLight}
          title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          onClick={toggleTheme}
        >
          <ThemeIcon isLight={isLight} />
        </button>
        <a className="btn-cta" href="/#demo">Get a Free WhatsApp Demo</a>
      </div>
    </header>
  )
}
