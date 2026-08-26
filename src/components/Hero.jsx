function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 10 3.1 3.1L15.5 5.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m13.2 2-8 11h6l-.4 9 8-12h-6.1l.5-8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function KitchenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8M12 17v4M7 9h10M7 13h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Zipla POS for Indian food businesses</span>
          <h1 id="hero-title">Restaurant POS Billing Software for India</h1>
          <p className="sub">
            <strong>Key takeaway:</strong> Zipla POS is restaurant POS billing software for India, built for restaurants, cafés, bakeries, sweet shops, QSRs and dhabas. Use it for counter billing, GST invoices and kitchen-order workflows.
          </p>
          <div className="hero-ctas">
            <a className="btn-cta" href="https://app.zipla.in/register">Start 14-Day Free Trial</a>
            <a className="btn-ghost" href="/#demo">Book Free WhatsApp Demo</a>
          </div>
          <ul className="hero-assurances" aria-label="Trial details">
            <li><CheckIcon />14-day free trial</li>
            <li><CheckIcon />No card required</li>
            <li><CheckIcon />Android, tablet, and desktop</li>
          </ul>
        </div>

        <figure className="hero-product" aria-labelledby="hero-product-caption">
          <div className="hero-product-glow" aria-hidden="true" />
          <div className="hero-device">
            <div className="hero-device-bar">
              <span className="hero-device-brand"><span aria-hidden="true" />zipla POS</span>
              <span className="hero-device-label">One workspace</span>
            </div>
            <img
              src="/screenshots/ss-multi-device.webp"
              alt="Zipla POS dashboard shown on desktop, tablet, and Android phone"
              width="1232"
              height="860"
              decoding="async"
            />
          </div>
          <div className="hero-callout hero-callout--billing">
            <span className="hero-callout-icon"><BoltIcon /></span>
            <span><strong>Counter billing</strong><small>GST invoices in one flow</small></span>
          </div>
          <div className="hero-callout hero-callout--kitchen">
            <span className="hero-callout-icon"><KitchenIcon /></span>
            <span><strong>Kitchen orders</strong><small>Live KDS order queue</small></span>
          </div>
          <figcaption id="hero-product-caption">Actual Zipla POS product screenshot shown across desktop, tablet, and Android.</figcaption>
        </figure>
      </div>
    </section>
  )
}