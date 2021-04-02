import React from 'react';
import styled from 'styled-components';
import './CardList.styles.css';

const Section = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  min-width: 250px;
  max-width: 300px;
  padding: 15px 20px;
  -webkit-box-shadow: 0px -1px 11px 2px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.37);
  margin-bottom: 10px;
  margin-top: 10px;
  box-sizing: content-box;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  word-break: break-all;
`;

const CardImageContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const CardImageBody = styled.img`
  left: 0;
  top: 0;
  width: 100%;
`;

const CardList = ({ data: { snippet, id }, onSelect }) => {
  const { thumbnails, title, description } = snippet;
  return (
    <Section onClick={() => onSelect(id.videoId)}>
      <CardImageContainer>
        <CardImageBody src={thumbnails.high.url} alt={title} />
      </CardImageContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Section>
  );
};

export default CardList;
