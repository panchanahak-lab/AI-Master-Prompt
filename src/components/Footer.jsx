import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black border-t border-[#333333] py-12">
            <div className="container-main mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">
                    AI Master Prompt &copy; 2024 // EXECUTE YOUR VISION.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-600 hover:text-[#00FF00] text-xs uppercase font-mono transition-colors">Terms_of_Service</a>
                    <a href="#" className="text-gray-600 hover:text-[#00FF00] text-xs uppercase font-mono transition-colors">Privacy_Protocol</a>
                    <a href="#" className="text-gray-600 hover:text-[#00FF00] text-xs uppercase font-mono transition-colors">Twitter // X</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
