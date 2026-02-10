import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_DATA } from '../App'

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div
            className="border-b border-white/[0.06] last:border-b-0"
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group"
            >
                <span className={`text-[15px] font-medium transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#c0c0d0] group-hover:text-white'
                    }`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className={`w-4 h-4 transition-colors duration-200 ${isOpen ? 'text-indigo-400' : 'text-[#55556a]'
                        }`} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-sm text-[#8b8ba3] leading-relaxed max-w-2xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section id="faq" className="section-spacing relative">
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
                        Frequently asked <span className="text-gradient">questions</span>
                    </h2>
                    <p className="text-[#8b8ba3] text-lg max-w-xl mx-auto">
                        Got questions? We've got answers.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                    className="max-w-2xl mx-auto glass-card rounded-3xl px-6 md:px-8"
                >
                    {FAQ_DATA.map((item, i) => (
                        <FAQItem
                            key={i}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
