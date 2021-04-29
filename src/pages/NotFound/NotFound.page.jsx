/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.styles.css';
import NotFounImage from '../../assets/404.gif';

function NotFoundPage() {
  const { push } = useHistory();

  return (
    <section className="not-found" data-testid="page-not-found">
      <img src={NotFounImage} alt="page not found" />
      <div className="home-link" onClick={() => push('/')}>
        Go to home
      </div>
    </section>
  );
}

export default NotFoundPage;
