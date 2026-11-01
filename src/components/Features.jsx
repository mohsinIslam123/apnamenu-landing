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

const CAPABILITIES = [
  { icon: PosIcon, label: 'Counter checkout + GST' },
  { icon: KdsIcon, label: 'Kitchen order queue' },
  { icon: QrIcon, label: 'Table QR Ordering' },
  { icon: QrIcon, label: 'Customer QR Home Ordering' },
  { icon: HardwareIcon, label: '58mm/80mm Bluetooth printing' }
]

export default function QuickAnswer() {
  return (
    <section className="zh-band" id="features" aria-labelledby="features-title">
      <div className="zh-wrap zh-sec">
        {/* TOP CAPABILITIES STRIP */}
        <ul className="zh-caps">
          {CAPABILITIES.map((c) => {
            const Icon = c.icon
            return (
              <li key={c.label} className="zh-cap">
                <Icon />
                <span>{c.label}</span>
              </li>
            )
          })}
        </ul>

        <div className="zh-feat2">
          {/* LEFT COLUMN: FEATURE SUMMARY & TRUST POINTS */}
          <div>
            <span className="zh-kicker">FEATURES</span>
            <h2 id="features-title" className="zh-h2">
              What does each Zipla POS workflow help you run?
            </h2>
            <p className="zh-feat-p">
              Choose the workflow that matches your outlet: counter checkout, table service, customer home ordering, kitchen handoff, or weight- and piece-based billing.
            </p>
            <p className="zh-feat-p">
              The Complete plan also supports Mobile POS, barcode scanning for packaged inventory, automatic GST calculation and online payments through the restaurant's own Razorpay account when internet is available.
            </p>

            <ul className="zh-chk">
              <li><span><strong>Offline billing:</strong> After the menu loads, bills can be created without internet; UPI and online payments need a connection</span></li>
              <li><span><strong>Supported setup:</strong> Use an Android phone, tablet, or Windows PC with compatible 58mm or 80mm Bluetooth thermal printing</span></li>
              <li><span><strong>Mobile POS:</strong> Use Zipla POS on supported mobile devices with staff roles</span></li>
              <li><span><strong>Barcode inventory:</strong> Scan packaged products to add them to inventory</span></li>
              <li><span><strong>Automatic GST:</strong> The configured GST rate is applied when the bill is generated</span></li>
              <li><span><strong>Online payments:</strong> Connect your own Razorpay account; internet is required</span></li>
              <li><span><strong>Bill sharing:</strong> Share bills with customers on WhatsApp when a digital copy is needed</span></li>
              <li><span><strong>Complete plan:</strong> ₹4,999/year or ₹11,999 for 3 years prepaid, covering the listed counter, table, customer QR and kitchen workflows</span></li>
            </ul>
          </div>

          {/* RIGHT COLUMN: WORKFLOW COMPARISON TABLE */}
          <div className="zh-feat-card">
            <h3 className="zh-cb-h">Which workflow fits your current service?</h3>
            <p className="zh-cb-p">
              Choose a plan around the operational handoff your team needs to manage.
            </p>

            <table className="zh-wf">
              <thead>
                <tr>
                  <th scope="col">Operational Need</th>
                  <th scope="col">Relevant Zipla POS Workflow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Counter rush: bill, payment marking and GST invoice in one checkout</th>
                  <td>
                    The <strong>Complete plan</strong> covers counter POS billing, GST invoices and payment-mode tracking.{' '}
                    <a href="#pricing">See plan pricing &rarr;</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Table orders that need a clear kitchen handoff</th>
                  <td>
                    It also covers Kitchen Display System (KDS), table QR ordering, Bluetooth KOT auto-print, sales analytics and day-close reports.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Home orders that customers should track on their phone</th>
                  <td>
                    Customer QR ordering lets a customer enter their name, phone number and address, receive order-status updates, and follow the cashier-to-kitchen handoff from accepted to preparing to completed.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Weight-, piece- or fixed-price items at the same counter</th>
                  <td>
                    Use dedicated workflows for{' '}
                    <a href="/bakery-billing-software/">Bakery</a> or{' '}
                    <a href="/sweet-shop-billing/">Sweet Shop</a>{' '}
                    for items sold by weight, piece, or fixed box price.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
