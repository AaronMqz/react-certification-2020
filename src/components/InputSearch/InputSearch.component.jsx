import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  height: 30px;
  padding: 2px 5px;
`;

const InputSearchComponent = () => {
  return <Input type="text" placeholder="Search..." data-testid="input-search" />;
};

export default InputSearchComponent;
