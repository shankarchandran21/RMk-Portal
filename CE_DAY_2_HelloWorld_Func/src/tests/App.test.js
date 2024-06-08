import { render, screen } from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';

test('renders_hello_world', () => {
  render(<HelloWorld />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
