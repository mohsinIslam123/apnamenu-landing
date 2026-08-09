import { waLink } from '../constants.js'
export default function FinalCTA() {
  return (
    <div className="final-cta">
      <h2>14-Day Free Trial — No Card Required</h2>
      <p>Message us on WhatsApp and get started today.</p>
      <a className="btn-cta" href={waLink('Hi, I would like a 14-day free demo of Zipla POS')} target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
    </div>
  )
}
