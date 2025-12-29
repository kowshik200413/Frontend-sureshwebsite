import { render, screen } from '@testing-library/react';
import Index from './Index';

test('renders the component and checks for text alignment', () => {
  render(<Index />);
  
  const textElement = screen.getByText(
    /We’re delighted to welcome Dr Suresh Babu as Strategic Advisor/i
  );
  
  expect(textElement).toHaveClass('text-justify');
  expect(textElement).toHaveClass('md:text-left');
});
