import { BUY_NOW_URL } from '../constants.js'

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
    <section className="zh-wrap zh-sec" id="pricing" aria-labelledby="pricing-title">
      <span className="zh-kicker">Pricing</span>
      <h2 id="pricing-title" className="zh-h2">One complete plan for your service workflow</h2>
      <p className="zh-sec-sub">
        <strong>Complete restaurant billing and ordering software for growing restaurants, cafes, bakeries, QSRs and dhabas.</strong>
      </p>

      <div className="zh-cp">
        <span className="zh-kicker zh-cp-tag">COMPLETE PLAN</span>
        <h3 className="zh-cp-h">Complete plan</h3>
        <span className="zh-kicker zh-cp-label">BILLING &amp; ORDERING WORKFLOW</span>

        <div className="zh-cp-price">
          ₹4,999<span>/year</span>
        </div>

        <p className="zh-cp-line">
          <strong>Same Complete plan</strong> — ₹11,999 for 3 years prepaid
        </p>

        <p className="zh-cp-line">
          14-day free trial • No credit card required
        </p>

        <div className="zh-bento">
          {FEATURE_GROUPS.map((group, index) => (
            <div className={index === 1 ? 'zh-tile zh-tile--dark' : 'zh-tile'} key={group.title}>
              <h4 className="zh-tile-h">{group.title}</h4>
              <ul className="zh-feat">
                {group.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="zh-pay" aria-label="Payment and connectivity conditions">
          <span>After the menu is loaded, billing can continue offline.</span>{' '}
          <span>Online payments require your own Razorpay account and internet.</span>
        </div>

        <p className="zh-pay"><strong>Review the workflow in a demo before you start</strong></p>
        <aside className="zh-pay-note" aria-label="Optional on-site onboarding">
          <strong>Optional on-site onboarding</strong>
          <span>₹1,999 separately from the software plan. Confirm the current scope before purchase.</span>
        </aside>

        <div className="zh-cta2">
          <a
            className="zh-btn zh-btn-gold zh-btn-lg"
            href="https://app.zipla.in/register"
            aria-label="Start a 14-day free trial of the Zipla POS Complete plan"
          >
            Start 14-Day Free Trial
          </a>
        </div>
      </div>

      <div className="zh-setup">
        <strong>Supported setup options</strong>
        <span>Use supported Android, tablet, and Windows PC setups with compatible thermal printers.</span>
        <a href="#demo">Prefer a guided setup? Book a live demo &rarr;</a>
      </div>

      <div className="zh-offers">
        <article className="zh-ocard">
          <p className="zh-ocard-k">Machine and software</p>
          <p className="zh-ocard-t">Zipla Billing Machine with 12 months of Zipla POS</p>
          <p className="zh-ocard-p">₹4,999</p>
          <p className="zh-ocard-d">One 58mm Bluetooth printer and 12 months of Zipla POS. To continue after 1 year, Zipla POS is ₹4,999 a year. Delivery in 3 to 4 days.</p>
          <a className="btn btn-gold zh-btn zh-btn-gold" href={BUY_NOW_URL} target="_blank" rel="noopener noreferrer">Buy now</a>
        </article>
      </div>
      <p className="zh-pay">Payments are processed by Razorpay. Questions before you pay? Message us on WhatsApp at +91 7817851009.</p>
    </section>
  )
}
