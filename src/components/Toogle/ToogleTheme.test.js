import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toogle from './index';
import { ThemeProvider } from '../../utils/store/providers';

test('Display Toogle component', () => {
  render(
    <ThemeProvider>
      <Toogle />
    </ThemeProvider>
  );
  const result = screen.getByTestId('toogle');
  expect(result).toBeInTheDocument();
});

test('onClick toogle', () => {
  const mockOnClick = jest.fn();
  render(
    <ThemeProvider>
      <Toogle onClick={() => mockOnClick()} />
    </ThemeProvider>
  );
  const result = screen.getByTestId('toogleClick');
  fireEvent.click(result);
  expect(result).toBeInTheDocument();
});
