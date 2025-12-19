
import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Saminda Fernando',
    role: 'Traveler to japan',
    quote: '"The trip was perfectly organized. Every transfer, hotel, and activity was seamless. I felt like a VIP the entire time."',
    image: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
  },
  {
    id: 2,
    name: 'Mark Thompson',
    role: 'Traveler to Kenya',
    quote: '"Seeing the wildlife up close was a life-changing experience. Our guide was incredibly knowledgeable and friendly."',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/3 text-left">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">What Travelers Say</h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Don't just take our word for it. Read reviews from our community of explorers.
        </p>
        <div className="flex space-x-4">
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#2ecc71] hover:text-[#2ecc71] transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-[#2ecc71] flex items-center justify-center text-[#0a0f0d] hover:bg-[#27ae60] transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 relative group">
            <div className="absolute top-10 right-10 opacity-10">
              <svg className="w-16 h-16 text-[#2ecc71]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V4H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56929 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56929 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V11C3.017 11.5523 2.56929 12 2.017 12H1.017V4H11.017V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
              </svg>
            </div>
            
            <div className="flex items-center space-x-4 mb-8">
              <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#2ecc71]/20" />
              <div>
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-gray-500 text-xs">{review.role}</p>
              </div>
            </div>

            <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
              {review.quote}
            </p>

            <div className="flex space-x-1 text-[#2ecc71]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
