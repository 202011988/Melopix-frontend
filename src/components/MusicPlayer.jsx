import React, { useRef, useState, useEffect } from "react";
import homePlay from '../assets/PlayerIcons/home_play.png'
import homePause from '../assets/PlayerIcons/home_pause.png'
import defaultPlay from '../assets/PlayerIcons/default_play.png'
import defaultPause from '../assets/PlayerIcons/default_pause.png'

const MusicPlayer = ({
  src,
  className = "",
  showProgressbar = true,
  iconMode = "gallery",
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newProgress = parseFloat(e.target.value);
    if (audio && audio.duration) {
      audio.currentTime = (newProgress / 100) * audio.duration;
      setProgress(newProgress);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const getIconSrc = () => {
    if (showProgressbar) {
      return isPlaying ? defaultPause : defaultPlay;
    } else {
      return isPlaying ? homePause : homePlay;
    }
  };  

  return (
    <div className={`flex items-center gap-6 max-w-md ${className}`}>
      <button
        onClick={togglePlay}
        className="rounded-full hover:bg-gray-200 transition w-10 h-10 flex items-center justify-center"
      >
        <img src={getIconSrc()} alt="Play/Pause" className="w-6 h-6" />
      </button>

      {showProgressbar && (
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-full h-1 bg-[#61605f] accent-[#61605f]"
        />
      )}

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        preload="metadata"
      />
    </div>
  );
};

export default MusicPlayer;
