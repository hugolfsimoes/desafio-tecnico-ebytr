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
  const { title, message, author, priority, status } = req.body;
  try {
    const newTask = await TasksService.createTask({ title, message, author, priority, status });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const update = req.body;
  console.log(_id, update);
  try {
    const taskUpdate = await TasksService.updateTask(_id, update);
    res.status(201).json(taskUpdate);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

};
module.exports = { getAllTasks, createTask, updateTask };