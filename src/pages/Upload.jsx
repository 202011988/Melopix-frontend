import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadImage from '../assets/upload_image.png';
import UploadButton from '../components/UploadButton';

const Upload = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일을 다음 페이지로 넘김
    navigate('/result', { state: { file } });
  };

  return (
    <div
      style={{
        width: '100vw',
        height: `calc(100vh - 116px)`,
        backgroundImage: `url(${uploadImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div style={{ transform: 'translateX(-35px)' }}>
        <UploadButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default Upload;
