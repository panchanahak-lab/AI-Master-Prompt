import Header from './components/Header'
import Hero from './components/Hero'
import AudienceSelector from './components/AudienceSelector'
import BentoGrid from './components/BentoGrid'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

/* ===================================================
   MOCK DATA — Edit these objects to update content
   =================================================== */

export const AUDIENCE_DATA = [
  {
    id: 'students',
    label: 'Students',
    icon: '🎓',
    before: {
      title: 'Before AI Master Prompt',
      prompt: 'Write an essay about climate change.',
      result: 'Generic, surface-level response that reads like Wikipedia.',
    },
    after: {
      title: 'After AI Master Prompt',
      prompt: 'Act as an environmental science professor. Write a 1500-word argumentative essay on the economic impact of climate change on developing nations. Use recent data from 2023-2024. Include counter-arguments and rebuttals. Cite sources.',
      result: 'Research-grade essay with data, nuance, and proper structure that gets top marks.',
    },
  },
  {
    id: 'jobseekers',
    label: 'Job Seekers',
    icon: '💼',
    before: {
      title: 'Before AI Master Prompt',
      prompt: 'Help me write a resume.',
      result: 'A bland, template-style resume with no personality or keyword optimization.',
    },
    after: {
      title: 'After AI Master Prompt',
      prompt: 'Act as a senior tech recruiter at Google. Review and rewrite my resume for a Senior Frontend Developer role. Optimize for ATS keywords. Quantify achievements using the STAR method. My experience: [paste here].',
      result: 'ATS-optimized, achievement-focused resume that recruiters actually read.',
    },
  },
  {
    id: 'creators',
    label: 'Creators',
    icon: '🎨',
    before: {
      title: 'Before AI Master Prompt',
      prompt: 'Give me YouTube video ideas.',
      result: 'Generic list of overdone topics with no angle or hook.',
    },
    after: {
      title: 'After AI Master Prompt',
      prompt: 'Act as a YouTube strategist with 10M+ subscribers experience. I run a tech review channel (50K subs). Generate 10 video ideas optimized for the algorithm. Each idea should have: a click-worthy title, a thumbnail concept, and a hook for the first 5 seconds.',
      result: 'Strategic, algorithm-aware content ideas with built-in viral mechanics.',
    },
  },
  {
    id: 'business',
    label: 'Business',
    icon: '📈',
    before: {
      title: 'Before AI Master Prompt',
      prompt: 'Write a marketing email.',
      result: 'A forgettable, salesy email that goes straight to spam or trash.',
    },
    after: {
      title: 'After AI Master Prompt',
      prompt: 'Act as a direct response copywriter trained by Gary Halbert. Write a 5-email nurture sequence for a SaaS product that helps freelancers track time. Target audience: overwhelmed freelance designers. Tone: empathetic, witty. Include subject lines with 40%+ open rate potential.',
      result: 'Conversion-optimized email sequence that nurtures leads into paying customers.',
    },
  },
]

export const FAQ_DATA = [
  {
    q: 'What exactly do I get when I purchase?',
    a: 'You get a beautifully organized PDF containing 300+ ready-to-use AI prompts across 15+ categories — from academic writing and job applications to business strategy and creative content. Every prompt is copy-paste ready.',
  },
  {
    q: 'Will these prompts work with free AI tools?',
    a: 'Absolutely. Every prompt is designed to work perfectly with ChatGPT (free tier), Google Gemini, Claude, and any other AI chatbot. No paid subscriptions required.',
  },
  {
    q: 'Is this a one-time payment?',
    a: 'Yes! Pay ₹299 once and you get lifetime access. This includes all future updates and new prompt additions at no extra cost.',
  },
  {
    q: 'How is this different from free prompts on the internet?',
    a: 'Free prompts are scattered, untested, and generic. Our prompts are professionally crafted, tested across multiple AI models, organized by use case, and designed with advanced techniques like role-playing, chain-of-thought, and structured output formatting.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Due to the digital nature of this product, we don\'t offer refunds once the PDF is downloaded. However, we\'re confident you\'ll find immense value — most users say it paid for itself within the first hour.',
  },
  {
    q: 'Do I need any technical skills to use these?',
    a: 'None at all. If you can copy and paste text, you can use these prompts. Each prompt comes with clear instructions and placeholders you simply fill in with your own details.',
  },
]

export const PROMPT_EXAMPLES = [
  {
    category: 'Academic Writing',
    prompt: 'Act as a PhD thesis advisor. Help me structure a literature review on [topic]...',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    category: 'Resume Builder',
    prompt: 'Act as a senior recruiter at a Fortune 500 company. Rewrite this resume...',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    category: 'Business Strategy',
    prompt: 'Act as a McKinsey consultant. Analyze this business model and suggest 5...',
    color: 'from-violet-500/20 to-fuchsia-500/20',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#030712] relative">
      {/* Fixed radial gradient background — rich depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10" />

      <Header />
      <Hero />
      <AudienceSelector />
      <BentoGrid />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
