/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders_static_data', () => {
    render(<App />);
    const staticDataElement = screen.getByText(/Static Data:/i);
    expect(staticDataElement).toBeInTheDocument();
    expect(staticDataElement.nextSibling.textContent).toBe("Hello, I am static data!");
});

test('renders_dynamic_data', () => {
    render(<App />);
    const dynamicDataElement = screen.getByText(/Dynamic Data:/i);
    expect(dynamicDataElement).toBeInTheDocument();
    const dynamicDataValue = dynamicDataElement.nextSibling.textContent;
    expect(new Date(dynamicDataValue)).not.toBeNull();
});