const STEPS = [
  { num: '01', title: 'Order', body: 'Table and QR orders enter the same Zipla POS workflow.' },
  { num: '02', title: 'Kitchen', body: 'The kitchen sees orders on the KDS screen instead of paper KOTs.' },
  { num: '03', title: 'Billing', body: 'Create GST invoices with CGST and SGST calculated automatically.' },
  { num: '04', title: 'Report', body: 'Full day summary — sales, GST, low stock — all in one view.' },
]
export default function Workflow() {
  return (
    <section className="workflow" aria-labelledby="workflow-title">
      <div className="section-head">
        <span className="eyebrow">How It Works</span>
        <h2 id="workflow-title">How does Zipla POS work during restaurant service?</h2>
        <p>It connects order taking, kitchen handoff, GST billing, and a daily operational review in one workflow.</p>
      </div>
      <div className="workflow-row">
        {STEPS.map(s => <div className="wf-step" key={s.num}><div className="wf-num">{s.num}</div><h3>{s.title}</h3><p>{s.body}</p></div>)}
      </div>
    </section>
  )
}
