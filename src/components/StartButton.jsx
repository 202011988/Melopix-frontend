import React from 'react';
import './StartButton.css';

const StartButton = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`start-button font-[AppleSDGothicNeo] font-bold px-7 py-1.5 rounded-md transition-all duration-200 ${className}`}
    >
      시작하기
    </button>
  );
};

export default StartButton;
