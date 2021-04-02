import React, { useContext } from 'react';

export const VideoContext = React.createContext(null);
export const useVideoContext = () => {
  return useContext(VideoContext);
};
