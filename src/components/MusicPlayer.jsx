import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const MusicPlayer = ({ src , className = '' }) => {
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
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className={`flex items-center gap-6 max-w-md ${className}`}>
      <button
        onClick={togglePlay}
        className="rounded-full hover:bg-gray-200 transition"
      >
        {isPlaying ? (
        <Pause className="w-6 h-6 text-[#61605f]" strokeWidth={3} />
        ) : (
        <Play className="w-6 h-6 text-[#61605f]" strokeWidth={3} />
        )}
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        className="w-full h-1 bg-[#61605f] accent-[#61605f]"
      />

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
