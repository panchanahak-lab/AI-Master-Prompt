import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Download, Clock } from 'lucide-react'

export default function Pricing() {
    return (
        <section id="pricing" className="section-spacing relative">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

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
                        One price. <span className="text-gradient">Lifetime value.</span>
                    </h2>
                    <p className="text-[#8b8ba3] text-lg max-w-xl mx-auto">
                        No subscriptions. No hidden fees. Just pure value.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                    className="max-w-md mx-auto"
                >
                    <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
                        {/* Corner glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/15 rounded-full blur-[60px] pointer-events-none" />

                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                                    Most Popular
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2">AI Master Prompt Pack</h3>
                            <p className="text-sm text-[#8b8ba3] mb-8">300+ ready-to-use prompts for every use case.</p>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-white">₹299</span>
                                <div className="flex flex-col">
                                    <span className="text-sm text-[#55556a] line-through">₹999</span>
                                    <span className="text-xs font-semibold text-emerald-400">70% OFF</span>
                                </div>
                            </div>

                            {/* Feature List */}
                            <ul className="space-y-3 mb-8">
                                {[
                                    '300+ professionally crafted prompts',
                                    'Organized by 15+ categories',
                                    'Works with ChatGPT, Gemini, Claude',
                                    'Lifetime updates included',
                                    'Instant PDF download',
                                    'Copy-paste ready format',
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-[#c0c0d0]">
                                        <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.a
                                href="https://example.com/buy"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-glow w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 text-white font-bold text-base py-4 rounded-2xl shadow-xl shadow-indigo-500/30"
                            >
                                Get Instant Access
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>

                            {/* Trust Signals */}
                            <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap justify-center gap-4">
                                {[
                                    { icon: ShieldCheck, text: '100% Secure Payment' },
                                    { icon: Download, text: 'Instant PDF Download' },
                                    { icon: Clock, text: 'Lifetime Access' },
                                ].map(({ icon: Icon, text }) => (
                                    <div key={text} className="flex items-center gap-1.5 text-[11px] font-medium text-[#55556a]">
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
