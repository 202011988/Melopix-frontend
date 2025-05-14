import React from 'react';

const SDGothicBody = ({ children }) => {
  return (
    <p
      style={{ fontFamily: 'Apple SD Gothic Neo', fontWeight: 400, textAlign: 'left' }}
    >
      {children}
    </p>
  );
};

export default SDGothicBody;