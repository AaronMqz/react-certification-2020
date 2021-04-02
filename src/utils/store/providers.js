import React, { useReducer } from 'react';
import { VideoContext } from './context';
import { getYoutubeSearch, setVideoDetail } from './actions';
import { youtubeReducer, init } from './reducers';

export const VideoProvider = (props) => {
  const [state, dispatch] = useReducer(youtubeReducer, init);
  const providerStore = {
    ...state,
    getYoutubeSearch: getYoutubeSearch(dispatch),
    setVideoDetail: setVideoDetail(dispatch, state),
  };

  return <VideoContext.Provider {...props} value={providerStore} />;
};
