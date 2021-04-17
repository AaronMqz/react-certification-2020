import React, { useEffect } from 'react';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { useVideoContext } from '../../utils/store/context';
import Carrusel from '../../components/Carrusel';
import {
  Container,
  ContainerVideo,
  Video,
  ContainerDetail,
  ContainerRelatedVideosList,
  Title,
  Description,
  Date,
  ChannelTitle,
} from './VideoDetail.styled';

const VideoDetailPage = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { videos, video, setVideoDetail } = useVideoContext();

  const load = () => {
    if (videos.length === 0) {
      push(`/`);
    } else {
      setVideoDetail(id);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSelect = (videoId) => {
    push(`/detail/${videoId}`);
  };

  return (
    <Container data-testid="videoDetail">
      <ContainerVideo>
        <Video>
          <iframe
            title="video"
            width="80%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
          />
        </Video>
        <ContainerDetail>
          <Title>{video.title}</Title>
          <Date>{moment(video.publishedAt).format('LL')} </Date>
          <ChannelTitle>{video.channelTitle}</ChannelTitle>
          <Description>{video.description}</Description>
        </ContainerDetail>
      </ContainerVideo>
      <ContainerRelatedVideosList>
        <Carrusel data={videos} onSelect={handleSelect} />
      </ContainerRelatedVideosList>
    </Container>
  );
};

export default VideoDetailPage;
