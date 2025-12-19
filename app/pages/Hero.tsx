
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Destinations');

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
          alt="Beautiful Mountain View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/60 via-[#0a0f0d]/20 to-[#0a0f0d]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
        <span className="text-[#2ecc71] font-bold tracking-widest text-xs uppercase mb-6 block">Explore the extraordinary</span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
          Discover the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#27ae60]">Unseen World</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Experience luxury and adventure in the most breathtaking destinations. Curated trips for the modern explorer.
        </p>

        {/* Search Bar */}
        <div className="glass rounded-3xl p-2 max-w-3xl mx-auto shadow-2xl">
          <div className="flex justify-center space-x-8 py-3 border-b border-white/10 mb-2">
            {['Destinations', 'Tours', 'Hotels'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeTab === tab ? 'text-[#2ecc71]' : 'text-gray-400'}`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${activeTab === tab ? 'bg-[#2ecc71]' : 'hidden'}`}></div>
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center p-2">
            <div className="text-left px-4 py-3 hover:bg-white/5 rounded-2xl transition-all group cursor-pointer">
              <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Where</label>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-[#2ecc71]">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Search destinations
              </div>
            </div>
            <div className="text-left px-4 py-3 hover:bg-white/5 rounded-2xl transition-all group cursor-pointer border-l border-white/10">
              <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Date</label>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-[#2ecc71]">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Add dates
              </div>
            </div>
            <div className="text-left px-4 py-3 hover:bg-white/5 rounded-2xl transition-all group cursor-pointer border-l border-white/10">
              <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Who</label>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-[#2ecc71]">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                Add guests
              </div>
            </div>
            <button className="bg-[#2ecc71] h-full rounded-2xl flex items-center justify-center text-[#0a0f0d] font-bold transition-transform active:scale-95 hover:bg-[#27ae60]">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
