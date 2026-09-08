function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 10 3.1 3.1L15.5 5.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m13.2 2-8 11h6l-.4 9 8-12h-6.1l.5-8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function KitchenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8M12 17v4M7 9h10M7 13h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Hero({ takeaway }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner" style={{ alignItems: 'flex-start' }}>
        <div className="hero-copy">
          <span className="eyebrow" style={{ marginTop: 0, marginBottom: '10px', display: 'inline-block' }}>For Indian food businesses</span>
          <h1 id="hero-title" style={{ marginTop: 0, marginBottom: '16px' }}>Simple Restaurant Billing Software</h1>
          <p className="sub" style={{ marginTop: 0, marginBottom: '24px' }}>For Indian food businesses, keep customer billing, table orders and kitchen handoff in one clear workflow during service.</p>
          <p className="hero-key-takeaway"><strong>Key takeaway:</strong> {takeaway}</p>
          <div className="hero-ctas">
            <a className="btn-cta" href="/#demo">Book a WhatsApp Demo</a>
            <a className="hero-trial-link" href="https://app.zipla.in/register">Start 14-Day Free Trial</a>
          </div>
          <div className="hero-assurances">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', fontSize: '13px', fontWeight: 500, opacity: 0.9, alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontWeight: 700 }}>✓</span> No credit card required
              </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontWeight: 700 }}>✓</span> 14-day free trial
                </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontWeight: 700 }}>✓</span> Offline billing after menu loads; online payments need internet
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '2px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(127, 127, 127, 0.12)', border: '1px solid rgba(127, 127, 127, 0.25)', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 600, opacity: 0.95, whiteSpace: 'nowrap', cursor: 'default', userSelect: 'none' }}>
                Supported thermal printing
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(127, 127, 127, 0.12)', border: '1px solid rgba(127, 127, 127, 0.25)', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 600, opacity: 0.95, whiteSpace: 'nowrap', cursor: 'default', userSelect: 'none' }}>
                Android, tablet & Windows PC
              </span>
            </div>
          </div>
        </div>

        <figure className="hero-product" aria-labelledby="hero-product-caption">
          <div className="hero-product-glow" aria-hidden="true" />
          <div className="hero-device">
            <div className="hero-device-bar">
              <span className="hero-device-brand"><span aria-hidden="true" />zipla POS</span>
              <span className="hero-device-label">Built around your service workflow</span>
            </div>
            <img
              src="/screenshots/ss-new-order.webp"
              alt="Zipla POS new-order billing interface"
              width="1232"
              height="860"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
            />
          </div>
          <div className="hero-callout hero-callout--billing">
            <span className="hero-callout-icon"><BoltIcon /></span>
            <span><strong>Counter billing</strong><small>GST invoices and payment marking</small></span>
          </div>
          <div className="hero-callout hero-callout--kitchen">
            <span className="hero-callout-icon"><KitchenIcon /></span>
            <span><strong>Kitchen handoff</strong><small>Pro KDS for active order queues</small></span>
          </div>
          <figcaption id="hero-product-caption">Actual Zipla POS order billing and counter interface.</figcaption>
        </figure>
      </div>
    </section>
  )
}
