import axios from 'axios';

export const useService = () => {
  const URL = process.env.REACT_APP_API_URL;

  const getYoutubeVideoSearch = (search, maxResults = 30) => {
    const searchParams = `${URL}&q=${search}&maxResults=${maxResults}`;
    return axios.get(searchParams).catch((error) => {
      throw error;
    });
  };

  return { getYoutubeVideoSearch };
};
