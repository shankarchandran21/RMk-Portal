import React from 'react';
import { act, render, screen } from '@testing-library/react';
import WithLoading from '../components/WithLoading';

const MockComponent = () => <div>Hello, I'm the wrapped component!</div>;

describe('with_loading_higher_order_component', () => {
    it('renders_loading_message_initially', async () => {
        const WrappedComponentWithLoading = WithLoading(MockComponent);
        render(<WrappedComponentWithLoading />);
        const loadingElement = screen.getByText(/loading/i);
        expect(loadingElement).toBeInTheDocument();
    });

    it('renders_wrapped_component_message_after_two_seconds', async () => {
        jest.useFakeTimers();
        const WrappedComponentWithLoading = WithLoading(MockComponent);
        render(<WrappedComponentWithLoading />);
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        render(<WrappedComponentWithLoading />);
        expect(screen.getByText(/hello, i'm the wrapped component!/i)).toBeInTheDocument();
        jest.useRealTimers();
    });
});