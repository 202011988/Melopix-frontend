import React from 'react';

const HahmletBody = ({ children, className }) => {
  return (
    <p className={`font-serif font-normal text-left ${className}`}>
      {children}
    </p>
  );
};

export default HahmletBody;
