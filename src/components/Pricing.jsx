import React from 'react'

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-black">
            <div className="container-main mx-auto max-w-4xl">

                <div className="border border-[#333333] bg-[#050505] p-1">

                    {/* Header Bar */}
                    <div className="bg-[#333333] text-gray-300 px-4 py-2 flex justify-between items-center text-xs uppercase font-mono mb-1">
                        <span>PRICING_MODULE // ACCESS_GRANTED</span>
                        <span>ID: #8392-X</span>
                    </div>

                    <div className="border border-[#333333] p-8 md:p-12 relative overflow-hidden group">

                        {/* Background Grid Hook */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

                            {/* Left: Info */}
                            <div>
                                <h3 className="text-white text-3xl font-bold uppercase mb-2">AI Master Prompt Pack</h3>
                                <div className="text-[#00FF00] text-5xl font-mono font-bold mb-6">₹299</div>

                                <ul className="space-y-3 text-gray-400 font-mono text-sm">
                                    <li className="flex items-center">
                                        <span className="text-[#00FF00] mr-3">✓</span> TECHNICAL SPECS
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#00FF00] mr-3">✓</span> ROLE_BASED CLASSIFICATION
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#00FF00] mr-3">✓</span> PROMPT_CHAINS
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#00FF00] mr-3">✓</span> FULL RESERVOR SYSTEMS
                                    </li>
                                </ul>
                            </div>

                            {/* Right: CTA */}
                            <div className="text-center md:text-right">
                                <div className="inline-block border border-[#00FF00] p-1">
                                    <button className="bg-[#00FF00] text-black font-bold uppercase py-4 px-8 text-lg hover:bg-[#00cc00] transition-colors w-full md:w-auto">
                                        GET_INSTANT_ACCESS
                                    </button>
                                </div>
                                <div className="mt-4 text-xs text-gray-600 uppercase">
                                    SECURE_ENCRYPTED_GATEWAY // 256-BIT
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Pricing
