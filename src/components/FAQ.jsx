import React, { useState } from 'react'

const FAQ_ITEMS = [
    {
        q: "WHAT'S THE TECHNICAL ADVANTAGE?",
        a: "Direct API injection capability. No middleware. Pure prompt engineering that leverages the raw token capabilities of GPT-4 and Claude 3.5."
    },
    {
        q: "HOW IS MASTER PROMPT ENGINEERED?",
        a: "Reverse-engineered from 10,000+ successful outputs. We decomplied superior responses to find the structural triggers that cause them."
    },
    {
        q: "COMPATIBILITY_CHECK // SYSTEM_REQ",
        a: "Works natively with: ChatGPT (Free/Plus), Claude (Opus/Sonnet), Google Gemini (Pro/Adv), and local LLMs (Llama 3, Mistral)."
    },
    {
        q: "UPDATES_POLICY // LIFETIME_ACCESS",
        a: "One-time payment grants database access forever. New prompt injections are pushed to the repository weekly."
    }
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    return (
        <section id="faq" className="py-20 bg-black border-t border-[#333333]">
            <div className="container-main mx-auto max-w-3xl">

                {/* Header */}
                <div className="mb-12 border-b border-[#333333] pb-4">
                    <h2 className="text-[#00FF00] font-mono text-xl uppercase tracking-wider">
                        FAQ_TERMINAL // QUERY_DATABASE
                    </h2>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, idx) => (
                        <div key={idx} className="border border-[#333333] bg-[#050505] transition-all hover:border-gray-700">

                            <button
                                onClick={() => toggle(idx)}
                                className="w-full text-left px-6 py-4 flex items-center justify-between group"
                            >
                                <span className={`font-mono uppercase text-sm font-bold tracking-wider ${openIndex === idx ? 'text-[#00FF00]' : 'text-gray-300 group-hover:text-white'}`}>
                                    {item.q}
                                </span>
                                <span className="text-[#00FF00] font-mono">
                                    {openIndex === idx ? '[-]' : '[+]'}
                                </span>
                            </button>

                            {openIndex === idx && (
                                <div className="px-6 pb-6 pt-2 border-t border-[#333333] bg-[#111111]">
                                    <div className="font-mono text-sm text-gray-400 leading-relaxed">
                                        <span className="text-[#00FF00] mr-2">&gt;</span>
                                        {item.a}
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FAQ
