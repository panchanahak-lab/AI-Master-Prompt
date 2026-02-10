import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.06]">
            {/* CTA banner */}
            <div className="section-spacing relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/[0.06] rounded-full blur-[120px]" />
                </div>

                <div className="container-main relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-4">
                            Ready to master AI?
                        </h2>
                        <p className="text-[#8b8ba3] text-lg max-w-md mx-auto mb-8">
                            Join thousands of students, creators, and professionals using better prompts.
                        </p>
                        <motion.a
                            href="#pricing"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-glow inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 text-white font-semibold text-[15px] px-8 py-4 rounded-2xl shadow-xl shadow-indigo-500/25"
                        >
                            Get Instant Access — ₹299
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="border-t border-white/[0.06] py-8">
                <div className="container-main">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                                <Sparkles className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-white tracking-tight">
                                AI Master Prompt
                            </span>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6">
                            {['Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-xs font-medium text-[#55556a] hover:text-[#8b8ba3] transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-xs text-[#55556a]">
                            © {new Date().getFullYear()} AI Master Prompt. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
