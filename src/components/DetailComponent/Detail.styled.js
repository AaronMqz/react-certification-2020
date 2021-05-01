import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
`;

const Video = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 50vh;
`;

const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  color: white;
`;

const ContainerRelatedVideosList = styled.div`
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 0;
`;

const Date = styled.span`
  font-size: 14px;
  color: grey;
  border-bottom: solid 1px grey;
`;

const ChannelTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;

const Description = styled.h1`
  font-size: 14px;
  word-break: break-all;
  color: lightgray;
`;

export {
  Container,
  ContainerVideo,
  Video,
  ContainerDetail,
  ContainerRelatedVideosList,
  Title,
  Description,
  Date,
  ChannelTitle,
};
