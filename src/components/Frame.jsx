import React from 'react';
import frameImage from '../assets/frame.png'; // 프레임 이미지 import (경로에 맞춰 수정)

function Frame({ imageUrl, blur = 0, className }) {
  return (
    <div style={frameContainerStyle} className={className}>
      <img
        src={imageUrl}
        alt="액자 이미지"
        style={{ ...imageStyle, filter: `blur(${blur}px)` }}
      />
      <img src={frameImage} alt="액자 프레임" style={frameStyle} />
    </div>
  );
}

const frameContainerStyle = {
  position: 'relative', // 프레임과 이미지의 위치를 상대적으로 설정
  width: '300px', // 액자 전체 너비 조절
  height: '400px', // 액자 전체 높이 조절
};

const imageStyle = {
  position: 'absolute',
  top: '27px',
  left: '28px',
  width: '83%',
  height: '85%',
  objectFit: 'cover',
};

const frameStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  pointerEvents: 'none', // 프레임 이미지 클릭 방지 (선택 사항)
};

export default Frame;
