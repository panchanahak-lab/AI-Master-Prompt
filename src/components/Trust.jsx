import { motion } from 'framer-motion'

/**
 * Trust Component
 * - Ethical usage disclaimer
 * - Privacy policy and terms links
 * - Secure payment badge
 */

export default function Trust() {
    return (
        <section className="py-12 bg-[#0a0a0f] border-t border-white/5">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    {/* Ethical Disclaimer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-6 mb-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Ethical Usage Guidelines</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    AI Master Prompt provides AI prompts for assistance and productivity enhancement. These prompts must be used responsibly and ethically. Users should not use AI-generated content for academic dishonesty, plagiarism, or any illegal purposes. Always review and personalize AI outputs before submission or publication.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Legal Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid md:grid-cols-3 gap-6 mb-8"
                    >
                        {/* Refund Policy */}
                        <div className="text-sm">
                            <h4 className="text-white font-medium mb-2">Refund Policy</h4>
                            <p className="text-zinc-500 leading-relaxed">
                                As this is a digital product with instant download access, all sales are final. No refunds will be issued after purchase.
                            </p>
                        </div>

                        {/* Privacy Policy */}
                        <div className="text-sm">
                            <h4 className="text-white font-medium mb-2">Privacy Policy</h4>
                            <p className="text-zinc-500 leading-relaxed">
                                We collect only essential information for order processing. Your data is never sold or shared with third parties. <a href="#" className="text-violet-400 hover:underline">Learn more</a>
                            </p>
                        </div>

                        {/* Terms of Service */}
                        <div className="text-sm">
                            <h4 className="text-white font-medium mb-2">Terms of Service</h4>
                            <p className="text-zinc-500 leading-relaxed">
                                By purchasing, you agree to use the prompts for personal or commercial use only. Redistribution is prohibited. <a href="#" className="text-violet-400 hover:underline">Read terms</a>
                            </p>
                        </div>
                    </motion.div>

                    {/* Security Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-zinc-500 text-xs"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Verified Seller</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            <span>Razorpay Protected</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
