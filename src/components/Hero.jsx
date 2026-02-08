import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Hero Section
 * - Bold headline with gradient text
 * - Subtitle addressing all 5 audiences
 * - Primary CTA: "Buy Now – ₹299"
 * - Secondary CTA: "Preview Prompts"
 * - Animated background with gradient orbs
 */
export default function Hero() {
    // Animated counter for "300+" prompts
    const [promptCount, setPromptCount] = useState(0)

    useEffect(() => {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = 300 / steps
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= 300) {
                setPromptCount(300)
                clearInterval(timer)
            } else {
                setPromptCount(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="gradient-bg noise-overlay min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
            {/* Floating Orbs - Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -15, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-zinc-400">
                            <span className="text-white font-semibold">{promptCount}+</span> Ready-to-Use AI Prompts
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        Master AI Prompts.
                        <br className="hidden md:block" />
                        <span className="gradient-text">Get Better Results.</span>{' '}
                        <span className="text-white">Faster.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        One premium prompt pack built for{' '}
                        <span className="text-white">students</span>,{' '}
                        <span className="text-white">job seekers</span>,{' '}
                        <span className="text-white">creators</span>,{' '}
                        <span className="text-white">freelancers</span>, and{' '}
                        <span className="text-white">businesses</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#pricing" className="btn-primary text-lg py-4 px-8 w-full sm:w-auto">
                            Buy Now – ₹299
                        </a>
                        <a href="#preview" className="btn-secondary text-lg py-4 px-8 w-full sm:w-auto">
                            Preview Prompts
                        </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500 max-w-3xl mx-auto"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Instant Download</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Works with ChatGPT, Gemini & More</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>5 Categories Covered</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
