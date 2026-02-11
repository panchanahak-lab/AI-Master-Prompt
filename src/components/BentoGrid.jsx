import React from 'react'

const FEATURES = [
    {
        icon: "⚡",
        title: "Instant_Access",
        desc: "No login. No wait. Pay & Download."
    },
    {
        icon: "🧠",
        title: "Multi_Model_Ready",
        desc: "Optimized for GPT-4, Claude 3, Gemini Ultra."
    },
    {
        icon: "📂",
        title: "System_Organized",
        desc: "15+ Categories. JSON/PDF/Notion formats."
    },
    {
        icon: "🔄",
        title: "Lifetime_Updates",
        desc: "One-time purchase. Free future versions."
    }
]

const BentoGrid = () => {
    return (
        <section id="features" className="py-20 bg-black border-t border-[#333333]">
            <div className="container-main mx-auto">

                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-[#333333] flex-grow"></div>
                    <h2 className="text-[#00FF00] font-mono uppercase tracking-widest text-sm border border-[#00FF00] px-4 py-1">
                        CORE_FEATURES // SYSTEM_CAPABILITIES
                    </h2>
                    <div className="h-px bg-[#333333] flex-grow"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="group border border-[#333333] p-6 hover:border-[#00FF00] transition-colors bg-[#111111]">
                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{feature.icon}</div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wider">{feature.title}</h3>
                            <p className="text-gray-500 text-sm font-mono leading-relaxed group-hover:text-gray-300">
                                &gt; {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default BentoGrid
