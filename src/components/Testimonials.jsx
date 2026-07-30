import { useState } from 'react'
import { waLink } from '../constants.js'
function PlayIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
}
function VideoCard({ youtubeId, thumbnail, name, business }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="video-card">
      {playing ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`} title={`${name} story`} allow="autoplay; encrypted-media" allowFullScreen loading="lazy" />
      ) : (
        <button className="video-thumb" onClick={() => setPlaying(true)} aria-label={`Play: ${name}`}>
          <img src={thumbnail} alt="" loading="lazy" />
          <span className="video-play-icon"><PlayIcon /></span>
        </button>
      )}
      <div className="video-caption"><strong>{name}</strong><span>{business}</span></div>
    </div>
  )
}
export default function Testimonials({ videos = [] }) {
  return (
    <section className="testimonials" id="stories">
      <div className="section-head">
        <span className="eyebrow">Customer Stories</span>
        <h2>Real Restaurant Videos Jaldi Aayenge</h2>
        <p>ApnaMenu use kar rahe ho aur experience share karna chahte ho? WhatsApp pe video bhejo — yahan feature karenge.</p>
      </div>
      {videos.length === 0 ? (
        <div className="testimonial-empty">
          <div className="video-card video-card--empty">
            <span className="video-play-icon"><PlayIcon /></span>
            <p>Video slot khaali hai</p>
          </div>
          <a className="btn-ghost" href={waLink('Hi, main apna ApnaMenu experience video share karna chahta hoon')} target="_blank" rel="noopener noreferrer">Apna Video Bhejo</a>
        </div>
      ) : (
        <div className="testimonial-grid">{videos.map(v => <VideoCard key={v.id} {...v} />)}</div>
      )}
    </section>
  )
}
