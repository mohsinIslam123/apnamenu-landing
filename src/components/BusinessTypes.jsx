
const BUSINESSES = [
  {
    id: 'restaurant',
    number: '01',
    name: 'Restaurants',
    title: 'Restaurant POS Software',
    summary: 'Counter and table service in one workflow, with KDS and table QR ordering.',
    href: '/restaurant-pos-software/',
    highlight: 'Dine-in & Full Service',
  },
  {
    id: 'cafe',
    number: '02',
    name: 'Cafes',
    title: 'Cafe POS Software',
    summary: 'Counter checkout with payment tracking, table ordering and kitchen handoff when relevant.',
    href: '/cafe-pos-software/',
    highlight: 'Counter & Barista Workflow',
  },
  {
    id: 'bakery',
    number: '03',
    name: 'Bakeries',
    title: 'Bakery Billing Software',
    summary: 'Bill weight-, piece- and fixed-price items from one counter workflow.',
    href: '/bakery-billing-software/',
    highlight: 'Weight & Piece Billing',
  },
  {
    id: 'sweet-shop',
    number: '04',
    name: 'Sweet Shops',
    title: 'Sweet Shop Billing Software',
    summary: 'Bill mithai and counter items sold by weight, piece, or fixed price.',
    href: '/sweet-shop-billing/',
    highlight: 'Weight & Piece Billing',
  },
  {
    id: 'qsr',
    number: '05',
    name: 'QSRs',
    title: 'QSR Billing Software',
    summary: 'Counter billing first, with a kitchen queue when orders need a handoff.',
    href: '/qsr-billing-software/',
    highlight: 'Counter & Kitchen Workflow',
  },
  {
    id: 'dhaba',
    number: '06',
    name: 'Dhabas',
    title: 'Dhaba Billing Software',
    summary: 'Counter billing, GST invoices, payment tracking and supported bill printing.',
    href: '/dhaba-billing-software/',
    highlight: 'Android & Bluetooth Print',
  },
]

export default function BusinessTypes() {
  return (
    <section className="zh-band" aria-labelledby="business-types-title">
      <div className="zh-wrap zh-sec">
        <span className="zh-kicker">BUILT AROUND YOUR SERVICE MODEL</span>
        <h2 id="business-types-title" className="zh-h2">Restaurant billing software for the way you serve</h2>
        <p className="zh-sec-sub">
          Choose an outlet type to see the operational workflow and plan that fit its day-to-day service.
        </p>
        <p className="zh-sec-sub">
          Compare the service workflow before choosing a plan.
        </p>

        <div className="zh-orows">
          {BUSINESSES.map((business) => (
            <a
              className="zh-row-link"
              href={business.href}
              key={business.id}
              aria-label={`Explore ${business.title}`}
            >
              <p className="zh-row-tag"><span aria-hidden="true">{business.number}</span><span>For {business.name}</span></p>
              <h3 className="zh-row-h3"><span>{business.title}</span></h3>
              <p className="zh-row-p">{business.summary}</p>
              <div className="zh-row-foot">
                <span className="zh-row-badge">{business.highlight}</span>
                <span className="zh-row-go">
                  <span>Explore</span>
                  <span className="zh-arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
