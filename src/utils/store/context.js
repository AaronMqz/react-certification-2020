import React, { useContext } from 'react';

export const VideoContext = React.createContext(null);
export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const ThemeContext = React.createContext(null);
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const AuthContext = React.createContext(null);
export const useAuthContext = () => {
  return useContext(AuthContext);
};
