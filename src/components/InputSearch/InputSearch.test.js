import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

test('Display Input search component', () => {
  render(<Input />);
  const result = screen.getByPlaceholderText(/Search.../i);
  expect(result).toBeInTheDocument();
});
