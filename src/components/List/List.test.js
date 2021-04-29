import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './index';
import { AuthProvider, VideoProvider } from '../../utils/store/providers';

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
