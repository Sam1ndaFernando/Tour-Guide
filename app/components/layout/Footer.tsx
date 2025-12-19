
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a0f0d] pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="space-y-6">
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
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Crafting unforgettable journeys for the modern adventurer. Discover the world with us.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#2ecc71] hover:text-[#2ecc71] transition-all">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current opacity-70" style={{ maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${social}.svg)`, maskSize: 'contain', maskRepeat: 'no-repeat' }}></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#2ecc71] transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-6">Subscribe for travel tips and exclusive deals.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2ecc71] transition-all"
                            />
                            <button className="w-full bg-[#2ecc71] text-[#0a0f0d] font-bold py-3 rounded-xl hover:bg-[#27ae60] transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>© 2025 TravelGuide. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
