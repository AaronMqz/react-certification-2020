import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50px;
  background-color: #c4c4c4;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  height: 20px;
  position: relative;
`;

const Toogle = styled.div`
  cursor: pointer;
  background-color: lightcoral;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  min-width: unset;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: ${(props) => (props.disabled ? '30px' : '-3px')};
  transition: all 0.3s ease;
  top: -5px;
`;

const Label = styled.p`
  margin-left: 5px;
  font-size: 16px;
  color: white;
`;

const ToggleButton = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Container onClick={() => setDisabled(!disabled)} data-testid="toogle">
        <Toogle disabled={disabled} />
      </Container>
      <Label>Dark mode</Label>
    </>
  );
};

export default ToggleButton;
