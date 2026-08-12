export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="brand">
          <img src="/zipla-logo.webp" alt="Zipla POS" style={{height:'28px',display:'block',width:'auto'}} />
        </div>
        <div className="footer-note">&#169; 2026 Zipla POS. Made in India.</div>
        <div className="footer-links"><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a></div>
      </div>
    </footer>
  )
}
