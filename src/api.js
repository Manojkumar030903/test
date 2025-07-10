// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your server URL
});

export const addTodo = async (todo) => {
  const response = await api.post('/todos', todo);
  return response.data;
};

export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}`);
};
