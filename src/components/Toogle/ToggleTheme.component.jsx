import React, { useState } from 'react';
import { Container, Toogle, Label } from './ToogleTheme.styled';
import { useThemeContext } from '../../utils/store/context';
import { ACTIONS } from '../../utils/constants';

const ToggleButton = () => {
  const [disabled, setDisabled] = useState(false);
  const { setTheme, theme } = useThemeContext();

  const handleToogle = () => {
    setDisabled(!disabled);
    setTheme(disabled ? ACTIONS.THEME.DARK : ACTIONS.THEME.LIGHT);
  };

  return (
    <>
      <Container onClick={() => handleToogle()} data-testid="toogle">
        <Toogle disabled={disabled} />
      </Container>
      <Label>{theme.label}</Label>
    </>
  );
};

export default ToggleButton;
