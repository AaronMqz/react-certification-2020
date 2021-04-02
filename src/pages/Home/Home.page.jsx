import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';
import { useVideoContext } from '../../utils/store/context';
import { Containerlist } from './Home.styled';

const HomePage = () => {
  const { videos, getYoutubeSearch } = useVideoContext();
  const { push } = useHistory();

  useEffect(() => {
    getYoutubeSearch('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (videoId) => {
    push(`/detail/${videoId}`);
  };

  return (
    <Containerlist data-testid="home-page">
      {videos.map((item) => {
        return <Card key={item.etag} data={item} onSelect={handleSelect} />;
      })}
    </Containerlist>
  );
};

export default HomePage;
