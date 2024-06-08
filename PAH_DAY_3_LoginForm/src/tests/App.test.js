import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from '../components/Form';

describe('loginform', () => {
    test('renders_login_form_with_email_and_password_fields', () => {
        render(<LoginForm />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    test('updates_state_on_input_change', () => {
        render(<LoginForm />);

        fireEvent.change(screen.getByTestId('useremail-input'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByTestId('userpassword-input'), {
            target: { value: 'testpassword' },
        });

        expect(screen.getByTestId('useremail-input').value).toBe('test@example.com');
        expect(screen.getByTestId('userpassword-input').value).toBe('testpassword');
    });

    test('submits_form_with_correct_data', () => {
        render(<LoginForm />);

        const consoleSpy = jest.spyOn(console, 'log');

        fireEvent.change(screen.getByTestId('useremail-input'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByTestId('userpassword-input'), {
            target: { value: 'testpassword' },
        });

        fireEvent.click(screen.getByText(/login/i));

        expect(consoleSpy).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'testpassword',
        });

        consoleSpy.mockRestore();
    });
});