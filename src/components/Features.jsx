const FEATURES = [
  { title: 'Counter POS Billing', body: 'Create bills from a touch-friendly counter screen, without manual calculations.', icon: <><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="13" x2="18" y2="13"/><line x1="6" y1="18" x2="13" y2="18"/></> },
  { title: 'Kitchen Display', pro: true, body: 'Keep kitchen orders visible in one live KDS queue.', icon: <><rect x="3" y="4" width="18" height="12" rx="2"/><circle cx="9" cy="10" r="1.4" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="1.4" fill="currentColor" stroke="none"/></> },
  { title: 'Table QR Ordering', pro: true, body: 'Let guests place table orders directly from their phone.', icon: <><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="15" y="15" width="4" height="4" fill="currentColor" stroke="none"/></> },
  { title: 'Auto GST Invoice', body: 'CGST and SGST are calculated automatically for each invoice.', isPercent: true },
  { title: 'Inventory + Alerts', body: 'Monitor inventory and use low-stock alerts to plan ahead.', icon: <><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></> },
  { title: 'Staff Roles', body: 'Assign access for owner, cashier, and kitchen roles.', icon: <><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15 20c0-2-1.4-4-3-5"/></> },
]
export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-head">
        <span className="eyebrow">Features</span>
        <h2>Only What You Need</h2>
        <p>Every feature solves a real counter problem — no unnecessary clutter.</p>
      </div>
      <div className="feature-grid">
        {FEATURES.map(f => (
          <div className="feature-card" key={f.title}>
            {f.isPercent ? <div className="f-icon pct">%</div> : <div className="f-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg></div>}
            <h3>{f.title}{f.pro && <span className="pro-chip">PRO</span>}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
