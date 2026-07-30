const STEPS = [
  { num: '01', title: 'Order', body: 'Table ya QR se order aata hai, seedha system mein — likhne ki zaroorat nahi.' },
  { num: '02', title: 'Kitchen', body: 'KDS screen pe turant dikh jata hai — kaagaz KOT gayab, mistake kam.' },
  { num: '03', title: 'Billing', body: 'GST invoice ek tap mein — CGST/SGST auto-calculate, thermal print ready.' },
  { num: '04', title: 'Report', body: 'Din ka poora hisaab — sales, GST, low stock — ek jagah, ek nazar mein.' },
]
export default function Workflow() {
  return (
    <section className="workflow">
      <div className="section-head">
        <span className="eyebrow">Kaise Kaam Karta Hai</span>
        <h2>Order se Report Tak — Chaar Step</h2>
        <p>Har step connected hai. Ek jagah data enter karo, poore restaurant mein reflect hota hai.</p>
      </div>
      <div className="workflow-row">
        {STEPS.map(s => <div className="wf-step" key={s.num}><div className="wf-num">{s.num}</div><h3>{s.title}</h3><p>{s.body}</p></div>)}
      </div>
    </section>
  )
}
