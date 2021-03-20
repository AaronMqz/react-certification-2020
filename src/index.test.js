import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

test('Display Layout when App render', () => {
  render(<App />);
  const result = screen.getByTestId(/layout/i);
  expect(result).toBeInTheDocument();
});
