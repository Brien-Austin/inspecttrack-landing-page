import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Rewind,
  FastForward,
  Maximize,
  Minimize,
} from "lucide-react";

type VideoPlayerProps = {
  src: string;
  className?: string;
  controlsClassName?: string;
  controlsColor?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = "",
  controlsClassName = "",
  controlsColor = "blue-600",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => setIsPlaying(false);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch((err) => {
          console.error("Failed to enter fullscreen mode:", err);
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
        })
        .catch((err) => {
          console.error("Failed to exit fullscreen mode:", err);
        });
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto rounded-lg"
        onEnded={handleEnded}
        onClick={togglePlay}
      />
      <div
        className={`absolute bottom-0 left-2 right-2 flex items-center justify-between p-2 rounded ${controlsClassName}`}
      >
        <div className="flex items-center space-x-2">
          <button
            onClick={rewind}
            className={`text-white p-1 hover:scale-105 transition rounded-full bg-${controlsColor}`}
            aria-label="Rewind 10 seconds"
          >
            <Rewind size={16} />
          </button>

          <button
            onClick={togglePlay}
            className={`text-white p-2 hover:scale-105 transition rounded-full bg-${controlsColor}`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button
            onClick={fastForward}
            className={`text-white p-1 hover:scale-105 transition rounded-full bg-${controlsColor}`}
            aria-label="Fast forward 10 seconds"
          >
            <FastForward size={16} />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white text-xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button
            onClick={toggleFullscreen}
            className={`text-white p-1 hover:scale-105 transition rounded-full bg-${controlsColor}`}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
