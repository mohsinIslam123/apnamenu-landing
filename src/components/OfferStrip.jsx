// Strip after the hero of the Pricing page (OFFER.md 3.7): what you get, warranty, delivery. Every word is from OFFER.md.
// Home has its own copy (MachineStrip.jsx, classes zh-). This one uses the zm- classes of machine-m.css, so Pricing does not load home.css.
// No heading: the three labels are <span>, the texts are <p> (BRIEF R5). "Refund Policy" is a link to /refund-policy/ (the repo writes internal links without the host, as Stage 2 did).
export default function OfferStrip() {
  return (
    <section aria-label="Zipla Billing Machine details" className="zm-wrap zm-strip-wrap">
      <div className="zm-strip">
        <div className="zm-cell"><span className="zm-cell-l">What you get</span><p className="zm-cell-v">Zipla Billing Machine and 12 months of Zipla POS</p></div>
        <div className="zm-cell"><span className="zm-cell-l">Warranty</span><p className="zm-cell-v">1 year on the motherboard. Repair, not replacement. No cover for physical damage. Terms are in the <a className="zm-lnk" href="/refund-policy/">Refund Policy</a>.</p></div>
        <div className="zm-cell"><span className="zm-cell-l">Delivery</span><p className="zm-cell-v">3 to 4 working days after dispatch</p></div>
      </div>
    </section>
  )
}
