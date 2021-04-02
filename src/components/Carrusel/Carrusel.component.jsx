/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Carrusel.styles.css';

const Carrusel = ({ data, onSelect }) => {
  return (
    <div className="wrapper">
      <section>
        {data.map((item) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={item.id.videoId}
              className="item"
              onClick={() => onSelect(item.id.videoId)}
            >
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
              <h1 className="heading">{item.snippet.title}</h1>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Carrusel;
