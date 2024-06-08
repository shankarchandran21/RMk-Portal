/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, waitFor, screen } from '@testing-library/react';
import UserList from '../components/UserList';
import axios from 'axios';

jest.mock('axios');

describe('user_list', () => {
    test('checks_user_list_length', async () => {
        axios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@gmail.com',
                },
                {
                    id: 2,
                    name: 'Michael',
                    email: 'michael@gmail.com',
                },
            ],
        });

        render(<UserList />);

        await waitFor(() => {
            const userList = screen.getAllByRole('listitem');
            expect(userList).toHaveLength(2);
        });
    });

    test('renders_user_names_and_emails', async () => {
        axios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@gmail.com',
                },
                {
                    id: 2,
                    name: 'Michael',
                    email: 'michael@gmail.com',
                },
            ],
        });

        render(<UserList />);

        await waitFor(() => {
            const userList = screen.getAllByRole('listitem');

            expect(userList[0]).toHaveTextContent('John Doe');
            expect(userList[1]).toHaveTextContent('Michael');

            expect(userList[0]).toHaveTextContent('john@gmail.com');
            expect(userList[1]).toHaveTextContent('michael@gmail.com');
        });
    });
});