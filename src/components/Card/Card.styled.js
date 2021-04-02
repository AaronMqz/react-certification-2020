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
  -webkit-box-shadow: 0px -1px 11px 2px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.37);
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

const CardImageContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const CardImageBody = styled.img`
  left: 0;
  top: 0;
  width: 100%;
`;

export {
  Section,
  DescriptionContainer,
  Title,
  Description,
  CardImageContainer,
  CardImageBody,
};
