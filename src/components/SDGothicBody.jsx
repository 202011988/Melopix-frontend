import React from 'react';

const SDGothicBody = ({ children, className}) => {
  return (
    <p className={`font-sans font-normal text-left text-xl ${className}`}>
      {children}
    </p>
  );
};

export default SDGothicBody;
