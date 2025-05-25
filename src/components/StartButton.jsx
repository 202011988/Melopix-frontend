import React from 'react';

const StartButton = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-md text-[#A57B3E] font-medium shadow-md hover:shadow-[0_6px_14px_rgba(241,189,154,0.5)] transition-shadow duration-300 overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 bg-[#F1C798] z-0" />
      <span className="absolute inset-0 bg-gradient-to-r from-[#B4B4B401] to-[#F0F0EF75] z-0" />
      <p className="relative z-10 font-bold mx-4">시작하기</p>
    </button>
  );
};

export default StartButton;
