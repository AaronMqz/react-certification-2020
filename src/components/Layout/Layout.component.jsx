import React from 'react';
import Header from '../Header/Header.component';
import { useThemeContext } from '../../utils/store/context';

function Layout({ children }) {
  const { theme } = useThemeContext();

  return (
    <div data-testid="layout" className={theme.class}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
