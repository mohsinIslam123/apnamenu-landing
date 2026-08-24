const BUSINESSES = [
  {
    name: 'Restaurants',
    body: 'Table billing, kitchen orders, QR ordering, and day-close reports.',
    href: '/restaurant-pos-software/',
  },
  {
    name: 'Cafes',
    body: 'Fast counter billing and QR ordering for busy cafe service.',
    href: '/cafe-pos-software/',
  },
  {
    name: 'Bakeries',
    body: 'Weight-based and piece billing with inventory visibility.',
    href: '/bakery-billing-software/',
  },
  {
    name: 'Sweet Shops',
    body: 'Weight-based billing for mithai and fast cash or UPI counters.',
    href: '/sweet-shop-billing/',
  },
  {
    name: 'QSRs',
    body: 'High-speed billing and live kitchen order updates.',
    href: '/qsr-billing-software/',
  },
  {
    name: 'Dhabas',
    body: 'Simple Android billing, GST invoices, and daily cash tracking.',
    href: '/dhaba-billing-software/',
  },
]

export default function BusinessTypes() {
  return (
    <section className="business-types" aria-labelledby="business-types-title">
      <div className="section-head">
        <span className="eyebrow">Built For Food Businesses</span>
        <h2 id="business-types-title">Choose the workflow that fits your business</h2>
        <p>Each food business has a different counter workflow. Explore how Zipla POS fits yours.</p>
      </div>
      <div className="business-types-grid">
        {BUSINESSES.map(function(business) {
          return (
            <a className="business-type-card" href={business.href} key={business.name}>
              <h3>{business.name}</h3>
              <p>{business.body}</p>
              <span>Explore {business.name} POS <span aria-hidden="true">→</span></span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
