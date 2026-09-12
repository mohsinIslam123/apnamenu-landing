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

// Existing Landing claims, grouped under the single Complete plan.
const FEATURE_GROUPS = [
  {
    title: 'Billing & payments',
    features: [
      'Counter POS Billing',
      'GST/non-GST invoice printing with configured GST rates',
      'Payment tracking: cash, UPI and card'
    ]
  },
  {
    title: 'Ordering & kitchen',
    features: [
      'Table QR Ordering',
      'Customer QR Home Ordering',
      'Live Order Status Tracking',
      'Cashier-to-Kitchen Order Handoff',
      'Kitchen Display System (KDS)',
      'Bluetooth KOT Auto-Print',
      'WhatsApp Bill Sharing'
    ]
  },
  {
    title: 'Daily operations',
    features: [
      'Menu and Item Management',
      'Inventory with Low-Stock Alerts',
      'Staff Roles',
      'Sales Analytics and Day-Close Reports',
      'Supported Thermal Printing'
    ]
  }
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
      </div>

      <div className="pricing-grid">
        <div className="price-card popular">
          <div className="price-card-header">
            <div>
              <span className="popular-tag">COMPLETE PLAN</span>
              <h3 className="price-plan">Complete plan</h3>
            </div>
            <span className="price-card-label">
              BILLING &amp; ORDERING WORKFLOW
            </span>
          </div>

          <div className="price-amt">
            ₹4,999<span>/year</span>
          </div>

          <div className="price-term">
            <strong>Same Complete plan</strong> — ₹11,999 for 3 years prepaid
          </div>

          <div className="price-trial">
            14-day free trial • No credit card required
          </div>

          <div className="price-groups">
            {FEATURE_GROUPS.map((group) => (
              <div className="price-group" key={group.title}>
                <h4>{group.title}</h4>
                <ul className="price-list">
                  {group.features.map((feature) => (
                    <li key={feature}>
                      <Check />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="price-conditions" aria-label="Payment and connectivity conditions">
            <span>After the menu is loaded, billing can continue offline.</span>
            <span>Online payments require your own Razorpay account and internet.</span>
          </div>

          <div className="price-support">
            <div className="price-online-support">
              <strong>Guided online setup and online training included</strong>
            </div>
            <aside className="price-onsite-note" aria-label="Optional offline onboarding">
              <strong>Optional offline onboarding</strong>
              <span>+₹1,999 one-time only when our team visits for complete setup and 2-hour staff training. The visit fee is not recurring; regular plan renewal pricing applies.</span>
            </aside>
          </div>

          <div className="price-actions">
            <a
              className="btn-cta"
              href="https://app.zipla.in/register"
              aria-label="Start a 14-day free trial of the Zipla POS Complete plan"
            >
              Start 14-Day Free Trial
            </a>
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
