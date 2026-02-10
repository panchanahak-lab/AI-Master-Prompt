import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Menu, X } from 'lucide-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        { href: '#audience', label: 'Who It\'s For' },
        { href: '#features', label: 'Features' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-[#06060b]/70 backdrop-blur-2xl border-b border-white/[0.06] py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container-main">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[15px] font-semibold text-white tracking-tight">
                            AI Master Prompt
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[13px] font-medium text-[#8b8ba3] hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.04] transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <motion.a
                            href="#pricing"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 text-[13px] font-semibold bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow"
                        >
                            Get Access
                            <span className="text-white/60 text-xs">₹299</span>
                        </motion.a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden p-2 text-[#8b8ba3] hover:text-white transition-colors"
                    >
                        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="pt-4 pb-6 flex flex-col gap-1 border-t border-white/[0.06] mt-3">
                                {links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="text-sm text-[#8b8ba3] hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/[0.04] transition-all"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="#pricing"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="mt-3 text-center text-sm font-semibold bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-3 rounded-xl"
                                >
                                    Get Access — ₹299
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
