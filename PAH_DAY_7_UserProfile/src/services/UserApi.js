import axios from "axios"

const api_uri = 'http://localhost:3005';

export const saveUser = async (data) => {
    try {
        const response = await axios.get(`${api_uri}/users`);
        const totalCount = response.data.length;
        const newUser = { ...data, id: totalCount + 1 };
        await axios.post(`${api_uri}/users`, newUser);
        return newUser.id;
    } catch (error) {
        console.error('Error saving user:', error);
    }
};
export const getUserById = async (id) => await axios.get(`${api_uri}/users/${id}`);

export const updateUser = async (id, data) => await axios.put(`${api_uri}/users/${id}`, data);

export const deleteUser = async (id) => await axios.delete(`${api_uri}/users/${id}`);