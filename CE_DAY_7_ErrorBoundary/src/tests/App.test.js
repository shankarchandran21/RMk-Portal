import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '../components/ErrorBoundary';
import Hero from '../components/Hero';
import App from '../App';

const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

afterEach(() => {
  consoleErrorSpy.mockClear();
});

describe('app_component', () => {
  it('renders_app_component_without_errors', () => {
    render(<App />);
    const appElement = screen.getByText(/Batman/i);
    expect(appElement).toBeInTheDocument();
  });

  it('renders_app_component_with_error_boundary_for_joker', () => {
    render(<App />);
    const errorElement = screen.getByText(/Something went wrong/i);
    expect(errorElement).toBeInTheDocument();
  });
});

describe('hero_component', () => {
  it('renders_hero_component_without_errors_for_batman', () => {
    render(<Hero heroName="Batman" />);
    const heroElement = screen.getByText(/Batman/i);
    expect(heroElement).toBeInTheDocument();
  });

  it('throws_an_error_for_joker', () => {
    expect(() => render(<Hero heroName="Joker" />)).toThrow('Not a hero');
  });
});

describe('error_boundary_component', () => {
  it('renders_children_without_errors', () => {
    render(
      <ErrorBoundary>
        <div>Children content</div>
      </ErrorBoundary>
    );
    const childElement = screen.getByText(/Children content/i);
    expect(childElement).toBeInTheDocument();
  });
});