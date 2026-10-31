export default function Footer() {
  return (
    <footer className="zp-foot">
      <div className="zp-wrap zp-foot-in">
        <div className="zp-foot-brand">
          <a className="zp-foot-logo" href="/"><img src="/zipla-logo.webp" alt="Zipla POS" width="640" height="211" loading="lazy" decoding="async" /></a>
          <div className="zp-foot-note">&#169; 2026 Zipla POS. Made in India.</div>
        </div>
        <nav className="zp-foot-nav" aria-label="Footer">
          <div className="zp-foot-row"><a className="zp-flink" href="/restaurant-pos-software/">Restaurant POS</a><a className="zp-flink" href="/cafe-pos-software/">Cafe POS</a><a className="zp-flink" href="/bakery-billing-software/">Bakery Billing</a><a className="zp-flink" href="/sweet-shop-billing/">Sweet Shop Billing</a><a className="zp-flink" href="/qsr-billing-software/">QSR Billing</a><a className="zp-flink" href="/dhaba-billing-software/">Dhaba Billing</a><a className="zp-flink" href="/pricing/">Pricing</a><a className="zp-flink" href="/blog/">Blog</a><a className="zp-flink" href="/faq/">FAQ</a></div>
          <div className="zp-foot-row"><a className="zp-flink" href="/privacy-policy/">Privacy Policy</a><button type="button" id="zipla-consent-settings" className="zp-flink">Privacy settings</button><a className="zp-flink" href="/terms-and-conditions/">Terms &amp; Conditions</a><a className="zp-flink" href="/refund-policy/">Refund Policy</a><a className="zp-flink" href="/contact-us/">Contact Us</a></div>
        </nav>
      </div>
    </footer>
  )
}
