import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

it('should contain InputSearch component', () => {
  render(<Header />);
  const result = screen.getByTestId('input-search');
  expect(result).toBeInTheDocument();
});
