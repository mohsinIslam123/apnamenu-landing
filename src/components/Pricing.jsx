function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16a34a"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: '2px' }}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// Existing Landing claims, presented under the single Complete plan.
const FEATURES = [
  'Counter POS Billing',
  'GST and Non-GST Invoice Print',
  'Menu and Item Management',
  'Inventory with Low-Stock Alerts',
  'Cash, UPI and Card Payment Tracking',
  'Supported Thermal Printing',
  'Staff Roles',
  'Table QR Ordering',
  'Kitchen Display System (KDS)',
  'Bluetooth KOT Auto-Print',
  'Sales Analytics and Day-Close Reports'
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="section-head" style={{ marginBottom: '2.5rem' }}>
        <span className="eyebrow">Pricing</span>
        <h2 id="pricing-title">One complete plan for your service workflow</h2>
        <p style={{ color: 'inherit', fontWeight: 600, fontSize: '1.02rem', lineHeight: '1.6', margin: '0 auto' }}>
          <strong>Complete restaurant billing and ordering software for growing restaurants, cafes, bakeries, QSRs and dhabas.</strong>
        </p>
        <p style={{ marginTop: '0.6rem', color: 'inherit', fontWeight: 500, fontSize: '0.92rem' }}>
          ₹4,999/year or ₹11,999 for a 3-year prepaid term. Try it free for 14 days with no credit card required.
        </p>
      </div>

      <div className="pricing-grid">
        <div className="price-card popular" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
            <div>
              <span className="popular-tag">COMPLETE PLAN</span>
              <h3 className="price-plan" style={{ margin: 0, fontWeight: 800 }}>Complete plan</h3>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', color: 'inherit', opacity: 0.9, textAlign: 'right' }}>
              BILLING &amp; ORDERING WORKFLOW
            </span>
          </div>

          <div className="price-amt" style={{ marginTop: '0.75rem', fontWeight: 800 }}>
            ₹4,999<span>/year</span>
          </div>

          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'inherit', marginTop: '0.2rem' }}>
            ₹11,999 for 3 years prepaid
          </div>

          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'inherit', marginTop: '0.35rem', marginBottom: '0.75rem' }}>
            14-day free trial • No credit card required
          </div>

          <ul className="price-list" style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
            {FEATURES.map((feature) => (
              <li
                key={feature}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'inherit',
                  marginBottom: '0.75rem'
                }}
              >
                <Check />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
            <div style={{ display: 'grid', gap: '0.45rem', marginBottom: '1.25rem', fontSize: '0.88rem', lineHeight: '1.55' }}>
              <div><strong>Guided online setup/help included</strong></div>
              <div>On-site setup: ₹2,000 one-time</div>
              <div>Field first-year package: ₹6,999</div>
              <div>Field 3-year package: ₹13,999</div>
            </div>
            <a
              className="btn-cta"
              href="https://app.zipla.in/register"
              aria-label="Start a 14-day free trial of the Zipla POS Complete plan"
              style={{
                display: 'block',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '0.95rem',
                borderRadius: '8px',
                padding: '0.7rem 1rem'
              }}
            >
              Start 14-Day Free Trial
            </a>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'inherit', textAlign: 'center', marginTop: '0.5rem' }}>
              No credit card required
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '2.5rem',
          padding: '1.25rem 1.5rem',
          borderRadius: '12px',
          border: '1.5px solid rgba(127, 127, 127, 0.35)',
          backgroundColor: 'rgba(127, 127, 127, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0.75rem',
          color: 'inherit',
          maxWidth: '820px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxSizing: 'border-box'
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: '1.02rem', color: 'inherit' }}>
            Supported setup options
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'inherit', marginTop: '0.25rem' }}>
            Use supported Android, tablet, and Windows PC setups with compatible thermal printers.
          </div>
        </div>

        <a
          href="#demo"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.55rem 1.15rem',
            borderRadius: '6px',
            border: '1.5px solid rgba(127, 127, 127, 0.45)',
            marginTop: '0.25rem'
          }}
        >
          Prefer a guided setup? Book a live demo &rarr;
        </a>
      </div>
    </section>
  )
}
