import { useState, useEffect } from 'react';

export default function Header(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show header when scrolled down more than 500px (or adjust as needed)
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
                isVisible 
                    ? 'bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        AIPE
                    </h1>
                </div>

                {/* Navigation Links */}
                <nav className={`flex gap-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <a href="#home" className="text-white hover:text-purple-400 transition font-medium">
                        Home
                    </a>
                    <a href="#how-it-works" className="text-white hover:text-purple-400 transition font-medium">
                        How It Works
                    </a>
                    <a href="#estimate" className="text-white hover:text-purple-400 transition font-medium">
                        Get Estimate
                    </a>
                    <a href="#contact" className="text-white hover:text-purple-400 transition font-medium">
                        Contact
                    </a>
                </nav>

                {/* CTA Button */}
                <button 
                    className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    Get Started
                </button>
            </div>
        </header>
    )
}