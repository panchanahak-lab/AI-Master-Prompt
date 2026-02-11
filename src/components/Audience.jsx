import React from 'react'

const AUDIENCE_ITEMS = [
    { role: "STUDENTS", benefit: "ACADEMIC_EXCELLENCE // A+" },
    { role: "JOB_SEEKERS", benefit: "ATS_DOMINATION //HIRED" },
    { role: "CREATORS", benefit: "VIRAL_ALGORITHMS // GROWTH" },
    { role: "BUSINESS", benefit: "REVENUE_MULTIPLIER // SCALE" }
]

const Audience = () => {
    return (
        <section id="audience" className="py-12 bg-black border-t border-[#333333]">
            <div className="container-main mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {AUDIENCE_ITEMS.map((item, idx) => (
                        <div key={idx} className="border border-[#333333] p-4 text-center hover:bg-[#111111] transition-colors group">
                            <div className="text-[#00FF00] font-bold text-sm uppercase tracking-widest mb-1 group-hover:text-white">
                                {item.role}
                            </div>
                            <div className="text-gray-500 text-xs font-mono">
                                {item.benefit}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Audience
