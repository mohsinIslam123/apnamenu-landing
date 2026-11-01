// "How it starts" (OFFER.md 3.7). The title is a <p>, never a heading (BRIEF R5).
// The claim line under the title (OFFER.md 3.10) is not built: Kabir's prompt carries no PROOF line for either claim.
export default function HowItStarts() {
  return (
    <section aria-labelledby="h-how" className="zh-band" id="how">
      <div className="zh-wrap zh-sec">
        <p className="zh-h2" id="h-how">How do I start billing with the Zipla Billing Machine?</p>
        <ol className="zh-hw">
          <li className="zh-hw-step"><span className="zh-hw-n">01</span><div><p className="zh-hw-h">Order</p><p className="zh-hw-p">Buy the Zipla Billing Machine online. It is delivered in 3 to 4 working days after dispatch.</p></div></li>
          <li className="zh-hw-step"><span className="zh-hw-n">02</span><div><p className="zh-hw-h">Connect</p><p className="zh-hw-p">Pair the printer over Bluetooth, log in to Zipla POS and add your menu.</p></div></li>
          <li className="zh-hw-step"><span className="zh-hw-n">03</span><div><p className="zh-hw-h">Bill</p><p className="zh-hw-p">Print GST bills and KOTs and take QR orders.</p></div></li>
        </ol>
      </div>
    </section>
  )
}
