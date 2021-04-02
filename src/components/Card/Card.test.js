import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';
import { useService } from '../../utils/hooks/useService';

test('Display Card Title', async () => {
  const { getYoutubeVideoSearch } = useService();
  const data = await getYoutubeVideoSearch('wizeline');
  render(<Card data={data.data.items[0]} />);
  const result = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);
  expect(result).toBeInTheDocument();
});
