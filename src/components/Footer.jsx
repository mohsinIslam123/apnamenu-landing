export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="brand">
          <img src="/zipla-logo.webp" alt="Zipla POS" style={{height:'28px',display:'block',width:'auto'}} />
        </div>
        <div className="footer-note">&#169; 2026 Zipla POS. Made in India.</div>
        <div className="footer-links"><a href="/restaurant-pos-software/">Restaurant POS</a><a href="/cafe-pos-software/">Cafe POS</a><a href="/bakery-billing-software/">Bakery Billing</a><a href="/sweet-shop-billing/">Sweet Shop Billing</a><a href="/faq/">FAQ</a></div>
        <div className="footer-links"><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a></div>
      </div>
    </footer>
  )
}
