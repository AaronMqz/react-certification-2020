import React, { useState } from 'react';
import { Container, Toogle } from './ToogleTheme.styled';
import { useThemeContext } from '../../utils/store/context';
import { ACTIONS } from '../../utils/constants';

const ToggleButton = () => {
  const [disabled, setDisabled] = useState(false);
  const { setTheme } = useThemeContext();

  const handleToogle = () => {
    setDisabled(!disabled);
    setTheme(disabled ? ACTIONS.THEME.DARK : ACTIONS.THEME.LIGHT);
  };

  return (
    <>
      <Container onClick={() => handleToogle()} data-testid="toogleClick">
        <Toogle disabled={disabled} data-testid="toogle" />
      </Container>
    </>
  );
};

export default ToggleButton;
