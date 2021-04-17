import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { VideoProvider, ThemeProvider } from '../../utils/store/providers';
import App from './index';

it('should contain Home Page component', () => {
  render(
    <VideoProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </VideoProvider>
  );
  const result = screen.getByTestId('home-page');
  expect(result).toBeInTheDocument();
});
