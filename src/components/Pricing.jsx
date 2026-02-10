import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Download, Clock } from 'lucide-react'

export default function Pricing() {
    return (
        <section id="pricing" className="section-spacing relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/[0.07] rounded-full blur-[160px] pointer-events-none" />

            <div className="container-main relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.05em] text-white mb-5">
                        One price. <span className="text-gradient">Lifetime value.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
                        No subscriptions. No hidden fees. Just pure value.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.93 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="max-w-md mx-auto"
                >
                    <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-violet-500/15 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Most Popular</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">AI Master Prompt Pack</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-8">300+ ready-to-use prompts for every use case.</p>

                            <div className="flex items-baseline gap-3 mb-10">
                                <span className="text-6xl md:text-7xl font-bold tracking-[-0.05em] text-white">₹299</span>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-500 line-through">₹999</span>
                                    <span className="text-xs font-semibold text-emerald-400">70% OFF</span>
                                </div>
                            </div>

                            <ul className="space-y-3.5 mb-10">
                                {['300+ professionally crafted prompts', 'Organized by 15+ categories', 'Works with ChatGPT, Gemini, Claude', 'Lifetime updates included', 'Instant PDF download', 'Copy-paste ready format'].map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                href="https://example.com/buy"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="btn-glow btn-shine w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 text-white font-bold text-base py-4 rounded-2xl shadow-2xl shadow-indigo-500/30"
                            >
                                Get Instant Access
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>

                            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-5">
                                {[
                                    { icon: ShieldCheck, text: '100% Secure Payment' },
                                    { icon: Download, text: 'Instant PDF Download' },
                                    { icon: Clock, text: 'Lifetime Access' },
                                ].map(({ icon: Icon, text }) => (
                                    <div key={text} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                                        <Icon className="w-3.5 h-3.5" />
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
