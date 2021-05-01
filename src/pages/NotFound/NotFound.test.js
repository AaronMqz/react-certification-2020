import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './index';

test('Display Not found Page', () => {
  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
  const result = screen.getByTestId(/page-not-found/i);
  expect(result).toBeInTheDocument();
});
