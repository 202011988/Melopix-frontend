import React, { useRef, useState } from 'react';
import playerFrame from '../assets/Result/Albumcover.png';
import speakerImage from '../assets/Result/Speaker.png';
import playIcon from '../assets/Result/result_play.png';
import pauseIcon from '../assets/Result/result_pause.png';
import SDGothicBody from './SDGothicBody';

const ResultPlayer = ({ description, musicSrc, imageSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const imageUrl =
    imageSrc instanceof File ? URL.createObjectURL(imageSrc) : imageSrc;

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin {
            animation: spin 20s linear infinite;
          }
        `}
      </style>

      <div className="relative flex flex-col items-center w-full max-w-5xl min-w-[700px] py-12">
        <div className="flex items-end justify-center w-full">
          <img
            src={speakerImage}
            alt="Left Speaker"
            className="w-80 h-80 object-contain flex-shrink-0"
          />

          <div className="relative w-[600px] h-[450px] min-w-[600px] min-h-[450px] flex-shrink-0">
            <div
              className="absolute rounded-full overflow-hidden animate-spin"
              style={{
                width: '360px',
                height: '360px',
                top: '10%',
                left: '20%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
              }}
            >
              <img
                src={imageUrl}
                alt="Uploaded"
                className="w-full h-full object-cover block rounded-full"
              />
            </div>

            <img
              src={playerFrame}
              alt="Player Frame"
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            />

            {/* 재생/일시정지 버튼 - 이미지로 */}
            <div className="absolute top-[80%] left-[85%] z-20 transform -translate-x-1/2 -translate-y-1/2">
              <button onClick={toggleAudio} className="focus:outline-none">
                <img
                  src={isPlaying ? pauseIcon : playIcon}
                  alt={isPlaying ? 'Pause' : 'Play'}
                  className="w-12 h-12"
                />
              </button>
            </div>
          </div>

          <img
            src={speakerImage}
            alt="Right Speaker"
            className="w-80 h-80 object-contain flex-shrink-0"
          />
        </div>

        <SDGothicBody className="my-10 text-center px-4 z-30">
            {description}
        </SDGothicBody>

        <audio ref={audioRef} src={musicSrc} />
      </div>
    </>
  );
};

export default ResultPlayer;
