import React from 'react';

const HahmletHeading = ({ children, className }) => {
  return (
    <h1 className={`font-serif font-normal text-left text-4xl ${className}`}>
      {children}
    </h1>
  );
};

export default HahmletHeading;
