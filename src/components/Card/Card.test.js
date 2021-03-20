import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';
import useService from '../../utils/hooks/useService';

test('Display Card Title', () => {
  const { getYoutubeData } = useService();
  const data = getYoutubeData()[1];
  render(<Card data={data} />);
  const result = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);
  expect(result).toBeInTheDocument();
});
