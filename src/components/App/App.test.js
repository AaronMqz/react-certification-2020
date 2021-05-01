import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { VideoProvider, ThemeProvider, AuthProvider } from '../../utils/store/providers';
import App from './index';

it('should contain Home Page component', () => {
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
  const result = screen.getByText(/Results/i);
  expect(result).toBeInTheDocument();
});
