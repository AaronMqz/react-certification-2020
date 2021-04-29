/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import List from '../../components/List';
import { useAuthContext, useVideoContext } from '../../utils/store/context';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { FavoriteIcon } from '../../components/FavoriteButton';
import { Favorite } from './Favorite.styled';

const FavoritePage = () => {
  const { favorites } = useVideoContext();
  const { user } = useAuthContext();
  const { push } = useHistory();
  const { getFavoritesStorage } = useLocalStorage();

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    getFavorites();
  }, [favorites.length]);

  const handleSelect = (videoId) => {
    push(`/favorites/detail/${videoId}`);
  };

  const getFavorites = () => {
    return getFavoritesStorage(user.name);
  };

  return (
    <>
      {favorites.length > 0 ? (
        <List dataList={getFavorites()} handleSelect={handleSelect} />
      ) : (
        <Favorite.EmptyContainer>
          <FavoriteIcon size={120} />
          <Favorite.Label>Empty Favorites</Favorite.Label>
        </Favorite.EmptyContainer>
      )}
    </>
  );
};

export default FavoritePage;
