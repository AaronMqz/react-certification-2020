import React from 'react';
import Header from '../Header/Header.component';

function Layout({ children }) {
  return (
    <div data-testid="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
