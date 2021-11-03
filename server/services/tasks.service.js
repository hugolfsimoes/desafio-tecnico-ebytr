const TasksModel = require('../models/tasks.model');
const TaskSchema = require('../schemas/tasks.schema');

const getAllTasks = async () => await TasksModel.getAllTasks();

const createTask = async (payload) => {
  TaskSchema.fildIsEmpty(payload);
  const newTask = await TasksModel.createTask(payload);
  return newTask;
};

module.exports = { getAllTasks, createTask };