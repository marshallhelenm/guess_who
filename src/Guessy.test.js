import React from 'react';
import { render } from '@testing-library/react';
import Guessy from './Guessy';

test('renders learn react link', () => {
  const { getByText } = render(<Guessy />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
