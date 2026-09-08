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

const S = [
  'Counter POS Billing',
  'GST and Non-GST Invoice Print',
  'Menu and Item Management',
  'Inventory with Low-Stock Alerts',
  'Cash, UPI and Card Payment Tracking',
  'Supported Thermal Printing',
  'Staff Roles'
]

const P = [
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
        <h2 id="pricing-title">Choose a plan around your service workflow</h2>
        <p style={{ color: 'inherit', fontWeight: 600, fontSize: '1.02rem', lineHeight: '1.6', margin: '0 auto' }}>
          <strong>Simple annual plans:</strong> Starter is ₹2,999/year for counter billing. Pro is ₹4,999/year when your service also needs table QR ordering and a kitchen workflow.
        </p>
        <p style={{ marginTop: '0.6rem', color: 'inherit', fontWeight: 500, fontSize: '0.92rem' }}>
          Try the relevant workflow for 14 days with no card required.
        </p>
      </div>

      <div className="pricing-grid">
        {/* STARTER PLAN */}
        <div className="price-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 className="price-plan" style={{ margin: 0, fontWeight: 800 }}>Starter</h3>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', color: 'inherit', opacity: 0.9 }}>
              COUNTER-LED SERVICE
            </span>
          </div>

          <div className="price-amt" style={{ marginTop: '0.75rem', fontWeight: 800 }}>
            ₹2,999<span>/year</span>
          </div>

          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'inherit', marginTop: '0.2rem' }}>
            (₹250/month, billed annually)
          </div>

          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'inherit', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
            Annual pricing • Zero Setup Fee
          </div>

          <ul className="price-list" style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
            {S.map((feature) => (
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
            <a
              className="btn-ghost"
              href="https://app.zipla.in/register"
              aria-label="Start a 14-day free trial of Zipla POS Starter"
              style={{
                display: 'block',
                textAlign: 'center',
                border: '2px solid currentColor',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'inherit',
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

        {/* PRO PLAN */}
        <div className="price-card popular" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <span className="popular-tag">MOST POPULAR</span>
              <h3 className="price-plan" style={{ margin: 0, fontWeight: 800 }}>Pro</h3>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', color: 'inherit', opacity: 0.9 }}>
              TABLES &amp; KITCHEN WORKFLOW
            </span>
          </div>

          <div className="price-amt" style={{ marginTop: '0.75rem', fontWeight: 800 }}>
            ₹4,999<span>/year</span>
          </div>

          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'inherit', marginTop: '0.2rem' }}>
            (₹417/month, billed annually)
          </div>

          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'inherit', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
            Annual pricing • Zero Setup Fee
          </div>

          <ul className="price-list" style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
            {/* ANCHOR ROW FOR PRO */}
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.94rem',
                fontWeight: 800,
                color: 'inherit',
                marginBottom: '0.75rem'
              }}
            >
              <Check />
              <span>Everything in Starter Plan, plus:</span>
            </li>
            {P.map((feature) => (
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
            <a
              className="btn-cta"
              href="https://app.zipla.in/register"
              aria-label="Start a 14-day free trial of Zipla POS Pro"
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

      {/* HARDWARE FREEDOM BANNER */}
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
