import { waLink } from '../constants.js'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="eyebrow">Restaurant POS Billing Software</span>
          <h1>Apne Restaurant ko<br />Digital Banao.</h1>
          <p className="sub">Billing, kitchen orders aur GST invoice — sab ek jagah, phone ya counter se. Kaagaz KOT aur calculator ki zaroorat khatam.</p>
          <div className="hero-ctas">
            <a className="btn-cta" href={waLink('Hi, ApnaMenu ka 14 din free demo chahiye')} target="_blank" rel="noopener noreferrer">14 Din Free Demo Lo</a>
            <a className="btn-ghost" href="#pricing">Pricing Dekho</a>
          </div>
          <p className="hero-note">Koi card nahi. Setup same din.</p>
        </div>
        <div className="ticket-stage">
          <div className="kds-chip"><span className="dot" />Kitchen Notified</div>
          <div className="ticket">
            <div className="ticket-head">APNAMENU</div>
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
            <div className="ticket-thanks">Thank You — Aaiyega Phir</div>
          </div>
        </div>
      </div>
    </section>
  )
}
