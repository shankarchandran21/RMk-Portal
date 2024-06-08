import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';


test('renders_hello_and_username', () => {
  render(<Greeting />);
  const userNameElement = screen.getByText(/Hello, John!/i);
  expect(userNameElement).toBeInTheDocument();
});

test('renders_local_date', () => {
  const toLocaleDateStringSpy = jest.spyOn(Date.prototype, 'toLocaleDateString');
  toLocaleDateStringSpy.mockImplementation(() => 'Sunday, January 15, 2023');
  render(<Greeting />);
  const expectedFormattedDate = 'Sunday, January 15, 2023.';
  const localDate = screen.getByText(`Welcome to our website. Today is ${expectedFormattedDate}`);
  expect(localDate).toBeInTheDocument();
});