import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Header, AlignLeft, AlignRight } from './Header.styled';
import InputSearch from '../InputSearch';
import Toogle from '../Toogle';
import { MenuIcon } from '../Menu';
import { LoginIcon } from '../LoginButton';
import { useVideoContext } from '../../utils/store/context';

const HeaderComponent = () => {
  const { getYoutubeSearch } = useVideoContext();
  const { push } = useHistory();
  const location = useLocation();

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      getYoutubeSearch(e.target.value);
      if (location !== '/') push(`/`);
    }
  };

  const handleClickHome = () => {
    push(`/`);
  };

  return (
    <Header data-testid="header">
      <AlignLeft>
        <MenuIcon handleClick={handleClickHome} />
        <InputSearch handleEnterKey={handleEnterKey} />
      </AlignLeft>
      <AlignRight>
        <Toogle />
        <LoginIcon />
      </AlignRight>
    </Header>
  );
};

export default HeaderComponent;
