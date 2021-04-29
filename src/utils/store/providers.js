import React, { useReducer } from 'react';
import { VideoContext, ThemeContext, AuthContext } from './context';
import {
  getYoutubeSearch,
  setVideoDetail,
  setTheme,
  login,
  logout,
  saveFavorite,
  updateFavorite,
  loadFavorites,
  getCurrentSession,
} from './actions';
import {
  youtubeReducer,
  init,
  themeReducer,
  initTheme,
  authReducer,
  initAuth,
} from './reducers';

export const VideoProvider = (props) => {
  const [state, dispatch] = useReducer(youtubeReducer, init);
  const providerStore = {
    ...state,
    getYoutubeSearch: getYoutubeSearch(dispatch),
    setVideoDetail: setVideoDetail(dispatch, state),
    saveFavorite: saveFavorite(dispatch, state),
    updateFavorite: updateFavorite(dispatch, state),
    loadFavorites: loadFavorites(dispatch),
  };
  return <VideoContext.Provider {...props} value={providerStore} />;
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initTheme);
  const providerStore = {
    ...state,
    setTheme: setTheme(dispatch),
  };
  return <ThemeContext.Provider {...props} value={providerStore} />;
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initAuth);
  const providerStore = {
    ...state,
    getCurrentSession: getCurrentSession(dispatch),
    login: login(dispatch),
    logout: logout(dispatch),
  };
  return <AuthContext.Provider {...props} value={providerStore} />;
};
