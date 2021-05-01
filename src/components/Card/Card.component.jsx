import React, { useState } from 'react';
import { CardItem } from './Card.styled';
import { FavoriteIcon } from '../FavoriteButton';
import { useAuthContext } from '../../utils/store/context';

const Card = ({ data: { snippet, id }, onSelect, onSelectFavorite, isFavorite }) => {
  const { thumbnails, title, description } = snippet;
  const [showFavorite, setShowFavorite] = useState(false);
  const [hoverFavoriteArea, setHoverFavoriteArea] = useState(false);
  const { user } = useAuthContext();

  return (
    <CardItem.Section
      onMouseEnter={() => setShowFavorite(true)}
      onMouseLeave={() => setShowFavorite(false)}
      onClick={() => (hoverFavoriteArea ? false : onSelect(id.videoId))}
      data-testid="cardOnClick"
    >
      <CardItem.ImageContainer>
        {showFavorite && (
          <CardItem.FavoriteIconContainer>
            <CardItem.FavoriteIconBody
              onMouseEnter={() => setHoverFavoriteArea(true)}
              onMouseLeave={() => setHoverFavoriteArea(false)}
              onClick={() => onSelectFavorite(id.videoId)}
              data-testid="cardFavoriteOnClick"
            >
              {user && <FavoriteIcon size={25} isFavorite={isFavorite} />}
            </CardItem.FavoriteIconBody>
          </CardItem.FavoriteIconContainer>
        )}
        <CardItem.ImageBody src={thumbnails.high.url} alt={title} />
      </CardItem.ImageContainer>
      <CardItem.DescriptionContainer>
        <CardItem.Title>{title}</CardItem.Title>
        <CardItem.Description>{description}</CardItem.Description>
      </CardItem.DescriptionContainer>
    </CardItem.Section>
  );
};

export default Card;
