const connection = require('./connection.js');

const getAllTasks = async () => {
  const db = await connection();
  const allTasks = db.collection('tasks').find().toArray();
  return allTasks;
};

const createTask = async ({ title, message, creator, priority, status }) => {
  const db = await connection();
  const newTask = await db.collection('tasks').insertOne({ title, message, creator, priority, status });
  console.log(newTask);
  return { task: { _id: newTask.insertedId, title, message, creator, priority, status } };
};

module.exports = { getAllTasks, createTask };