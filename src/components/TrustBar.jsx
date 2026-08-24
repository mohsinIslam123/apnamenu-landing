export default function TrustBar() {
  const items = [
    { label: 'Counter billing + GST', path: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></> },
    { label: 'Kitchen Display System', path: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9h10M7 13h5"/></> },
    { label: 'QR table ordering', path: <><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M15 15h2v2h-2zM18 18h2v2h-2zM15 19h2"/></> },
    { label: 'Android + Bluetooth printing', path: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 18h4M4 9h2M18 9h2"/></> },
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
