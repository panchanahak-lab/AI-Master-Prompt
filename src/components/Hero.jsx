import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    const [typedText, setTypedText] = useState('')
    const promptText = "Act as a Senior Prompt Engineer. Generate a robust system prompt for..."

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            if (index < promptText.length) {
                setTypedText((prev) => prev + promptText.charAt(index))
                index++
            } else {
                clearInterval(interval)
            }
        }, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="intro" className="pt-32 pb-20 container-main mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: TERMINAL DISPLAY */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="border border-[#00FF00] p-1 bg-black h-full flex flex-col min-h-[500px]"
            >
                {/* Terminal Header */}
                <div className="bg-[#00FF00] text-black text-xs font-bold px-2 py-1 uppercase mb-4">
                    PROMPT_ENGINEER_TERMINAL
                </div>

                {/* Terminal Content */}
                <div className="flex-grow p-4 font-mono text-sm space-y-8">

                    {/* Input Block */}
                    <div>
                        <div className="text-gray-500 mb-2 uppercase text-xs border-b border-gray-800 pb-1">
                            BEFORE_AI_MASTER_PROMPT
                        </div>
                        <div className="text-gray-400">
                            <span className="text-[#00FF00] mr-2">&gt;</span>
                            Enter your prompt...
                            <br />
                            <span className="opacity-50">[Raw Input Example]</span>
                        </div>
                    </div>

                    {/* Output Block */}
                    <div className="mt-8">
                        <div className="text-gray-500 mb-2 uppercase text-xs border-b border-gray-800 pb-1">
                            AFTER_AI_MASTER_PROMPT
                        </div>
                        <div className="text-[#00FF00] leading-relaxed">
                            <span className="mr-2">&gt;</span>
                            {typedText}
                            <span className="animate-pulse inline-block w-2 h-4 bg-[#00FF00] ml-1 align-middle"></span>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* RIGHT: HEADLINE & CONTENT */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center h-full"
            >
                <div className="text-gray-500 text-sm mb-4 uppercase tracking-widest">
                    AI MASTER PROMPT v2.0
                </div>

                <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8 text-white">
                    RAW AI POWER.<br />
                    IMMEDIATE<br />
                    OUTPUT.<br />
                    ZERO FLUFF.
                </h1>

                <div className="border border-[#333333] p-6 mb-8">
                    <div className="text-xs text-gray-400 uppercase mb-4 border-b border-[#333333] pb-2">
                        CORE_FEATURES // SYSTEM_CAPABILITIES
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#00FF00] text-2xl">⚡</span>
                            <span className="text-xs uppercase text-gray-400">200+ RAW PROMPTS.<br />COPY. PASTE. EXECUTE.</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#00FF00] text-2xl">🔋</span>
                            <span className="text-xs uppercase text-gray-400">WORKS_WITH &gt;<br />GEMINI, CHATGPT, CLAUDE.</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#00FF00] text-2xl">🔄</span>
                            <span className="text-xs uppercase text-gray-400">LIFETIME_UPDATES.<br />STAY SHARP.</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#00FF00] text-2xl">🛡️</span>
                            <span className="text-xs uppercase text-gray-400">BATTLE_TESTED &<br />PROVEN. RELIABLE.</span>
                        </div>
                    </div>
                </div>

            </motion.div>

        </section>
    )
}

export default Hero
