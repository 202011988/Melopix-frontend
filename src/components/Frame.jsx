import React from 'react';
import frameImage from '../assets/frame.png';

function Frame({ imageUrl, blur = 0, className }) {
  return (
    <div className={`relative w-full aspect-[3/4] ${className}`}>
      {/* 실제 이미지 */}
      <img
        src={imageUrl}
        alt="액자 이미지"
        className="absolute top-[6%] left-[9%] w-[82%] h-[84%] object-cover"
        style={{ filter: `blur(${blur}px)` }}
      />
      {/* 프레임 이미지 */}
      <img
        src={frameImage}
        alt="액자 프레임"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}

export default Frame;
