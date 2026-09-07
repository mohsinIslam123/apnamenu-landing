import React from 'react'
import IndustryShopScene from './IndustryShopScene.jsx'

const BUSINESSES = [
  {
    id: 'restaurant',
    number: '01',
    name: 'Restaurants',
    title: 'Restaurant POS Software',
    summary: 'Counter and table billing, KDS workflow, QR ordering, and GST invoicing.',
    href: '/restaurant-pos-software/',
    highlight: 'Dine-in & Full Service',
  },
  {
    id: 'cafe',
    number: '02',
    name: 'Cafes',
    title: 'Cafe POS Software',
    summary: 'Counter billing, payment-mode tracking, and an optional kitchen workflow for café service.',
    href: '/cafe-pos-software/',
    highlight: 'Fast Counter & Barista',
  },
  {
    id: 'bakery',
    number: '03',
    name: 'Bakeries',
    title: 'Bakery Billing Software',
    summary: 'Billing for items sold by weight, piece, or fixed price at a bakery counter.',
    href: '/bakery-billing-software/',
    highlight: 'Weight & Piece Billing',
  },
  {
    id: 'sweet-shop',
    number: '04',
    name: 'Sweet Shops',
    title: 'Sweet Shop Billing Software',
    summary: 'Billing for sweets and other counter items sold by weight, piece, or fixed price.',
    href: '/sweet-shop-billing/',
    highlight: 'Weight & Piece Billing',
  },
  {
    id: 'qsr',
    number: '05',
    name: 'QSRs',
    title: 'QSR Billing Software',
    summary: 'Counter billing with an optional kitchen handoff for quick-service food businesses.',
    href: '/qsr-billing-software/',
    highlight: 'Counter & Kitchen Workflow',
  },
  {
    id: 'dhaba',
    number: '06',
    name: 'Dhabas',
    title: 'Dhaba Billing Software',
    summary: 'Counter billing after the menu loads, payment-mode tracking, and supported thermal printing.',
    href: '/dhaba-billing-software/',
    highlight: 'Android & Bluetooth Print',
  },
]

export default function BusinessTypes() {
  return (
    <section className="biz-section" aria-labelledby="business-types-title">
      <style>{`
        .biz-section {
          --biz-card-bg: #ffffff;
          --biz-card-border: #e4e4e7;
          --biz-card-text: #09090b;
          --biz-card-muted: #3f3f46;
          --biz-card-subtle: #52525b;
          --biz-card-divider: #f4f4f5;
          --biz-card-badge-bg: #f4f4f5;
          --biz-card-badge-border: #e4e4e7;
          --biz-card-accent: #b45309;
          --biz-scene-bg: #f1f3f8;
          --biz-scene-wall: #e4e7f0;
          --biz-scene-wall-accent: #d8dce8;
          --biz-scene-floor: #cbd3e1;
          --biz-scene-structure: #94a3b8;
          --biz-scene-structure-dark: #64748b;
          --biz-scene-furniture-dark: #334155;
          --biz-scene-wood: #b45309;
          --biz-scene-wood-dark: #78350f;
          --biz-scene-wood-light: #d97706;
          --biz-scene-gold: #f5a623;
          --biz-scene-amber: #d97706;
          --biz-scene-warm: #fed7aa;
          --biz-scene-accent-warm: #fed7aa;
          --biz-scene-cream: #fffbeb;
          --biz-scene-green: #15803d;
          --biz-scene-red: #dc2626;
          --biz-scene-terracotta: #c2410c;
          --biz-scene-glass: rgba(241, 245, 249, 0.75);
          --biz-scene-glass-border: rgba(148, 163, 184, 0.65);
          --biz-scene-shadow: rgba(15, 23, 42, 0.14);
          --biz-scene-line: #cbd5e1;
          --biz-scene-glow: rgba(245, 166, 35, 0.24);
          padding: 5rem 1.25rem 5.5rem;
          max-width: 1180px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        html.dark .biz-section,
        body.dark .biz-section,
        .dark .biz-section,
        [data-theme=dark] .biz-section,
        html[data-theme=dark] .biz-section {
          --biz-card-bg: #141417;
          --biz-card-border: #2a2a2f;
          --biz-card-text: #f4f4f5;
          --biz-card-muted: #d4d4d8;
          --biz-card-subtle: #a1a1aa;
          --biz-card-divider: rgba(255, 255, 255, 0.09);
          --biz-card-badge-bg: rgba(255, 255, 255, 0.08);
          --biz-card-badge-border: rgba(255, 255, 255, 0.14);
          --biz-card-accent: #fbbf24;
          --biz-scene-bg: #1b1b25;
          --biz-scene-wall: #282834;
          --biz-scene-wall-accent: #343445;
          --biz-scene-floor: #20202a;
          --biz-scene-structure: #55556c;
          --biz-scene-structure-dark: #383849;
          --biz-scene-furniture-dark: #252532;
          --biz-scene-wood: #8f3d0b;
          --biz-scene-wood-dark: #4a1d05;
          --biz-scene-wood-light: #b45309;
          --biz-scene-gold: #f5a623;
          --biz-scene-amber: #fbbf24;
          --biz-scene-warm: #9a3412;
          --biz-scene-accent-warm: #9a3412;
          --biz-scene-cream: #fef3c7;
          --biz-scene-green: #16a34a;
          --biz-scene-red: #ef4444;
          --biz-scene-terracotta: #ea580c;
          --biz-scene-glass: rgba(45, 45, 60, 0.65);
          --biz-scene-glass-border: rgba(245, 166, 35, 0.42);
          --biz-scene-shadow: rgba(0, 0, 0, 0.44);
          --biz-scene-line: #454558;
          --biz-scene-glow: rgba(245, 166, 35, 0.32);
        }

        .biz-head {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2.5rem;
          align-items: end;
          margin-bottom: 3.5rem;
        }

        .biz-eyebrow {
          display: inline-block;
          margin-bottom: 0.5rem;
          color: var(--biz-card-accent);
          font-size: 0.82rem;
          font-weight: 850;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .biz-title {
          margin: 0 0 0.85rem;
          color: var(--biz-card-text);
          font-family: var(--display);
          font-size: clamp(2rem, 3.2vw, 2.5rem);
          font-weight: 850;
          line-height: 1.18;
        }

        .biz-sub-answer,
        .biz-sub-instruction {
          margin: 0;
          line-height: 1.6;
        }

        .biz-sub-answer {
          color: var(--biz-card-text);
          font-size: 1.05rem;
          font-weight: 650;
        }

        .biz-sub-instruction {
          color: var(--biz-card-subtle);
          font-size: 0.96rem;
          font-weight: 600;
        }

        .biz-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.35rem;
          align-items: stretch;
        }

        .biz-card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 64%) minmax(0, 36%);
          min-height: 282px;
          overflow: hidden;
          border: 1px solid var(--biz-card-border);
          border-radius: 16px;
          background: var(--biz-card-bg);
          color: inherit;
          text-decoration: none;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }

        html.dark .biz-card,
        body.dark .biz-card,
        .dark .biz-card,
        [data-theme=dark] .biz-card,
        html[data-theme=dark] .biz-card {
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
        }

        .biz-card:hover {
          border-color: var(--biz-card-accent);
          box-shadow: 0 14px 32px rgba(217, 119, 6, 0.16);
          transform: translateY(-2px);
        }

        .biz-card:focus-visible {
          border-color: var(--biz-card-accent);
          box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.32), 0 14px 32px rgba(217, 119, 6, 0.12);
          outline: none;
        }

        .biz-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 1.2rem 1.2rem 1.05rem;
        }

        .biz-card-copy {
          min-width: 0;
        }

        .biz-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          min-height: 1.2rem;
          margin-bottom: 0.85rem;
        }

        .biz-mobile-scene {
          display: none;
        }

        .biz-card-num {
          color: var(--biz-card-subtle);
          font-family: var(--mono);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.2;
          font-variant-numeric: tabular-nums;
        }

        .biz-card-tag {
          margin-bottom: 0.38rem;
          color: var(--biz-card-accent);
          font-size: 0.7rem;
          font-weight: 850;
          letter-spacing: 0.65px;
          line-height: 1.3;
          text-transform: uppercase;
        }

        .biz-card-h3 {
          margin: 0 0 0.62rem;
          color: var(--biz-card-text);
          font-family: var(--display);
          font-size: clamp(1.18rem, 1.55vw, 1.42rem);
          font-weight: 850;
          letter-spacing: -0.2px;
          line-height: 1.17;
        }

        .biz-card-body {
          margin: 0;
          color: var(--biz-card-muted);
          font-size: 0.79rem;
          font-weight: 550;
          line-height: 1.58;
        }

        .biz-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.55rem 0.75rem;
          flex-wrap: wrap;
          min-width: 0;
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--biz-card-divider);
        }

        .biz-highlight-badge {
          display: inline-flex;
          align-items: center;
          min-width: 0;
          max-width: 100%;
          padding: 0.28rem 0.58rem;
          overflow: hidden;
          border: 1px solid var(--biz-card-badge-border);
          border-radius: 999px;
          background: var(--biz-card-badge-bg);
          color: var(--biz-card-muted);
          font-size: 0.65rem;
          font-weight: 750;
          line-height: 1.2;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .biz-link-text {
          display: inline-flex;
          align-items: center;
          justify-content: flex-end;
          min-height: 44px;
          gap: 0.42rem;
          flex-shrink: 0;
          color: var(--biz-card-accent);
          font-size: 0.78rem;
          font-weight: 850;
          white-space: nowrap;
          transition: color 0.2s ease, gap 0.2s ease;
        }

        .biz-link-arrow {
          font-size: 1.05rem;
          line-height: 1;
        }

        .biz-card:hover .biz-link-text {
          gap: 0.68rem;
        }

        .biz-card-visual {
          position: relative;
          z-index: 0;
          display: flex;
          align-items: stretch;
          justify-content: center;
          min-width: 0;
          overflow: hidden;
          border-left: 1px solid var(--biz-card-border);
          background: var(--biz-scene-bg);
        }

        .biz-card-visual::before {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(90deg, rgba(10, 11, 18, 0.08), transparent 30%);
          content: '';
          pointer-events: none;
        }

        .biz-scene-wrap {
          position: relative;
          z-index: 0;
          width: 100%;
          height: 100%;
          min-height: 100%;
          transform: scale(1.02);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .biz-card:hover .biz-scene-wrap {
          transform: scale(1.065);
        }

        .biz-scene {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
        }

        @media (min-width: 901px) {
          .biz-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 541px) and (max-width: 900px) {
          .biz-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .biz-card {
            grid-template-columns: minmax(0, 68%) minmax(0, 32%);
            min-height: 274px;
          }

          .biz-card-content {
            padding: 1.1rem 1.05rem 0.95rem;
          }

          .biz-card-h3 {
            font-size: 1.2rem;
          }

          .biz-card-body {
            font-size: 0.76rem;
          }
        }

        @media (max-width: 860px) {
          .biz-head {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 2.5rem;
          }
        }

        @media (max-width: 540px) {
          .biz-section {
            padding: 4rem 1rem 4.5rem;
          }

          .biz-grid {
            gap: 1rem;
          }

          .biz-card {
            display: flex;
            min-height: 0;
            flex-direction: column;
          }

          .biz-card-content {
            width: 100%;
            padding: 0.9rem 0.95rem 0.75rem;
          }

          .biz-card-head {
            align-items: flex-start;
            justify-content: space-between;
            min-height: 62px;
            margin-bottom: 0.72rem;
          }

          .biz-mobile-scene {
            display: flex;
            align-items: center;
            justify-content: center;
            width: clamp(96px, 30vw, 112px);
            height: clamp(60px, 18vw, 70px);
            overflow: hidden;
            border: 1px solid var(--biz-card-border);
            border-radius: 10px;
            background: var(--biz-scene-bg);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
            pointer-events: none;
          }

          .biz-card-h3 {
            margin-bottom: 0.55rem;
            font-size: clamp(1.2rem, 5.1vw, 1.42rem);
            line-height: 1.2;
          }

          .biz-card-body {
            font-size: 0.78rem;
            line-height: 1.55;
          }

          .biz-card-footer {
            margin-top: 0.85rem;
            padding-top: 0.72rem;
          }

          .biz-card-visual {
            display: none;
          }
        }

        @media (hover: none) {
          .biz-card:hover {
            transform: none;
          }

          .biz-card:hover .biz-scene-wrap {
            transform: scale(1.02);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .biz-card,
          .biz-scene-wrap,
          .biz-link-text {
            transition-duration: 0.01ms;
          }
        }
      `}</style>

      <div className="biz-head">
        <div>
          <span className="biz-eyebrow">BUILT FOR YOUR SERVICE MODEL</span>
          <h2 id="business-types-title" className="biz-title">Who is Zipla POS for?</h2>
          <p className="biz-sub-answer">
            Zipla POS is built for Indian food businesses that need counter billing, GST invoices, and a clear operating workflow.
          </p>
        </div>
        <p className="biz-sub-instruction">
          Select your outlet type below to compare the billing workflow relevant to your service model.
        </p>
      </div>

      <div className="biz-grid">
        {BUSINESSES.map((business) => (
          <a
            className="biz-card"
            href={business.href}
            key={business.id}
            aria-label={`Explore ${business.title}`}
          >
            <div className="biz-card-content">
              <div className="biz-card-copy">
                <div className="biz-card-head">
                  <div className="biz-mobile-scene" aria-hidden="true">
                    <IndustryShopScene id={business.id} />
                  </div>
                  <span className="biz-card-num" aria-hidden="true">{business.number}</span>
                </div>

                <div className="biz-card-tag">For {business.name}</div>
                <h3 className="biz-card-h3">{business.title}</h3>
                <p className="biz-card-body">{business.summary}</p>
              </div>

              <div className="biz-card-footer">
                <span className="biz-highlight-badge">{business.highlight}</span>
                <span className="biz-link-text">
                  <span>Explore</span>
                  <span className="biz-link-arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </div>

            <div className="biz-card-visual" aria-hidden="true">
              <div className="biz-scene-wrap">
                <IndustryShopScene id={business.id} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
