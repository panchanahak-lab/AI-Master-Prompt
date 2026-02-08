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
 * A high-conversion, interactive website for selling the 
 * "AI Master Prompt – 300+ AI Prompts Mega Pack" digital product.
 * 
 * Tech Stack:
 * - React 18 + Vite
 * - Tailwind CSS
 * - Framer Motion (animations)
 * 
 * CUSTOMIZATION GUIDE:
 * 
 * Colors:
 * - Edit CSS variables in /src/index.css (lines 18-42)
 * - Primary: --primary-start, --primary-end
 * - Accent: --accent-pink, --accent-cyan, --accent-green
 * 
 * Fonts:
 * - Edit Google Font import in /src/index.css (line 15)
 * - Update font-family in body styles
 * 
 * Content:
 * - Hero text: /src/components/Hero.jsx
 * - Audience data: /src/components/AudienceSelector.jsx (lines 16-89)
 * - Benefits: /src/components/ProductValue.jsx (lines 12-49)
 * - Sample prompts: /src/components/PromptPreview.jsx (lines 15-60)
 * - Pricing features: /src/components/Pricing.jsx (lines 13-21)
 * - FAQ questions: /src/components/FAQ.jsx (lines 12-67)
 * 
 * Payment Link:
 * - Edit paymentLink in /src/components/Pricing.jsx (line 25)
 * - WhatsApp link in /src/components/HowItWorks.jsx (line 99)
 * 
 * Contact Email:
 * - /src/components/FAQ.jsx (line 115)
 * - /src/components/Footer.jsx (line 41)
 */

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section - Main headline and CTAs */}
      <Hero />

      {/* Audience Selector - Who this product is for */}
      <AudienceSelector />

      {/* Product Value - Why this matters */}
      <ProductValue />

      {/* Prompt Preview - Sample prompts with expand/collapse */}
      <PromptPreview />

      {/* Pricing Section - Single pricing card */}
      <Pricing />

      {/* How It Works - 3 simple steps */}
      <HowItWorks />

      {/* FAQ Section - Accordion style */}
      <FAQ />

      {/* Trust & Legal - Ethics, privacy, terms */}
      <Trust />

      {/* Footer - Brand, links, social */}
      <Footer />
    </div>
  )
}

export default App
