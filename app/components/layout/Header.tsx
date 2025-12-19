
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f0d]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#2ecc71] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M12 21s6-5.686 6-11a6 6 0 10-12 0c0 5.314 6 11 6 11z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>

                    </div>
                    <span className="text-xl font-bold tracking-tight">TravelGuide</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                    <a href="#" className="hover:text-[#2ecc71] transition-colors">Destinations</a>
                    <a href="#" className="hover:text-[#2ecc71] transition-colors">Tours</a>
                    <a href="#" className="hover:text-[#2ecc71] transition-colors">Hotels</a>
                    <a href="#" className="hover:text-[#2ecc71] transition-colors">Flights</a>
                    <a href="#" className="hover:text-[#2ecc71] transition-colors">Deals</a>
                </nav>

                <div className="flex items-center space-x-6">
                    <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</button>
                    <button className="bg-[#2ecc71] text-[#0a0f0d] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#27ae60] transition-colors">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
