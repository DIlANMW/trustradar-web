import Hero from './components/Hero'
import FloatingNavbar from './components/FloatingNavbar'
import Features from './components/Features'
import Comparison from './components/Comparison'
import ChromeCTA from './components/ChromeCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <FloatingNavbar />
      <Hero />
      <Features />
      <Comparison />
      <ChromeCTA />
      <Footer />
    </div>
  )
}
