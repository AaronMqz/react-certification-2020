import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { VideoProvider } from '../../utils/store/providers';
import App from './index';

it('should contain Home Page component', () => {
  render(
    <VideoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideoProvider>
  );
  const result = screen.getByTestId('home-page');
  expect(result).toBeInTheDocument();
});
