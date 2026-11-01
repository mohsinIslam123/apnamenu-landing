import { BUY_NOW_URL } from '../constants.js'

// Round 7 machine band, size L (OFFER.md 3.3, tokens/DESIGN_SYSTEM.md 14).
// The business pages (Stage 3) use it. Pricing (Stage 4) uses the same band.
// It has no heading: the titles are <p> elements (BRIEF R5). Every string, price and link is from OFFER.md section 3.
// The sample bill is real text inside an element with role="img" and an aria-label (decoration with a text equivalent).
// The printer photo is the first large picture of the page: eager, fetchpriority high, width and height set (BRIEF R9).
// `seePricing` is true by default. OFFER.md 3.3: "The Pricing page has no See pricing link", so /pricing/ passes false.
export default function MachineBand({ seePricing = true }) {
  return (
    <div className="zm-r">
      <div className="zm-stage">
        <div className="zm-mach">
          <div
            className="zm-paper zm-pa"
            role="img"
            aria-label="Sample GST bill: Paneer Masala 280.00, Butter Naan x3 150.00, Lime Soda x2 140.00, subtotal 570.00, GST 5 percent 28.50, total 598.50"
          >
            <div className="zm-rcp">
              <div className="zm-rcp-h">Sample bill</div>
              <div className="zm-rcp-rule" />
              <div className="zm-rcp-row"><span className="zm-rcp-n">Paneer Masala</span><span className="zm-rcp-l" /><span className="zm-rcp-a">280.00</span></div>
              <div className="zm-rcp-row"><span className="zm-rcp-n">Butter Naan x3</span><span className="zm-rcp-l" /><span className="zm-rcp-a">150.00</span></div>
              <div className="zm-rcp-row"><span className="zm-rcp-n">Lime Soda x2</span><span className="zm-rcp-l" /><span className="zm-rcp-a">140.00</span></div>
              <div className="zm-rcp-rule" />
              <div className="zm-rcp-row"><span className="zm-rcp-n">Subtotal</span><span className="zm-rcp-l" /><span className="zm-rcp-a">570.00</span></div>
              <div className="zm-rcp-row"><span className="zm-rcp-n">GST 5%</span><span className="zm-rcp-l" /><span className="zm-rcp-a">28.50</span></div>
              <div className="zm-rcp-row zm-rcp-tot"><span className="zm-rcp-n">TOTAL</span><span className="zm-rcp-l" /><span className="zm-rcp-a">598.50</span></div>
              <div className="zm-rcp-rule" />
              <div className="zm-rcp-foot">Thank you, visit again</div>
            </div>
          </div>
          <img
            className="zm-mach-img"
            src="/images/hero-printer-billing-machine.webp"
            alt="Zipla Billing Machine, a 58mm Bluetooth thermal printer"
            width="760"
            height="1025"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div className="zm-phoneh">
          <img
            src="/images/screen-dashboard.webp"
            alt="Zipla POS dashboard on a phone with Revenue Analytics, Terminal POS Billing, Live Kitchen Display and Customer Menu"
            width="720"
            height="1465"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      <div className="zm-buy">
        <div className="zm-buy-t">
          <span className="zm-buy-n"><span className="zm-dot" aria-hidden="true" />Zipla Billing Machine</span>
          <span className="zm-buy-p">₹4,999</span>
        </div>
        <p className="zm-buy-d">With 12 months of Zipla POS. Delivery in 3 to 4 days.</p>
        <div className="zm-buy-a">
          <a className="btn btn-gold zm-buy-b" href={BUY_NOW_URL} target="_blank" rel="noopener noreferrer">Buy now</a>
          {seePricing && <a className="zm-buy-link" href="/pricing/">See pricing</a>}
        </div>
      </div>
    </div>
  )
}
