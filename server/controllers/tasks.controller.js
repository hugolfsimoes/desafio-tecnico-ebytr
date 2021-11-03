const TasksService = require('../services/tasks.service');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TasksService.getAllTasks();
    console.log(allTasks);
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const { title, message, creator, tags, status } = req.body;
  try {
    const newTask = await TasksService.createTask({ title, message, creator, tags, status });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getAllTasks, createTask };