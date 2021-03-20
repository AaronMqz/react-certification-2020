import React from 'react';
import { render, screen } from '@testing-library/react';
import Toogle from './index';

test('Display Toogle component', () => {
  render(<Toogle />);
  const result = screen.getByText(/Dark mode/i);
  expect(result).toBeInTheDocument();
});
