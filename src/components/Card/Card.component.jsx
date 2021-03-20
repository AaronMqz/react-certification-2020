import React from 'react';
import styled from 'styled-components';

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
`;

const Title = styled.h1`
  font-size: 16px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Card = ({ data: { snippet } }) => {
  const { thumbnails, title, description } = snippet;
  return (
    <Section>
      <div className="card__image">
        <img src={thumbnails.high.url} alt={title} />
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Section>
  );
};

export default Card;
