import { ACTIONS } from './actions';

export const init = {
  videos: [],
  video: {
    title: '',
    description: '',
    channelTitle: '',
    publishedAt: '',
  },
  isFeching: false,
  isError: false,
  search: '',
};

export const youtubeReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ACTIONS.FETCHING:
      return {
        ...state,
        isFeching: true,
        isError: false,
      };
    case ACTIONS.VIDEO.SEARCH:
      return {
        ...state,
        isFeching: false,
        videos: payload,
      };
    case ACTIONS.VIDEO.DETAIL:
      return {
        ...state,
        video: payload,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        isFeching: false,
        isError: payload.error,
      };
    default:
      return state;
  }
};
