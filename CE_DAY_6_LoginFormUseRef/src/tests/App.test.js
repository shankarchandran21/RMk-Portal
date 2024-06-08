/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from '../components/Form';

test('login_form_renders_with_two_input_fields', () => {
    render(<LoginForm />);

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

test('login_form_handles_form_submission_correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    render(<LoginForm />);

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.submit(document.querySelector('form'));

    expect(consoleSpy).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
    });

    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(emailInput).toHaveFocus();
    consoleSpy.mockRestore();
});