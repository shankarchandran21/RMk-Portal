/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from '../App';
jest.mock('axios');

test('form_renders_with_three_input_fields', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
});

test('submit_form_and_check_post_method', async () => {
    const mockedPost = jest.spyOn(axios, 'post');

    jest.spyOn(axios, 'get').mockResolvedValue({ data: [] });

    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    const submitBtn = screen.getByText(/Submit/i);

    act(() => {
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });

        fireEvent.click(submitBtn);
    });

    await waitFor(() => {
        expect(mockedPost).toHaveBeenCalledWith(
            expect.any(String),
            {
                name: 'John Doe',
                email: 'john.doe@example.com',
                phone: '1234567890',
                id: expect.any(Number),
            }
        );
    });
});

test('fallback_ui_rendered_when_user_state_is_empty', async () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    const backButton = screen.getByText(/Back/i);
    expect(backButton).toBeInTheDocument();
});

