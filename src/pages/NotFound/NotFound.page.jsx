import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <BrowserRouter>
      <section className="not-found" data-testid="page-not-found">
        <Link to="/" className="home-link">
          home
        </Link>
        <img src="404.gif" alt="page not found" />
      </section>
    </BrowserRouter>
  );
}

export default NotFoundPage;
