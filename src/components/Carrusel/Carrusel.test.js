import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carrusel from './index';
import { useService } from '../../utils/hooks/useService';
// import { mockData } from '../../service/mockData';

test('Display Carrusel Container', async () => {
  const { getYoutubeVideoSearch } = useService();
  const data = await getYoutubeVideoSearch('wizeline');
  render(<Carrusel data={[data.data.items[0]]} />);
  const result = screen.getByTestId('carrusel');
  expect(result).toBeInTheDocument();
});

test('Display Carrusel Items', async () => {
  const { getYoutubeVideoSearch } = useService();
  const data = await getYoutubeVideoSearch('wizeline');
  render(<Carrusel data={[data.data.items[0]]} />);
  const result = screen.getByTestId('carruselItem');
  expect(result).toBeInTheDocument();
});

test('Click event', async () => {
  const { getYoutubeVideoSearch } = useService();
  const data = await getYoutubeVideoSearch('wizeline');
  const mockOnClick = jest.fn();
  render(<Carrusel data={[data.data.items[0]]} onSelect={() => mockOnClick()} />);
  const action = screen.getByTestId('carruselItemClick');
  fireEvent.click(action);
  expect(mockOnClick).toHaveBeenCalled();
});
