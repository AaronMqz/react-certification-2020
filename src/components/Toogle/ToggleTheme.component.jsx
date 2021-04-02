import React, { useState } from 'react';
import { Container, Toogle, Label } from './ToogleTheme.styled';

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
