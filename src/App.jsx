import Header from './components/Header'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white font-mono selection:bg-[#00FF00] selection:text-black">
      <Header />
      <Hero />
      <BentoGrid />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
