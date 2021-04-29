import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useVideoContext } from '../../utils/store/context';
import Detail from '../../components/DetailComponent';

const FavoriteDetailPage = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { favorites, setVideoDetail } = useVideoContext();

  useEffect(() => {
    if (favorites.length === 0) {
      push(`/`);
    } else {
      setVideoDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSelect = (videoId) => {
    push(`/favorites/detail/${videoId}`);
  };

  return (
    <Detail
      data-testid="favoriteDetail"
      videoId={id}
      videoList={favorites}
      handleSelect={handleSelect}
    />
  );
};

export default FavoriteDetailPage;
