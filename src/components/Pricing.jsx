import { waLink } from '../constants.js'
function Check() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> }
const S = ['Counter POS Billing','Auto GST Bill — CGST + SGST','Inventory + Low Stock Alert','AI Menu Setup (20 scans/year)','Cash · UPI · Card Payments','Staff Roles — Owner / Cashier']
const P = ['Everything in Starter','Kitchen Display Screen (KDS)','Table QR Ordering — Waiter Free','Bluetooth KOT Auto-Print','AI Menu Scan Unlimited','Customer History + Repeat CRM']
export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-head">
        <span className="eyebrow">Pricing</span>
        <h2>Transparent Pricing. No Hidden Fees.</h2>
        <p>Annual plan — what you see is what you pay. No setup fee, no commission.</p>
      </div>
      <div className="pricing-grid">
        <div className="price-card">
          <div className="price-plan">Starter</div>
          <div className="price-amt">&#8377;2,999<span>/year</span></div>
          <div className="price-sub">&#8377;5,999 / 3 years</div>
          <ul className="price-list">{S.map(f => <li key={f}><Check />{f}</li>)}</ul>
          <a className="btn-ghost" href={waLink('Hi, I would like to know more about the Starter plan')} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
        <div className="price-card popular">
          <span className="popular-tag">MOST POPULAR</span>
          <div className="price-plan">Pro</div>
          <div className="price-amt">&#8377;4,999<span>/year</span></div>
          <div className="price-sub">&#8377;9,899 / 3 years</div>
          <ul className="price-list">{P.map(f => <li key={f}><Check />{f}</li>)}</ul>
          <a className="btn-cta" href={waLink('Hi, I would like a 14-day free demo of the Pro plan')} target="_blank" rel="noopener noreferrer">Start 14-Day Free Trial</a>
        </div>
      </div>
    </section>
  )
}
