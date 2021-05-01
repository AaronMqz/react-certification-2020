import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useVideoContext } from '../../utils/store/context';
import Detail from '../../components/DetailComponent';

const VideoDetailPage = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { videos, setVideoDetail } = useVideoContext();

  useEffect(() => {
    if (videos.length === 0) {
      push(`/`);
    } else {
      setVideoDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSelect = (videoId) => {
    push(`/detail/${videoId}`);
  };

  return (
    <Detail
      data-testid="videoDetail"
      videoId={id}
      videoList={videos}
      handleSelect={handleSelect}
    />
  );
};

export default VideoDetailPage;
