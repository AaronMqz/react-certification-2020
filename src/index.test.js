import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { VideoProvider } from './utils/store/providers';

test('Display Layout when App render', () => {
  render(
    <VideoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideoProvider>
  );
  const result = screen.getByTestId(/layout/i);
  expect(result).toBeInTheDocument();
});
