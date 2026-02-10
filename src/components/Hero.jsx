import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, Download, Zap, Globe } from 'lucide-react'
import { PROMPT_EXAMPLES } from '../App'

const cardVariants = {
    enter: { opacity: 0, y: 40, scale: 0.92, rotateX: -8 },
    center: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
    exit: { opacity: 0, y: -40, scale: 0.92, rotateX: 8 },
}

function FloatingCardStack() {
    const [current, setCurrent] = useState(0)

    const nextCard = useCallback(() => {
        setCurrent((c) => (c + 1) % PROMPT_EXAMPLES.length)
    }, [])

    useEffect(() => {
        const timer = setInterval(nextCard, 3500)
        return () => clearInterval(timer)
    }, [nextCard])

    return (
        <div className="relative w-full max-w-sm mx-auto h-[280px] perspective-[1200px]">
            {/* Background decorative cards */}
            <div className="absolute inset-x-5 top-5 bottom-0 rounded-2xl bg-white/[0.02] border border-white/[0.05]" />
            <div className="absolute inset-x-2.5 top-2.5 bottom-0 rounded-2xl bg-white/[0.03] border border-white/[0.07]" />

            {/* Active card */}
            <motion.div
                key={current}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute inset-0 glass-card p-7 rounded-2xl"
            >
                <div className={`inline-flex px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${PROMPT_EXAMPLES[current].color} text-white/90 mb-5 border border-white/10`}>
                    {PROMPT_EXAMPLES[current].category}
                </div>
                <p className="text-[13px] text-slate-300 leading-relaxed font-mono">
                    "{PROMPT_EXAMPLES[current].prompt}"
                </p>
                <div className="absolute bottom-7 left-7 right-7 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-500 ${i === current ? 'bg-indigo-400 scale-125 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-white/20'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-[11px] text-white/30 ml-2">
                        {current + 1}/{PROMPT_EXAMPLES.length}
                    </span>
                </div>
            </motion.div>
        </div>
    )
}

export default function Hero() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const end = 300
        const duration = 2000
        const step = end / (duration / 16)
        const timer = setInterval(() => {
            start += step
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [])

    const stagger = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    }

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pb-24 overflow-hidden">
            {/* Ambient glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] left-[20%] w-[700px] h-[700px] bg-indigo-600/[0.08] rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-violet-600/[0.06] rounded-full blur-[150px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/[0.03] rounded-full blur-[180px]" />
            </div>

            <div className="container-main relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left — Copy */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp} className="mb-10">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                                <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">
                                    {count}+ Prompts Included
                                </span>
                            </div>
                        </motion.div>

                        {/* Headline — MASSIVE */}
                        <motion.h1 variants={fadeUp} className="mb-8">
                            <span className="block text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.05] text-white">
                                Master AI.
                            </span>
                            <span className="block text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.05] text-white">
                                Work Faster.
                            </span>
                            <span className="block text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.05] text-gradient">
                                Save Hours.
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed mb-12">
                            The ultimate prompt pack for Students, Creators, and Businesses.{' '}
                            <span className="text-white font-medium">300+ Prompts. ₹299.</span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
                            <motion.a
                                href="#pricing"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-glow btn-shine inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-2xl shadow-indigo-500/30"
                            >
                                Buy Now — ₹299
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="#features"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center justify-center gap-2 text-base font-medium text-slate-400 px-8 py-4 rounded-2xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300"
                            >
                                See What's Inside
                            </motion.a>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
                            {[
                                { icon: Download, text: 'Instant PDF Download' },
                                { icon: Globe, text: 'Works with Free AI' },
                                { icon: Zap, text: 'Lifetime Access' },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    <Icon className="w-3.5 h-3.5" />
                                    {text}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Floating Card Stack */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, x: 60 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
                        className="hidden lg:block"
                    >
                        <div className="animate-float">
                            <FloatingCardStack />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
