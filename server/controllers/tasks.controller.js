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
  const task = req.body;
  const newTask = TaskMessage(task);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getAllTasks, createTask };