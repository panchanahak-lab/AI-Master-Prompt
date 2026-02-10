import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Copy, RefreshCw, Cpu, Sparkles, Shield } from 'lucide-react'

function AnimatedCounter({ target, duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
            start += step
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [isInView, target, duration])

    return <span ref={ref}>{count}+</span>
}

function SpotlightCard({ children, className = '', span = '' }) {
    const cardRef = useRef(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className={`glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group cursor-default ${span} ${className}`}
        >
            {/* Spotlight effect */}
            {isHovering && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.08), transparent 60%)`,
                        inset: 0,
                    }}
                />
            )}

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: isHovering
                        ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.12), transparent 60%)`
                        : 'none',
                }}
            />

            <div className="relative z-10">{children}</div>
        </motion.div>
    )
}

export default function BentoGrid() {
    return (
        <section id="features" className="section-spacing relative">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

            <div className="container-main relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-4">
                        Everything you <span className="text-gradient">need</span>
                    </h2>
                    <p className="text-[#8b8ba3] text-lg max-w-xl mx-auto">
                        One purchase. Infinite possibilities. Here's what's inside.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">

                    {/* Card 1 — Large, spans 2 columns */}
                    <SpotlightCard span="md:col-span-2">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                <Copy className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Copy-Paste Prompts</h3>
                                <p className="text-sm text-[#8b8ba3]">No tweaking needed. Just paste and get results.</p>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-gradient">
                                <AnimatedCounter target={300} />
                            </span>
                            <span className="text-xl text-[#8b8ba3] font-medium">prompts</span>
                        </div>
                        <p className="mt-4 text-sm text-[#55556a] leading-relaxed">
                            Across 15+ categories — academic, business, creative, coding, marketing, and more.
                        </p>
                    </SpotlightCard>

                    {/* Card 2 — Small (1 col), stacked tall */}
                    <SpotlightCard span="md:row-span-2">
                        <div className="h-full flex flex-col">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center mb-6">
                                <Cpu className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Works with Free AI</h3>
                            <p className="text-sm text-[#8b8ba3] mb-8">
                                Every prompt is tested and optimized across all major platforms.
                            </p>

                            {/* AI Platform logos/badges */}
                            <div className="mt-auto space-y-3">
                                {[
                                    { name: 'ChatGPT', color: 'from-emerald-500/10 to-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400' },
                                    { name: 'Gemini', color: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/20', text: 'text-blue-400' },
                                    { name: 'Claude', color: 'from-orange-500/10 to-orange-500/5', border: 'border-orange-500/20', text: 'text-orange-400' },
                                ].map((platform) => (
                                    <div
                                        key={platform.name}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${platform.color} border ${platform.border}`}
                                    >
                                        <Sparkles className={`w-4 h-4 ${platform.text}`} />
                                        <span className={`text-sm font-medium ${platform.text}`}>{platform.name}</span>
                                        <span className="ml-auto text-[10px] font-medium text-white/30 uppercase tracking-wider">Compatible</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Card 3 — Bottom left */}
                    <SpotlightCard>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/20 flex items-center justify-center mb-5">
                            <RefreshCw className="w-5 h-5 text-violet-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Lifetime Updates</h3>
                        <p className="text-sm text-[#8b8ba3] leading-relaxed">
                            New prompts added regularly. Buy once, benefit forever. No recurring fees.
                        </p>
                    </SpotlightCard>

                    {/* Card 4 — Bottom center */}
                    <SpotlightCard>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center mb-5">
                            <Shield className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Tested & Proven</h3>
                        <p className="text-sm text-[#8b8ba3] leading-relaxed">
                            Every prompt has been refined through thousands of iterations for consistent quality.
                        </p>
                    </SpotlightCard>

                </div>
            </div>
        </section>
    )
}
