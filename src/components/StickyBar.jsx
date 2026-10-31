import { BUY_NOW_URL } from '../constants.js'

// Quick buy bar, phones only (shown below 900 px by CSS, fixed to the bottom). Words: OFFER.md 3.7.
export default function StickyBar() {
  return (
    <div className="zh-sbar" role="region" aria-label="Quick buy">
      <div className="zh-sbar-l">
        <span className="zh-sbar-lab">Machine + 12 months of Zipla POS</span>
        <span className="zh-sbar-p">₹4,999</span>
      </div>
      <a className="btn btn-gold zh-btn zh-btn-gold" href={BUY_NOW_URL} target="_blank" rel="noopener noreferrer">Buy now</a>
    </div>
  )
}
