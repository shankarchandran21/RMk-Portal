import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

const getCountFromElement = (element) => {
  const match = /-?\d+/.exec(element.textContent);
  return match ? parseInt(match[0]) : NaN;
};

test('renders_count_value', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count:/i);
  const currentCount = getCountFromElement(countElement);
  expect(countElement).toBeInTheDocument();
  expect(currentCount).toBe(0);
});

test('renders_incremented_count_value', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count:/i);
  const initialCount = getCountFromElement(countElement);
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  const updatedCount = getCountFromElement(countElement);
  expect(updatedCount).toBe(initialCount + 1);
});

test('renders_decremented_count_value', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count:/i);
  const initialCount = getCountFromElement(countElement);
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  const updatedCount = getCountFromElement(countElement);
  expect(updatedCount).toBe(initialCount - 1);
});