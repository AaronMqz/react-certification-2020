import React from 'react';
import { Input } from './Input.styled';

const InputSearchComponent = ({ handleEnterKey }) => {
  return (
    <Input
      type="text"
      placeholder="Search..."
      data-testid="input-search"
      onKeyDown={(e) => handleEnterKey(e)}
    />
  );
};

export default InputSearchComponent;
