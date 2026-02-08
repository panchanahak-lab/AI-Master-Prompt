import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * FAQ Component
 * - Accordion-style FAQ
 * - Questions covering all audiences
 * - Smooth expand/collapse animations
 */

const faqs = [
    {
        question: 'What exactly is included in the AI Master Prompt Pack?',
        answer: 'You get a professionally designed PDF containing 300+ ready-to-use AI prompts. These are organized into categories for Students, Job Seekers, Business Owners, Instagram Creators, and Freelancers. Each prompt includes clear instructions and placeholders you can customize.'
    },
    {
        question: 'Will these prompts work with free AI tools?',
        answer: 'Absolutely! All prompts are designed to work with free versions of ChatGPT, Google Gemini, Claude, and other popular AI tools. You don\'t need any paid subscriptions or API access.'
    },
    {
        question: 'I\'m a student. How will this help me?',
        answer: 'The student section includes prompts for essay writing, exam preparation, research assistance, concept explanations, note-taking, and more. You\'ll save hours on assignments while learning how to communicate effectively with AI.'
    },
    {
        question: 'I\'m a job seeker. What prompts are included for me?',
        answer: 'You\'ll find prompts for creating ATS-friendly resumes, writing personalized cover letters, preparing for interviews with mock Q&A, salary negotiation scripts, LinkedIn optimization, and professional networking messages.'
    },
    {
        question: 'How can business owners benefit from these prompts?',
        answer: 'Business owners get prompts for marketing copy, social media content, customer support templates, email sequences, SOPs, business planning, competitor analysis, and more. Perfect for small business owners who want to leverage AI without hiring a team.'
    },
    {
        question: 'What about Instagram creators and content creators?',
        answer: 'Creators will love the prompts for viral hooks, caption writing, content calendars, Reel scripts, hashtag strategies, engagement prompts, collaboration outreach, and brand voice development. Create 30 days of content in one sitting!'
    },
    {
        question: 'How do freelancers use these prompts?',
        answer: 'Freelancers get prompts for proposal writing, client onboarding, project scope documents, portfolio descriptions, cold outreach, pricing discussions, and client communication. Win more clients and deliver faster.'
    },
    {
        question: 'How do I access the prompts after purchase?',
        answer: 'After successful payment, you\'ll be redirected to a download page where you can instantly download your PDF. You\'ll also receive a confirmation email with the download link as backup.'
    },
    {
        question: 'Is there a refund policy?',
        answer: 'As this is a digital product with instant access, we do not offer refunds. However, you can preview sample prompts on this page before purchasing to ensure it meets your needs.'
    },
    {
        question: 'Will I get updates if you add more prompts?',
        answer: 'Yes! All future updates are included for free. When we add new prompts or improve existing ones, you\'ll receive an email with the updated PDF link.'
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="section-base section-dark">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2>
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p>
                        Everything you need to know about the AI Master Prompt Pack.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="glass-card overflow-hidden"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-medium pr-4">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0"
                                >
                                    <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions? */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-zinc-400 mb-4">Still have questions?</p>
                    <a
                        href="mailto:support@aimasterprompt.com"
                        className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
                    >
                        Email us at support@aimasterprompt.com
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
