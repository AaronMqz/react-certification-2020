import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthProvider } from '../../utils/store/providers';
import { LoginForm } from './index';

test('Display Login Form', () => {
  render(
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
  const result = screen.getByTestId('login_form');
  expect(result).toBeInTheDocument();
});
