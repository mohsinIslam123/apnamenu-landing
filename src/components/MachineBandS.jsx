import { BUY_NOW_URL } from '../constants.js'

// Round 7 machine band, size S: a slim band above the H1 (OFFER.md 3.5, tokens/DESIGN_SYSTEM.md 14.1).
// Privacy, Terms and Refund (Stage 5) use it. It is the first thing inside <main> and is drawn full width above the page's own H1,
// as in the prototype tabs (p-privacy, p-terms, p-refund).
// It has no heading and no sample bill. The text is one sentence with the name in bold, the same text as the M card (MachineCard.jsx).
// Every string, price and link is from OFFER.md section 3. The printer photo is eager with width and height set (BRIEF R9);
// its alt text is the one in OFFER.md 3.3.
export default function MachineBandS() {
  return (
    <section className="zm-band" aria-label="Zipla Billing Machine offer">
      <div className="zb-wrap zm-band-in">
        <div className="zm-band-vis">
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
        <div className="zm-band-t">
          <p className="zm-band-d"><strong>Zipla Billing Machine</strong> with 12 months of Zipla POS: <span className="zm-band-p">₹4,999</span></p>
        </div>
        <div className="zm-band-act">
          <a className="btn btn-gold zm-buy-b" href={BUY_NOW_URL} target="_blank" rel="noopener noreferrer">Buy now</a>
          <a className="zm-band-a" href="/pricing/">See pricing</a>
        </div>
      </div>
    </section>
  )
}
