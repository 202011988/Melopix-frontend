import React from 'react';

const Grid = ({ children, className = '', style }) => {
  return (
    <div className={`grid ${className}`}  style={style}>
      {children}
    </div>
  );
};

export default Grid;
