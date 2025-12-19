
import React from 'react';

const destinations = [
  { id: 1, name: 'Bali', location: 'Indonesia', rating: 4.9, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Alps', location: 'Switzerland', rating: 4.8, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Tokyo', location: 'Japan', rating: 5.0, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Santorini', location: 'Greece', rating: 4.9, image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=600' },
];

const Trending: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-3">Trending Destinations</h2>
          <p className="text-gray-400 text-sm">Most visited places this month</p>
        </div>
        <div className="flex space-x-3">
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#2ecc71] hover:text-[#2ecc71] transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-[#2ecc71] flex items-center justify-center text-[#0a0f0d] hover:bg-[#27ae60] transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
        {destinations.map((dest) => (
          <div key={dest.id} className="min-w-[280px] md:min-w-[320px] h-[450px] relative rounded-[2rem] overflow-hidden group snap-start">
            <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                <div className="bg-[#2ecc71] text-[#0a0f0d] text-[10px] font-bold px-2 py-1 rounded-lg flex items-center">
                  {dest.rating} <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
              </div>
              <div className="flex items-center text-gray-400 text-xs">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {dest.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
