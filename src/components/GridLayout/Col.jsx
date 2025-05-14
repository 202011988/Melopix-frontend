import React from 'react';

const Col = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default Col;
