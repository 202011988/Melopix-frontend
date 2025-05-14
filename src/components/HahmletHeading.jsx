import React from 'react';

const HahmletHeading = ({ children }) => {
  return (
    <h1 style={{ fontFamily: "'Hahmlet', serif", fontWeight: 400, textAlign: 'left'}}>
      {children}
    </h1>
  );
};

export default HahmletHeading;
