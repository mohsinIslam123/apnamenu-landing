import { waLink } from '../constants.js'
function Check() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> }
const S = ['Counter POS Billing','Auto GST Bill — CGST + SGST','Inventory + Low Stock Alert','AI Menu Setup (20 scans/saal)','Cash · UPI · Card Payments','Staff Roles — Owner / Cashier']
const P = ['Starter ka sab kuch','Kitchen Display Screen (KDS)','Table QR Ordering — Waiter Free','Bluetooth KOT Auto-Print','AI Menu Scan Unlimited','Customer History + Repeat CRM']
export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-head">
        <span className="eyebrow">Pricing</span>
        <h2>Seedha Pricing, Chhupi Fees Nahi</h2>
        <p>Yearly plan — jitna dikh raha hai utna hi. Koi setup fee, koi commission nahi.</p>
      </div>
      <div className="pricing-grid">
        <div className="price-card">
          <div className="price-plan">Starter</div>
          <div className="price-amt">&#8377;2,999<span>/saal</span></div>
          <div className="price-sub">&#8377;5,999 / 3 saal</div>
          <ul className="price-list">{S.map(f => <li key={f}><Check />{f}</li>)}</ul>
          <a className="btn-ghost" href={waLink('Hi, Starter plan ke baare mein jaankari chahiye')} target="_blank" rel="noopener noreferrer">WhatsApp Pe Poochho</a>
        </div>
        <div className="price-card popular">
          <span className="popular-tag">MOST POPULAR</span>
          <div className="price-plan">Pro</div>
          <div className="price-amt">&#8377;4,999<span>/saal</span></div>
          <div className="price-sub">&#8377;9,899 / 3 saal</div>
          <ul className="price-list">{P.map(f => <li key={f}><Check />{f}</li>)}</ul>
          <a className="btn-cta" href={waLink('Hi, Pro plan ka 14 din free demo chahiye')} target="_blank" rel="noopener noreferrer">14 Din Free Demo Lo</a>
        </div>
      </div>
    </section>
  )
}
