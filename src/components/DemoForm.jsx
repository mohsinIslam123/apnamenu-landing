import { useState } from 'react'
import { WHATSAPP_NUMBER } from '../constants.js'

const TYPES = [
  'Restaurant / Dhaba',
  'Cafe',
  'Bakery',
  'Sweet Shop / Mithai',
  'QSR / Fast Food',
  'Cloud Kitchen',
  'Other',
]

export default function DemoForm() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', business: '', type: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function set(k) {
    return function(e) {
      var val = e.target.value
      setForm(function(f) { return Object.assign({}, f, { [k]: val }) })
      setErrors(function(er) { return Object.assign({}, er, { [k]: '' }) })
    }
  }

  function validate() {
    var e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = '10-digit number required'
    if (!form.city.trim()) e.city = 'City required'
    if (!form.business.trim()) e.business = 'Business name required'
    if (!form.type) e.type = 'Select business type'
    return e
  }

  function handleSubmit() {
    var e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    var msg = [
      'Hi, I want a free demo of Zipla POS.',
      '',
      'Name: ' + form.name,
      'Phone: ' + form.phone,
      'City: ' + form.city,
      'Business: ' + form.business,
      'Type: ' + form.type,
    ].join('\n')
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="demo-form" id="demo">
        <div className="demo-form-card demo-form-thanks">
          <div className="df-thanks-icon">✓</div>
          <h3>WhatsApp Opening...</h3>
          <p>We opened WhatsApp with your details. If it did not open, <a href={'https://wa.me/' + WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer">tap here</a>.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="demo-form" id="demo">
      <div className="section-head">
        <span className="eyebrow">Free Demo</span>
        <h2>See Zipla POS before you decide</h2>
        <p>Share your details and we’ll walk you through the relevant Zipla POS workflow on WhatsApp.</p>
      </div>
      <div className="demo-form-card">
        <div className="demo-form-grid">
          <div className="df-field">
            <label htmlFor="df-name">Your Name</label>
            <input id="df-name" type="text" placeholder="Ramesh Kumar" value={form.name} onChange={set('name')} />
            {errors.name && <span className="df-err">{errors.name}</span>}
          </div>
          <div className="df-field">
            <label htmlFor="df-phone">Phone Number</label>
            <input id="df-phone" type="tel" placeholder="9876543210" value={form.phone} onChange={set('phone')} />
            {errors.phone && <span className="df-err">{errors.phone}</span>}
          </div>
          <div className="df-field">
            <label htmlFor="df-city">City</label>
            <input id="df-city" type="text" placeholder="Delhi, Mumbai, Lucknow..." value={form.city} onChange={set('city')} />
            {errors.city && <span className="df-err">{errors.city}</span>}
          </div>
          <div className="df-field">
            <label htmlFor="df-business">Business Name</label>
            <input id="df-business" type="text" placeholder="Sharma Dhaba" value={form.business} onChange={set('business')} />
            {errors.business && <span className="df-err">{errors.business}</span>}
          </div>
        </div>
        <div className="df-field df-field--full">
          <label htmlFor="df-type">Business Type</label>
          <select id="df-type" value={form.type} onChange={set('type')}>
            <option value="">Select your business type...</option>
            {TYPES.map(function(t) { return <option key={t} value={t}>{t}</option> })}
          </select>
          {errors.type && <span className="df-err">{errors.type}</span>}
        </div>
        <button className="btn-cta df-submit" onClick={handleSubmit}>
          Get Free Demo on WhatsApp
        </button>
        <p className="df-note">Free demo. No card required.</p>
      </div>
    </section>
  )
}
