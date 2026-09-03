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
  'Fast Counter POS Billing',
  'GST & Non-GST Invoice Print',
  'Inventory & Low Stock Alerts',
  'Cash · UPI · Card Split Payments',
  'Thermal Printer Support (58mm / 80mm)',
  'Staff Roles (Owner & Cashier Logins)'
]

const P = [
  'Table QR Ordering (Customer Self-Order)',
  'Live Kitchen Display Screen (KDS)',
  'Bluetooth & USB KOT Auto-Print',
  'AI Menu Scan & Bulk Item Setup',
  'Detailed Daily Sales & Tax Reports'
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="section-head" style={{ marginBottom: '2.5rem' }}>
        <span className="eyebrow">Pricing</span>
        <h2 id="pricing-title">How much does Zipla POS cost?</h2>
        <p style={{ color: 'inherit', fontWeight: 600, fontSize: '1.02rem', lineHeight: '1.6', margin: '0 auto' }}>
          <strong>Flat, Honest Pricing with Zero Commissions:</strong> No per-order cuts, no platform fees, and zero hardware lock-in. Purpose-built for Indian restaurants, cafés, bakeries, QSRs, sweet shops, and dhabas.
        </p>
        <p style={{ marginTop: '0.6rem', color: 'inherit', fontWeight: 500, fontSize: '0.92rem' }}>
          All plans include full features during your 14-day free trial. Setup takes under 5 minutes on your existing devices.
        </p>
      </div>

      <div className="pricing-grid">
        {/* STARTER PLAN */}
        <div className="price-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 className="price-plan" style={{ margin: 0, fontWeight: 800 }}>Starter</h3>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', color: 'inherit', opacity: 0.9 }}>
              COUNTER &amp; TAKEAWAY
            </span>
          </div>

          <div className="price-amt" style={{ marginTop: '0.75rem', fontWeight: 800 }}>
            ₹2,999<span>/year</span>
          </div>

          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'inherit', marginTop: '0.2rem' }}>
            (Just ₹250 / month)
          </div>

          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'inherit', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
            Flat Price • Zero Setup Fee • No Hidden Taxes
          </div>

          {/* 3-YEAR SAVINGS BADGE */}
          <div
            style={{
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: '1.5px solid rgba(127, 127, 127, 0.35)',
              backgroundColor: 'rgba(127, 127, 127, 0.08)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'inherit',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}
          >
            <span><strong>3-Year Plan:</strong> ₹5,999</span>
            <span style={{ color: '#16a34a', fontWeight: 800, fontSize: '0.78rem' }}>Save 33% (1 Yr Free)</span>
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
              No credit card required • Instant activation
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
              DINE-IN &amp; FULL SERVICE
            </span>
          </div>

          <div className="price-amt" style={{ marginTop: '0.75rem', fontWeight: 800 }}>
            ₹4,999<span>/year</span>
          </div>

          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'inherit', marginTop: '0.2rem' }}>
            (Just ~₹416 / month)
          </div>

          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'inherit', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
            Flat Price • Zero Setup Fee • No Hidden Taxes
          </div>

          {/* 3-YEAR SAVINGS BADGE */}
          <div
            style={{
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: '1.5px solid rgba(127, 127, 127, 0.4)',
              backgroundColor: 'rgba(127, 127, 127, 0.1)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'inherit',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}
          >
            <span><strong>3-Year Plan:</strong> ₹9,899</span>
            <span style={{ color: '#16a34a', fontWeight: 800, fontSize: '0.78rem' }}>Save 33% (1 Yr Free)</span>
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
              No credit card required • Instant activation
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
            Zero Proprietary Hardware Lock-In
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'inherit', marginTop: '0.25rem' }}>
            Use your existing Android phone, tablet, Windows PC, or 58mm/80mm Bluetooth &amp; USB thermal printers.
          </div>
        </div>

        <a
          href="#demo-form"
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
          Prefer a guided setup? Book a 5-minute live demo &rarr;
        </a>
      </div>
    </section>
  )
}