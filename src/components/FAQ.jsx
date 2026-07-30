const ITEMS = [
  { q: 'Kya mera data safe hai?', a: 'Haan — data secure cloud servers pe rehta hai, sirf aap access kar sakte ho apne login se.' },
  { q: 'Staff ko training chahiye hogi?', a: 'Interface simple rakha gaya hai — touch-friendly, kam se kam clicks. Zyada training ki zaroorat nahi padti.' },
  { q: 'Internet band ho jaaye to?', a: 'ApnaMenu cloud-based hai, isliye stable internet chahiye hota hai — jaise UPI payment ke liye hota hai.' },
  { q: 'Purana menu kaise add karu?', a: 'Khud add karo, ya apne purane menu ki photo se AI-scan karke bana lo — Starter mein 20 scans/saal free.' },
  { q: 'Support kaise milega?', a: 'Seedha WhatsApp pe founder se baat hoti hai — koi bot ya call-center queue nahi.' },
]
function Plus() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> }
export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="section-head">
        <span className="eyebrow">FAQ</span>
        <h2>Sawal Jo Sabse Zyada Aate Hain</h2>
      </div>
      <div className="faq-list">
        {ITEMS.map(i => <details className="faq-item" key={i.q}><summary className="faq-q">{i.q}<Plus /></summary><div className="faq-a">{i.a}</div></details>)}
      </div>
    </section>
  )
}
