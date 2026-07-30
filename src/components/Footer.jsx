export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="brand">
          <div className="brand-mark" style={{width:26,height:26}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a1408" strokeWidth="2.4" strokeLinecap="round">
              <line x1="5" y1="7" x2="19" y2="7"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="17" x2="14" y2="17"/>
            </svg>
          </div>
          <span className="brand-name" style={{fontSize:15}}>Apna<em>Menu</em></span>
        </div>
        <div className="footer-note">&#169; 2026 ApnaMenu. Made in India.</div>
        <div className="footer-links"><span>Privacy Policy — coming soon</span><span>Terms — coming soon</span></div>
      </div>
    </footer>
  )
}
