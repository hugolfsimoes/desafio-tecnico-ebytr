import axios from 'axios';

const url = 'http://localhost:5000/tasks';

export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTask = (id, update) => axios.put(`${url}/${id}`, update);