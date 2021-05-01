import styled from 'styled-components';

const Section = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  min-width: 250px;
  max-width: 300px;
  padding: 15px 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-sizing: content-box;
  cursor: pointer;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 16px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  word-break: break-all;
  margin-top: 0;
  color: grey;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;

const ImageBody = styled.img`
  left: 0;
  top: 0;
  width: 100%;
`;

const FavoriteIconContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const FavoriteIconBody = styled.div`
  padding-right: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CardItem = {
  Section,
  DescriptionContainer,
  Title,
  Description,
  ImageContainer,
  ImageBody,
  FavoriteIconContainer,
  FavoriteIconBody,
};

/**
 * ${(props) =>
    props.hoverThemeColor === 'light'
      ? '&:hover{opacity: 0.6;}'
      : '&:hover{opacity: 0.6;}'}
 */
