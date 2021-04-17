import React from 'react';
import { render, screen } from '@testing-library/react';
import Toogle from './index';
import { ThemeProvider } from '../../utils/store/providers';

test('Display Toogle component', () => {
  render(
    <ThemeProvider>
      <Toogle />
    </ThemeProvider>
  );
  const result = screen.getByText(/Dark mode/i);
  expect(result).toBeInTheDocument();
});
