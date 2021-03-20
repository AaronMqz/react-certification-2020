import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginIcon } from './index';

test('Display Login Icon', () => {
  render(<LoginIcon />);
  const result = screen.getByText(/Login/i);
  expect(result).toBeInTheDocument();
});
