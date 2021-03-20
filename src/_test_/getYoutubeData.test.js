import { mockData } from '../service/mockData';

const useService = () => {
  const getYoutubeData = () => {
    return mockData.items;
  };

  return { getYoutubeData };
};

describe('Youtube Data', () => {
  test('it should return an array', () => {
    const { getYoutubeData } = useService();
    const result = getYoutubeData();
    expect(Array.isArray(result)).toBe(true);
  });

  test('it should return a valid array', () => {
    const { getYoutubeData } = useService();
    const result = getYoutubeData();
    expect(result).toMatchObject(mockData.items);
  });

  test('it should return 25 elements', () => {
    const { getYoutubeData } = useService();
    const result = getYoutubeData();
    expect(result.length).toBe(25);
  });

  test('it should have a title property', () => {
    const { getYoutubeData } = useService();
    const result = getYoutubeData()[0].snippet;
    expect(result).toHaveProperty('title');
  });

  test('it should have a description property', () => {
    const { getYoutubeData } = useService();
    const result = getYoutubeData()[0].snippet;
    expect(result).toHaveProperty('description');
  });

  test('it should have a thumbnails property', () => {
    const { getYoutubeData } = useService();
    const result = getYoutubeData()[0].snippet;
    expect(result).toHaveProperty('thumbnails');
  });
});
