/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

jest.mock('../components/TodoItem.jsx', () => {
    return jest.fn(({ text, onDelete }) => (
        <div>
            <span>{text}</span>
            <button onClick={onDelete} className="deleteButton">
                Delete
            </button>
        </div>
    ));
});

describe('TodoList', () => {
    test('renders_todoList_component_correctly', () => {
        render(<TodoList />);

        const headingElement = screen.getByText(/todo list/i);
        expect(headingElement).toBeInTheDocument();

        const inputElement = screen.getByPlaceholderText(/add a new todo/i);
        const addButtonElement = screen.getByText(/add/i);
        expect(inputElement).toBeInTheDocument();
        expect(addButtonElement).toBeInTheDocument();

        const todoListContainer = screen.getByText(/todo list/i).parentElement;
        expect(todoListContainer).toBeInTheDocument();
    });
});