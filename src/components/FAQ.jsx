const ITEMS = [
  { q: 'How do I access my business data?', a: 'Use your Zipla login to access your business workspace.' },
  { q: 'Will my staff need training?', a: 'Zipla uses a touch-friendly interface with minimal clicks. Book a demo and we’ll walk your team through the relevant workflow.' },
  { q: 'What if the internet goes down?', a: 'Zipla POS works after the menu is loaded — you can create bills without internet. UPI and online payments require a connection. Full offline sync is on our roadmap.' },
  { q: 'How do I add my existing menu?', a: 'Add it manually, or use AI scan to build it from a photo of your existing menu — 20 scans/year free in Starter.' },
  { q: 'How do I get support?', a: 'You can contact the Zipla team on WhatsApp for support and a product walkthrough.' },
]
function Plus() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> }
export default function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="section-head">
        <span className="eyebrow">FAQ</span>
        <h2 id="faq-title">What do food businesses ask before starting Zipla POS?</h2>
        <p>These answers cover data access, team onboarding, menu setup, connectivity, and product support.</p>
      </div>
      <div className="faq-list">
        {ITEMS.map(i => <details className="faq-item" key={i.q}><summary className="faq-q">{i.q}<Plus /></summary><div className="faq-a">{i.a}</div></details>)}
      </div>
      <p className="faq-more"><a href="/faq/">View all Zipla POS FAQs <span aria-hidden="true">→</span></a></p>
    </section>
  )
}
