
import React from 'react';

const stats = [
  { label: 'Happy Travelers', value: '10k+' },
  { label: 'Destinations', value: '2k+' },
  { label: 'Local Guides', value: '500+' },
  { label: 'Average Rating', value: '4.9' },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-white/5">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
          <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
