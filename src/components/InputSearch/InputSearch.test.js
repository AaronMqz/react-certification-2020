import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

test('Display Input search component', () => {
  render(<Input />);
  const result = screen.getByPlaceholderText(/Search.../i);
  expect(result).toBeInTheDocument();
});

test('Display Input search component', () => {
  const mockOnClick = jest.fn();
  render(<Input handleEnterKey={() => mockOnClick()} />);
  const result = screen.getByTestId('input-search');
  fireEvent.keyDown(result, { key: 'Enter', charCode: 13 });
  expect(mockOnClick).toHaveBeenCalled();
});
