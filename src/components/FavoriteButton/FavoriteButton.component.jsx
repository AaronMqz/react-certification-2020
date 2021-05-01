import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IconFavorite } from './Favorite.styled';

export const FavoriteIcon = ({ size, isFavorite, handleClick }) => {
  return (
    <IconFavorite onClick={handleClick}>
      <FontAwesomeIcon
        icon={faHeart}
        style={{ fontSize: size, color: isFavorite ? 'red' : 'white' }}
        title="Favorites"
        data-testid="favorites"
        // onClick={}
      />
    </IconFavorite>
  );
};

FavoriteIcon.defaultProps = {
  size: 18,
  isFavorite: false,
};
