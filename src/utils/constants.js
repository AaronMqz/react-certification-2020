export const ACTIONS = {
  FETCHING: 'FETCHING',
  ERROR: 'ERROR',
  VIDEO: {
    SEARCH: 'SEARCH',
    DETAIL: 'DETAIL',
  },
  THEME: {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
  },
  AUTH: {
    SUCCESS: 'SUCCESS',
    LOGOUT: 'LOGOUT',
  },
  FAVORITE: {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
  },
};

export const THEME_OPTION = {
  DARK: {
    class: 'dark',
    label: 'Dark Mode',
  },
  LIGHT: {
    class: 'light',
    label: 'Light Mode',
  },
};
