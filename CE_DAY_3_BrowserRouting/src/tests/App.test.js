import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders_home_page_and_navigates_to_about_page', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    const homeText = screen.getByText(/Welcome to the home page/i);
    expect(homeText).toBeInTheDocument();

    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();
    fireEvent.click(aboutLink);

    const aboutText = screen.getByText(/This is the about page/i);
    expect(aboutText).toBeInTheDocument();
});

test('navigates_to_home_page_from_about_page', () => {
    render(
        <BrowserRouter initialEntries={['/about']}>
            <App />
        </BrowserRouter>
    );

    const aboutText = screen.getByText(/This is the about page/i);
    expect(aboutText).toBeInTheDocument();

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    fireEvent.click(homeLink);

    const homeText = screen.getByText(/Welcome to the home page/i);
    expect(homeText).toBeInTheDocument();
});
