import axios from 'axios';

const url = 'https://desafio-ebytr.herokuapp.com/tasks';

export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTask = (id, update) => axios.put(`${url}/${id}`, update);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);