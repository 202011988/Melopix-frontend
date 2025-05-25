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
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newProgress = parseFloat(e.target.value);
    if (audio && audio.duration) {
      const newTime = (newProgress / 100) * audio.duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const remainingTime = duration - currentTime;

  return (
    <div className={`flex items-center gap-6 max-w-md ${className}`}>
      <button
        onClick={togglePlay}
        className="rounded-full hover:bg-gray-200 transition w-10 h-10 flex items-center justify-center"
      >
        <img src={getIconSrc()} alt="Play/Pause" className="w-6 h-6" />
      </button>

      {showProgressbar && (
        <div className="flex items-center gap-2 w-full">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-1 bg-[#61605f] accent-[#61605f]"
          />
          <span className="font-sans font-normal text-sm text-[#61605f] whitespace-nowrap min-w-[48px] text-right">
            -{formatTime(remainingTime)}
          </span>
        </div>
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
