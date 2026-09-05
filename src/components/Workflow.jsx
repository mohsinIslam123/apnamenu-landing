const WORKFLOWS = [
  {
    id: 'counter-billing',
    title: 'Counter POS Billing',
    plan: 'Starter & Pro',
    summary: 'Build the customer order, record the payment mode and create the GST invoice from the counter.',
    illustration: '/workflows/counter-billing-workflow.webp',
    illustrationAlt: 'Illustrative counter POS billing workflow from menu selection to payment and customer bill',
    illustrationWidth: 1200,
    illustrationHeight: 900,
    screenshots: [
      {
        src: '/screenshots/ss-new-order.webp',
        alt: 'Actual Zipla POS new-order screen for counter billing',
        width: 1232,
        height: 860,
        caption: 'Actual Zipla POS counter billing screen.',
      },
    ],
    steps: [
      ['Build the order', 'Select customer items from the counter screen.'],
      ['Choose payment', 'Record cash, UPI, or card payment for the bill.'],
      ['Print GST invoice', 'Generate the bill with configured tax rules.'],
      ['Complete checkout', 'Hand over printed slip or share digital invoice.'],
    ],
  },
  {
    id: 'qr-ordering',
    title: 'Table QR Ordering',
    plan: 'Pro',
    summary: 'Diners can scan a table QR code, view the menu on their phone and place a table order.',
    illustration: '/workflows/qr-ordering-workflow.webp',
    illustrationAlt: 'Illustrative QR table ordering workflow from scan to menu selection and kitchen handoff',
    illustrationWidth: 1200,
    illustrationHeight: 900,
    screenshots: [
      {
        src: '/screenshots/ss-customer-menu.webp',
        alt: 'Actual Zipla POS customer menu screen used for QR ordering',
        width: 1232,
        height: 860,
        caption: 'Actual Zipla POS customer-menu screen.',
      },
      {
        src: '/screenshots/ss-kds.webp',
        alt: 'Actual Zipla POS Kitchen Display System screen for active kitchen orders',
        width: 1232,
        height: 860,
        caption: 'Actual Pro Kitchen Display System screen.',
      },
    ],
    steps: [
      ['Scan table QR', 'Diner opens digital menu from table code.'],
      ['Pick menu items', 'Guests customize and select food items on phone.'],
      ['Place table order', 'Order instantly routes into active billing system.'],
      ['Live KDS handoff', 'Kitchen receives tickets on display without delays.'],
    ],
  },
  {
    id: 'ai-menu-scan',
    title: 'AI Menu Scan',
    plan: 'Starter & Pro',
    summary: 'Use a menu photo, review the detected items, then import the items you approve.',
    illustration: '/workflows/ai-menu-scan-workflow-v2.webp',
    illustrationAlt: 'Illustrative four-step AI menu scan workflow with visible food items, item review and a live menu',
    illustrationWidth: 1439,
    illustrationHeight: 810,
    screenshots: [
      {
        src: '/workflows/ai-menu-review-screen.webp',
        alt: 'Actual Zipla POS menu review screen showing detected menu items before import',
        width: 867,
        height: 1000,
        caption: 'Actual Zipla POS menu-review screen.',
      },
    ],
    steps: [
      ['Upload menu photo', 'Take a quick photo of paper menu or board.'],
      ['AI item extraction', 'System recognizes dishes, prices, and categories.'],
      ['Review & edit', 'Adjust pricing, taxes, or food tags in one view.'],
      ['Publish to menu', 'Import approved items straight to live POS billing.'],
    ],
  },
  {
    id: 'day-close-analytics',
    title: 'Day-Close and Analytics',
    plan: 'Pro',
    summary: 'Review completed orders, payment split, voids and sales information after service.',
    illustration: '/workflows/day-close-workflow.webp',
    illustrationAlt: 'Illustrative day-close workflow from completed orders to payment review and business reporting',
    illustrationWidth: 1200,
    illustrationHeight: 675,
    screenshots: [
      {
        src: '/workflows/day-close-report-screen.webp',
        alt: 'Actual Zipla POS day-close report showing orders, revenue, payments, voids and expected cash',
        width: 994,
        height: 631,
        caption: 'Actual Zipla POS day-close report.',
      },
      {
        src: '/workflows/analytics-dashboard-screen.webp',
        alt: 'Actual Zipla POS analytics dashboard with sales metrics and payment split',
        width: 1100,
        height: 694,
        caption: 'Actual Zipla POS analytics dashboard.',
      },
    ],
    steps: [
      ['Settle all bills', 'Close remaining active customer table sessions.'],
      ['Verify splits', 'Reconcile collected cash, UPI, and card totals.'],
      ['Review voids', 'Audit canceled items and discounts for leakage.'],
      ['Export daily report', 'Access complete sales performance from owner view.'],
    ],
  },
]

export default function Workflow() {
  return (
    <section className="workflow" id="how-it-works" aria-labelledby="workflow-title">
      <style>{`
        .workflow {
          padding: 4.5rem 1.25rem 4rem;
          max-width: 1180px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .workflow-head {
          text-align: center;
          max-width: 840px;
          margin: 0 auto 3.25rem;
        }
        .workflow-eyebrow {
          color: #b45309;
          font-weight: 850;
          font-size: 0.82rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        [data-theme=dark] .workflow-eyebrow {
          color: #fbbf24;
        }
        .workflow-title-text {
          font-weight: 850;
          font-size: clamp(1.85rem, 3.2vw, 2.45rem);
          line-height: 1.22;
          margin: 0 0 0.85rem;
          color: #09090b;
        }
        [data-theme=dark] .workflow-title-text {
          color: #f4f4f5;
        }
        .workflow-desc {
          color: #27272a;
          font-weight: 600;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0 auto;
        }
        [data-theme=dark] .workflow-desc {
          color: #d4d4d8;
        }
        .workflow-showcase {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .workflow-panel {
          background-color: #ffffff;
          border: 1.5px solid #e4e4e7;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .workflow-panel[open] {
          border-color: #d97706;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
        }
        [data-theme=dark] .workflow-panel {
          background-color: #18181b;
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        [data-theme=dark] .workflow-panel[open] {
          border-color: #fbbf24;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }
        .workflow-summary-btn {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.35rem 1.75rem;
          gap: 1.25rem;
          user-select: none;
        }
        .workflow-summary-btn::-webkit-details-marker,
        .workflow-summary-btn::marker {
          display: none;
        }
        .workflow-summary-btn:focus-visible {
          outline: 2px solid #d97706;
          outline-offset: -2px;
        }
        .workflow-summary-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex: 1;
        }
        .workflow-panel-number {
          font-size: 1.4rem;
          font-weight: 850;
          font-variant-numeric: tabular-nums;
          color: #71717a;
          min-width: 38px;
        }
        .workflow-panel[open] .workflow-panel-number {
          color: #b45309;
        }
        [data-theme=dark] .workflow-panel-number {
          color: #a1a1aa;
        }
        [data-theme=dark] .workflow-panel[open] .workflow-panel-number {
          color: #fbbf24;
        }
        .workflow-panel-copy {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .workflow-panel-copy strong {
          font-size: 1.2rem;
          font-weight: 850;
          color: #09090b;
        }
        [data-theme=dark] .workflow-panel-copy strong {
          color: #f4f4f5;
        }
        .workflow-panel-copy small {
          font-size: 0.94rem;
          font-weight: 550;
          color: #52525b;
          line-height: 1.45;
        }
        [data-theme=dark] .workflow-panel-copy small {
          color: #a1a1aa;
        }
        .workflow-summary-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }
        .workflow-plan-badge {
          font-size: 0.74rem;
          font-weight: 850;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 9999px;
        }
        .workflow-plan-badge--pro {
          color: #92400e;
          background-color: #fef3c7;
          border: 1.5px solid #fcd34d;
        }
        [data-theme=dark] .workflow-plan-badge--pro {
          color: #fbbf24;
          background-color: rgba(245, 158, 11, 0.18);
          border-color: rgba(251, 191, 36, 0.4);
        }
        .workflow-plan-badge--starter {
          color: #18181b;
          background-color: #f4f4f5;
          border: 1.5px solid #d4d4d8;
        }
        [data-theme=dark] .workflow-plan-badge--starter {
          color: #f4f4f5;
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .workflow-toggle-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(127, 127, 127, 0.1);
          border: 1.5px solid rgba(127, 127, 127, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 700;
          color: inherit;
          transition: transform 0.2s ease;
        }
        .workflow-panel[open] .workflow-toggle-icon {
          transform: rotate(45deg);
        }
        .workflow-panel-content {
          padding: 1.75rem 2rem 2.25rem;
          border-top: 1.5px solid #e4e4e7;
          background-color: #fafafa;
        }
        [data-theme=dark] .workflow-panel-content {
          border-top-color: rgba(255, 255, 255, 0.08);
          background-color: #131316;
        }
        .workflow-visual-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 1.75rem;
          align-items: start;
        }
        @media (max-width: 960px) {
          .workflow-visual-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        .workflow-figure {
          margin: 0;
          border-radius: 14px;
          border: 1.5px solid #e4e4e7;
          overflow: hidden;
          background-color: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        [data-theme=dark] .workflow-figure {
          border-color: rgba(255, 255, 255, 0.1);
          background-color: #18181b;
        }
        .workflow-figure figcaption {
          padding: 0.85rem 1.25rem;
          border-bottom: 1.5px solid #e4e4e7;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #71717a;
          background-color: #f4f4f5;
        }
        [data-theme=dark] .workflow-figure figcaption {
          border-bottom-color: rgba(255, 255, 255, 0.08);
          background-color: rgba(255, 255, 255, 0.04);
          color: #a1a1aa;
        }
        .workflow-figure figcaption strong {
          color: #09090b;
        }
        [data-theme=dark] .workflow-figure figcaption strong {
          color: #f4f4f5;
        }
        .workflow-figure img {
          width: 100%;
          height: auto;
          display: block;
        }
        .workflow-steps-container {
          margin-top: 1.75rem;
          padding: 1.5rem;
          border-radius: 14px;
          background-color: #ffffff;
          border: 1.5px solid #e4e4e7;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }
        [data-theme=dark] .workflow-steps-container {
          background-color: #18181b;
          border-color: rgba(255, 255, 255, 0.1);
        }
        .workflow-figure-steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 960px) {
          .workflow-figure-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .workflow-figure-steps {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        .workflow-figure-steps li {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .workflow-step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: #fef3c7;
          color: #92400e;
          border: 1.5px solid #fcd34d;
          font-size: 0.82rem;
          font-weight: 850;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        [data-theme=dark] .workflow-step-num {
          background-color: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.35);
        }
        .workflow-step-text strong {
          display: block;
          font-size: 0.94rem;
          font-weight: 850;
          color: #09090b;
        }
        [data-theme=dark] .workflow-step-text strong {
          color: #f4f4f5;
        }
        .workflow-step-text p {
          margin: 0.2rem 0 0;
          font-size: 0.86rem;
          font-weight: 550;
          color: #3f3f46;
          line-height: 1.45;
        }
        [data-theme=dark] .workflow-step-text p {
          color: #d4d4d8;
        }
        .workflow-proof-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .workflow-bridge-cta {
          margin-top: 2.5rem;
          text-align: center;
        }
        .workflow-bridge-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.95rem;
          font-weight: 750;
          color: #b45309;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .workflow-bridge-link:hover {
          color: #92400e;
        }
        [data-theme=dark] .workflow-bridge-link {
          color: #fbbf24;
        }
        [data-theme=dark] .workflow-bridge-link:hover {
          color: #fef08a;
        }
        @media (max-width: 640px) {
          .workflow-summary-btn {
            padding: 1.15rem 1.25rem;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .workflow-summary-left {
            width: 100%;
          }
          .workflow-summary-right {
            width: 100%;
            justify-content: space-between;
            padding-left: 3.1rem;
          }
        }
      `}</style>

      <div className="workflow-head">
        <span className="workflow-eyebrow">HOW IT WORKS</span>
        <h2 id="workflow-title" className="workflow-title-text">
          How does restaurant POS billing work? (Step-by-Step Workflow)
        </h2>
        <p className="workflow-desc">
          See the actual operating steps. Each step pairs the simplified workflow diagram with live Zipla POS software screens so you know exactly how orders flow before starting your trial.
        </p>
      </div>

      <div className="workflow-showcase">
        {WORKFLOWS.map((workflow, index) => {
          const isProOnly = workflow.plan === 'Pro'
          return (
            <details className="workflow-panel" key={workflow.id} name="workflow-accordion" open={index === 0}>
              <summary className="workflow-summary-btn">
                <div className="workflow-summary-left">
                  <span className="workflow-panel-number">0{index + 1}</span>
                  <div className="workflow-panel-copy">
                    <strong>{workflow.title}</strong>
                    <small>{workflow.summary}</small>
                  </div>
                </div>
                <div className="workflow-summary-right">
                  <span className={isProOnly ? 'workflow-plan-badge workflow-plan-badge--pro' : 'workflow-plan-badge workflow-plan-badge--starter'}>
                    {workflow.plan}
                  </span>
                  <span className="workflow-toggle-icon" aria-hidden="true">+</span>
                </div>
              </summary>

              <div className="workflow-panel-content">
                <div className="workflow-visual-grid">
                  <figure className="workflow-figure workflow-figure--illustration">
                    <figcaption><span>ILLUSTRATIVE WORKFLOW</span><strong>{workflow.title}</strong></figcaption>
                    <img
                      src={workflow.illustration}
                      alt={workflow.illustrationAlt}
                      width={workflow.illustrationWidth}
                      height={workflow.illustrationHeight}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>

                  <div className={'workflow-proof-stack workflow-proof-stack--' + workflow.screenshots.length}>
                    {workflow.screenshots.map((screenshot) => (
                      <figure className="workflow-figure workflow-figure--actual" key={screenshot.src}>
                        <figcaption><span>Actual Zipla POS screen</span><strong>{screenshot.caption}</strong></figcaption>
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={screenshot.width}
                          height={screenshot.height}
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    ))}
                  </div>
                </div>

                <div className="workflow-steps-container">
                  <ol className="workflow-figure-steps" aria-label={workflow.title + ' sequential steps'}>
                    {workflow.steps.map(([title, body], stepIndex) => (
                      <li key={title}>
                        <span className="workflow-step-num">{stepIndex + 1}</span>
                        <div className="workflow-step-text">
                          <strong>{title}</strong>
                          <p>{body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </details>
          )
        })}
      </div>

      <div className="workflow-bridge-cta">
        <a href="#demo-form" className="workflow-bridge-link">
          Prefer a live walkthrough on your phone or counter? Book a 5-minute WhatsApp demo &rarr;
        </a>
      </div>
    </section>
  )
}
