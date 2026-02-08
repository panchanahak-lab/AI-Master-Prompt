import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#audience', label: 'Who It\'s For' },
        { href: '#preview', label: 'Preview' },
        { href: '#pricing', label: 'Pricing' },
    ]

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-3'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="section-container">
                <nav className="flex items-center justify-between">
                    {/* Minimal Text Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">AI</span>
                        </div>
                        <span className="text-sm font-semibold text-white tracking-tight">
                            Master Prompt
                        </span>
                    </a>

                    {/* Desktop Nav - Clean */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA - Subtle & Small */}
                    <div className="hidden md:block">
                        <a href="#pricing" className="text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/5 text-white px-4 py-2 rounded-md transition-all">
                            Get Access
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-white"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-[#020617] border-t border-white/5"
                        >
                            <div className="py-4 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-sm text-slate-400 hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a href="#pricing" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
                                    Get Instant Access
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
