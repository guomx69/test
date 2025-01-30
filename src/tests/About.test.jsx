//create a unit test for the About component in the folder src/tests/unit/apps/pages/About.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../apps/pages/About';

test('renders About component', () => {
  render(<About />);
  const linkElement = screen.getByText(/We are a company dedicated to creating awesome React applications./i);
  expect(linkElement).toBeInTheDocument();
});