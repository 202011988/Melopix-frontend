import React from 'react';
import Col from './GridLayout/Col';

const UploadButton = ({ onClick, className = '' }) => {
  return (
    <Col className={`items-center ${className}`}>
        <p className="mb-2 font-serif font-bold text-center text-2xl text-[#5E4B2A]">
        추억넣기
        </p>
        <p className="mb-3 font-sans font-bold text-center text-[#5E4B2A]">
        떠올리고 싶은 추억의 한 장면을 업로드 해주세요
        </p>
        
        <button
        onClick={onClick}
        className="flex flex-col items-center gap-1 cursor-pointer"
        style={{ all: 'unset', cursor: 'pointer' }}
        >
        <img src={require('../assets/upload_icon.png')} alt="시작하기" />
        <span className="text-md text-[#5E4B2A] font-[AppleSDGothicNeo]">
            시작하기
        </span>
        </button>
    </Col>
  );
};

export default UploadButton;
