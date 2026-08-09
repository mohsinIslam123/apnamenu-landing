import { waLink } from '../constants.js'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="eyebrow">Restaurant POS Billing Software</span>
          <h1>Take Your Restaurant<br />Fully Digital.</h1>
          <p className="sub">Billing, kitchen orders, and GST invoices — all in one place, from any phone or counter. No more paper KOTs or manual calculations.</p>
          <div className="hero-ctas">
            <a className="btn-cta" href={waLink('Hi, I would like a 14-day free demo of Zipla POS')} target="_blank" rel="noopener noreferrer">Start 14-Day Free Trial</a>
            <a className="btn-ghost" href="#pricing">View Pricing</a>
          </div>
          <p className="hero-note">No card required. Same-day setup.</p>
        </div>
        <div className="ticket-stage">
          <div className="kds-chip"><span className="dot" />Kitchen Notified</div>
          <div className="ticket">
            <div className="ticket-head">ZIPLA POS</div>
            <div className="ticket-sub">Order #482 · Table 6</div>
            <div className="ticket-rule" />
            <div className="ticket-line"><span>Paneer Tikka x2</span><span>340</span></div>
            <div className="ticket-line"><span>Butter Naan x3</span><span>90</span></div>
            <div className="ticket-line"><span>Masala Chai x2</span><span>60</span></div>
            <div className="ticket-rule" />
            <div className="ticket-line"><span>Subtotal</span><span>490.00</span></div>
            <div className="ticket-line"><span>CGST 2.5%</span><span>12.25</span></div>
            <div className="ticket-line"><span>SGST 2.5%</span><span>12.25</span></div>
            <div className="ticket-rule" />
            <div className="ticket-total"><span>TOTAL</span><span>&#8377;514.50</span></div>
            <div className="ticket-thanks">Thank You — Visit Again</div>
          </div>
        </div>
      </div>
    </section>
  )
}
