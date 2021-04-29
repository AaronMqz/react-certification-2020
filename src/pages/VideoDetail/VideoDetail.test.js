import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoDetailPage from './index';
import { VideoProvider, ThemeProvider } from '../../utils/store/providers';

test('Display video detail', () => {
  render(
    <VideoProvider>
      <ThemeProvider>
        <BrowserRouter>
          <VideoDetailPage />
        </BrowserRouter>
      </ThemeProvider>
    </VideoProvider>
  );
  const result = screen.getByTestId('videoDetail');
  expect(result).toBeInTheDocument();
});
