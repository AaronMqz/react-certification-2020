import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { VideoProvider, ThemeProvider } from './utils/store/providers';

test('Display Layout when App render', () => {
  render(
    <VideoProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </VideoProvider>
  );
  const result = screen.getByTestId(/layout/i);
  expect(result).toBeInTheDocument();
});
