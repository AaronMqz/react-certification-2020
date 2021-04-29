import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FavoriteDetailPage from './index';
import { VideoProvider, ThemeProvider } from '../../utils/store/providers';

test('Display Detail component', () => {
  render(
    <VideoProvider>
      <ThemeProvider>
        <BrowserRouter>
          <FavoriteDetailPage />
        </BrowserRouter>
      </ThemeProvider>
    </VideoProvider>
  );
  const result = screen.getByTestId('videoDetail');
  expect(result).toBeInTheDocument();
});
