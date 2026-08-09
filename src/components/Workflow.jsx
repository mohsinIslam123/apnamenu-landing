const STEPS = [
  { num: '01', title: 'Order', body: 'Orders come in from the table or QR scan, directly into the system — no writing needed.' },
  { num: '02', title: 'Kitchen', body: 'Appears instantly on the KDS screen — no paper KOTs, fewer mistakes.' },
  { num: '03', title: 'Billing', body: 'GST invoice in one tap — CGST/SGST auto-calculated, thermal print ready.' },
  { num: '04', title: 'Report', body: 'Full day summary — sales, GST, low stock — all in one view.' },
]
export default function Workflow() {
  return (
    <section className="workflow">
      <div className="section-head">
        <span className="eyebrow">How It Works</span>
        <h2>From Order to Report — Four Steps</h2>
        <p>Every step is connected. Enter data once and it reflects across your entire operation.</p>
      </div>
      <div className="workflow-row">
        {STEPS.map(s => <div className="wf-step" key={s.num}><div className="wf-num">{s.num}</div><h3>{s.title}</h3><p>{s.body}</p></div>)}
      </div>
    </section>
  )
}
