import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * PromptPreview Component
 * - Show limited real prompts (3 visible, expandable)
 * - Expand/collapse interaction
 * - Blur effect on locked prompts with "Unlock full access"
 */

// Sample prompts for preview - FIRST 3 ARE UNLOCKED
const samplePrompts = [
    {
        id: 1,
        category: 'Writing',
        title: 'Blog Post Outline Generator',
        prompt: 'Act as a content strategist with 10 years of experience in SEO. Create a comprehensive blog post outline for the topic: [TOPIC]. Include: 1) An attention-grabbing title with power words, 2) A meta description under 160 characters, 3) H2 and H3 subheadings structure, 4) Key points to cover under each section, 5) Internal/external linking suggestions, 6) CTA recommendations. Target word count: [NUMBER] words.',
        isLocked: false
    },
    {
        id: 2,
        category: 'Business',
        title: 'Professional Email Templates',
        prompt: 'Act as a business communication expert. Write 3 versions of a professional email for [SITUATION]. Include: 1) Subject line options, 2) Formal version, 3) Semi-formal version, 4) Friendly professional version. Each email should be clear, action-oriented, and end with a specific next step. Keep each under 150 words.',
        isLocked: false
    },
    {
        id: 3,
        category: 'Social Media',
        title: 'LinkedIn Post Hook Generator',
        prompt: 'Act as a LinkedIn growth expert with 500K+ followers. Create 10 scroll-stopping hooks for a post about [TOPIC]. Each hook should: 1) Use pattern interrupts, 2) Trigger curiosity or emotion, 3) Be under 15 words, 4) Avoid clickbait. Also provide the best posting format (carousel, text, video) for each hook type.',
        isLocked: false
    },
    {
        id: 4,
        category: 'Productivity',
        title: 'Weekly Planning Assistant',
        prompt: 'Act as a productivity coach specialized in time management...',
        isLocked: true
    },
    {
        id: 5,
        category: 'Learning',
        title: 'Concept Simplifier',
        prompt: 'Act as an expert teacher who specializes in breaking down complex concepts...',
        isLocked: true
    },
    {
        id: 6,
        category: 'Freelance',
        title: 'Client Onboarding Questions',
        prompt: 'Act as a successful freelance consultant with 10+ years experience...',
        isLocked: true
    }
]

export default function PromptPreview() {
    const [expandedPrompt, setExpandedPrompt] = useState(null)

    const togglePrompt = (id) => {
        setExpandedPrompt(expandedPrompt === id ? null : id)
    }

    return (
        <section id="preview" className="section-base section-alt">
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
                        Preview <span className="gradient-text">Real Prompts</span>
                    </h2>
                    <p>
                        See exactly what you're getting. No fluff, no filler – just powerful prompts that work.
                    </p>
                </motion.div>

                {/* Prompts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {samplePrompts.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-card overflow-hidden relative ${item.isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover-card'}`}
                        >
                            {/* Locked Overlay */}
                            {item.isLocked && (
                                <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                                    <svg className="w-10 h-10 text-zinc-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="text-zinc-400 text-sm font-medium">Unlock with purchase</span>
                                </div>
                            )}

                            {/* Card Header */}
                            <div
                                onClick={() => !item.isLocked && togglePrompt(item.id)}
                                className={`p-6 ${!item.isLocked ? 'hover:bg-white/5' : ''} transition-colors`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 text-xs font-medium rounded-full">
                                        {item.category}
                                    </span>
                                    {!item.isLocked && (
                                        <motion.div
                                            animate={{ rotate: expandedPrompt === item.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>

                                {/* Collapsed hint for unlocked items */}
                                {!item.isLocked && expandedPrompt !== item.id && (
                                    <p className="text-zinc-500 text-sm mt-2">Click to view full prompt →</p>
                                )}
                            </div>

                            {/* Expandable Prompt Content */}
                            <AnimatePresence>
                                {expandedPrompt === item.id && !item.isLocked && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                                                <p className="text-zinc-400 text-sm leading-relaxed font-mono">
                                                    {item.prompt}
                                                </p>
                                            </div>
                                            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                <span>Copy-paste ready in the full version</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a href="#pricing" className="btn-primary text-lg py-4 px-8 inline-flex items-center gap-2">
                        Unlock All 300+ Prompts
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
