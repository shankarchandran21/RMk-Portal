import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Lifecycle from '../components/LifeCycle';

describe('lifecycle_component', () => {
    let originalConsoleLog;

    beforeAll(() => {
        originalConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterAll(() => {
        originalConsoleLog.mockRestore();
    });

    it('renders_without_crashing', () => {
        render(<Lifecycle />);
        expect(screen.getByText('Hello, React!')).toBeInTheDocument();
        expect(console.log).toHaveBeenCalledWith('Constructor called');
        expect(console.log).toHaveBeenCalledWith('Render called');
        expect(console.log).toHaveBeenCalledWith('ComponentDidMount called');
    });

    it('updates_the_message_on_button_click', () => {
        render(<Lifecycle />);
        expect(screen.getByText('Hello, React!')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Update Message'));
        expect(screen.getByText('Updated message!')).toBeInTheDocument();
    });
});
