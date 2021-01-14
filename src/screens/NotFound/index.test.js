import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './index';

test('Renders NotFound screen', () => {
  const { getByText } = render(<NotFound />);
  expect(getByText('404')).toBeInTheDocument();
  expect(getByText('NOT_FOUND:TITLE')).toBeInTheDocument();
  expect(getByText('NOT_FOUND:MESSAGE')).toBeInTheDocument();
});
