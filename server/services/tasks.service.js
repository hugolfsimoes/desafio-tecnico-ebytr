const TasksModel = require('../models/tasks.model');

const getAllTasks = async () => await TasksModel.getAllTasks();

module.exports = { getAllTasks };