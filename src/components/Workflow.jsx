const WORKFLOWS = [
  {
    id: 'ai-menu-scan',
    title: 'AI Menu Scan',
    plan: 'Starter and Pro',
    summary: 'Use a menu photo, review the detected items, then import the items you approve.',
    illustration: '/workflows/ai-menu-scan-workflow.webp',
    illustrationAlt: 'Illustrative four-step AI menu scan workflow from menu photo to reviewed menu items',
    illustrationWidth: 1200,
    illustrationHeight: 900,
    screenshot: '/workflows/ai-menu-review-screen.webp',
    screenshotAlt: 'Actual Zipla POS menu review screen showing detected menu items before import',
    screenshotWidth: 867,
    screenshotHeight: 1000,
    screenshotCaption: 'Actual Zipla POS menu-review screen.',
    steps: [
      ['Select a menu photo', 'Start with a photo of the menu you want to set up.'],
      ['Review detected items', 'Check the items before adding them to your live menu.'],
      ['Edit the details you need', 'Review category, item name, price and food type before import.'],
      ['Import approved items', 'Add the reviewed items to the menu you will use for billing or ordering.'],
    ],
  },
  {
    id: 'qr-ordering',
    title: 'Table QR Ordering',
    plan: 'Pro',
    summary: 'Diners can scan a table QR code, view the menu on their phone and place a table order.',
    illustration: '/workflows/qr-ordering-workflow.webp',
    illustrationAlt: 'Illustrative QR table ordering workflow from scan to menu selection and kitchen order queue',
    illustrationWidth: 1200,
    illustrationHeight: 900,
    screenshot: '/screenshots/ss-customer-menu.webp',
    screenshotAlt: 'Actual Zipla POS customer menu screen used for QR ordering',
    screenshotWidth: 1232,
    screenshotHeight: 860,
    screenshotCaption: 'Actual Zipla POS customer-menu screen.',
    steps: [
      ['Scan the table QR', 'The diner opens the menu from the QR code at the table.'],
      ['Choose menu items', 'The diner selects items on their own phone.'],
      ['Place the table order', 'The order enters the restaurant ordering workflow.'],
      ['Use kitchen handoff when relevant', 'On Pro, use the Kitchen Display System for a visible kitchen queue.'],
    ],
  },
  {
    id: 'counter-kds',
    title: 'Counter Billing and Kitchen Handoff',
    plan: 'Starter billing · Pro KDS',
    summary: 'Create the customer bill at the counter, then use a Pro kitchen queue when your service flow needs it.',
    illustration: '/workflows/counter-billing-workflow.webp',
    illustrationAlt: 'Illustrative counter billing workflow from menu selection to payment and customer bill',
    illustrationWidth: 1200,
    illustrationHeight: 900,
    screenshot: '/screenshots/ss-kds.webp',
    screenshotAlt: 'Actual Zipla POS Kitchen Display System screen showing a kitchen order queue',
    screenshotWidth: 1232,
    screenshotHeight: 860,
    screenshotCaption: 'Actual Zipla POS Kitchen Display System screen.',
    steps: [
      ['Build the customer order', 'Select the items from the counter billing screen.'],
      ['Mark the payment mode', 'Record cash, UPI or card payment for the bill.'],
      ['Create the customer bill', 'Generate the GST invoice from the billing workflow.'],
      ['Hand off to the kitchen if needed', 'For Pro, use KDS to keep active kitchen orders visible.'],
    ],
  },
  {
    id: 'day-close',
    title: 'Day-Close Review',
    plan: 'Pro',
    summary: 'Review the completed orders, payment split, voids and day-close information after service.',
    illustration: '/workflows/day-close-workflow.webp',
    illustrationAlt: 'Illustrative day-close workflow from completed orders to payment review and business reporting',
    illustrationWidth: 1200,
    illustrationHeight: 675,
    screenshot: '/workflows/day-close-report-screen.webp',
    screenshotAlt: 'Actual Zipla POS day-close report showing orders, revenue, payment split, voids and expected cash',
    screenshotWidth: 994,
    screenshotHeight: 631,
    screenshotCaption: 'Actual Zipla POS day-close report.',
    steps: [
      ['Complete the day’s orders', 'Close the customer orders recorded during service.'],
      ['Review payment split', 'Check the recorded cash, UPI and card amounts.'],
      ['Check operational details', 'Review voids and expected cash in the day-close report.'],
      ['Use the owner view', 'Use the day-close information to review the operating day.'],
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
              <ol className="workflow-step-list" aria-label={workflow.title + ' steps'}>
                {workflow.steps.map(([title, body], stepIndex) => (
                  <li key={title}>
                    <span>{stepIndex + 1}</span>
                    <div><strong>{title}</strong><p>{body}</p></div>
                  </li>
                ))}
              </ol>

              <div className="workflow-visual-grid">
                <figure className="workflow-figure workflow-figure--illustration">
                  <figcaption><span>Illustrative workflow diagram</span><strong>{workflow.title}</strong></figcaption>
                  <img
                    src={workflow.illustration}
                    alt={workflow.illustrationAlt}
                    width={workflow.illustrationWidth}
                    height={workflow.illustrationHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="workflow-figure workflow-figure--actual">
                  <figcaption><span>Actual Zipla POS screen</span><strong>{workflow.screenshotCaption}</strong></figcaption>
                  <img
                    src={workflow.screenshot}
                    alt={workflow.screenshotAlt}
                    width={workflow.screenshotWidth}
                    height={workflow.screenshotHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
