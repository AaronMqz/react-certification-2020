import React from 'react';
import moment from 'moment';
import { useVideoContext } from '../../utils/store/context';
import Carrusel from '../Carrusel';
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
} from './Detail.styled';

const Detail = ({ videoId, videoList, handleSelect }) => {
  const { video } = useVideoContext();
  return (
    <Container data-testid="videoDetail">
      <ContainerVideo>
        <Video>
          <iframe
            title="video"
            width="80%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
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
        <Carrusel data={videoList} onSelect={handleSelect} />
      </ContainerRelatedVideosList>
    </Container>
  );
};

export default Detail;
