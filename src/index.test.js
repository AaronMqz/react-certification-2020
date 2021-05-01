import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { VideoProvider, ThemeProvider, AuthProvider } from './utils/store/providers';

test('Display Layout when App render', () => {
  render(
    <AuthProvider>
      <VideoProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </VideoProvider>
    </AuthProvider>
  );
  const result = screen.getByTestId(/layout/i);
  expect(result).toBeInTheDocument();
});
