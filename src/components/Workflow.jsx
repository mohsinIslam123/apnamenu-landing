const WORKFLOWS = [
  {
    id: 'counter-billing',
    title: 'Counter POS Billing',
    plan: 'Complete plan',
    summary: 'Build the customer order, record the payment mode and create the GST invoice from the counter.',
    // The live laptop picture of this step (ss-new-order.webp) is replaced by the three phone screens below.
    // Its label and caption stay as the caption of the screens (Kabir's decision 2: no other visible text changes).
    screensCaption: { label: 'Actual Zipla POS screen', text: 'Actual Zipla POS counter billing screen.' },
    screensLabel: 'Counter POS Billing screens',
    screens: [
      {
        src: '/images/screen-new-order.webp',
        alt: 'Zipla POS New Order screen with menu categories, search, Veg and Non-Veg filters and Add buttons',
        width: 585,
        height: 1188,
        caption: 'New order',
      },
      {
        src: '/images/screen-payment.webp',
        alt: 'Zipla POS Payment screen with order type, table or token, discount, coupon, loyalty points and Cash, UPI or Card payment',
        width: 585,
        height: 1186,
        caption: 'Payment',
      },
      {
        src: '/images/screen-order-created.webp',
        alt: 'Zipla POS Order Created screen with Print Receipt, 58mm or 80mm paper size and Bluetooth printer connected',
        width: 720,
        height: 1464,
        caption: 'Print bill',
      },
    ],
    screenshots: [],
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
    screensLabel: 'Table QR and home ordering screens',
    screens: [
      {
        src: '/images/qr-table-standee.webp',
        alt: 'Table QR standee reading Scan to Order from Our Menu, with a Restaurant QR Code',
        width: 706,
        height: 978,
        caption: 'Table QR',
        card: true,
      },
      {
        src: '/images/screen-customer-cart.webp',
        alt: 'Customer cart with items, CGST and SGST lines and a Place Order button',
        width: 720,
        height: 1463,
        caption: 'Cart',
      },
      {
        src: '/images/screen-order-status.webp',
        alt: 'Order status screen showing Order Placed, Accepted, Being Prepared and Ready',
        width: 706,
        height: 1432,
        caption: 'Order status',
      },
    ],
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

// Round 7 "Screens" row (Round7_final.html, class "screens"): app screens in a phone frame.
// Phones: a swipe strip that scrolls sideways. From 640 px: a grid. The strip is a named, focusable region so that a
// keyboard user can scroll it (role, aria-label and tabindex as in Round 7). The QR standee is a card, not a phone.
function Screens({ workflow }) {
  return (
    <div
      className="zh-screens"
      role="region"
      aria-label={workflow.screensLabel}
      tabIndex={0}
      style={{ '--n': workflow.screens.length }}
    >
      {workflow.screens.map((screen) => (
        <figure className={screen.card ? 'zh-scr zh-scr--card' : 'zh-scr'} key={screen.src}>
          <div className="zh-pf">
            <img
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>{screen.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

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
                  <div className="zh-wfl-proof">
                    {workflow.screens && workflow.screensCaption && (
                      <figure className="zh-fig zh-fig--screens">
                        <figcaption><span>{workflow.screensCaption.label}</span><strong>{workflow.screensCaption.text}</strong></figcaption>
                        <Screens workflow={workflow} />
                      </figure>
                    )}
                    {workflow.screens && !workflow.screensCaption && <Screens workflow={workflow} />}
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
