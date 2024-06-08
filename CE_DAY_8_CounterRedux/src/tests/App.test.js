import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import { Provider } from 'react-redux';
import { Store } from '../redux/Store';

test('renders_initial_count', () => {
  render(
    <Provider store={Store}>
      <Counter />
    </Provider>
  );

  expect(screen.getByText(/Count:/i)).toBeInTheDocument();
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('renders_incremented_count', () => {
  render(
    <Provider store={Store}>
      <Counter />
    </Provider>
  );
  const currentCount = Store.getState().count;
  const count = currentCount + 1;
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(`Count: ${count}`)).toBeInTheDocument();
});

test('renders_decremented_count', () => {
  render(
    <Provider store={Store}>
      <Counter />
    </Provider>
  );
  const currentCount = Store.getState().count;
  const count = currentCount - 1;
  fireEvent.click(screen.getByText(/Decrement/i));
  expect(screen.getByText(`Count: ${count}`)).toBeInTheDocument();
});
