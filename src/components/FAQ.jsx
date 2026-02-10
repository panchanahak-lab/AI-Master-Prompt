import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_DATA } from '../App'

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="border-b border-white/[0.08] last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
            >
                <span className={`text-base font-medium transition-colors duration-200 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className={`w-4 h-4 transition-colors duration-200 ${isOpen ? 'text-indigo-400' : 'text-slate-500'}`} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-sm text-slate-400 leading-relaxed max-w-2xl">
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
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.05em] text-white mb-5">
                        Frequently asked <span className="text-gradient">questions</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
                        Got questions? We've got answers.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="max-w-2xl mx-auto glass-card rounded-3xl px-7 md:px-9"
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
