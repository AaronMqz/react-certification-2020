import { useService } from '../hooks/useService';
import { ACTIONS } from '../constants';
// import { mockData } from '../../service/mockData';
import useLocalStorage from '../hooks/useLocalStorage';

export const getYoutubeSearch = (dispatch) => (search, maxResults) => {
  dispatch({ type: ACTIONS.FETCHING });
  const { getYoutubeVideoSearch } = useService();

  const fetchYoutubeSearch = async () => {
    try {
      const videoSearchList = await getYoutubeVideoSearch(search, maxResults);
      // const videoSearchList = mockData;
      dispatch({
        type: ACTIONS.VIDEO.SEARCH,
        // payload: { videos: videoSearchList.items, search },
        payload: { videos: videoSearchList.data.items, search },
      });
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, payload: error });
      console.log('Error API: ', error);
    }
  };
  return fetchYoutubeSearch();
};

export const setVideoDetail = (dispatch, state) => (videoIdSelected) => {
  const videoSelected = state.videos.filter((item) => {
    return item.id.videoId === videoIdSelected;
  })[0];

  const {
    snippet: { title, description, publishedAt, channelTitle },
  } = videoSelected;

  dispatch({
    type: ACTIONS.VIDEO.DETAIL,
    payload: { title, description, publishedAt, channelTitle },
  });
  return setVideoDetail();
};

export const setTheme = (dispatch) => (themeSelected) => {
  dispatch({
    type: themeSelected,
  });
};

export const getCurrentSession = (dispatch) => async () => {
  dispatch({ type: ACTIONS.FETCHING });
  const { getCurrentSessionStorage } = useLocalStorage();

  try {
    const currentSession = getCurrentSessionStorage();
    if (currentSession) {
      dispatch({
        type: ACTIONS.AUTH.SUCCESS,
        payload: currentSession,
      });
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: error.message,
    });
  }
};

export const login = (dispatch) => async (user) => {
  dispatch({ type: ACTIONS.FETCHING });
  const { mockLogin } = useService();
  const { saveSessionStorage } = useLocalStorage();

  try {
    const userSuccess = await mockLogin(user);
    saveSessionStorage(userSuccess);

    dispatch({
      type: ACTIONS.AUTH.SUCCESS,
      payload: userSuccess,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: error.message,
    });
  }
};

export const logout = (dispatch) => () => {
  const { removeCurrentSessionStorage } = useLocalStorage();
  removeCurrentSessionStorage();
  dispatch({
    type: ACTIONS.AUTH.LOGOUT,
  });
};

export const saveFavorite = (dispatch, state) => (id, name) => {
  const { updateFavoriteStorage } = useLocalStorage();

  const videoSelected = state.videos.filter((item) => {
    return item.id.videoId === id;
  })[0];

  updateFavoriteStorage([...state.favorites, videoSelected], name);

  dispatch({
    type: ACTIONS.FAVORITE.ADD,
    payload: videoSelected,
  });
  return setVideoDetail();
};

export const updateFavorite = (dispatch, state) => (id, name) => {
  const { updateFavoriteStorage } = useLocalStorage();

  const updateFavorites = state.favorites.filter((item) => item.id.videoId !== id);

  dispatch({
    type: ACTIONS.FAVORITE.UPDATE,
    payload: updateFavorites,
  });

  updateFavoriteStorage(updateFavorites, name);

  return setVideoDetail();
};

export const loadFavorites = (dispatch) => (name) => {
  const { getFavoritesStorage } = useLocalStorage();
  dispatch({
    type: ACTIONS.FAVORITE.UPDATE,
    payload: getFavoritesStorage(name),
  });
};
