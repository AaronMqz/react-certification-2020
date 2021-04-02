import axios from 'axios';
import { mockData } from '../service/mockData';

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

describe('Youtube Data', () => {
  test('it should return an array', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch();
    expect(Array.isArray(result)).toBe(true);
  });

  test('it should return a valid array', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch();
    expect(result).toMatchObject(mockData.items);
  });

  test('it should return 30 elements', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch();
    expect(result.length).toBe(30);
  });

  test('it should have a title property', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch()[0].snippet;
    expect(result).toHaveProperty('title');
  });

  test('it should have a description property', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch()[0].snippet;
    expect(result).toHaveProperty('description');
  });

  test('it should have a thumbnails property', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch()[0].snippet;
    expect(result).toHaveProperty('thumbnails');
  });
});
