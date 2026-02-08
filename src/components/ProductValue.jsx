import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * ProductValue Component
 * - 4 benefit cards with hover effects
 * - Icons for each benefit
 * - Hover reveals additional detail
 */

const benefits = [
    {
        id: 1,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Save Hours Every Day',
        description: 'Stop staring at blank screens. Get instant, polished outputs.',
        details: 'Our prompts are engineered to get you 80% of the way there instantly. Just fill in your specifics and you\'re done in minutes, not hours.',
        gradient: 'from-violet-500 to-purple-500'
    },
    {
        id: 2,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Reduce Mental Effort',
        description: 'No more thinking about how to ask AI. We\'ve done the work.',
        details: 'Each prompt is crafted with specific instructions, role assignments, and output formats. You get consistent, high-quality results every time.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        id: 3,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: 'Professional Quality',
        description: 'Every prompt is tested and optimized for best results.',
        details: 'We\'ve refined each prompt through hundreds of iterations. You get outputs that sound professional, not robotic or generic.',
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        id: 4,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Works with Free AI Tools',
        description: 'Use with ChatGPT, Gemini, Claude – no paid subscriptions needed.',
        details: 'All prompts work perfectly with free versions of popular AI tools. No paid API keys or premium subscriptions required.',
        gradient: 'from-orange-500 to-amber-500'
    }
]

export default function ProductValue() {
    const [hoveredCard, setHoveredCard] = useState(null)

    return (
        <section className="section-base section-dark">
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
                        Why <span className="gradient-text">300+ Prompts</span> Matter
                    </h2>
                    <p>
                        It's not just about having prompts – it's about having the right ones that actually work.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredCard(benefit.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="glass-card hover-card p-6 cursor-pointer relative overflow-hidden group"
                        >
                            {/* Gradient Glow on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} bg-opacity-20 flex items-center justify-center mb-4 text-white`}>
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>

                            {/* Description / Details */}
                            <motion.div
                                initial={false}
                                animate={{ height: hoveredCard === benefit.id ? 'auto' : '48px' }}
                                className="overflow-hidden"
                            >
                                <p className="text-zinc-400 text-sm">
                                    {hoveredCard === benefit.id ? benefit.details : benefit.description}
                                </p>
                            </motion.div>

                            {/* Hover Indicator */}
                            <div className="mt-4 flex items-center text-sm text-zinc-500 group-hover:text-violet-400 transition-colors">
                                <span>{hoveredCard === benefit.id ? 'Less' : 'Learn more'}</span>
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${hoveredCard === benefit.id ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
