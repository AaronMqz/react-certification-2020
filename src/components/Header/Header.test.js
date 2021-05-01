import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';
import { VideoProvider, ThemeProvider, AuthProvider } from '../../utils/store/providers';

it('should contain InputSearch component', () => {
  render(
    <AuthProvider>
      <VideoProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </VideoProvider>
    </AuthProvider>
  );
  const result = screen.getByTestId('input-search');
  expect(result).toBeInTheDocument();
});
