import React from 'react';
import styled from 'styled-components';
import InputSearch from '../InputSearch';
import Toogle from '../Toogle';
import { MenuIcon } from '../Menu';
import { LoginIcon } from '../LoginButton';

const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: lightcoral;
  height: 55px;
  padding: 10px;
`;

const AlignLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

const HeaderComponent = () => {
  return (
    <Header data-testid="header">
      <AlignLeft>
        <MenuIcon />
        <InputSearch />
      </AlignLeft>

      <AlignRight>
        <Toogle />
        <LoginIcon />
      </AlignRight>
    </Header>
  );
};

export default HeaderComponent;
