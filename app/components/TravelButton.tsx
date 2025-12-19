import React from "react";

interface TravelButtonProps {
  id?: number | string;
  name: string;
  icon: string;
  onClick?: () => void;
}

const TravelButton = ({ name, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center justify-center w-45 h-30 rounded-[1.5rem]
                 bg-white/5 border border-white/5
                 hover:bg-[#2ecc71]
                 transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center mb-4 
                      text-[#2ecc71] group-hover:text-[#0a0f0d]">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={icon}
          />
        </svg>
      </div>

      <span className="text-sm font-bold text-gray-400 group-hover:text-[#0a0f0d] transition-colors">
        {name}
      </span>
    </button>
  );
};

export default TravelButton;
