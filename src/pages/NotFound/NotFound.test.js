import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './index';

test('Display Not found Page', () => {
  render(<NotFoundPage />);
  const result = screen.getByTestId(/page-not-found/i);
  expect(result).toBeInTheDocument();
});
