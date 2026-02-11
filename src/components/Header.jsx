import React from 'react'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-[#000000] border-b border-[#333333]">
            <div className="container-main mx-auto h-16 flex items-center justify-between">
                {/* LOGO */}

                <a href="/" className="text-[#00FF00] font-bold text-lg tracking-wider uppercase hover:opacity-80 transition-opacity">
                    AI MASTER PROMPT
                </a>

                {/* NAV LINKS */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#audience" className="text-gray-400 hover:text-[#00FF00] text-sm uppercase transition-colors">Who_It's_For</a>
                    <a href="#features" className="text-gray-400 hover:text-[#00FF00] text-sm uppercase transition-colors">Features</a>
                    <a href="#pricing" className="text-gray-400 hover:text-[#00FF00] text-sm uppercase transition-colors">Pricing</a>
                    <a href="#faq" className="text-gray-400 hover:text-[#00FF00] text-sm uppercase transition-colors">FAQ</a>
                </nav>

                {/* CTA */}
                <button className="bg-[#00FF00] text-black px-4 py-2 text-sm font-bold uppercase hover:bg-[#00cc00] transition-colors">
                    GET_ACCESS_₹299
                </button>
            </div>
        </header>
    )
}

export default Header
