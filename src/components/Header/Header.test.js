import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';
import { VideoProvider, ThemeProvider } from '../../utils/store/providers';

it('should contain InputSearch component', () => {
  render(
    <VideoProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    </VideoProvider>
  );
  const result = screen.getByTestId('input-search');
  expect(result).toBeInTheDocument();
});
