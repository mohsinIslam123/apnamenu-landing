const BUSINESSES = [
  {
    number: '01',
    name: 'Restaurants',
    title: 'Restaurant POS software',
    body: 'Connect table billing, kitchen orders, QR ordering, and day-close reporting.',
    href: '/restaurant-pos-software/',
  },
  {
    number: '02',
    name: 'Cafes',
    title: 'Cafe POS software',
    body: 'Keep fast counter service, table ordering, and sales tracking in one place.',
    href: '/cafe-pos-software/',
  },
  {
    number: '03',
    name: 'Bakeries',
    title: 'Bakery billing software',
    body: 'Handle weight-based and piece billing with inventory visibility.',
    href: '/bakery-billing-software/',
  },
  {
    number: '04',
    name: 'Sweet Shops',
    title: 'Sweet shop billing software',
    body: 'Run weight-based mithai billing and faster cash or UPI counters.',
    href: '/sweet-shop-billing/',
  },
  {
    number: '05',
    name: 'QSRs',
    title: 'QSR billing software',
    body: 'Move high-volume billing and kitchen order updates through one workflow.',
    href: '/qsr-billing-software/',
  },
  {
    number: '06',
    name: 'Dhabas',
    title: 'Dhaba billing software',
    body: 'Use simple Android billing, GST invoices, and daily cash tracking.',
    href: '/dhaba-billing-software/',
  },
]

export default function BusinessTypes() {
  return (
    <section className="business-types" aria-labelledby="business-types-title">
      <div className="business-types-head">
        <div>
          <span className="eyebrow">Built for your service model</span>
          <h2 id="business-types-title">Who is Zipla POS for?</h2>
          <p className="business-types-answer">Zipla POS is for Indian restaurants, cafés, bakeries, sweet shops, QSRs, and dhabas that need billing and operations to fit their actual service model.</p>
        </div>
        <p>Choose your business type to see the relevant counter, table-service, or weight-based workflow.</p>
      </div>
      <div className="business-types-grid">
        {BUSINESSES.map(function(business) {
          return (
            <a className="business-type-card" href={business.href} key={business.name} aria-label={`Explore ${business.title}`}>
              <span className="business-type-number">{business.number}</span>
              <p className="business-type-label">For {business.name}</p>
              <h3>{business.title}</h3>
              <p>{business.body}</p>
              <span className="business-type-link">Explore solution <span aria-hidden="true">→</span></span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
