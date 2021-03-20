import { mockData } from '../../service/mockData';

const useService = () => {
  const getYoutubeData = () => {
    return mockData.items;
  };

  return { getYoutubeData };
};

export default useService;
