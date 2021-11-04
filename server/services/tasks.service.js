const TasksModel = require('../models/tasks.model');
const TaskSchema = require('../schemas/tasks.schema');

const getAllTasks = async () => await TasksModel.getAllTasks();

const createTask = async (payload) => {
  TaskSchema.fildIsEmpty(payload);
  const newTask = await TasksModel.createTask(payload);
  return newTask;
};

const updateTask = async (_id, update) => {
  console.log(update);
  await TaskSchema.taskExists(_id);
  const updatedTask = await TasksModel.updateTask(_id, update);
  return updatedTask;
};

module.exports = { getAllTasks, createTask, updateTask };