import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../redux/Store';
import Theme from '../components/Theme';

test('renders_toggle_button_theme', () => {
  render(
    <Provider store={Store}>
      <Theme />
    </Provider>
  );
  expect(screen.getByText(/Theme/i)).toBeInTheDocument();
});

test('renders_default_bg_color_black', () => {
  render(
    <Provider store={Store}>
      <Theme />
    </Provider>
  );
  expect(screen.getByTestId('theme-container')).toHaveStyle({ backgroundColor: 'black' });
});

test('renders_toggled_bg_color_white', () => {
  render(
    <Provider store={Store}>
      <Theme />
    </Provider>
  );
  fireEvent.click(screen.getByText(/Theme/i));
  expect(screen.getByTestId('theme-container')).toHaveStyle({ backgroundColor: 'white' });
});
