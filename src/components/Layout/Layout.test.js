import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './index';
import { VideoProvider, ThemeProvider, AuthProvider } from '../../utils/store/providers';

it('should contain Header component', () => {
  render(
    <AuthProvider>
      <VideoProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </VideoProvider>
    </AuthProvider>
  );
  const result = screen.getByTestId('header');
  expect(result).toBeInTheDocument();
});
