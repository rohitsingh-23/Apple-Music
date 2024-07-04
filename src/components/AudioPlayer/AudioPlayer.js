import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.css";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaBackward,
  FaForward,
  FaUser,
} from "react-icons/fa";

import { IoIosRepeat, IoIosShuffle } from "react-icons/io";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current.currentTime == audioRef.current.duration) {
      setIsPlaying(false);
    }
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds}`;
  };

  const getCurrentTimeBackgroundSize = () => {
    return {
      background: `linear-gradient(to right, #d60017 ${
        (currentTime / duration) * 100
      }%, #ddd ${(currentTime / duration) * 100}%)`,
    };
  };

  const getBackgroundSize = () => {
    return {
      background: `linear-gradient(to right, #333 ${volume * 100}%, #ddd ${
        volume * 100
      }%)`,
    };
  };

  return (
    <div className="audio-player">
      <div className="controls-left">
        <IoIosShuffle className="shuffle control-icon" />
        <FaBackward className="previous control-icon" />
        {isPlaying ? (
          <FaPause className="pause control-icon" onClick={togglePlayPause} />
        ) : (
          <FaPlay className="play control-icon" onClick={togglePlayPause} />
        )}
        <FaForward className="next control-icon" />
        <IoIosRepeat className="repeat control-icon" />
      </div>

      <div className="time-slider">
        <div className="top-music-image-box">
          <img src="/images/blank-space-image.jpeg" alt="" />
          {/* <FaMusic /> */}
        </div>
        <div className="player-container">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleTimeChange}
            className="player slider "
            style={getCurrentTimeBackgroundSize()}
          />
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
      <div className="controls-right">
        <div className="volume-control">
          {isMuted ? (
            <FaVolumeMute className="mute control-icon" onClick={toggleMute} />
          ) : (
            <FaVolumeUp className="speaker control-icon" onClick={toggleMute} />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="slider"
            style={getBackgroundSize()}
          />
        </div>
        <div className="sign-in-button">
          <FaUser className="user" />
          <button> Sign In</button>
        </div>
      </div>

      <div className="music-image-box">
        <img src="/images/blank-space-image.jpeg" alt="" />
        {/* <FaMusic /> */}
      </div>

      <audio ref={audioRef} src="/songs/blank-space.mp3"></audio>
    </div>
  );
};

export default AudioPlayer;
