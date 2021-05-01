import styled from 'styled-components';

const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.h1`
  margin-top: 40px;
`;

export const Favorite = {
  EmptyContainer,
  Label,
};
