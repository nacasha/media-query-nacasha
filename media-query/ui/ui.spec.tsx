import React from 'react';
import { render } from '@testing-library/react';
import { Single } from './ui.composition';

it('should render', () => {
  const { baseElement } = render(<Single />);
  expect(baseElement).toBeInTheDocument();
});
