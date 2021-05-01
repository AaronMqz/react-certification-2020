import styled from 'styled-components';

const Spinner = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HandleScrool = styled.div`
  overflow-y: scroll;
  height: 100vh;
  position: relative;
`;

const VideoResult = styled.p`
  color: white;
  font-size: 14px;
  padding: 8px 35px;
  margin: 0;
  text-align: right;
`;

export const Home = {
  Spinner,
  HandleScrool,
  VideoResult,
};
