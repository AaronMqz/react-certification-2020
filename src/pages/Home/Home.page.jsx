import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import useService from '../../utils/hooks/useService';
import './Home.styles.css';

const Containerlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const HomePage = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const { getYoutubeData } = useService();

  useEffect(() => {
    setYoutubeData(getYoutubeData());
  }, [getYoutubeData]);

  return (
    <Containerlist data-testid="home-page">
      {youtubeData.map((item) => {
        return <Card key={item.etag} data={item} />;
      })}
    </Containerlist>
  );
};

export default HomePage;
