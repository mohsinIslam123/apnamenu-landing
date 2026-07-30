export default function TrustBar() {
  const items = [
    { label: 'Lightning Setup', path: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /> },
    { label: 'Data 100% Safe', path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
    { label: '\u20b90 UPI Commission', path: <><line x1="6" y1="3" x2="6" y2="21"/><path d="M6 8h9a4 4 0 0 1 0 8H6"/><line x1="6" y1="13" x2="14" y2="13"/></> },
    { label: 'Learning Videos', path: <><circle cx="12" cy="12" r="9"/><polygon points="10 8 16 12 10 16 10 8" /></> },
  ]
  return (
    <div className="trust-bar">
      <div className="trust-grid">
        {items.map(i => (
          <div className="trust-item" key={i.label}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{i.path}</svg>
            {i.label}
          </div>
        ))}
      </div>
    </div>
  )
}
