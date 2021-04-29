import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginIcon } from './index';
import { AuthProvider } from '../../utils/store/providers';

test('Display Login Icon', () => {
  render(
    <AuthProvider>
      <LoginIcon />
    </AuthProvider>
  );
  const result = screen.getByTestId('login');
  expect(result).toBeInTheDocument();
});
