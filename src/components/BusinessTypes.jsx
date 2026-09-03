function RestaurantIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
      <path d="M15 11v11" />
      <path d="M6 2v10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
      <line x1="8" y1="2" x2="8" y2="22" />
    </svg>
  )
}

function CafeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )
}

function BakeryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s2-1 4-1 4 1 4 1 2-1 4-1 4 1 4 1" />
      <path d="M2 21h20" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function SweetShopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
      <path d="M12 3v4" />
      <path d="M12 17v4" />
    </svg>
  )
}

function QsrIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function DhabaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3" />
      <line x1="9" y1="6" x2="15" y2="6" />
    </svg>
  )
}

const BUSINESSES = [
  {
    number: '01',
    name: 'Restaurants',
    title: 'Restaurant POS Software',
    summary: 'Table layout, Live KDS routing, QR ordering, split bills, and auto GST invoicing.',
    icon: RestaurantIcon,
    href: '/restaurant-pos-software/',
    highlight: 'Dine-in & Full Service',
  },
  {
    number: '02',
    name: 'Cafes',
    title: 'Cafe POS Software',
    summary: 'Rapid counter service, combo bills, barista token display, and fast UPI checkouts.',
    icon: CafeIcon,
    href: '/cafe-pos-software/',
    highlight: 'Fast Counter & Barista',
  },
  {
    number: '03',
    name: 'Bakeries',
    title: 'Bakery Billing Software',
    summary: 'Weighing scale sync, piece & pound pricing, advance custom cake booking, and batch tracking.',
    icon: BakeryIcon,
    href: '/bakery-billing-software/',
    highlight: 'Weight & Advance Orders',
  },
  {
    number: '04',
    name: 'Sweet Shops',
    title: 'Sweet Shop Billing Software',
    summary: 'High-speed mithai billing, automatic empty-box tare weight deduction, and rush-hour mode.',
    icon: SweetShopIcon,
    href: '/sweet-shop-billing-software/',
    highlight: 'Tare Weight & Box Pricing',
  },
  {
    number: '05',
    name: 'QSRs',
    title: 'QSR Billing Software',
    summary: '3-second rapid order punching, kitchen printer auto-routing, and digital token screen.',
    icon: QsrIcon,
    href: '/qsr-billing-software/',
    highlight: 'High-Speed Token Billing',
  },
  {
    number: '06',
    name: 'Dhabas',
    title: 'Dhaba Billing Software',
    summary: '100% offline Android tablet billing, Bluetooth 58mm printer slips, and daily cash audit.',
    icon: DhabaIcon,
    href: '/dhaba-billing-software/',
    highlight: 'Android & Bluetooth Print',
  },
]

export default function BusinessTypes() {
  return (
    <section className="biz-section" aria-labelledby="business-types-title">
      <style>{`
        .biz-section {
          padding: 5rem 1.25rem 5.5rem;
          max-width: 1180px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .biz-head {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2.5rem;
          align-items: end;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 860px) {
          .biz-head {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 2.5rem;
          }
        }
        .biz-eyebrow {
          color: #b45309;
          font-weight: 850;
          font-size: 0.82rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        [data-theme="dark"] .biz-eyebrow {
          color: #fbbf24;
        }
        .biz-title {
          font-weight: 850;
          font-size: clamp(2rem, 3.2vw, 2.5rem);
          line-height: 1.18;
          color: #09090b;
          margin: 0 0 0.85rem;
        }
        [data-theme="dark"] .biz-title {
          color: #f4f4f5;
        }
        .biz-sub-answer {
          font-size: 1.05rem;
          line-height: 1.6;
          font-weight: 650;
          color: #27272a;
          margin: 0;
        }
        [data-theme="dark"] .biz-sub-answer {
          color: #d4d4d8;
        }
        .biz-sub-instruction {
          font-size: 0.96rem;
          line-height: 1.6;
          font-weight: 600;
          color: #52525b;
          margin: 0;
        }
        [data-theme="dark"] .biz-sub-instruction {
          color: #a1a1aa;
        }
        .biz-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 980px) {
          .biz-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 620px) {
          .biz-grid {
            grid-template-columns: 1fr;
          }
        }
        .biz-card {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          border: 1.5px solid #e4e4e7;
          border-radius: 18px;
          padding: 1.75rem 1.65rem;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.22s ease, 
                      box-shadow 0.22s ease;
          position: relative;
          outline: none;
        }
        .biz-card:hover {
          transform: translateY(-4px);
          border-color: #d97706;
          box-shadow: 0 12px 28px rgba(217, 119, 6, 0.12);
        }
        .biz-card:focus-visible {
          border-color: #d97706;
          box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.35);
        }
        [data-theme="dark"] .biz-card {
          background-color: #18181b;
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        }
        [data-theme="dark"] .biz-card:hover {
          border-color: #fbbf24;
          box-shadow: 0 12px 28px rgba(251, 191, 36, 0.15);
        }
        [data-theme="dark"] .biz-card:focus-visible {
          border-color: #fbbf24;
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.35);
        }
        .biz-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .biz-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background-color: #fef3c7;
          color: #92400e;
          border: 1.5px solid #fcd34d;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .biz-card:hover .biz-icon-box {
          transform: scale(1.05);
        }
        [data-theme="dark"] .biz-icon-box {
          background-color: rgba(245, 158, 11, 0.18);
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.35);
        }
        .biz-card-num {
          font-size: 1.15rem;
          font-weight: 850;
          color: #a1a1aa;
          font-variant-numeric: tabular-nums;
        }
        [data-theme="dark"] .biz-card-num {
          color: #71717a;
        }
        .biz-card-tag {
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.6px;
          color: #b45309;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        [data-theme="dark"] .biz-card-tag {
          color: #fbbf24;
        }
        .biz-card-h3 {
          font-size: 1.25rem;
          font-weight: 850;
          line-height: 1.3;
          color: #09090b;
          margin: 0 0 0.65rem;
        }
        [data-theme="dark"] .biz-card-h3 {
          color: #f4f4f5;
        }
        .biz-card-body {
          font-size: 0.92rem;
          line-height: 1.6;
          font-weight: 600;
          color: #3f3f46;
          margin: 0 0 1.5rem;
          flex-grow: 1;
        }
        [data-theme="dark"] .biz-card-body {
          color: #d4d4d8;
        }
        .biz-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1.5px solid #f4f4f5;
        }
        [data-theme="dark"] .biz-card-footer {
          border-top-color: rgba(255, 255, 255, 0.08);
        }
        .biz-highlight-badge {
          font-size: 0.74rem;
          font-weight: 800;
          color: #52525b;
          background-color: #f4f4f5;
          border: 1px solid #e4e4e7;
          padding: 3px 8px;
          border-radius: 6px;
        }
        [data-theme="dark"] .biz-highlight-badge {
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
          color: #d4d4d8;
        }
        .biz-link-text {
          font-size: 0.92rem;
          font-weight: 800;
          color: #b45309;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .biz-card:hover .biz-link-text {
          gap: 0.65rem;
          color: #92400e;
        }
        [data-theme="dark"] .biz-link-text {
          color: #fbbf24;
        }
        [data-theme="dark"] .biz-card:hover .biz-link-text {
          color: #fef08a;
        }
      `}</style>

      <div className="biz-head">
        <div>
          <span className="biz-eyebrow">BUILT FOR YOUR SERVICE MODEL</span>
          <h2 id="business-types-title" className="biz-title">Who is Zipla POS for?</h2>
          <p className="biz-sub-answer">
            Zipla POS is built specifically for Indian food businesses that require fast billing, accurate GST calculation, and zero complexity.
          </p>
        </div>
        <p className="biz-sub-instruction">
          Select your outlet type below to explore how the billing flow, KOT auto-print, and weight scale adapt directly to your counter.
        </p>
      </div>

      <div className="biz-grid">
        {BUSINESSES.map((business) => {
          const Icon = business.icon
          return (
            <a
              className="biz-card"
              href={business.href}
              key={business.name}
              aria-label={`Explore ${business.title}`}
            >
              <div className="biz-card-top">
                <div className="biz-icon-box">
                  <Icon />
                </div>
                <span className="biz-card-num">{business.number}</span>
              </div>

              <div className="biz-card-tag">For {business.name}</div>
              <h3 className="biz-card-h3">{business.title}</h3>
              <p className="biz-card-body">{business.summary}</p>

              <div className="biz-card-footer">
                <span className="biz-highlight-badge">{business.highlight}</span>
                <span className="biz-link-text">
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}