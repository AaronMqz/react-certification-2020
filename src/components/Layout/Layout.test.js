import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './index';
import { VideoProvider } from '../../utils/store/providers';

it('should contain Header component', () => {
  render(
    <VideoProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </VideoProvider>
  );
  const result = screen.getByTestId('header');
  expect(result).toBeInTheDocument();
});
