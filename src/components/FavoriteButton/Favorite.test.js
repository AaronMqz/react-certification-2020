import React from 'react';
import { render, screen } from '@testing-library/react';
import { FavoriteIcon } from './index';

test('Display Favorite Icon', () => {
  render(<FavoriteIcon />);
  const result = screen.getByText(/Favorites/i);
  expect(result).toBeInTheDocument();
});
