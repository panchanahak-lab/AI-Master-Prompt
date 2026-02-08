import { motion } from 'framer-motion'

/**
 * Pricing Component
 * - Single premium pricing card
 * - Glassmorphism with gradient border
 * - ₹299 prominent display
 * - Feature list with checkmarks
 * - Glowing CTA button
 */

const features = [
    '300+ ready-to-use AI prompts',
    'Prompts for 5 different audiences',
    'Works with ChatGPT, Gemini, Claude',
    'Detailed usage instructions included',
    'Instant PDF download',
    'Lifetime access – no subscription',
    'Free future updates',
    'Copy-paste ready format'
]

export default function Pricing() {
    // Replace this URL with your actual Razorpay payment link or WhatsApp checkout
    const paymentLink = 'https://rzp.io/l/ai-master-prompt' // Example Razorpay link

    return (
        <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-[#0f0f18] to-[#0a0a0f] relative overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        One Price. <span className="gradient-text">Unlimited Value.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        No subscriptions. No hidden fees. Pay once, use forever.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md mx-auto"
                >
                    {/* Card with Gradient Border */}
                    <div className="relative group">
                        {/* Animated Gradient Border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500 rounded-2xl opacity-50 group-hover:opacity-75 blur transition duration-500" />

                        {/* Card Content */}
                        <div className="relative bg-[#0a0a0f] rounded-2xl p-8 md:p-10">
                            {/* Badge */}
                            <div className="flex justify-center mb-6">
                                <span className="px-4 py-1.5 bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-violet-400 text-sm font-medium rounded-full border border-violet-500/30">
                                    Most Popular
                                </span>
                            </div>

                            {/* Product Name */}
                            <h3 className="text-xl font-bold text-white text-center mb-2">
                                AI Master Prompt Pack
                            </h3>
                            <p className="text-zinc-400 text-center mb-6">
                                Everything you need to master AI
                            </p>

                            {/* Price */}
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-zinc-500 text-2xl line-through">₹999</span>
                                    <span className="text-5xl md:text-6xl font-bold text-white">₹299</span>
                                </div>
                                <p className="text-green-400 text-sm mt-2">Save ₹700 – Limited Time Offer</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-zinc-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a
                                href={paymentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full text-lg py-4 text-center block"
                            >
                                Buy Now – ₹299
                            </a>

                            {/* Trust Text */}
                            <p className="text-zinc-500 text-xs text-center mt-4">
                                Secure payment via Razorpay. Instant download after payment.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Payment Methods */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center items-center gap-6 mt-10 text-zinc-500 text-sm"
                >
                    <span>Accepted:</span>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.6 8.4H2.4a2.4 2.4 0 00-2.4 2.4v2.4a2.4 2.4 0 002.4 2.4h19.2a2.4 2.4 0 002.4-2.4v-2.4a2.4 2.4 0 00-2.4-2.4z" />
                            </svg>
                        </span>
                        <span>UPI</span>
                        <span>•</span>
                        <span>Cards</span>
                        <span>•</span>
                        <span>Net Banking</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
