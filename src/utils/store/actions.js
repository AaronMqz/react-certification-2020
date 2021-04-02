import { useService } from '../hooks/useService';
// import { mockData } from '../../service/mockData';

export const ACTIONS = {
  FETCHING: 'FETCHING',
  ERROR: 'ERROR',
  VIDEO: {
    SEARCH: 'SEARCH',
    DETAIL: 'DETAIL',
  },
};

export const getYoutubeSearch = (dispatch) => (search) => {
  dispatch({ type: ACTIONS.REQUEST });
  const { getYoutubeVideoSearch } = useService();

  const fetchYoutubeSearch = async () => {
    try {
      const videoSearchList = await getYoutubeVideoSearch(search);
      // const videoSearchList = mockData;

      dispatch({
        type: ACTIONS.VIDEO.SEARCH,
        // payload: videoSearchList.items,
        payload: videoSearchList.data.items,
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
