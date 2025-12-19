import React from 'react';
import TravelButton from '../components/TravelButton';

const categories = [
    {id: 1,
     name: 'Beach',
     icon: 'M3 18c2-1 4-1 6 0s4 1 6 0 4-1 6 0M3 14c2-1 4-1 6 0s4 1 6 0 4-1 6 0M12 4v4m0 0l2-2m-2 2l-2-2'
    },

    {id: 2,
     name: 'Wildlife',
     icon: 'M12 3c3 0 6 2 6 5v3a6 6 0 11-12 0V8c0-3 3-5 6-5zm-3 8h.01M15 11h.01'
    },

    {id: 3,
     name: 'Culture',
     icon: 'M4 6a2 2 0 012-2h10a2 2 0 012 2v12a1 1 0 01-1 1H6a2 2 0 01-2-2V6zm4 0v12m4-12v12'
    },

    {id: 4,
     name: 'Adventure',
     icon: 'M5 12h14M12 5l7 7-7 7'
    },

    {id: 5,
     name: 'Food',
     icon: 'M4 3h2v7a2 2 0 01-2 2H4V3zm6 0h2v18h-2V3zm6 0h2a2 2 0 012 2v5a2 2 0 01-2 2h-2V3z'
    },

    {id: 6,
     name: 'City',
     icon: 'M3 21h18M5 21V7l4-2v16M13 21V5l4 2v14M9 9h1m0 4h1m4-4h1m0 4h1'
    }
];


const TravelCategories = () => {
    const handleCategoryClick = (category) => {
        console.log('Selected Category:', category.name);
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {categories.map((cat) => (
                <TravelButton
                    key={cat.id}
                    name={cat.name}
                    icon={cat.icon}
                    onClick={() => handleCategoryClick(cat)}
                />
            ))}
        </div>
    );
};

export default TravelCategories;
