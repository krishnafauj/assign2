// src/context/PlayerContext.jsx
"use client";
import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { Howl } from "howler";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const soundRef = useRef(null);

  const playTrack = (track) => {
    if (currentTrack?.id === track.id) {
      togglePlay();
      return;
    }

    if (soundRef.current) {
      soundRef.current.unload();
    }

    setCurrentTrack(track);
    setIsPlaying(true);

    const sound = new Howl({
      src: [track.audioUrl],
      html5: true, 
      volume: volume,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
    });

    soundRef.current = sound;
    sound.play();
  };

  const togglePlay = () => {
    if (!soundRef.current) return;
    if (isPlaying) soundRef.current.pause();
    else soundRef.current.play();
  };

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlay }}>
      {children}
    </PlayerContext.Provider>
  );
};