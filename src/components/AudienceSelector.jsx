import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AUDIENCE_DATA } from '../App'

export default function AudienceSelector() {
    const [active, setActive] = useState(0)
    const current = AUDIENCE_DATA[active]

    return (
        <section id="audience" className="section-spacing relative">
            {/* Section ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

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
                        Built for <span className="text-gradient">everyone</span>
                    </h2>
                    <p className="text-[#8b8ba3] text-lg max-w-xl mx-auto">
                        See the difference a well-crafted prompt makes for your specific use case.
                    </p>
                </motion.div>

                {/* Tab Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {AUDIENCE_DATA.map((item, i) => (
                        <motion.button
                            key={item.id}
                            onClick={() => setActive(i)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${active === i
                                    ? 'text-white'
                                    : 'text-[#8b8ba3] hover:text-white hover:bg-white/[0.04]'
                                }`}
                        >
                            {active === i && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.1] rounded-xl"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="text-base">{item.icon}</span>
                                {item.label}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Before / After Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                    >
                        {/* Before Card */}
                        <div className="glass-card p-6 md:p-8 rounded-2xl group">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <span className="text-red-400 text-sm">✗</span>
                                </div>
                                <span className="text-sm font-semibold text-red-400/80 uppercase tracking-wider">
                                    {current.before.title}
                                </span>
                            </div>
                            <div className="mb-5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <p className="text-sm text-white/60 font-mono leading-relaxed">
                                    "{current.before.prompt}"
                                </p>
                            </div>
                            <p className="text-sm text-[#8b8ba3] leading-relaxed">
                                {current.before.result}
                            </p>
                        </div>

                        {/* After Card */}
                        <div className="glass-card p-6 md:p-8 rounded-2xl border-indigo-500/20 relative overflow-hidden group">
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <span className="text-emerald-400 text-sm">✓</span>
                                    </div>
                                    <span className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wider">
                                        {current.after.title}
                                    </span>
                                </div>
                                <div className="mb-5 p-4 rounded-xl bg-white/[0.02] border border-indigo-500/10">
                                    <p className="text-sm text-white/70 font-mono leading-relaxed">
                                        "{current.after.prompt}"
                                    </p>
                                </div>
                                <p className="text-sm text-[#c0c0d0] leading-relaxed font-medium">
                                    {current.after.result}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
