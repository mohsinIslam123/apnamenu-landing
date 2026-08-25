const DECISIONS = [
  {
    need: 'Counter billing and GST invoices',
    answer: <>Start with <strong>Starter</strong>: Counter POS Billing, Auto GST Bill, inventory + low-stock alerts, payment modes, and staff roles. <a href="/#pricing">See plan pricing</a>.</>,
  },
  {
    need: 'Table orders and kitchen coordination',
    answer: <>Choose <strong>Pro</strong> for Kitchen Display System (KDS), Table QR Ordering, Bluetooth KOT Auto-Print, and sales analytics with day-close reports.</>,
  },
  {
    need: 'Weight-based or piece billing',
    answer: <>Use the dedicated <a href="/bakery-billing-software/">Bakery</a> or <a href="/sweet-shop-billing/">Sweet Shop</a> workflow for products sold by weight, piece, or fixed price.</>,
  },
]

export default function BuyerAnswer() {
  return (
    <section className="buyer-answer" aria-labelledby="buyer-answer-title">
      <div className="buyer-answer-inner">
        <div className="buyer-answer-intro">
          <span className="eyebrow">Quick answer</span>
          <h2 id="buyer-answer-title">What is restaurant POS billing software?</h2>
          <p className="buyer-answer-lead">Restaurant POS billing software is a system that brings food orders, GST invoices, kitchen orders, and day-close review into one workflow.</p>
          <p>Zipla POS is designed for Indian restaurants, cafés, bakeries, sweet shops, QSRs, and dhabas—whether you run a counter, tables, or weight-based billing.</p>
        </div>

        <div className="buyer-answer-decision">
          <h3>Which Zipla POS workflow should you choose?</h3>
          <p>Match the plan and workflow to the way your food business serves customers today.</p>
          <div className="buyer-answer-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">If you need</th>
                  <th scope="col">Relevant Zipla POS workflow</th>
                </tr>
              </thead>
              <tbody>
                {DECISIONS.map((decision) => (
                  <tr key={decision.need}>
                    <th scope="row" data-label="If you need">{decision.need}</th>
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
