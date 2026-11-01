// Strip under the hero (OFFER.md 3.7): what you get, warranty, delivery. Every word is from OFFER.md.
export default function MachineStrip() {
  return (
    <section aria-label="Zipla Billing Machine details" className="zh-wrap zh-strip-wrap">
      <div className="zh-strip">
        <div className="zh-cell"><span className="zh-cell-l">What you get</span><p className="zh-cell-v">Zipla Billing Machine and 12 months of Zipla POS</p></div>
        <div className="zh-cell"><span className="zh-cell-l">Warranty</span><p className="zh-cell-v">1 year on the motherboard. Repair support. No cover for physical damage. Terms are in the <a className="zh-lnk" href="/refund-policy/">Refund Policy</a>.</p></div>
        <div className="zh-cell"><span className="zh-cell-l">Delivery</span><p className="zh-cell-v">3 to 4 working days after dispatch</p></div>
      </div>
    </section>
  )
}
