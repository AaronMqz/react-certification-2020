import { mockData } from '../service/mockData';
import { useService } from '../utils/hooks/useService';

describe('Youtube Data', () => {
  test('it should return an array', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch('', 30);
    expect(Array.isArray(result.data.items)).toBe(true);
  });

  test('it should return a valid array', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch('wizeline', 30);
    expect(result.data.items[0]).toMatchObject(mockData.items[0]);
  });

  test('it should return 30 elements', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch('', 30);
    expect(result.data.items.length).toBe(30);
  });

  test('it should have a title property', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch('', 30);
    expect(result.data.items[0].snippet).toHaveProperty('title');
  });

  test('it should have a description property', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch('', 30);
    expect(result.data.items[0].snippet).toHaveProperty('description');
  });

  test('it should have a thumbnails property', async () => {
    const { getYoutubeVideoSearch } = useService();
    const result = await getYoutubeVideoSearch('', 30);
    expect(result.data.items[0].snippet).toHaveProperty('thumbnails');
  });
});
