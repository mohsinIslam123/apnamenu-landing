const DECISIONS = [
  {
    need: 'Counter service: billing, GST invoices and payment marking',
    answer: <>The <strong>Complete plan</strong> covers counter billing, GST invoices and payment-mode tracking. <a href="/pricing/">See pricing</a>.</>,
  },
  {
    need: 'Table service: customer orders and kitchen handoff',
    answer: <>The <strong>Complete plan</strong> also covers Kitchen Display System (KDS), table QR ordering, Bluetooth KOT auto-print, sales analytics and day-close reports.</>,
  },
  {
    need: 'Home orders: customer details and phone-based status tracking',
    answer: <>Use <strong>Customer QR Home Ordering</strong> for name, phone number and address capture, cashier order alerts, kitchen handoff and customer status tracking from accepted to preparing to completed.</>,
  },
  {
    need: 'Weight-, piece- or fixed-price items',
    answer: <>Use the dedicated <a href="/bakery-billing-software/">Bakery</a> or <a href="/sweet-shop-billing/">Sweet Shop</a> workflow for products sold by weight, piece, or fixed price.</>,
  },
]

export default function BuyerAnswer() {
  return (
    <section className="buyer-answer" aria-labelledby="buyer-answer-title">
      <div className="buyer-answer-inner">
        <div className="buyer-answer-intro">
          <span className="eyebrow">Quick answer</span>
          <h2 id="buyer-answer-title">Choose billing software around your service workflow</h2>
          <p className="buyer-answer-lead">Restaurant billing software is a system that helps a food business create bills, apply configured GST, record payments and connect relevant ordering or kitchen steps.</p>
          <div className="buyer-answer-summary" aria-label="Who Zipla POS is for and what to test">
            <div className="buyer-answer-summary-card">
              <h3>Who this is for</h3>
              <p>Indian restaurant, cafe, QSR, bakery, sweet-shop and dhaba owners choosing or replacing a billing system.</p>
            </div>
            <div className="buyer-answer-summary-card">
              <h3>What to test</h3>
              <p>Use a small real menu and check payment, printing, QR ordering or kitchen handoff before you switch.</p>
            </div>
          </div>
        </div>

        <div className="buyer-answer-decision">
          <h3>Which workflow fits your food business?</h3>
          <p>Choose the plan around your current service model, not a generic feature checklist.</p>
          <div className="buyer-answer-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Operational need</th>
                  <th scope="col">Relevant Zipla POS workflow</th>
                </tr>
              </thead>
              <tbody>
                {DECISIONS.map((decision) => (
                  <tr key={decision.need}>
                    <th scope="row" data-label="Operational need">{decision.need}</th>
                    <td data-label="Relevant Zipla POS workflow">{decision.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
