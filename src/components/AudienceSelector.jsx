import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AUDIENCE_DATA } from '../App'

export default function AudienceSelector() {
    const [active, setActive] = useState(0)
    const current = AUDIENCE_DATA[active]

    return (
        <section id="audience" className="section-spacing relative">
            {/* Section ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

            <div className="container-main relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.05em] text-white mb-5">
                        Built for <span className="text-gradient">everyone</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
                        See the difference a well-crafted prompt makes for your specific use case.
                    </p>
                </motion.div>

                {/* Tab Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-14"
                >
                    {AUDIENCE_DATA.map((item, i) => (
                        <motion.button
                            key={item.id}
                            onClick={() => setActive(i)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${active === i
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {active === i && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-xl"
                                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
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
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                    >
                        {/* Before Card */}
                        <div className="glass-card p-6 md:p-8 rounded-2xl group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <span className="text-red-400 text-sm font-bold">✗</span>
                                </div>
                                <span className="text-sm font-semibold text-red-400/80 uppercase tracking-wider">
                                    {current.before.title}
                                </span>
                            </div>
                            <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                <p className="text-sm text-slate-400 font-mono leading-relaxed">
                                    "{current.before.prompt}"
                                </p>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {current.before.result}
                            </p>
                        </div>

                        {/* After Card */}
                        <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <span className="text-emerald-400 text-sm font-bold">✓</span>
                                    </div>
                                    <span className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wider">
                                        {current.after.title}
                                    </span>
                                </div>
                                <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-indigo-500/15">
                                    <p className="text-sm text-slate-300 font-mono leading-relaxed">
                                        "{current.after.prompt}"
                                    </p>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed font-medium">
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
