const TasksModel = require('../models/tasks.model');

const getAllTasks = async () => await TasksModel.getAllTasks();

const createTask = async(payload);

module.exports = { getAllTasks };