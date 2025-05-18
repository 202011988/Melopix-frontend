import React, { useRef, useState } from 'react';
import uploadImage from '../assets/upload_image.png';
import UploadButton from '../components/UploadButton';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    // 숨겨둔 input 클릭 유도
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // 필요 시 여기서 파일을 업로드하거나 미리보기 가능
      console.log('선택된 파일:', file);
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        height: `calc(100vh - 116px)`,
        backgroundImage: `url(${uploadImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

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
