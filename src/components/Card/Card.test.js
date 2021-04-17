import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './index';
import { useService } from '../../utils/hooks/useService';
// import { mockData } from '../../service/mockData';

test('Display Card Title', async () => {
  const { getYoutubeVideoSearch } = useService();
  const data = await getYoutubeVideoSearch('wizeline');
  render(<Card data={data.data.items[0]} />);
  // render(<Card data={mockData.items[0]} />);
  const result = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);
  expect(result).toBeInTheDocument();
});

test('Click event', async () => {
  const mockOnClick = jest.fn();
  const { getYoutubeVideoSearch } = useService();
  const data = await getYoutubeVideoSearch('wizeline');
  render(<Card data={data.data.items[0]} onSelect={() => mockOnClick()} />);
  const button = screen.getByTestId('cardOnClick');
  fireEvent.click(button);
  expect(mockOnClick).toHaveBeenCalled();
});
