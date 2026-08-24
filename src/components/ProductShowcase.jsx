const PROOF_POINTS = [
  'Counter billing with GST invoices',
  'Kitchen Display System for live orders',
  'QR menu and table ordering',
  'Inventory, staff, and sales management',
]

export default function ProductShowcase() {
  return (
    <section className="product-showcase" aria-labelledby="product-showcase-title">
      <div className="product-showcase-inner">
        <div className="product-showcase-copy">
          <span className="eyebrow">See The Product</span>
          <h2 id="product-showcase-title">One POS for your counter, kitchen, and daily business</h2>
          <p>Zipla POS gives food businesses one system for billing, orders, menu management, inventory, staff access, and daily reporting.</p>
          <ul className="product-proof-list">
            {PROOF_POINTS.map(function(point) {
              return <li key={point}>{point}</li>
            })}
          </ul>
          <a className="btn-ghost" href="https://app.zipla.in/register">Explore Zipla POS Free</a>
        </div>
        <figure className="product-showcase-visual">
          <img
            src="/screenshots/ss-multi-device.webp"
            alt="Zipla POS dashboard shown on desktop, tablet, and Android phone"
            width="1232"
            height="860"
            loading="lazy"
          />
          <figcaption>Use Zipla POS across your counter devices.</figcaption>
        </figure>
      </div>
    </section>
  )
}
