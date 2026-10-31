import { BUY_NOW_URL, ASK_WHATSAPP_URL } from '../constants.js'

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

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

// Round 7 Home hero (decisions D1 and D3). DOM order: the repo's text first (H1 first, BRIEF A5), then the machine stage,
// then the offer block, then the repo's own product figure. On phones CSS grid areas draw the machine stage first.
// From 900 px the offer block is drawn above the repo's "Short answer" paragraphs so that price and Buy now stay in the first screen (DOM order unchanged).
// The repo owns every sentence and button. OFFER.md owns the machine eyebrow, the machine paragraph and the offer block.
export default function Hero({ takeaway, planSummary }) {
  return (
    <section className="zh-hero zh-wrap" aria-labelledby="hero-title">
      <div className="zh-hero-top">
        <p className="zh-eyebrow"><span className="zh-dot" aria-hidden="true" />Zipla Billing Machine</p>
        <p className="zh-eyebrow zh-eyebrow--sub">For Indian food businesses</p>
        <h1 id="hero-title" className="zh-h1">Restaurant <span className="zh-hl">Billing Software</span> for India</h1>
        <p className="zh-sub">Billing, GST invoices, QR ordering and KDS for Indian restaurants, cafes, QSRs, bakeries, sweet shops and dhabas.</p>
        <p className="zh-sub2">Zipla Billing Machine is a 58mm Bluetooth printer. It comes with 12 months of Zipla POS for ₹4,999. Zipla POS is simple, fast billing software made for your phone.</p>
      </div>

      <div className="zh-hero-more">
        <p className="zh-takeaway"><strong>Short answer:</strong> {takeaway}</p>
        {planSummary && <p className="zh-takeaway"><strong>Complete plan:</strong> {planSummary}</p>}
        <div className="zh-hero-ctas">
          <a className="zh-btn zh-btn-ghost" href="/#demo">Book a WhatsApp Demo</a>
        </div>
      </div>

      <div className="zh-hero-r">
        <div className="zh-stage">
          <div className="zh-mach">
            <div
              className="zh-paper zh-pa"
              role="img"
              aria-label="Sample GST bill: Paneer Masala 280.00, Butter Naan x3 150.00, Lime Soda x2 140.00, subtotal 570.00, GST 5 percent 28.50, total 598.50"
            >
              <div className="zh-rcp">
                <div className="zh-rcp-h">Sample bill</div>
                <div className="zh-rcp-rule" />
                <div className="zh-rcp-row"><span className="zh-rcp-n">Paneer Masala</span><span className="zh-rcp-l" /><span className="zh-rcp-a">280.00</span></div>
                <div className="zh-rcp-row"><span className="zh-rcp-n">Butter Naan x3</span><span className="zh-rcp-l" /><span className="zh-rcp-a">150.00</span></div>
                <div className="zh-rcp-row"><span className="zh-rcp-n">Lime Soda x2</span><span className="zh-rcp-l" /><span className="zh-rcp-a">140.00</span></div>
                <div className="zh-rcp-rule" />
                <div className="zh-rcp-row"><span className="zh-rcp-n">Subtotal</span><span className="zh-rcp-l" /><span className="zh-rcp-a">570.00</span></div>
                <div className="zh-rcp-row"><span className="zh-rcp-n">GST 5%</span><span className="zh-rcp-l" /><span className="zh-rcp-a">28.50</span></div>
                <div className="zh-rcp-row zh-rcp-tot"><span className="zh-rcp-n">TOTAL</span><span className="zh-rcp-l" /><span className="zh-rcp-a">598.50</span></div>
                <div className="zh-rcp-rule" />
                <div className="zh-rcp-foot">Thank you, visit again</div>
              </div>
            </div>
            <img
              className="zh-mach-img"
              src="/images/hero-printer-billing-machine.webp"
              alt="Zipla Billing Machine, a 58mm Bluetooth thermal printer"
              width="760"
              height="1025"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="zh-phoneh">
            <img
              src="/images/screen-dashboard.webp"
              alt="Zipla POS dashboard on a phone with Revenue Analytics, Terminal POS Billing, Live Kitchen Display and Customer Menu"
              width="720"
              height="1465"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="zh-buy" id="buy">
        <div className="zh-offer">
          <div className="zh-pp-head">
            <p className="zh-pills-l">Zipla Billing Machine with 12 months of Zipla POS</p>
            <a className="zh-lnk zh-pp-link" href="/pricing/">See pricing</a>
          </div>
          <div className="zh-rc">
            <div className="zh-slip">
              <div className="zh-slip-t">Zipla Billing Machine</div>
              <div className="zh-rule" />
              <div className="zh-slip-r"><span>1 × 58mm Bluetooth printer</span><span className="zh-lead" aria-hidden="true" /><span className="zh-slip-tag">included</span></div>
              <div className="zh-slip-r"><span>1 × Zipla POS, 12 months</span></div>
              <div className="zh-rule" />
              <div className="zh-slip-tot"><span className="zh-slip-tl">Total</span><span className="zh-slip-n">₹4,999</span></div>
              <p className="zh-slip-note">To continue after 1 year, Zipla POS is ₹4,999 a year.</p>
            </div>
            <div className="zh-zig" aria-hidden="true" />
          </div>
          <div className="zh-cta">
            <a className="btn btn-gold zh-btn zh-btn-gold zh-btn-lg" href={BUY_NOW_URL} target="_blank" rel="noopener noreferrer">Buy now</a>
            <a className="zh-btn zh-btn-ghost zh-btn-lg" href={ASK_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><ChatIcon /> Ask on WhatsApp</a>
          </div>
          <p className="zh-trial">
            <a className="zh-lnk" href="https://app.zipla.in/register">Start 14-Day Free Trial</a>
            <span className="zh-tick"><span aria-hidden="true">✓</span> No credit card required</span>
          </p>
        </div>
        <ul className="zh-facts">
          <li><span aria-hidden="true">✓</span> 14-day free trial</li>
          <li><span aria-hidden="true">✓</span> Offline billing after menu loads; online payments need internet</li>
        </ul>
        <ul className="zh-chips">
          <li>Supported thermal printing</li>
          <li>Android, tablet &amp; Windows PC</li>
        </ul>
      </div>

      <div className="zh-proof">
        <figure className="zh-proof-fig" aria-labelledby="hero-product-caption">
          <div className="zh-device">
            <div className="zh-device-bar">
              <span className="zh-device-brand"><span aria-hidden="true" />zipla POS</span>
              <span>Built around your service workflow</span>
            </div>
            <img
              src="/screenshots/ss-new-order.webp"
              alt="Zipla POS new-order billing interface"
              width="1232"
              height="860"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="zh-callouts">
            <div className="zh-callout">
              <span className="zh-callout-icon"><BoltIcon /></span>
              <span><strong>Counter billing</strong><small>GST invoices and payment marking</small></span>
            </div>
            <div className="zh-callout">
              <span className="zh-callout-icon"><KitchenIcon /></span>
              <span><strong>Kitchen handoff</strong><small>KDS for active order queues</small></span>
            </div>
          </div>
          <figcaption id="hero-product-caption" className="zh-proof-cap">Actual Zipla POS order billing and counter interface.</figcaption>
        </figure>
      </div>
    </section>
  )
}
