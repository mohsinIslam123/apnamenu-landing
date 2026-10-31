const WORKFLOWS = [
  {
    id: 'counter-billing',
    title: 'Counter POS Billing',
    plan: 'Complete plan',
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
    title: 'Table QR Ordering + Customer QR Home Ordering',
    plan: 'Complete plan',
    summary: 'Table QR Ordering is for diners in the outlet. Customer QR Home Ordering is for home orders and phone-based status tracking.',
    illustration: '/workflows/qr-ordering-workflow.webp',
    illustrationAlt: 'Illustrative QR ordering workflow from a table or home order to menu selection and kitchen handoff',
    illustrationWidth: 1200,
    illustrationHeight: 900,
    screenshots: [
      {
        src: '/screenshots/ss-kds.webp',
        alt: 'Actual Zipla POS Kitchen Display System screen for active kitchen orders',
        width: 1232,
        height: 860,
        caption: 'Actual Zipla POS Kitchen Display System screen.',
      },
    ],
    steps: [
      ['Choose the QR path', 'Use table QR in the outlet or Customer QR for a home order.'],
      ['Enter order details', 'For a home order, the customer adds their name, phone number and address.'],
      ['Place the order', 'The new order reaches the cashier for acceptance before kitchen handoff.'],
      ['Track the handoff', 'The customer can follow accepted, preparing and completed status on their phone.'],
    ],
  },
  {
    id: 'day-close-analytics',
    title: 'Day-Close and Analytics',
    plan: 'Complete plan',
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
    <section className="zh-wrap zh-sec" id="how-it-works" aria-labelledby="workflow-title">
      <div className="zh-wfl-head">
        <span className="zh-kicker">HOW IT WORKS</span>
        <h2 id="workflow-title" className="zh-h2">
          How does Zipla POS fit into a food-service workflow?
        </h2>
        <p className="zh-sec-sub">
          See how customer orders move from the counter, table or home to payment, kitchen handoff and daily review. Actual Zipla POS screens are marked; illustrative concepts are clearly labelled.
        </p>
      </div>

      <div className="zh-wfl-list">
        {WORKFLOWS.map((workflow, index) => {
          const isIllustrative = workflow.plan === 'Illustrative'
          return (
            <details className="zh-wfl" key={workflow.id} name="workflow-accordion" open={index === 0}>
              <summary>
                <div className="zh-wfl-l">
                  <span className="zh-wfl-n">0{index + 1}</span>
                  <div className="zh-wfl-copy">
                    <strong>{workflow.title}</strong>
                    <small>{workflow.summary}</small>
                  </div>
                </div>
                <div className="zh-wfl-r">
                  <span className="zh-badge">{workflow.plan}</span>
                  <span className="zh-plus" aria-hidden="true">+</span>
                </div>
              </summary>

              <div className="zh-wfl-body">
                <div className="zh-wfl-vis">
                  <figure className="zh-fig">
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

                  <div className="zh-wfl-proof">
                    {workflow.screenshots.map((screenshot) => (
                      <figure className="zh-fig" key={screenshot.src}>
                        <figcaption><span>{screenshot.label || (isIllustrative ? 'ILLUSTRATIVE CONCEPT' : 'Actual Zipla POS screen')}</span><strong>{screenshot.caption}</strong></figcaption>
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

                <ol className="zh-steps" aria-label={workflow.title + ' sequential steps'}>
                  {workflow.steps.map(([title, body], stepIndex) => (
                    <li key={title}>
                      <span className="zh-steps-n">{stepIndex + 1}</span>
                      <div>
                        <strong>{title}</strong>
                        <p>{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          )
        })}
      </div>

      <div className="zh-bridge">
        <a href="#demo">
          Book a WhatsApp demo for your own workflow &rarr;
        </a>
      </div>
    </section>
  )
}
