import axios from "axios"

const api_uri = 'http://localhost:3005';

export const getAllUsers = async () => await axios.get(`${api_uri}/users`);