/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.styles.css';

function NotFoundPage() {
  const { push } = useHistory();

  return (
    <section className="not-found" data-testid="page-not-found">
      <img src="404.gif" alt="page not found" />
      <div className="home-link" onClick={() => push('/')}>
        Go to home
      </div>
    </section>
  );
}

export default NotFoundPage;
