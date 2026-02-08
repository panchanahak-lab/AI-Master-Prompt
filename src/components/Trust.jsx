import { motion } from 'framer-motion'

/**
 * Trust Component
 * - Ethical usage disclaimer
 * - Privacy Policy, Terms of Service
 * - Digital product no-refund policy
 */

export default function Trust() {
    return (
        <section className="py-16 bg-[#0f0f18] relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-8 max-w-4xl mx-auto"
                >
                    {/* Ethical Usage */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Ethical Usage Guidelines</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                AI Master Prompt provides AI prompts for assistance and productivity enhancement.
                                These prompts must be used responsibly and ethically. Users should not use AI-generated
                                content for academic dishonesty, plagiarism, or any illegal purposes.
                                Always review and personalize AI outputs before submission or publication.
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/5 my-6" />

                    {/* Legal Links and Policies */}
                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                        {/* Refund Policy */}
                        <div>
                            <h4 className="text-white font-medium mb-2">Refund Policy</h4>
                            <p className="text-zinc-500">
                                As this is a digital product with instant download access,
                                all sales are final. No refunds will be issued after purchase.
                            </p>
                        </div>

                        {/* Privacy */}
                        <div>
                            <h4 className="text-white font-medium mb-2">Privacy Policy</h4>
                            <p className="text-zinc-500">
                                We collect only essential information for order processing.
                                Your data is never sold or shared with third parties.{' '}
                                <a href="/privacy" className="text-violet-400 hover:text-violet-300">Learn more</a>
                            </p>
                        </div>

                        {/* Terms */}
                        <div>
                            <h4 className="text-white font-medium mb-2">Terms of Service</h4>
                            <p className="text-zinc-500">
                                By purchasing, you agree to use the prompts for personal or
                                commercial use only. Redistribution is prohibited.{' '}
                                <a href="/terms" className="text-violet-400 hover:text-violet-300">Read terms</a>
                            </p>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="mt-8 flex items-center justify-center gap-6 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Verified Seller</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Razorpay Protected</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
