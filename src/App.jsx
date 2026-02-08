import Header from './components/Header'
import Hero from './components/Hero'
import AudienceSelector from './components/AudienceSelector'
import ProductValue from './components/ProductValue'
import PromptPreview from './components/PromptPreview'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Trust from './components/Trust'
import Footer from './components/Footer'

/**
 * AI Master Prompt - Premium Landing Page
 * 
 * SECTION ORDER (organized for conversion):
 * 1. Hero - Hook visitors immediately
 * 2. Audience Selector - Show relevance
 * 3. Product Value - Build desire
 * 4. Prompt Preview - Prove quality
 * 5. Pricing - Make the offer
 * 6. How It Works - Remove friction
 * 7. FAQ - Handle objections
 * 8. Trust - Build confidence
 * 9. Footer - Final links
 */

// Section divider component for visual separation
const SectionDivider = () => (
  <div className="section-divider" />
)

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Sticky Header */}
      <Header />

      {/* SECTION 1: Hero - Main headline and CTAs */}
      <Hero />

      <SectionDivider />

      {/* SECTION 2: Audience Selector - Who this product is for */}
      <AudienceSelector />

      <SectionDivider />

      {/* SECTION 3: Product Value - Why this matters */}
      <ProductValue />

      <SectionDivider />

      {/* SECTION 4: Prompt Preview - Sample prompts */}
      <PromptPreview />

      <SectionDivider />

      {/* SECTION 5: Pricing - Single pricing card */}
      <Pricing />

      <SectionDivider />

      {/* SECTION 6: How It Works - 3 simple steps */}
      <HowItWorks />

      <SectionDivider />

      {/* SECTION 7: FAQ - Accordion style */}
      <FAQ />

      {/* SECTION 8: Trust & Legal - Ethics, privacy, terms */}
      <Trust />

      {/* SECTION 9: Footer - Brand, links, social */}
      <Footer />
    </div>
  )
}

export default App
