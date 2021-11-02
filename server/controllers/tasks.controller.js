import TaskMessage from '../models/tasks.model.js';

export const getTasks = async (req, res) => {
  try {
    const taskMessages = await TaskMessage.find();
    console.log(taskMessages);
    res.status(200).json(taskMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = (req, res) => {
  res.send('Task criada');
};
