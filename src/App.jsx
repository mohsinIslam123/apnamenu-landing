import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Workflow from './components/Workflow.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

// Jab real customer video mile, yahan add karo:
// { id: 'uid', youtubeId: 'YT_ID', thumbnail: '/testimonials/name.jpg', name: 'Owner', business: 'Restaurant' }
const CUSTOMER_VIDEOS = []

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <Workflow />
      <Features />
      <Testimonials videos={CUSTOMER_VIDEOS} />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
