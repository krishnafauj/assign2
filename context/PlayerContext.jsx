// src/context/PlayerContext.jsx
"use client";
import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { Howl } from "howler";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  
  // New State for functionality
  const [queue, setQueue] = useState([]); // To store the list of songs
  const [seek, setSeek] = useState(0);    // Current position in seconds
  const [duration, setDuration] = useState(0); // Total duration in seconds
  
  const soundRef = useRef(null);
  const rafRef = useRef(null); // Reference for the animation frame (timer)

  // Function to load the queue and play a specific track
  const playTrack = (track, trackList = []) => {
    // If a list is provided, update the queue
    if (trackList.length > 0) {
      setQueue(trackList);
    } else if (queue.length === 0) {
      // If no queue exists, make a queue of just this one track
      setQueue([track]);
    }

    if (currentTrack?.id === track.id) {
      togglePlay();
      return;
    }

    if (soundRef.current) {
      soundRef.current.unload();
      cancelAnimationFrame(rafRef.current);
    }

    setCurrentTrack(track);
    setIsPlaying(true);

    const sound = new Howl({
      src: [track.audioUrl],
      html5: true,
      volume: volume,
      onplay: () => {
        setIsPlaying(true);
        setDuration(sound.duration());
        startSeekUpdater(); // Start tracking time
      },
      onpause: () => {
        setIsPlaying(false);
        cancelAnimationFrame(rafRef.current);
      },
      onend: () => {
        setIsPlaying(false);
        playNext(); // Auto-play next song when one finishes
      },
      onseek: () => {
        // Update visual seek immediately when scrubbed
        setSeek(sound.seek());
      },
      onload: () => {
         setDuration(sound.duration());
      }
    });

    soundRef.current = sound;
    sound.play();
  };

  const togglePlay = () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  };

  // Logic for Next Button
  const playNext = () => {
    if (!currentTrack || queue.length === 0) return;
    
    const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % queue.length; // Loop back to start
    playTrack(queue[nextIndex]);
  };

  // Logic for Previous Button
  const playPrevious = () => {
     if (!currentTrack || queue.length === 0) return;

     const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
     // If current time is > 3 seconds, just restart the song (standard behavior)
     if (soundRef.current && soundRef.current.seek() > 3) {
        soundRef.current.seek(0);
        return;
     }

     // Otherwise go to previous track
     const prevIndex = currentIndex === 0 ? queue.length - 1 : currentIndex - 1;
     playTrack(queue[prevIndex]);
  };

  // Seek Function (for the progress bar)
  const seekTo = (amount) => {
    if (soundRef.current) {
      soundRef.current.seek(amount);
      setSeek(amount);
    }
  };

  // Updates the progress bar smoothly
  const startSeekUpdater = () => {
    const update = () => {
      if (soundRef.current && soundRef.current.playing()) {
        setSeek(soundRef.current.seek());
        rafRef.current = requestAnimationFrame(update);
      }
    };
    rafRef.current = requestAnimationFrame(update);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (soundRef.current) soundRef.current.unload();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <PlayerContext.Provider value={{ 
        currentTrack, 
        isPlaying, 
        playTrack, 
        togglePlay, 
        playNext, 
        playPrevious,
        seek,
        duration,
        seekTo
    }}>
      {children}
    </PlayerContext.Provider>
  );
};