import { BUY_NOW_URL } from '../constants.js'

// The offer card of the Pricing page (OFFER.md 3.8): its own section after the strip, one <article>, <p> texts, no title above it.
// Pricing does not repeat the Razorpay line that Home has under the card (OFFER.md 3.8). Every word, price and the link are from OFFER.md.
export default function OfferCard() {
  return (
    <section className="zm-wrap zm-offer-sec" aria-label="Buy Zipla Billing Machine">
      <article className="zm-ocard">
        <p className="zm-ocard-k">Machine and software</p>
        <p className="zm-ocard-t">Zipla Billing Machine with 12 months of Zipla POS</p>
        <p className="zm-ocard-p">₹4,999</p>
        <p className="zm-ocard-d">One 58mm Bluetooth printer and 12 months of Zipla POS. To continue after 1 year, Zipla POS is ₹4,999 a year. Delivery in 3 to 4 days.</p>
        <a className="btn btn-gold zm-ocard-b" href={BUY_NOW_URL} target="_blank" rel="noopener noreferrer">Buy now</a>
      </article>
    </section>
  )
}
