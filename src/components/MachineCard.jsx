import { BUY_NOW_URL } from '../constants.js'

// Round 7 machine band, size M: a card (OFFER.md 3.4, tokens/DESIGN_SYSTEM.md 14.1).
// FAQ and Contact (Stage 4) use it. The blog index and the four guides use it in Stage 5.
// On a phone the card is drawn above the H1, from 900 px beside it (the page puts it after its own text in the markup, CSS grid areas draw it, BRIEF A5).
// It has no heading and no sample bill. The text is one sentence with the name in bold. Every string, price and link is from OFFER.md section 3.
// The printer photo is eager with width and height set (BRIEF R9). Its alt text is the one in OFFER.md 3.3.
export default function MachineCard() {
  return (
    <div className="zm-card-r">
      <div className="zm-card" role="group" aria-label="Zipla Billing Machine">
        <div className="zm-card-vis">
          <div className="zm-stage zm-stage--solo">
            <div className="zm-mach">
              <img
                className="zm-mach-img"
                src="/images/hero-printer-billing-machine.webp"
                alt="Zipla Billing Machine, a 58mm Bluetooth thermal printer"
                width="760"
                height="1025"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="zm-card-t">
          <p className="zm-card-d"><strong>Zipla Billing Machine</strong> with 12 months of Zipla POS: <span className="zm-card-p">₹4,999</span></p>
          <div className="zm-buy-a">
            <a className="btn btn-gold zm-buy-b" href={BUY_NOW_URL} target="_blank" rel="noopener noreferrer">Buy now</a>
            <a className="zm-card-a" href="/pricing/">See pricing</a>
          </div>
        </div>
      </div>
    </div>
  )
}
