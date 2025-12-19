
import React from 'react';

const tours = [
  {
    id: 1,
    title: 'Hidden Lakes of Canada',
    desc: 'Explore the untouched beauty of Banff National Park with our expert local guides in a small group.',
    price: '$1,290',
    rating: '4.9',
    reviews: '124 reviews',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
    tag: '-20% Off',
    duration: '7 Days'
  },
  {
    id: 2,
    title: 'Kenyan Safari Adventure',
    desc: 'Witness the Great Migration and camp under the stars in luxury tents in the Maasai Mara.',
    price: '$2,450',
    rating: '5.0',
    reviews: '86 reviews',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600',
    tag: '',
    duration: '5 Days'
  },
  {
    id: 3,
    title: 'Sigiriya Adventure Retreat',
    desc: 'Experience the ancient rock fortress, lush jungles, and authentic Sri Lankan cuisine in a 4-day luxury escape.',
    price: '$1,200',
    rating: '4.7',
    reviews: '180 reviews',
    image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/65564eabecaa89001dc39525.jpg',
    tag: 'Selling Fast',
    duration: '4 Days'
  }

];

const Tours: React.FC = () => {
  return (
    <section className='bg-[#0a0f0d] -mt-40'>
      <div className="text-center mb-16">
        <span className="text-[#2ecc71] font-bold tracking-widest text-xs uppercase mb-4 mt-20 block">Premium Experiences</span>
        <h2 className="text-4xl md:text-5xl font-bold">Curated Tours For You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div key={tour.id} className="group bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-300">
            <div className="h-[280px] relative overflow-hidden">
              <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              {tour.tag && (
                <div className="absolute top-6 left-6 bg-[#e74c3c] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {tour.tag}
                </div>
              )}
              <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {tour.duration}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-2 text-xs text-gray-400 mb-4">
                <div className="flex text-[#2ecc71]">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <span className="font-bold text-white">{tour.rating}</span>
                <span>({tour.reviews})</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#2ecc71] transition-colors">{tour.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{tour.desc}</p>

              <div className="flex items-end justify-between border-t border-white/5 pt-6">
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Starting from</label>
                  <span className="text-2xl font-bold text-[#2ecc71] tracking-tight">{tour.price}</span>
                </div>
                <button className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#2ecc71] hover:text-[#0a0f0d] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
