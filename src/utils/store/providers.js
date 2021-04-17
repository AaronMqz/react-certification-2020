import React, { useReducer } from 'react';
import { VideoContext, ThemeContext } from './context';
import { getYoutubeSearch, setVideoDetail, setTheme } from './actions';
import { youtubeReducer, init, themeReducer, initTheme } from './reducers';

export const VideoProvider = (props) => {
  const [state, dispatch] = useReducer(youtubeReducer, init);
  const providerStore = {
    ...state,
    getYoutubeSearch: getYoutubeSearch(dispatch),
    setVideoDetail: setVideoDetail(dispatch, state),
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
