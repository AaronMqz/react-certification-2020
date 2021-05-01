import React from 'react';
import Card from '../Card';
import { useVideoContext, useAuthContext } from '../../utils/store/context';
import { Containerlist } from './List.styled';

const List = ({ dataList, handleSelect }) => {
  const { favorites, saveFavorite, updateFavorite } = useVideoContext();
  const { user } = useAuthContext();

  const handleIsFavorite = (videoId) => {
    const fav = favorites.some((video) => video.id.videoId === videoId);
    return fav;
  };

  const hanldeSelectFavorite = (videoId) => {
    if (handleIsFavorite(videoId)) {
      updateFavorite(videoId, user.name);
    } else {
      saveFavorite(videoId, user.name);
    }
  };

  return (
    <Containerlist data-testid="list_component">
      {dataList.map((item) => {
        return (
          <Card
            key={item.etag}
            data={item}
            onSelect={() => handleSelect(item.id.videoId)}
            onSelectFavorite={hanldeSelectFavorite}
            isFavorite={handleIsFavorite(item.id.videoId)}
          />
        );
      })}
    </Containerlist>
  );
};

export default List;

List.defaultProps = {
  dataList: [],
};
