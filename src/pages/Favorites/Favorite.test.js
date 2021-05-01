import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FavoritePage from './index';
import { VideoProvider, ThemeProvider, AuthProvider } from '../../utils/store/providers';

test('Display empty favorite', () => {
  render(
    <AuthProvider>
      <VideoProvider>
        <ThemeProvider>
          <BrowserRouter>
            <FavoritePage />
          </BrowserRouter>
        </ThemeProvider>
      </VideoProvider>
    </AuthProvider>
  );
  const result = screen.getByTestId('favoriteEmpty');
  expect(result).toBeInTheDocument();
});
