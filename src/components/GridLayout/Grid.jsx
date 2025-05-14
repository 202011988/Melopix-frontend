import React from 'react';

const Grid = ({ children, className = '' }) => {
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
