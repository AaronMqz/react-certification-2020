import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

it('should contain Home Page component', () => {
  render(<App />);
  const result = screen.getByTestId('home-page');
  expect(result).toBeInTheDocument();
});
