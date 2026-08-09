const ITEMS = [
  { q: 'Is my data safe?', a: 'Yes — your data is stored on secure cloud servers, accessible only through your login.' },
  { q: 'Will my staff need training?', a: 'The interface is kept simple — touch-friendly, minimal clicks. Most staff are up and running within minutes.' },
  { q: 'What if the internet goes down?', a: 'Zipla POS is cloud-based, so a stable internet connection is required — just like UPI payments.' },
  { q: 'How do I add my existing menu?', a: 'Add it manually, or use AI scan to build it from a photo of your existing menu — 20 scans/year free in Starter.' },
  { q: 'How do I get support?', a: 'You talk directly to the founder on WhatsApp — no bots, no call-center queues.' },
]
function Plus() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> }
export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="section-head">
        <span className="eyebrow">FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-list">
        {ITEMS.map(i => <details className="faq-item" key={i.q}><summary className="faq-q">{i.q}<Plus /></summary><div className="faq-a">{i.a}</div></details>)}
      </div>
    </section>
  )
}
