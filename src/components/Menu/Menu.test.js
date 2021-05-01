import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuIcon } from './index';

test('Display Menu Icon', () => {
  render(<MenuIcon />);
  const result = screen.getByText(/Menu/i);
  expect(result).toBeInTheDocument();
});
