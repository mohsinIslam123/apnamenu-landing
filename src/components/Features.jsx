function PosIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="6" y1="8" x2="10" y2="8" />
    </svg>
  )
}

function KdsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="6" y1="8" x2="10" y2="8" />
    </svg>
  )
}

function QrIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="3" height="3" />
      <rect x="18" y="18" width="3" height="3" />
    </svg>
  )
}

function HardwareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3" />
    </svg>
  )
}

function CheckGreen() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const CAPABILITIES = [
  { icon: PosIcon, label: 'Counter checkout + GST' },
  { icon: KdsIcon, label: 'Kitchen order queue' },
  { icon: QrIcon, label: 'Table QR ordering' },
  { icon: HardwareIcon, label: 'Supported bill printing' }
]

export default function QuickAnswer() {
  return (
    <section className="qa-section" id="features" aria-labelledby="features-title">
      <style>{`
        .qa-section {
          padding: 3.5rem 1.25rem 4.5rem;
          max-width: 1180px;
          margin: 0 auto;
        }
        .qa-caps-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
        }
        .qa-cap-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.6rem 1.15rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 700;
          background-color: #ffffff;
          border: 1.5px solid #e4e4e7;
          color: #18181b;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        [data-theme=dark] .qa-cap-pill {
          background-color: #18181b;
          border-color: rgba(255, 255, 255, 0.12);
          color: #f4f4f5;
        }
        .qa-cap-pill-icon {
          color: #b45309;
          display: flex;
          align-items: center;
        }
        [data-theme=dark] .qa-cap-pill-icon {
          color: #fbbf24;
        }
        .qa-grid {
          display: grid;
          grid-template-columns: 1fr 1.22fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 960px) {
          .qa-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }
        }
        .qa-left-eyebrow {
          color: #b45309;
          font-weight: 850;
          font-size: 0.82rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        [data-theme=dark] .qa-left-eyebrow {
          color: #fbbf24;
        }
        .qa-left-title {
          font-family: var(--display);
          font-weight: 850;
          font-size: clamp(2rem, 3.2vw, 2.5rem);
          line-height: 1.18;
          color: #09090b;
          margin: 0 0 1.25rem;
        }
        [data-theme=dark] .qa-left-title {
          color: #f4f4f5;
        }
        .qa-def-p1 {
          font-size: 1.05rem;
          line-height: 1.6;
          font-weight: 700;
          color: #18181b;
          margin-bottom: 0.85rem;
        }
        [data-theme=dark] .qa-def-p1 {
          color: #f4f4f5;
        }
        .qa-def-p2 {
          font-size: 0.96rem;
          line-height: 1.62;
          font-weight: 600;
          color: #3f3f46;
          margin-bottom: 1.75rem;
        }
        [data-theme=dark] .qa-def-p2 {
          color: #d4d4d8;
        }
        .qa-key-points {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-left: 0;
          list-style: none;
          margin: 0;
        }
        .qa-key-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.94rem;
          font-weight: 700;
          color: #18181b;
          line-height: 1.5;
        }
        [data-theme=dark] .qa-key-item {
          color: #f4f4f5;
        }
        .qa-right-card {
          background-color: #ffffff;
          border: 1.5px solid #e4e4e7;
          border-radius: 18px;
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
        }
        [data-theme=dark] .qa-right-card {
          background-color: #18181b;
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
        }
        .qa-card-h3 {
          font-family: var(--display);
          font-size: 1.35rem;
          font-weight: 850;
          color: #09090b;
          margin: 0 0 0.45rem;
          line-height: 1.3;
        }
        [data-theme=dark] .qa-card-h3 {
          color: #f4f4f5;
        }
        .qa-card-sub {
          font-size: 0.95rem;
          font-weight: 600;
          color: #3f3f46;
          margin: 0 0 1.5rem;
          line-height: 1.55;
        }
        [data-theme=dark] .qa-card-sub {
          color: #a1a1aa;
        }
        .qa-table-wrap {
          border: 1.5px solid #e4e4e7;
          border-radius: 12px;
          overflow: hidden;
        }
        [data-theme=dark] .qa-table-wrap {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .qa-table-header {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          background-color: #f4efe6;
          padding: 0.75rem 1.15rem;
          font-size: 0.76rem;
          font-weight: 850;
          letter-spacing: 0.8px;
          color: #78350f;
          text-transform: uppercase;
          border-bottom: 1.5px solid #e4e4e7;
        }
        [data-theme=dark] .qa-table-header {
          background-color: rgba(255, 255, 255, 0.06);
          color: #fbbf24;
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }
        .qa-table-row {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          padding: 1.15rem;
          gap: 1.15rem;
          border-bottom: 1px solid #e4e4e7;
          align-items: start;
        }
        .qa-table-row:last-child {
          border-bottom: none;
        }
        [data-theme=dark] .qa-table-row {
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }
        .qa-need-col {
          font-size: 0.96rem;
          font-weight: 800;
          color: #09090b;
          line-height: 1.4;
        }
        [data-theme=dark] .qa-need-col {
          color: #f4f4f5;
        }
        .qa-flow-col {
          font-size: 0.94rem;
          font-weight: 600;
          color: #18181b;
          line-height: 1.6;
        }
        [data-theme=dark] .qa-flow-col {
          color: #e4e4e7;
        }
        .qa-badge-complete {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 850;
          padding: 2px 7px;
          border-radius: 6px;
          background-color: #f4f4f5;
          color: #18181b;
          border: 1px solid #d4d4d8;
          margin-right: 0.35rem;
        }
        [data-theme=dark] .qa-badge-complete {
          background-color: rgba(255, 255, 255, 0.1);
          color: #f4f4f5;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .qa-badge-complete--accent {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 850;
          padding: 2px 7px;
          border-radius: 6px;
          background-color: #fef3c7;
          color: #92400e;
          border: 1px solid #fcd34d;
          margin-right: 0.35rem;
        }
        [data-theme=dark] .qa-badge-complete--accent {
          background-color: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.35);
        }
        .qa-link {
          color: #b45309;
          font-weight: 750;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .qa-link:hover {
          color: #92400e;
        }
        [data-theme=dark] .qa-link {
          color: #fbbf24;
        }
        [data-theme=dark] .qa-link:hover {
          color: #fef08a;
        }
        @media (max-width: 620px) {
          .qa-right-card {
            padding: 1.25rem;
          }
          .qa-table-header,
          .qa-table-row {
            grid-template-columns: 1fr;
          }
          .qa-table-header {
            gap: 0.3rem;
            padding: 0.85rem 1rem;
          }
          .qa-table-row {
            gap: 0.5rem;
            padding: 1rem;
          }
        }
      `}</style>

      {/* TOP CAPABILITIES STRIP */}
      <div className="qa-caps-bar">
        {CAPABILITIES.map((c) => {
          const Icon = c.icon
          return (
            <div key={c.label} className="qa-cap-pill">
              <span className="qa-cap-pill-icon"><Icon /></span>
              <span>{c.label}</span>
            </div>
          )
        })}
      </div>

      <div className="qa-grid">
        {/* LEFT COLUMN: FEATURE SUMMARY & TRUST POINTS */}
        <div>
          <span className="qa-left-eyebrow">FEATURES</span>
          <h2 id="features-title" className="qa-left-title">
            What does each Zipla POS workflow help you run?
          </h2>
          <p className="qa-def-p1">
            Choose the workflow that matches your outlet: counter checkout, table service, kitchen handoff, or weight- and piece-based billing.
          </p>
          <p className="qa-def-p2">
            Each option below explains the operational need it supports and the plan to consider.
          </p>

          <ul className="qa-key-points">
            <li className="qa-key-item">
              <CheckGreen />
              <span><strong>Offline billing:</strong> After the menu loads, bills can be created without internet; UPI and online payments need a connection</span>
            </li>
            <li className="qa-key-item">
              <CheckGreen />
              <span><strong>Supported setup:</strong> Use an Android phone, tablet, or Windows PC with compatible thermal printing</span>
            </li>
            <li className="qa-key-item">
              <CheckGreen />
              <span><strong>Complete plan:</strong> ₹4,999/year or ₹11,999 for 3 years prepaid, covering the listed counter, table and kitchen workflows</span>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN: WORKFLOW COMPARISON TABLE */}
        <div className="qa-right-card">
          <h3 className="qa-card-h3">Which workflow fits your current service?</h3>
          <p className="qa-card-sub">
            Choose a plan around the operational handoff your team needs to manage.
          </p>

          <div className="qa-table-wrap">
            <div className="qa-table-header">
              <span>Operational Need</span>
              <span>Relevant Zipla POS Workflow</span>
            </div>

            <div className="qa-table-row">
              <div className="qa-need-col">Counter rush: bill, payment marking and GST invoice in one checkout</div>
              <div className="qa-flow-col">
                The <span className="qa-badge-complete">Complete plan</span> covers counter POS billing, GST invoices and payment-mode tracking.{' '}
                <a href="#pricing" className="qa-link">See plan pricing &rarr;</a>
              </div>
            </div>

            <div className="qa-table-row">
              <div className="qa-need-col">Table orders that need a clear kitchen handoff</div>
              <div className="qa-flow-col">
                It also covers Kitchen Display System (KDS), table QR ordering, Bluetooth KOT auto-print, sales analytics and day-close reports.
              </div>
            </div>

            <div className="qa-table-row">
              <div className="qa-need-col">Weight-, piece- or fixed-price items at the same counter</div>
              <div className="qa-flow-col">
                Use dedicated workflows for{' '}
                <a href="/bakery-billing-software/" className="qa-link">Bakery</a> or{' '}
                <a href="/sweet-shop-billing/" className="qa-link">Sweet Shop</a>{' '}
                for items sold by weight, piece, or fixed box price.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
