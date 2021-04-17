import React from 'react';
import {
  Section,
  DescriptionContainer,
  Title,
  Description,
  CardImageContainer,
  CardImageBody,
} from './Card.styled';

const Card = ({ data: { snippet, id }, onSelect }) => {
  const { thumbnails, title, description } = snippet;
  return (
    <Section onClick={() => onSelect(id.videoId)} data-testid="cardOnClick">
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

export default Card;
