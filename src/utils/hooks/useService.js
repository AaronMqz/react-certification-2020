import axios from 'axios';

export const useService = () => {
  const URL = process.env.REACT_APP_API_URL;

  const getYoutubeVideoSearch = (search) => {
    const searchParams = `${URL}&q=${search}`;
    return axios.get(searchParams).catch((error) => {
      throw error;
    });
  };

  return { getYoutubeVideoSearch };
};
