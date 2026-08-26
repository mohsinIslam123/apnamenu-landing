const WORKFLOWS = [
  {
    id: 'counter-billing',
    title: 'Counter POS Billing',
    plan: 'Starter and Pro',
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
      ['Build the order', 'Select the customer’s items from the counter billing screen.'],
      ['Mark the payment mode', 'Record cash, UPI or card payment for the bill.'],
      ['Create the GST invoice', 'Generate the customer bill with the configured tax workflow.'],
      ['Deliver the bill when needed', 'Use the available printing or bill-sharing workflow for the customer.'],
    ],
    proofNote: {
      kicker: 'What this workflow covers',
      title: 'Order, payment and GST invoice at the counter',
      body: 'Build the customer order, record the payment mode and create the GST invoice from the counter billing workflow.',
    },
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
      ['Scan the table QR', 'The diner opens the menu from the QR code at the table.'],
      ['Choose menu items', 'The diner selects items on their own phone.'],
      ['Place the table order', 'The order enters the restaurant ordering workflow.'],
      ['Use kitchen handoff when relevant', 'On Pro, use KDS to keep active kitchen orders visible.'],
    ],
  },
  {
    id: 'ai-menu-scan',
    title: 'AI Menu Scan',
    plan: 'Starter and Pro',
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
      ['Select a menu photo', 'Start with a photo of the menu you want to set up.'],
      ['Review detected items', 'Check the items before adding them to your live menu.'],
      ['Edit the details you need', 'Review category, item name, price and food type before import.'],
      ['Import approved items', 'Add the reviewed items to the menu you will use for billing or ordering.'],
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
      ['Complete the day’s orders', 'Close the customer orders recorded during service.'],
      ['Review payment split', 'Check the recorded cash, UPI and card amounts.'],
      ['Check operational details', 'Review voids and expected cash in the day-close report.'],
      ['Use the owner view', 'Review sales information after the operating day.'],
    ],
  },
]

export default function Workflow() {
  return (
    <section className="workflow" id="how-it-works" aria-labelledby="workflow-title">
      <div className="section-head">
        <span className="eyebrow">How Zipla works</span>
        <h2 id="workflow-title">See the restaurant workflow before you start a trial</h2>
        <p>These illustrations explain the operating steps. Each one is paired with an actual Zipla POS screen so you can distinguish the simplified workflow from the product interface.</p>
      </div>

      <div className="workflow-showcase">
        {WORKFLOWS.map((workflow, index) => (
          <details className="workflow-panel" key={workflow.id} open={index === 0}>
            <summary>
              <span className="workflow-panel-number">0{index + 1}</span>
              <span className="workflow-panel-copy">
                <strong>{workflow.title}</strong>
                <small>{workflow.summary}</small>
              </span>
              <span className="workflow-plan">{workflow.plan}</span>
              <span className="workflow-panel-toggle" aria-hidden="true">+</span>
            </summary>

            <div className="workflow-panel-content">
              <div className="workflow-visual-grid">
                <figure className="workflow-figure workflow-figure--illustration">
                  <figcaption><span>Illustrative workflow diagram (AI-generated)</span><strong>{workflow.title}</strong></figcaption>
                  <img
                    src={workflow.illustration}
                    alt={workflow.illustrationAlt}
                    width={workflow.illustrationWidth}
                    height={workflow.illustrationHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <ol className="workflow-figure-steps" aria-label={workflow.title + ' steps'}>
                    {workflow.steps.map(([title, body], stepIndex) => (
                      <li key={title}>
                        <span>{stepIndex + 1}</span>
                        <div><strong>{title}</strong><p>{body}</p></div>
                      </li>
                    ))}
                  </ol>
                </figure>

                <div className={'workflow-proof-stack workflow-proof-stack--' + workflow.screenshots.length + (workflow.proofNote ? ' workflow-proof-stack--with-note' : '')}>
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
                  {workflow.proofNote && (
                    <aside className="workflow-proof-note">
                      <span>{workflow.proofNote.kicker}</span>
                      <strong>{workflow.proofNote.title}</strong>
                      <p>{workflow.proofNote.body}</p>
                    </aside>
                  )}
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
