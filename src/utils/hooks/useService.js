import axios from 'axios';
import { mockUsers } from '../../service/mockUser';

export const useService = () => {
  const URL = process.env.REACT_APP_API_URL;
  const MOCKED_PASSWORD = process.env.REACT_APP_MOCKED_PASSWORD;

  const mockLogin = ({ user, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockUser = mockUsers.filter((item) => {
          return (
            item.name.toLowerCase().trim() === user.toLowerCase().trim() &&
            MOCKED_PASSWORD === password
          );
        });
        if (mockUser.length > 0) {
          return resolve(mockUser[0]);
        }
        return reject(new Error('Username or password invalid'));
      }, 500);
    });
  };

  const getYoutubeVideoSearch = (search, maxResults = 10) => {
    const searchParams = `${URL}&q=${search}&maxResults=${maxResults}`;
    return axios.get(searchParams).catch((error) => {
      throw error;
    });
  };

  return { mockLogin, getYoutubeVideoSearch };
};
