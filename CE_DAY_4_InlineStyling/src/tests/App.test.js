/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import InlineStyling from '../components/InlineStyling';

test('renders_heading_and_paragraph', () => {
  render(<InlineStyling />);
  const headingElement = screen.getByText('Inline Style in JSX Example.');
  const paragraphElement = screen.getByText('This is a paragraph with inline styles applied.');
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test('inline_styles_heading', () => {
  render(<InlineStyling />);
  const headingElement = screen.getByText('Inline Style in JSX Example.');
  const headingStyle = window.getComputedStyle(headingElement);
  expect(headingStyle.color).toBe('green');
})

test('inline_styles_paragraph', () => {
  render(<InlineStyling />);
  const paragraphElement = screen.getByText('This is a paragraph with inline styles applied.');
  const paragraphStyle = window.getComputedStyle(paragraphElement);
  expect(paragraphStyle.color).toBe('darkblue');
  expect(paragraphStyle.fontSize).toBe('16px');
})

test('inline_styles_div', () => {
  render(<InlineStyling />);
  const divElement = screen.getByText('This is a paragraph with inline styles applied.').parentElement;
  expect(divElement).toHaveStyle({
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '10px',
    border: '1px solid blue',
    borderRadius: '5px',
  });
})
