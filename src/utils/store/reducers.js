import { ACTIONS, THEME_OPTION } from '../constants';

export const init = {
  videos: [],
  video: {
    title: '',
    description: '',
    channelTitle: '',
    publishedAt: '',
  },
  favorites: [],
  isFetching: false,
  isError: false,
  search: '',
};

export const initTheme = {
  theme: THEME_OPTION.DARK,
};

export const initAuth = {
  isFeching: false,
  error: '',
  user: null,
};

export const youtubeReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ACTIONS.FETCHING:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case ACTIONS.VIDEO.SEARCH:
      return {
        ...state,
        isFetching: false,
        videos: payload.videos,
        search: payload.search,
      };
    case ACTIONS.VIDEO.DETAIL:
      return {
        ...state,
        video: payload,
      };
    case ACTIONS.FAVORITE.ADD:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case ACTIONS.FAVORITE.UPDATE:
      return {
        ...state,
        favorites: payload,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        isFetching: false,
        isError: payload.error,
      };
    default:
      return state;
  }
};

export const themeReducer = (state = initTheme, { type }) => {
  switch (type) {
    case ACTIONS.THEME.DARK:
      return {
        ...state,
        theme: THEME_OPTION.DARK,
      };
    case ACTIONS.THEME.LIGHT:
      return {
        ...state,
        theme: THEME_OPTION.LIGHT,
      };
    default:
      return state;
  }
};

export const authReducer = (state = initAuth, { type, payload }) => {
  switch (type) {
    case ACTIONS.FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case ACTIONS.AUTH.SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: payload,
      };
    case ACTIONS.AUTH.LOGOUT:
      return {
        ...initAuth,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
