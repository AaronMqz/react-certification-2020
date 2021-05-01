import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Header } from './Header.styled';
import InputSearch from '../InputSearch';
import Toogle from '../Toogle';
import { MenuIcon } from '../Menu';
import { LoginIcon } from '../LoginButton';
import { FavoriteIcon } from '../FavoriteButton';
import { useVideoContext, useAuthContext } from '../../utils/store/context';

const HeaderComponent = () => {
  const { getYoutubeSearch, favorites } = useVideoContext();
  const { user } = useAuthContext();
  const { push } = useHistory();
  const location = useLocation();

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      getYoutubeSearch(e.target.value);
      if (location !== '/') push(`/`);
    }
  };

  return (
    <Header.Container data-testid="header">
      <Header.AlignLeft>
        <MenuIcon handleClick={() => push(`/`)} />
        {user && (
          <Header.FavoriteCounterContainer onClick={() => push(`/favorites`)}>
            <Header.FavoriteCounter>{favorites.length}</Header.FavoriteCounter>
            <FavoriteIcon size={25} />
          </Header.FavoriteCounterContainer>
        )}
      </Header.AlignLeft>
      <Header.AlignCenter>
        <InputSearch handleEnterKey={handleEnterKey} />
      </Header.AlignCenter>
      <Header.AlignRight>
        <Toogle />
        {user && <Header.Label>{user.name}</Header.Label>}
        <LoginIcon />
      </Header.AlignRight>
    </Header.Container>
  );
};

export default HeaderComponent;
