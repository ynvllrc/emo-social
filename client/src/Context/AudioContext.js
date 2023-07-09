import React, { useState, createContext } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AudioContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};
