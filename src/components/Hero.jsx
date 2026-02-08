import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
    // Simplified prompt counter (no heavy animation loops)
    const [promptCount, setPromptCount] = useState(0)

    useEffect(() => {
        let start = 0
        const end = 300
        const duration = 1500
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setPromptCount(end)
                clearInterval(timer)
            } else {
                setPromptCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="gradient-bg min-h-[90vh] flex items-center pt-32 pb-20 relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    {/* Minimal Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 mb-8"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <span className="text-xs font-medium text-slate-400 tracking-wide">
                            {promptCount}+ PROMTS INCLUDED
                        </span>
                    </motion.div>

                    {/* Refined Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight"
                    >
                        <span className="text-white block mb-2">Master AI Prompts</span>
                        <span className="gradient-text text-4xl md:text-5xl lg:text-6xl font-semibold">
                            Get Better Results — Faster
                        </span>
                    </motion.h1>

                    {/* Clean Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed"
                    >
                        One premium prompt pack built for students, job seekers, creators, and businesses. Stop guessing. Start creating.
                    </motion.p>

                    {/* CTAs - Strict Hierarchy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a href="#pricing" className="btn-primary w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 group">
                            Get Instant Access
                            <span className="opacity-70 text-sm font-normal">— ₹299</span>
                        </a>
                        <a href="#preview" className="btn-secondary w-full sm:w-auto min-w-[160px]">
                            Preview Prompts
                        </a>
                    </motion.div>

                    {/* Minimal Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4"
                    >
                        {['Instant PDF Download', 'Works with Free AI Tools', 'Lifetime Access'].map((text, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                                <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {text}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
