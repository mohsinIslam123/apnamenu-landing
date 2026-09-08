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
  const [form, setForm] = useState({ name: '', phone: '', type: '' })
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
    if (!form.type) e.type = 'Select business type'
    return e
  }

  function handleSubmit(event) {
    event.preventDefault()
    var e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    var msg = [
      'Hi, I want a free demo of Zipla POS.',
      '',
      'Name: ' + form.name,
      'Phone: ' + form.phone,
      'Type: ' + form.type,
    ].join('\n')
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer')
    if (typeof window.ziplaTrack === 'function') window.ziplaTrack('demo_submit')
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
    <section className="demo-form" id="demo" aria-labelledby="demo-title">
      <div className="section-head">
        <span className="eyebrow">Free Demo</span>
        <h2 id="demo-title">Can I see Zipla POS before I start?</h2>
        <p>Yes. Share your details and we’ll walk you through the relevant Zipla POS workflow on WhatsApp.</p>
      </div>
      <form className="demo-form-card" onSubmit={handleSubmit} noValidate>
        <div className="demo-form-grid">
          <div className="df-field">
            <label htmlFor="df-name">Your Name</label>
            <input id="df-name" type="text" placeholder="Ramesh Kumar" value={form.name} onChange={set('name')} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'df-name-error' : undefined} />
            {errors.name && <span id="df-name-error" className="df-err" role="alert">{errors.name}</span>}
          </div>
          <div className="df-field">
            <label htmlFor="df-phone">Phone Number</label>
            <input id="df-phone" type="tel" inputMode="tel" placeholder="9876543210" value={form.phone} onChange={set('phone')} autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'df-phone-error' : undefined} />
            {errors.phone && <span id="df-phone-error" className="df-err" role="alert">{errors.phone}</span>}
          </div>
        </div>
        <div className="df-field df-field--full">
          <label htmlFor="df-type">Business Type</label>
          <select id="df-type" value={form.type} onChange={set('type')} required aria-invalid={Boolean(errors.type)} aria-describedby={errors.type ? 'df-type-error' : undefined}>
            <option value="">Select your business type...</option>
            {TYPES.map(function(t) { return <option key={t} value={t}>{t}</option> })}
          </select>
          {errors.type && <span id="df-type-error" className="df-err" role="alert">{errors.type}</span>}
        </div>
        <button type="submit" className="btn-cta df-submit">
          Get Free Demo on WhatsApp
        </button>
        <p className="df-privacy-note">Submitting places your name, phone number and business type into a WhatsApp message to Zipla's demo number. WhatsApp opens the message, and you choose whether to send it. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>
        <p className="df-note" style={{ marginTop: '8px', fontSize: '13px', textAlign: 'center', opacity: 0.8 }}>✓ No credit card required</p>
      </form>
    </section>
  )
}
