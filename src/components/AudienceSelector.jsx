import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * AudienceSelector Component
 * - 5 clickable audience tabs/cards
 * - On selection: shows specific benefits + sample prompt
 * - Smooth Framer Motion transitions between audiences
 */

// Audience data with benefits and sample prompts
const audiences = [
    {
        id: 'students',
        title: 'Students',
        icon: '📚',
        tagline: 'Excel in academics with AI assistance',
        benefits: [
            'Write better essays and assignments faster',
            'Prepare for exams with AI-powered study guides',
            'Research complex topics in simple language',
            'Get instant explanations for difficult concepts'
        ],
        samplePrompt: {
            title: 'Essay Writing Assistant',
            prompt: 'Act as an academic writing expert. Help me write a 1500-word essay on [TOPIC]. First, create an outline with a strong thesis statement. Then, expand each section with academic language, proper citations format (APA/MLA), and smooth transitions. Include counter-arguments and rebuttals. End with a compelling conclusion that reinforces the thesis.'
        }
    },
    {
        id: 'jobseekers',
        title: 'Job Seekers',
        icon: '💼',
        tagline: 'Land your dream job faster',
        benefits: [
            'Create ATS-friendly resumes that get noticed',
            'Craft personalized cover letters in minutes',
            'Prepare for interviews with mock Q&A sessions',
            'Negotiate salary with confidence'
        ],
        samplePrompt: {
            title: 'Interview Preparation Coach',
            prompt: 'Act as a senior HR professional and interview coach. I\'m applying for [JOB TITLE] at [COMPANY TYPE]. Give me 10 likely interview questions with detailed answer frameworks using the STAR method. Include behavioral, technical, and situational questions. For each answer, highlight what interviewers are really looking for and common mistakes to avoid.'
        }
    },
    {
        id: 'business',
        title: 'Business Owners',
        icon: '🏢',
        tagline: 'Scale your business with AI automation',
        benefits: [
            'Automate customer support responses',
            'Generate marketing copy that converts',
            'Create SOPs and training materials',
            'Analyze data and make better decisions'
        ],
        samplePrompt: {
            title: 'Marketing Copy Generator',
            prompt: 'Act as a direct response copywriter with 15 years of experience. Create 5 variations of ad copy for my [PRODUCT/SERVICE] targeting [AUDIENCE]. Each version should include: attention-grabbing headline, pain point agitation, unique value proposition, social proof placeholder, and clear CTA. Use psychological triggers like scarcity, urgency, and FOMO. Keep each version under 150 words for social media ads.'
        }
    },
    {
        id: 'creators',
        title: 'Instagram Creators',
        icon: '📱',
        tagline: 'Create viral content consistently',
        benefits: [
            'Generate engaging captions in seconds',
            'Plan 30 days of content in one sitting',
            'Write scripts for Reels that hook viewers',
            'Build a consistent brand voice'
        ],
        samplePrompt: {
            title: 'Viral Reel Script Writer',
            prompt: 'Act as a viral content strategist for Instagram. Create a 60-second Reel script for my [NICHE] account about [TOPIC]. Structure: 1) Hook in first 3 seconds (pattern interrupt), 2) Problem statement, 3) 3-step solution, 4) Call to action. Include text overlay suggestions, trending audio recommendations, and optimal posting time. The tone should be [casual/professional/humorous]. Add 5 hashtag suggestions.'
        }
    },
    {
        id: 'freelancers',
        title: 'Freelancers',
        icon: '💻',
        tagline: 'Win more clients, deliver faster',
        benefits: [
            'Write proposals that win projects',
            'Create client deliverables faster',
            'Set up professional workflows',
            'Communicate clearly with clients'
        ],
        samplePrompt: {
            title: 'Winning Proposal Template',
            prompt: 'Act as a successful freelance consultant. Write a proposal for a [SERVICE TYPE] project. Include: personalized opening that references the client\'s specific needs, understanding of their problem, my proposed solution with clear deliverables, timeline breakdown, pricing with 3 tier options (basic/standard/premium), FAQs, and a soft close CTA. The tone should be confident but not arrogant. Format for easy scanning.'
        }
    }
]

export default function AudienceSelector() {
    const [selectedAudience, setSelectedAudience] = useState(audiences[0])

    return (
        <section id="audience" className="section-base section-alt">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2>
                        Built for <span className="gradient-text">Your Success</span>
                    </h2>
                    <p>
                        Whether you're a student or a business owner, we have prompts tailored specifically for your needs.
                    </p>
                </motion.div>

                {/* Audience Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {audiences.map((audience) => (
                        <button
                            key={audience.id}
                            onClick={() => setSelectedAudience(audience)}
                            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${selectedAudience.id === audience.id
                                ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/25'
                                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5'
                                }`}
                        >
                            <span className="mr-2">{audience.icon}</span>
                            {audience.title}
                        </button>
                    ))}
                </motion.div>

                {/* Content Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedAudience.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {/* Benefits Card */}
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{selectedAudience.icon}</span>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{selectedAudience.title}</h3>
                                    <p className="text-zinc-400">{selectedAudience.tagline}</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {selectedAudience.benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-zinc-300">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Sample Prompt Card */}
                        <div className="glass-card p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-medium rounded-full">
                                Sample Prompt
                            </div>
                            <h4 className="text-lg font-bold text-white mb-4 mt-2">{selectedAudience.samplePrompt.title}</h4>
                            <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                                <p className="text-zinc-400 text-sm leading-relaxed font-mono">
                                    {selectedAudience.samplePrompt.prompt}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <a href="#pricing" className="btn-primary text-sm py-2.5 px-5">
                                    Get All 300+ Prompts
                                </a>
                                <span className="text-zinc-500 text-sm">Just ₹299</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
