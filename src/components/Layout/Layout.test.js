import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index';

it('should contain Header component', () => {
  render(<Layout />);
  const result = screen.getByTestId('header');
  expect(result).toBeInTheDocument();
});
