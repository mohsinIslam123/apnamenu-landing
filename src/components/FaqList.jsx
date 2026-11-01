// The FAQ list of the Round 7 business pages (tokens/DESIGN_SYSTEM.md 6 and 13.3).
// The six pages each build the same <details> list from their own `faqs` array, which also feeds their JSON-LD.
// This component only draws that array. Questions and answers are the page's own text, in the page's own order.
// The question is plain text inside <summary>, as in the baseline (no heading is added, BRIEF R5). The answer is always in the HTML.
// `heading` ("h2" or "h3", Stage 4): where the page's own question already is a heading (the FAQ page has h2, the contact page h3),
// that heading moves inside <summary> with the same text, level and order (BRIEF 5, components by content shape). The default is the plain <span>.
// The plus sign is a decorative SVG (aria-hidden), turned by CSS when the item is open.
export default function FaqList({ faqs, heading }) {
  const Q = heading || 'span'
  return (
    <div className="zb-faq-r">
      <div className="zb-faq-list">
        {faqs.map((faq) => (
          <details className="zb-faq" key={faq.question}>
            <summary>
              <Q className="zb-q">{faq.question}</Q>
              <svg className="zb-plus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
