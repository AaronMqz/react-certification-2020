import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './index';
import { AuthProvider, VideoProvider } from '../../utils/store/providers';
import { mockData } from '../../service/mockData';

it('should contain List component', () => {
  render(
    <AuthProvider>
      <VideoProvider>
        <List dataList={[]} />
      </VideoProvider>
    </AuthProvider>
  );
  const result = screen.getByTestId('list_component');
  expect(result).toBeInTheDocument();
});

it('should display card component', () => {
  render(
    <AuthProvider>
      <VideoProvider>
        <List dataList={[mockData.items[0]]} />
      </VideoProvider>
    </AuthProvider>
  );
  const result = screen.getByTestId('cardOnClick');
  expect(result).toBeInTheDocument();
});
