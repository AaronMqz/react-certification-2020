import React, { useEffect, useRef } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import List from '../../components/List';
import { useVideoContext, useAuthContext } from '../../utils/store/context';
import { Home } from './Home.styled';

const HomePage = () => {
  const {
    videos,
    search,
    getYoutubeSearch,
    loadFavorites,
    isFetching,
  } = useVideoContext();
  const { user, getCurrentSession } = useAuthContext();
  const { push } = useHistory();
  const listInnerRef = useRef();

  useEffect(() => {
    getYoutubeSearch('');
    getCurrentSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      // after login, load favorites from localstorage
      loadFavorites(user.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSelect = (videoId) => {
    push(`/detail/${videoId}`);
  };

  const handleScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        getYoutubeSearch(search, videos.length + 5);
      }
    }
  };

  return (
    <>
      {isFetching && (
        <Home.Spinner>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            visible={isFetching}
          />
        </Home.Spinner>
      )}
      <Home.VideoResult>Results: {videos.length}</Home.VideoResult>
      <Home.HandleScrool onScroll={() => handleScroll()} ref={listInnerRef}>
        <List dataList={videos} handleSelect={handleSelect} />
      </Home.HandleScrool>
    </>
  );
};

export default HomePage;
