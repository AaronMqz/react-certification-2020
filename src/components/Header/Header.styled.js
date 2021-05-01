import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #282828;
  height: 55px;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const AlignLeft = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`;

const Label = styled.p`
  color: white;
  font-size: 15px;
  margin: 0 10px 0 15px;
`;

const FavoriteCounterContainer = styled.div`
  position: relative;
`;

const FavoriteCounter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: red;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;

export const Header = {
  Container,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Label,
  FavoriteCounterContainer,
  FavoriteCounter,
};
